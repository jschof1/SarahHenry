# Homepage Hero Sizing Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the homepage hero feel roughly 120% larger by increasing the visible size of most hero elements and replacing uneven one-off spacing with a consistent stack rhythm.

**Architecture:** Keep the existing hero structure and animation model, but introduce dedicated hero layout classes so size and spacing are controlled centrally in `src/index.css`. Protect the visual refactor with a focused `HomePage` test that asserts the hero uses explicit stack and actions wrappers for predictable sizing and spacing.

**Tech Stack:** React, Tailwind utilities, custom CSS in `src/index.css`, Vitest, Testing Library

---

### Task 1: Lock the hero structure with a failing test

**Files:**
- Modify: `src/pages/HomePage.test.tsx`

**Step 1: Write the failing test**

Add a test that renders `HomePage` and asserts the hero heading sits inside a dedicated `hero-stack` wrapper and the CTA group uses a `hero-actions` wrapper.

**Step 2: Run test to verify it fails**

Run: `npm test -- src/pages/HomePage.test.tsx`

Expected: FAIL because those hero wrapper classes do not exist yet.

### Task 2: Add dedicated hero layout hooks

**Files:**
- Modify: `src/pages/HomePage.tsx`

**Step 1: Write minimal implementation**

Add stable class hooks to the hero content wrapper, stack wrapper, and CTA row so sizing and spacing can be driven from CSS instead of scattered utility margins.

**Step 2: Run test to verify it passes**

Run: `npm test -- src/pages/HomePage.test.tsx`

Expected: PASS.

### Task 3: Increase hero element sizing and normalize spacing

**Files:**
- Modify: `src/index.css`

**Step 1: Update hero sizing**

Increase the visible size of the kicker, eyebrow, title, copy, buttons, and hero content width without using `transform`.

**Step 2: Update hero spacing**

Move vertical rhythm into a single hero stack rule, remove per-element top-margin spacing from hero text styles, and tune CTA spacing to feel balanced at the larger scale.

**Step 3: Verify visually-related tests**

Run: `npm test -- src/pages/HomePage.test.tsx`

Expected: PASS.

### Task 4: Verify no regressions

**Files:**
- Verify: `src/pages/HomePage.tsx`
- Verify: `src/index.css`
- Verify: `src/pages/HomePage.test.tsx`

**Step 1: Run targeted lint diagnostics**

Use workspace lint diagnostics for the edited files and fix any new issues.

**Step 2: Run final test**

Run: `npm test -- src/pages/HomePage.test.tsx`

Expected: PASS with no new failures.

**Step 3: Build confidence**

If needed, run: `npm run build`

Expected: successful production build.
