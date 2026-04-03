import { loadLocalEnv } from './load-local-env.mjs';
import { provisionEmail } from './email-provisioning.mjs';
import { resolveCliConfig } from './provision-email-config.mjs';

loadLocalEnv();

const config = resolveCliConfig(process.env);

provisionEmail(config)
  .then(() => {
    const mailboxAddress = `${config.mailbox}@${config.domain}`;
    process.stdout.write(`Provisioned ${mailboxAddress}\n`);
  })
  .catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
