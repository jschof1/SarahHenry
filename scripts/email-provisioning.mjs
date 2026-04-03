const CLOUDFLARE_API_BASE = 'https://api.cloudflare.com/client/v4';

export function buildMailDnsPlan({
  domain,
  mailHost,
  mailServerIp,
  spfValue,
  dkimRecordName,
  dkimValue,
  dmarcValue,
  mxPriority = 10,
}) {
  const records = [
    {
      type: 'A',
      name: mailHost,
      content: mailServerIp,
      proxied: false,
    },
    {
      type: 'MX',
      name: domain,
      content: mailHost,
      priority: mxPriority,
    },
  ];

  if (spfValue) {
    records.push({
      type: 'TXT',
      name: domain,
      content: spfValue,
    });
  }

  if (dkimRecordName && dkimValue) {
    records.push({
      type: 'TXT',
      name: `${dkimRecordName}.${domain}`,
      content: dkimValue,
    });
  }

  if (dmarcValue) {
    records.push({
      type: 'TXT',
      name: `_dmarc.${domain}`,
      content: dmarcValue,
    });
  }

  return records;
}

export async function provisionEmail(config, { fetchImpl = fetch } = {}) {
  validateConfig(config);

  const cloudflareZoneId = await resolveCloudflareZoneId(config, fetchImpl);

  await createMailbox(config, fetchImpl);

  const plannedRecords = buildMailDnsPlan(config);
  const existingRecords = await listCloudflareDnsRecords(
    { ...config, cloudflareZoneId },
    fetchImpl,
  );

  for (const record of plannedRecords) {
    const existingRecord = findMatchingRecord(existingRecords, record);
    if (existingRecord) {
      await updateCloudflareDnsRecord(
        { ...config, cloudflareZoneId },
        existingRecord.id,
        record,
        fetchImpl,
      );
      continue;
    }

    await createCloudflareDnsRecord({ ...config, cloudflareZoneId }, record, fetchImpl);
  }
}

function validateConfig(config) {
  const requiredFields = [
    'domain',
    'mailbox',
    'mailboxPassword',
    'cpanelBaseUrl',
    'cpanelUsername',
    'cpanelApiToken',
    'cloudflareApiToken',
    'mailHost',
    'mailServerIp',
  ];

  for (const field of requiredFields) {
    if (!config[field]) {
      throw new Error(`Missing required config: ${field}`);
    }
  }
}

async function resolveCloudflareZoneId(config, fetchImpl) {
  if (config.cloudflareZoneId) {
    return config.cloudflareZoneId;
  }

  const params = new URLSearchParams({ name: config.domain });
  if (config.cloudflareAccountId) {
    params.set('account.id', config.cloudflareAccountId);
  }

  const res = await fetchImpl(`${CLOUDFLARE_API_BASE}/zones?${params.toString()}`, {
    headers: cloudflareHeaders(config.cloudflareApiToken),
  });

  const data = await res.json();
  if (!res.ok || data.success === false) {
    throw new Error(`Cloudflare zone lookup failed: ${JSON.stringify(data)}`);
  }

  const zone = data.result.find((candidate) => candidate.name === config.domain);
  if (!zone) {
    throw new Error(`Cloudflare zone not found for domain: ${config.domain}`);
  }

  return zone.id;
}

async function createMailbox(config, fetchImpl) {
  const params = new URLSearchParams({
    email: config.mailbox,
    domain: config.domain,
    password: config.mailboxPassword,
  });

  if (config.mailboxQuota !== undefined && config.mailboxQuota !== '') {
    params.set('quota', String(config.mailboxQuota));
  }

  if (config.sendWelcomeEmail !== undefined) {
    params.set('send_welcome_email', config.sendWelcomeEmail ? '1' : '0');
  }

  const url = `${stripTrailingSlash(config.cpanelBaseUrl)}/execute/Email/add_pop?${params.toString()}`;
  const res = await fetchImpl(url, {
    method: 'GET',
    headers: {
      Authorization: `cpanel ${config.cpanelUsername}:${config.cpanelApiToken}`,
    },
  });

  const data = await res.json();
  if (!res.ok || data.status === 0 || data.errors) {
    throw new Error(`cPanel mailbox creation failed: ${JSON.stringify(data)}`);
  }
}

async function listCloudflareDnsRecords(config, fetchImpl) {
  const res = await fetchImpl(
    `${CLOUDFLARE_API_BASE}/zones/${config.cloudflareZoneId}/dns_records?per_page=500`,
    {
      headers: cloudflareHeaders(config.cloudflareApiToken),
    },
  );

  const data = await res.json();
  if (!res.ok || data.success === false) {
    throw new Error(`Cloudflare DNS lookup failed: ${JSON.stringify(data)}`);
  }

  return data.result;
}

async function createCloudflareDnsRecord(config, record, fetchImpl) {
  const res = await fetchImpl(
    `${CLOUDFLARE_API_BASE}/zones/${config.cloudflareZoneId}/dns_records`,
    {
      method: 'POST',
      headers: cloudflareHeaders(config.cloudflareApiToken),
      body: JSON.stringify(record),
    },
  );

  await assertCloudflareSuccess(res, 'create DNS record');
}

async function updateCloudflareDnsRecord(config, recordId, record, fetchImpl) {
  const res = await fetchImpl(
    `${CLOUDFLARE_API_BASE}/zones/${config.cloudflareZoneId}/dns_records/${recordId}`,
    {
      method: 'PUT',
      headers: cloudflareHeaders(config.cloudflareApiToken),
      body: JSON.stringify(record),
    },
  );

  await assertCloudflareSuccess(res, 'update DNS record');
}

async function assertCloudflareSuccess(res, action) {
  const data = await res.json();
  if (!res.ok || data.success === false) {
    throw new Error(`Cloudflare ${action} failed: ${JSON.stringify(data)}`);
  }
}

function cloudflareHeaders(apiToken) {
  return {
    Authorization: `Bearer ${apiToken}`,
    'Content-Type': 'application/json',
  };
}

function findMatchingRecord(existingRecords, plannedRecord) {
  return existingRecords.find(
    (record) =>
      record.type === plannedRecord.type && record.name === plannedRecord.name,
  );
}

function stripTrailingSlash(value) {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}
