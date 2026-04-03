# Design Spec: "Unfolding Editorial" Scroll Experience

**Date:** 2026-03-27
**Goal:** Replace traditional differential scroll speeds with high-impact "Unfolding" visual effects using `clip-path` and scale-based reveals to make the scroll experience feel premium, obvious, and editorial.

## 1. Architecture & Core Primitives

### 1.1 Global Scroll Controller
- **File:** `src/components/GlobalScrollEffects.tsx`
- **Logic:** Continue using GSAP `ScrollTrigger` for high-performance scroll-linked transforms.
- **Constraint:** Remove all `yPercent` and `y` differential speed transforms. Focus entirely on `clipPath`, `scale`, and `opacity`.

### 1.2 The "Unfolding" Mask
- **Component:** Enhance `.scroll-reveal-mask` in `src/index.css`.
- **Effect:** Instead of a simple `inset(100% 0% 0% 0%)` (bottom-to-top wipe), use a more dynamic "aperture" or "expanding rectangle" reveal.
- **GSAP Config:**
  ```javascript
  gsap.fromTo(mask, 
    { clipPath: 'inset(20% 20% 20% 20% round 2rem)' }, 
    { 
      clipPath: 'inset(0% 0% 0% 0% round 2rem)',
      scrollTrigger: {
        trigger: mask,
        start: 'top 90%',
        end: 'top 40%',
        scrub: 1
      }
    }
  );
  ```

## 2. Section-Specific Designs

### 2.1 Hero "Aperture" Reveal
- **Target:** `homepage-hero-media`
- **Effect:** As the user scrolls, the hero image "expands" from a centered container into a full-bleed background.
- **Visuals:** Start with a slight `scale(1.1)` and `clip-path: inset(5% 5% 5% 5% round 3rem)`. As you scroll, scale to `1.0` and clip-path to `inset(0%)`.

### 2.2 Editorial Text Reveals
- **Target:** `.section-title`, `.section-copy`
- **Effect:** "Masked" reveal where text rises from an invisible container.
- **Implementation:** Wrap text in a `div` with `overflow-hidden`. Animate the inner text from `y: 100%` to `y: 0%`.

### 2.3 Section "Wipe" Transitions
- **Target:** Alternating sections (e.g., `bg-lilac-brand` to `bg-sage-brand`).
- **Effect:** The background color/container of the incoming section "wipes" over the previous one using a `clip-path` reveal triggered by the section entering the viewport.

## 3. Success Criteria
- **Visual Impact:** The "unfolding" should be unmistakable even on small scrolls.
- **Performance:** Maintain 60fps on mobile and desktop.
- **Accessibility:** Respect `prefers-reduced-motion` by falling back to simple fades.

## 4. Implementation Plan
1. Update `src/index.css` with new clip-path utility classes.
2. Refactor `src/components/GlobalScrollEffects.tsx` to remove speed-based parallax and implement the new "Unfolding" logic.
3. Update `src/pages/HomePage.tsx` to ensure proper DOM structure for masked text reveals.
