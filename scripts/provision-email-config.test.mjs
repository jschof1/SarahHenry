import test from 'node:test';
import assert from 'node:assert/strict';

import { resolveCliConfig } from './provision-email-config.mjs';

test('resolveCliConfig accepts EMAIL_ADDRESS and CLOUDFLARE_TOKEN fallback', () => {
  const config = resolveCliConfig({
    EMAIL_ADDRESS: 'hello@example.com',
    MAILBOX_PASSWORD: 'secret',
    CPANEL_BASE_URL: 'https://host.example.com:2083',
    CPANEL_USERNAME: 'aspctweb',
    CPANEL_API_TOKEN: 'cpanel-token',
    CLOUDFLARE_TOKEN: 'cf-token',
    CLOUDFLARE_ZONE_ID: 'zone-123',
    MAIL_SERVER_IP: '165.140.69.212',
    DKIM_VALUE: 'v=DKIM1; p=abc',
  });

  assert.equal(config.domain, 'example.com');
  assert.equal(config.mailbox, 'hello');
  assert.equal(config.cloudflareApiToken, 'cf-token');
  assert.equal(config.mailHost, 'mail.example.com');
});

test('resolveCliConfig prefers DOMAIN and MAILBOX when both are set', () => {
  const config = resolveCliConfig({
    EMAIL_ADDRESS: 'ignored@example.com',
    DOMAIN: 'actual.com',
    MAILBOX: 'sales',
    MAILBOX_PASSWORD: 'secret',
    CPANEL_BASE_URL: 'https://host.example.com:2083',
    CPANEL_USERNAME: 'aspctweb',
    CPANEL_API_TOKEN: 'cpanel-token',
    CLOUDFLARE_API_TOKEN: 'cf-token',
    CLOUDFLARE_ZONE_ID: 'zone-123',
    MAIL_SERVER_IP: '165.140.69.212',
    DKIM_VALUE: 'v=DKIM1; p=abc',
  });

  assert.equal(config.domain, 'actual.com');
  assert.equal(config.mailbox, 'sales');
});

test('resolveCliConfig rejects malformed EMAIL_ADDRESS values', () => {
  assert.throws(
    () =>
      resolveCliConfig({
        EMAIL_ADDRESS: 'not-an-email',
        MAILBOX_PASSWORD: 'secret',
        CPANEL_BASE_URL: 'https://host.example.com:2083',
        CPANEL_USERNAME: 'aspctweb',
        CPANEL_API_TOKEN: 'cpanel-token',
        CLOUDFLARE_API_TOKEN: 'cf-token',
        CLOUDFLARE_ZONE_ID: 'zone-123',
        MAIL_SERVER_IP: '165.140.69.212',
        DKIM_VALUE: 'v=DKIM1; p=abc',
      }),
    /EMAIL_ADDRESS must look like mailbox@domain/,
  );
});
