# AGENTS.md

## Learned User Preferences

- Never leave sections looking plain on white; user repeatedly demands real imagery or textured backgrounds with sufficient contrast on every section.
- After any background or colour change, visually verify text contrast — "can't see the text" is a recurring complaint.
- Keep page hero sections compact and match the existing hero layout/design; don't invent new hero styles or let heroes eat excessive vertical space.
- Follow every requirement in an invoked skill — e.g. brochures must include the QR code and APC badge; silently skipping parts of a skill triggers corrections.
- Don't invent copy; pull real content from the approved website pages and project docs (`docs/client/`, `docs/plans/`) instead of fabricating new wording.
- British English throughout; avoid em dashes and follow APC (Academy of Professional Celebrants) copy rules.
- Prefer distinctive serif/display fonts and the brand palette; avoid generic AI-slop gradients on white.
- For "commit and push" requests, do a standard staged commit + push on the current branch; do not rewrite or force-push history unless explicitly asked.
- Avoid orphan/lone words sitting on their own line — use `&nbsp;` plus Tailwind `text-balance` to keep phrases like "vow renewals", "Your Way!" or "for the person who died" together.
- For brochure / print background panels, use generic or abstract imagery — don't put Sarah's face behind a panel or let a panel block her face; reserve portrait shots for dedicated portrait areas.
- Do not add APC links on site pages (avoids creating direct competition); the APC mention belongs only in the footer.

## Learned Workspace Facts

- Project is the celebrant website for Sarah Henry / "Sarah's Signature Ceremonies", independent civil celebrant, East Kilbride and across Scotland; live public contact `hello@sarahssignatureceremonies.co.uk`, phone `01355 517037`.
- Stack: React 19 + Vite + TypeScript + Tailwind v3, `react-router-dom` v7, GSAP + `@gsap/react`, `lenis`, `motion`. Scripts: `npm run dev`, `npm run build` (`tsc -b && vite build`), `npm test` (node `--test` on `scripts/*.test.mjs`), `npm run provision:email` (`scripts/provision-email.mjs`).
- Hosting: Cloudflare Pages for the site; shared NameHero cPanel for mail; Cloudflare DNS manages the zone.
- Email + form infra: `webmail.<domain>` A-record to the cPanel/shared IP, `mail.<domain>` CNAME to the apex, MX to the NameHero server hostname (keep `mail` and MX DNS-only); `https://webmail.<domain>` should show the cPanel webmail login page. Contact form posts to FormSubmit via AJAX from the JS submit handler — never set `method` or `action="https://formsubmit.co/..."` on the `<form>` element or the browser will redirect off-site.
- Footer must credit "Website built by Academy of Professional Celebrants" AND show "Trained and Certified by The Academy of Professional Celebrants" alongside the `/the_academy.png` badge linking to `https://www.funeralcelebrantacademy.co.uk`.
- Custom Tailwind tokens in use: `brand-dark`, `lilac-brand`, `font-heading`, `font-serif`; recurring component classes include `.section-shell`, `.page-hero`, `.hero-stack`, `.parallax-on-light`, `.has-parallax`.
- There is no `font-display` utility in this Tailwind config — never `@apply font-display` (recurring lint error).
- Collateral + content dirs: `/brochure/` (tri-fold HTML + `brochure-plan.md` + `qr-website.svg`) and `/business-card/` (HTML + PDF) — brochures must include the QR code and the APC badge. Plans live in `docs/plans/`; approved client assets in `docs/client/`; section background images in `public/bg-parallax-*.jpeg`.
- UK business card spec used in this project: trim 85×55mm with 3mm bleed (page 91×61mm), no crop marks baked into the artwork.
- Sarah portrait assets in `/public/`: `sarah-henry-fascinator.jpeg`, `sarah-henry-bridge.jpeg` (preferred professional headshot, Glasgow bridge backdrop, green blazer) and `sarah-henry-indoor.jpeg`.
- Logo composition: rose-and-thistle wreath with the big "S" on top and the "Sarah's Signature Ceremonies" wordmark + lilac colour wash beneath; the site header should be white with `brand-dark` / `lilac-700` link colours so the dark "S" never disappears on dark backgrounds.
- "Flatten the PDF" on this machine = rasterise with ImageMagick at 300 DPI (`magick -density 300 in.pdf -background white -alpha remove -alpha off out.pdf`); Ghostscript and qpdf are not installed.
