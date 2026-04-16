# Sarah's Signature Ceremonies — Trifold Brochure Plan

A4 landscape, standard tri-fold (letter fold). Two printed sides. Three panels per side, each 99mm wide.

## Palette (matches website)

- Lilac brand: `#a88ec5`
- Lilac 50 / 100 / 200 (cream tints): `#faf8fb` / `#f3eff6` / `#e6ddf0`
- Lilac 600 / 800 (deep): `#9175b0` / `#5e4777`
- Brand dark: `#1a1a1a`
- Body: `#3d3d42`

## Typography (matches website)

- Display / headings: Playfair Display (Google Fonts, with Cormorant Garamond fallback)
- Body: DM Sans (Inter fallback)

---

## Outside (printed side 1, when laid flat — left → right)

### Outside panel 1 — Back flap (tucks in first)
> "Meet Sarah" flap. This is the first thing revealed when the brochure is opened.

- Portrait: `/sarah-henry-indoor.jpeg`
- Kicker: "My Story"
- Short intro (2 short paragraphs from `AboutPage.tsx`)
- Accreditation badge line: "Fully accredited by The Academy of Professional Celebrants. Fully insured."

### Outside panel 2 — Back cover

- Logo wordmark (small) + tagline
- Contact block:
  - Tel 01355 517037
  - Email hello@sarahssignatureceremonies.co.uk
  - Web sarahssignatureceremonies.co.uk
- Social: Facebook (Sarah's Signature Ceremonies) + Instagram (@sarahssignatureceremonies)
- Service area: "Based in East Kilbride — working across Scotland and beyond. Travel within 30 miles included."
- Small Academy of Professional Celebrants crest

### Outside panel 3 — Front cover

- Full-bleed Sarah portrait: `/sarah-henry-bridge.jpeg` (she is smiling, on the bridge — warm, editorial)
- Lilac kicker: "East Kilbride · Scotland · Beyond"
- Logo: `/logo.png` (centred)
- Tagline from homepage: "Celebrating, remembering, cherishing — your way"
- Strapline: "Your significant milestone ceremonies curated with love, care and authenticity"

---

## Inside (printed side 2, when fully unfolded — left → right)

### Inside panel 1 — Welcome / My Approach

- Kicker: "Welcome"
- Headline (Playfair): "Every story deserves to be beautifully told."
- Opening paragraph from the homepage: "Each life story is unique…"
- Italicised pull-quote block (from About page):
  - "No templates, no 'one size fits all' — just a thoughtfully crafted service that reflects your wishes, your values and your voice."
- Small supporting paragraph on accreditation + warmth.

### Inside panel 2 — Ceremonies I Create (services grid)

- Kicker: "What I Offer"
- Headline: "Ceremonies I create"
- Four service cards, each with one thumbnail image + title + 2–3 sentences from the service copy:
  1. Weddings — `/wedding-ceremony-couple.jpeg`
  2. Funerals & Memorials — `/cemetery-avenue.webp`
  3. Naming Ceremonies — `/sleeping-baby-bunny.jpeg`
  4. Vow Renewals — `/exchanging-rings-bw.jpeg`

### Inside panel 3 — How We Work Together + Fees

- Kicker: "The Journey"
- Headline: "How we work together"
- Four-step process, each step 2 sentences:
  1. We meet
  2. I listen
  3. I craft
  4. I deliver
- Simple fee table (from `FeesPage.tsx`):
  - Weddings — from £500
  - Funerals — £225
  - Naming Ceremonies — from £250
  - Vow Renewals — from £400
  - Scattering / Interment of Ashes — from £65
  - Complimentary service for a loved one under 18
- Closing CTA line + phone/email.

---

## Print-safe rules followed

- No `box-shadow` on non-image containers.
- No decorative `::before` / `::after` on panels.
- No wrapper backgrounds that would clip oddly in Affinity.
- Borders kept simple (1–2px lilac) and only on image frames.
- British English throughout — no accidental em dashes (use en dash with spaces per website style where appropriate).
- Imagery drawn only from `public/` — no new stock art.
