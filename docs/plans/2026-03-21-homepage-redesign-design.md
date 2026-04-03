# Homepage Redesign Design

**Date:** 2026-03-21

**Goal:** Elevate the `HomePage` experience from a polished brochure layout into an editorial, immersive homepage with stronger atmosphere, more memorable composition, and tasteful scroll-driven motion.

## Direction

The approved direction is `editorial first, immersive second`.

That means the homepage should feel premium and art-directed, but never theatrical enough to undermine trust. The visual language should stay appropriate for a celebrant brand: elegant, calm, human, and emotionally warm. The "next level" comes from composition, contrast, pacing, and motion craft rather than novelty alone.

## Visual System

- Use a darker, moodier hero with layered overlays, warm highlights, and refined type hierarchy.
- Increase the sense of editorial composition by mixing asymmetry, overlap, framed imagery, and floating information blocks.
- Replace repetitive card styling with more curated section-specific treatments.
- Extend the existing sage/cream palette into deeper forest, parchment, blush, and gold-tinted accents.
- Add subtle texture and depth through gradients, soft glows, glass surfaces, and fine divider lines.

## Information Architecture

The homepage keeps the current story arc, but each section becomes more intentional:

1. **Hero**
   - Full-screen image scene with atmospheric overlay.
   - Main heading becomes a richer stacked composition.
   - Add a supporting editorial panel with service/location cues.
   - Keep clear primary and secondary calls to action.

2. **Services**
   - Move away from identical cards.
   - Introduce a featured service block and staggered supporting panels.
   - Use hover motion and depth cues to make the section feel collected rather than templated.

3. **Fees**
   - Reframe pricing as a curated comparison.
   - Preserve clarity, but present the featured wedding offering with stronger visual emphasis.

4. **About**
   - Turn the portrait/story section into a magazine-style spread.
   - Keep accreditation visible, but integrate it more elegantly into the composition.

5. **Quote Band**
   - Use it as an emotional pause between sections.
   - Add richer contrast, typography, and atmospheric detail.

6. **FAQ + Contact**
   - Keep both for usability and conversion.
   - Increase refinement through better spacing, stronger contrast, and more premium form framing.

## Motion Principles

- Motion should feel slow, cinematic, and deliberate.
- Use `motion` for viewport reveals, stagger orchestration, hover polish, and scroll-linked hero transforms.
- Prioritize `transform` and `opacity` for performance.
- Respect `prefers-reduced-motion`; when reduced motion is enabled, remove parallax and shorten transitions while keeping the layout intact.

## Technical Approach

- Rebuild `src/pages/HomePage.tsx` to support a more custom section structure and scroll-linked hero motion.
- Extend `src/index.css` with shared visual primitives:
  - layered background utilities
  - glass panel treatment
  - section dividers
  - enhanced reveal and hover states
  - reduced-motion guardrails
- Add `motion` as a dependency to implement the new motion system in a React-native way that fits the Vite app.

## Non-Goals

- No full-site redesign in this pass.
- No complex smooth-scroll runtime, canvas effects, or GSAP setup.
- No changes to content strategy or routing.
- No risky animation patterns that could compromise accessibility or performance.
