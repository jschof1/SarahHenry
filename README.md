# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Email Provisioning Script

This repo now includes a small CLI for provisioning a cPanel mailbox and syncing the matching Cloudflare mail DNS records.

Run it with environment variables:

```bash
EMAIL_ADDRESS=hello@example.com \
MAILBOX_PASSWORD='replace-me' \
CPANEL_BASE_URL='https://cpanel.example.com:2083' \
CPANEL_USERNAME='your-cpanel-user' \
CPANEL_API_TOKEN='your-cpanel-api-token' \
CLOUDFLARE_API_TOKEN='your-cloudflare-api-token' \
CLOUDFLARE_ZONE_ID='your-cloudflare-zone-id' \
MAIL_SERVER_IP='203.0.113.10' \
DKIM_VALUE='v=DKIM1; k=rsa; p=replace-me' \
npm run provision:email
```

Optional variables:

- `EMAIL_ADDRESS` can be used instead of separate `DOMAIN` + `MAILBOX`
- `DOMAIN` and `MAILBOX` override `EMAIL_ADDRESS` when both are provided
- `MAIL_HOST` defaults to `mail.<domain>`
- `SPF_VALUE` defaults to `v=spf1 a mx ip4:<MAIL_SERVER_IP> ~all`
- `DKIM_RECORD_NAME` defaults to `default._domainkey`
- `DMARC_VALUE` defaults to `v=DMARC1; p=none; rua=mailto:postmaster@<domain>`
- `MX_PRIORITY` defaults to `10`
- `MAILBOX_QUOTA` is passed to cPanel when set
- `SEND_WELCOME_EMAIL` accepts `true`/`false` or `1`/`0`
- `CLOUDFLARE_TOKEN` and `CF_API_TOKEN` are accepted as fallbacks for `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ZONE_ID` is optional when the API token can look up the zone by `DOMAIN`
- `CLOUDFLARE_ACCOUNT_ID` can be provided to narrow zone lookup to one account

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
