# Homepage Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the homepage into a more editorial, immersive experience with refined motion, stronger layout hierarchy, and premium visual styling.

**Architecture:** Keep the existing route structure and overall content model, but replace the homepage composition with custom section layouts and shared visual primitives. Use `motion` for scroll-linked hero transforms, viewport reveals, hover transitions, and reduced-motion-aware animation fallbacks.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, `motion`, Testing Library, Vitest

---

### Task 1: Add homepage motion support

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

**Step 1: Add the dependency**

Run: `npm install motion`

Expected: `package.json` and `package-lock.json` include `motion`.

**Step 2: Verify install is clean**

Run: `npm ls motion`

Expected: dependency tree shows installed `motion` package with no errors.

### Task 2: Add a homepage behavior test first

**Files:**
- Create: `src/pages/HomePage.test.tsx`
- Test: `src/pages/HomePage.test.tsx`

**Step 1: Write the failing test**

Add tests that verify:
- the hero renders the updated primary heading and CTA
- service cards render from data
- the success state can still render the contact confirmation after a mocked submit

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/pages/HomePage.test.tsx`

Expected: FAIL because the new structure and/or test hooks do not exist yet.

### Task 3: Rebuild homepage structure

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Test: `src/pages/HomePage.test.tsx`

**Step 1: Implement the minimal redesign**

Update the homepage to include:
- a cinematic hero with layered copy and floating editorial panel
- staggered services section with a featured service
- redesigned pricing section
- editorial about section
- upgraded quote band
- refined FAQ and contact sections

**Step 2: Run the targeted test**

Run: `npx vitest run src/pages/HomePage.test.tsx`

Expected: PASS

### Task 4: Add motion primitives and reduced-motion support

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/index.css`
- Test: `src/pages/HomePage.test.tsx`

**Step 1: Add motion behavior**

Implement:
- `useScroll` + `useTransform` for hero image/content drift
- staggered reveal variants for section entrances
- hover polish on service/fees cards
- `useReducedMotion` fallback behavior

**Step 2: Re-run tests**

Run: `npx vitest run src/pages/HomePage.test.tsx src/components/Header.test.tsx`

Expected: PASS

### Task 5: Build the visual system layer

**Files:**
- Modify: `src/index.css`

**Step 1: Add shared styling primitives**

Add classes/utilities for:
- atmospheric gradients and grain overlays
- premium glass panels
- section divider lines
- button polish
- premium card surfaces
- reduced-motion overrides

**Step 2: Validate the stylesheet in app build**

Run: `npm run build`

Expected: Vite build passes.

### Task 6: Final verification

**Files:**
- Test: `src/pages/HomePage.tsx`
- Test: `src/index.css`

**Step 1: Run homepage tests**

Run: `npx vitest run src/pages/HomePage.test.tsx src/components/Header.test.tsx`

Expected: PASS

**Step 2: Run full project checks**

Run: `npm run build`

Expected: PASS

**Step 3: Lint changed files**

Run: use workspace lints for `src/pages/HomePage.tsx` and `src/index.css`

Expected: no newly introduced diagnostics
