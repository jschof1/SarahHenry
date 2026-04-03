# Agentic Email + Forms Setup

This is the distilled workflow for setting up a project email address, cPanel/webmail mailbox, Cloudflare mail DNS, and FormSubmit-backed contact forms with as little manual work as possible.

## What This Automates

- Add a new project domain to the shared cPanel account if it does not already exist.
- Create a mailbox like `hello@clientdomain.com` in cPanel.
- Fetch the domain's mail-auth DNS values from cPanel `Email Deliverability`.
- Upsert Cloudflare DNS records for:
  - `A` mail host
  - `MX`
  - `SPF`
  - `DKIM`
  - `DMARC`
- Wire React forms to FormSubmit using the mailbox.
- Trigger the first FormSubmit submission.
- Log into webmail and click the FormSubmit activation email.
- Verify the on-site thank-you state after a successful submission.

## What To Use

- Use the cPanel API first for domain creation and mailbox creation.
- Use the Cloudflare API for zone lookup and DNS updates.
- Use browser automation only when:
  - cPanel does not expose the needed data cleanly by API
  - FormSubmit requires a browser-like activation flow
  - a UI action is easier than fighting the panel's frontend
- Do not rely on `wrangler` for the actual email setup. `wrangler` is optional only if you want to host the orchestrator as a Worker later.

## Required Inputs

- Project domain, for example `peteryoungindependantcelebrant.co.uk`
- Mailbox local part, for example `hello`
- Mailbox password
- cPanel host, usually `https://<server-name>:2083`
- cPanel username
- cPanel API token
- Cloudflare API token

## Nice-To-Have Inputs

- Cloudflare account ID to narrow zone lookup
- Preferred mailbox alias if not `hello`
- A standard document root convention for new cPanel domains

## Shared Defaults From This Stack

- cPanel add-domain endpoint: `AddonDomain::addaddondomain`
- cPanel mailbox endpoint: `Email/add_pop`
- cPanel list mailboxes endpoint: `Email/list_pops`
- cPanel base URL format: `https://<server-name>:2083`
- Cloudflare zone lookup can be done by domain name, so `zone_id` does not need to be entered manually every time
- For the working celebrant + NameHero + Cloudflare pattern, prefer:
  - `A` `webmail` -> `165.140.69.212`
  - `CNAME` `mail` -> apex domain
  - `MX` apex -> `node509.namehero.net` priority `0`

## End-To-End Flow

### 1. Resolve the Cloudflare zone

- Look up the zone by domain name using the Cloudflare API.
- If multiple zones are possible, filter with `account.id`.
- Cache or reuse the zone ID for the rest of the run.

### 2. Ensure the domain exists in cPanel

- Check whether the domain is already present in cPanel.
- If missing, add it through the cPanel addon-domain API.
- Prefer a dedicated document root instead of sharing `public_html`.
- Do not block on the browser UI if the API works.

### 3. Create the mailbox

- Create the mailbox through cPanel UAPI using `email`, `domain`, and `password`.
- Verify success by listing mailboxes for that domain.

### 4. Fetch the mail DNS values

- Try API-first where possible.
- If cPanel does not expose the needed TXT values neatly, use browser automation:
  - log into cPanel
  - open `Email Deliverability`
  - find the target domain
  - open `Manage`
  - extract:
    - DKIM host + value
    - SPF host + value
    - DMARC host + value
- Treat browser automation as a targeted fallback, not the main provisioning path.

### 5. Upsert Cloudflare mail DNS

- Create or update using the proven celebrant pattern first:
  - `A` record for `webmail.<domain>` pointing to the cPanel/shared IP
  - `CNAME` record for `mail.<domain>` pointing to the apex domain
  - `MX` record on apex pointing to `node509.namehero.net` with priority `0`
  - `TXT` SPF
  - `TXT` DKIM
  - `TXT` DMARC
- Keep `mail` and `MX` `DNS only`.
- `webmail` may be proxied if that matches other already-working celebrant domains on the same hosting stack.
- Leave unrelated apex website records alone, for example an existing proxied `CNAME` to Cloudflare Pages.
- If the first DNS shape behaves strangely, compare against another already-working client on the same hosting account instead of assuming a generic mail-host pattern is correct.

### 6. Wire website forms to FormSubmit

- Replace `mailto:` flows with FormSubmit AJAX submissions.
- Use the mailbox address as the FormSubmit target.
- Keep existing in-page success UI rather than redirecting to FormSubmit's default thank-you page.
- If the form is meant to submit through JS/AJAX, do not leave a normal FormSubmit `action`/`method` on the `<form>` or the browser can fall back to a redirect flow.
- Add proper field `name` attributes and a honeypot field.
- Use a shared helper so all forms submit consistently.

### 7. Activate FormSubmit

- Trigger a real browser-based submission from the site or local preview.
- Wait for FormSubmit to send the activation email.
- Log into webmail for the mailbox.
- Open the activation email and click the activation link.

### 8. Verify end to end

- Submit the live or preview form again.
- Confirm:
  - FormSubmit accepts the submission
  - the site shows the success state
  - the mailbox receives the submission email
- Confirm `https://webmail.<domain>` opens the cPanel webmail login page.
- Do not expect `https://webmail.<domain>/` to jump straight into the inbox; it should show the login screen first.
- Do not treat a 404 on bare `mail.<domain>` at `/` as proof the setup failed.

## Minimal Operator Experience

For a mature version of this workflow, the operator should only need to provide:

- domain
- mailbox name, defaulting to `hello`
- mailbox password

Everything else should come from stored config or discovery:

- cPanel host, username, token
- Cloudflare token
- Cloudflare zone lookup
- cPanel domain existence check
- DNS extraction via cPanel deliverability view
- FormSubmit activation via webmail

## Recommended Project Config

Store reusable account-level settings once:

```json
{
  "cpanelBaseUrl": "https://node509.namehero.net:2083",
  "cpanelUsername": "your-cpanel-user",
  "mailServerIp": "165.140.69.212",
  "defaultMailbox": "hello"
}
```

Then let each project run only specify:

```json
{
  "domain": "clientdomain.com",
  "mailboxPassword": "replace-me"
}
```

## Practical Automation Boundary

This can be almost fully agentic, but not every provider exposes every step equally well.

- Domain creation: API-first
- Mailbox creation: API-first
- Zone lookup and DNS: API-first
- DKIM/SPF/DMARC extraction: browser fallback may still be needed
- FormSubmit activation: browser + webmail flow is the practical path

## Failure Modes To Handle

- Domain missing in cPanel
- cPanel token valid for mailbox creation but not other modules
- Cloudflare token missing or under-scoped
- Existing website DNS at apex must not be overwritten
- FormSubmit blocks direct scripted POSTs but accepts browser-originated activation flow
- A leftover FormSubmit `action` on an AJAX form can cause unexpected redirect behavior
- A generic `mail A + MX to mail` pattern may be wrong for this hosting stack even if it sounds sensible
- `webmail` can work while bare `mail` at `/` still returns a LiteSpeed 404
- Activation email can take a short time to arrive
- cPanel frontend buttons may require DOM click fallback if the accessibility tree does not expose the action cleanly

## Best Future Shape

The cleanest future version is a single command or skill that:

1. asks for `domain`
2. asks for or generates mailbox password
3. provisions cPanel domain + mailbox
4. fetches mail DNS values
5. updates Cloudflare
6. patches website forms
7. runs a local preview
8. submits the form
9. opens webmail
10. activates FormSubmit
11. verifies success

## Webmail Expectation

For this stack, the user-facing result should be:

- `https://webmail.<domain>` shows the cPanel webmail login page
- the user logs in with the full mailbox address and password
- `https://mail.<domain>` is not necessarily the nice URL to hand to the user
- if the custom `webmail.` URL shows cert weirdness or fails while another client works, compare the exact Cloudflare record shape against that working client and align it

## Suggested Skill Shape

This workflow is a strong fit for a reusable skill with:

- API-first instructions
- browser fallback instructions
- strict secret-handling guidance
- framework-agnostic form setup advice
- a verification checklist at the end

## Test Prompts

These are good first eval prompts for the eventual skill:

1. `Set up hello@olivebranchcelebrant.co.uk for this React site, wire the contact form to FormSubmit, and handle Cloudflare + cPanel for me.`
2. `I’ve got a new celebrant project in this repo. Please add the domain to cPanel if needed, create the mailbox, connect FormSubmit, and verify the form works without mailto or redirecting away from the page.`
3. `This site is already live on Cloudflare Pages. Agentically set up a project email address and working enquiry forms using my shared NameHero cPanel account and webmail. If webmail is odd, compare the Cloudflare records against another celebrant client that already works.`

## Recommendation

Turn this into a skill that is intentionally pushy about triggering whenever the user asks to:

- set up project email
- connect forms to email
- create a mailbox in cPanel
- add mail DNS in Cloudflare
- activate FormSubmit
- automate celebrant project onboarding
