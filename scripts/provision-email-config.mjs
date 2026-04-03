export function resolveCliConfig(envSource = process.env) {
  const address = resolveAddress(envSource);
  const domain = envSource.DOMAIN ?? address.domain;
  const mailbox = envSource.MAILBOX ?? address.mailbox;
  const mailServerIp = env(envSource, 'MAIL_SERVER_IP');

  return {
    domain,
    mailbox,
    mailboxPassword: env(envSource, 'MAILBOX_PASSWORD'),
    mailboxQuota: envSource.MAILBOX_QUOTA,
    sendWelcomeEmail: parseBoolean(envSource.SEND_WELCOME_EMAIL),
    cpanelBaseUrl: env(envSource, 'CPANEL_BASE_URL'),
    cpanelUsername: env(envSource, 'CPANEL_USERNAME'),
    cpanelApiToken: env(envSource, 'CPANEL_API_TOKEN'),
    cloudflareApiToken: firstDefined(
      envSource.CLOUDFLARE_API_TOKEN,
      envSource.CLOUDFLARE_TOKEN,
      envSource.CF_API_TOKEN,
    ) ?? missing('CLOUDFLARE_API_TOKEN'),
    cloudflareZoneId: envSource.CLOUDFLARE_ZONE_ID,
    cloudflareAccountId: envSource.CLOUDFLARE_ACCOUNT_ID,
    mailHost: envSource.MAIL_HOST ?? `mail.${domain}`,
    mailServerIp,
    spfValue:
      envSource.SPF_VALUE ?? `v=spf1 a mx ip4:${mailServerIp} ~all`,
    dkimRecordName: envSource.DKIM_RECORD_NAME ?? 'default._domainkey',
    dkimValue: env(envSource, 'DKIM_VALUE'),
    dmarcValue:
      envSource.DMARC_VALUE ??
      `v=DMARC1; p=none; rua=mailto:postmaster@${domain}`,
    mxPriority: Number(envSource.MX_PRIORITY ?? 10),
  };
}

function resolveAddress(envSource) {
  if (!envSource.EMAIL_ADDRESS) {
    return { domain: undefined, mailbox: undefined };
  }

  const [mailbox, domain, ...rest] = envSource.EMAIL_ADDRESS.split('@');
  if (!mailbox || !domain || rest.length > 0) {
    throw new Error('EMAIL_ADDRESS must look like mailbox@domain');
  }

  return { domain, mailbox };
}

function env(envSource, name) {
  const value = envSource[name];
  if (value === undefined || value === '') {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function missing(name) {
  throw new Error(`Missing required environment variable: ${name}`);
}

function firstDefined(...values) {
  return values.find((value) => value !== undefined && value !== '');
}

function parseBoolean(value) {
  if (value === undefined) {
    return undefined;
  }

  return ['1', 'true', 'yes'].includes(value.toLowerCase());
}
