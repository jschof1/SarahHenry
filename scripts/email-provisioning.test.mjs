import test from 'node:test';
import assert from 'node:assert/strict';

import { buildMailDnsPlan, provisionEmail } from './email-provisioning.mjs';

test('buildMailDnsPlan returns the expected mail records', () => {
  const plan = buildMailDnsPlan({
    domain: 'example.com',
    mailHost: 'mail.example.com',
    mailServerIp: '203.0.113.10',
    spfValue: 'v=spf1 a mx ip4:203.0.113.10 ~all',
    dkimRecordName: 'default._domainkey',
    dkimValue: 'v=DKIM1; k=rsa; p=abc123',
    dmarcValue: 'v=DMARC1; p=none; rua=mailto:dmarc@example.com',
    mxPriority: 10,
  });

  assert.deepEqual(plan, [
    {
      type: 'A',
      name: 'mail.example.com',
      content: '203.0.113.10',
      proxied: false,
    },
    {
      type: 'MX',
      name: 'example.com',
      content: 'mail.example.com',
      priority: 10,
    },
    {
      type: 'TXT',
      name: 'example.com',
      content: 'v=spf1 a mx ip4:203.0.113.10 ~all',
    },
    {
      type: 'TXT',
      name: 'default._domainkey.example.com',
      content: 'v=DKIM1; k=rsa; p=abc123',
    },
    {
      type: 'TXT',
      name: '_dmarc.example.com',
      content: 'v=DMARC1; p=none; rua=mailto:dmarc@example.com',
    },
  ]);
});

test('provisionEmail creates the mailbox and upserts Cloudflare mail DNS', async () => {
  const requests = [];
  const fetchImpl = async (url, init = {}) => {
    requests.push({ url, init });

    if (String(url).includes('/execute/Email/add_pop')) {
      return response({
        status: 1,
        data: null,
        errors: null,
      });
    }

    if (String(url).endsWith('/dns_records?per_page=500')) {
      return response({
        success: true,
        result: [
          {
            id: 'existing-mx',
            type: 'MX',
            name: 'example.com',
            content: 'old.example.com',
          },
        ],
      });
    }

    if (String(url).endsWith('/dns_records/existing-mx')) {
      return response({ success: true, result: { id: 'existing-mx' } });
    }

    if (String(url).endsWith('/dns_records')) {
      return response({ success: true, result: { id: 'new-record' } });
    }

    throw new Error(`Unexpected request: ${url}`);
  };

  await provisionEmail(
    {
      domain: 'example.com',
      mailbox: 'hello',
      mailboxPassword: 'supersecret',
      cpanelBaseUrl: 'https://cpanel.example.com:2083',
      cpanelUsername: 'jack',
      cpanelApiToken: 'cpanel-token',
      cloudflareApiToken: 'cf-token',
      cloudflareZoneId: 'zone-123',
      mailHost: 'mail.example.com',
      mailServerIp: '203.0.113.10',
      spfValue: 'v=spf1 a mx ip4:203.0.113.10 ~all',
      dkimRecordName: 'default._domainkey',
      dkimValue: 'v=DKIM1; k=rsa; p=abc123',
      dmarcValue: 'v=DMARC1; p=none; rua=mailto:dmarc@example.com',
    },
    { fetchImpl },
  );

  const cpanelRequest = requests[0];
  assert.equal(
    cpanelRequest.url,
    'https://cpanel.example.com:2083/execute/Email/add_pop?email=hello&domain=example.com&password=supersecret',
  );
  assert.equal(
    cpanelRequest.init.headers.Authorization,
    'cpanel jack:cpanel-token',
  );

  const mxUpsert = requests.find(({ url }) =>
    String(url).endsWith('/dns_records/existing-mx'),
  );
  assert.ok(mxUpsert, 'expected MX record to be updated');
  assert.equal(mxUpsert.init.method, 'PUT');

  const createdRecords = requests.filter(({ url, init }) =>
    String(url).endsWith('/dns_records') && init.method === 'POST',
  );
  assert.equal(createdRecords.length, 4);

  const recordBodies = createdRecords.map(({ init }) => JSON.parse(init.body));
  assert.ok(
    recordBodies.some(
      (body) =>
        body.type === 'A' &&
        body.name === 'mail.example.com' &&
        body.content === '203.0.113.10' &&
        body.proxied === false,
    ),
  );
  assert.ok(
    recordBodies.some(
      (body) =>
        body.type === 'TXT' &&
        body.name === '_dmarc.example.com' &&
        body.content === 'v=DMARC1; p=none; rua=mailto:dmarc@example.com',
    ),
  );
});

test('provisionEmail looks up the Cloudflare zone id from the domain when missing', async () => {
  const requests = [];
  const fetchImpl = async (url, init = {}) => {
    requests.push({ url, init });

    if (String(url).includes('/zones?name=example.com')) {
      return response({
        success: true,
        result: [{ id: 'resolved-zone', name: 'example.com' }],
      });
    }

    if (String(url).includes('/execute/Email/add_pop')) {
      return response({
        status: 1,
        data: null,
        errors: null,
      });
    }

    if (String(url).includes('/zones/resolved-zone/dns_records?per_page=500')) {
      return response({
        success: true,
        result: [],
      });
    }

    if (String(url).includes('/zones/resolved-zone/dns_records')) {
      return response({ success: true, result: { id: 'new-record' } });
    }

    throw new Error(`Unexpected request: ${url}`);
  };

  await provisionEmail(
    {
      domain: 'example.com',
      mailbox: 'hello',
      mailboxPassword: 'supersecret',
      cpanelBaseUrl: 'https://cpanel.example.com:2083',
      cpanelUsername: 'jack',
      cpanelApiToken: 'cpanel-token',
      cloudflareApiToken: 'cf-token',
      mailHost: 'mail.example.com',
      mailServerIp: '203.0.113.10',
      dkimRecordName: 'default._domainkey',
      dkimValue: 'v=DKIM1; k=rsa; p=abc123',
    },
    { fetchImpl },
  );

  assert.equal(
    requests[0].url,
    'https://api.cloudflare.com/client/v4/zones?name=example.com',
  );
  assert.equal(requests[0].init.headers.Authorization, 'Bearer cf-token');
  assert.ok(
    requests.some(({ url }) =>
      String(url).includes('/zones/resolved-zone/dns_records?per_page=500'),
    ),
  );
});

function response(json) {
  return {
    ok: true,
    async json() {
      return json;
    },
  };
}
