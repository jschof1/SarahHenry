---
date: 2026-03-27
topic: peter-young-website-redesign
---

# Peter Young Website Redesign Brainstorm

## What We're Building
A complete visual overhaul of the Peter Young Celebrant website to align with the client's design-industry background and specific aesthetic requirements. The goal is to move from a "safe, neutral" template feel to a "vibrant, characterful, and editorial" experience that uses imagery and bold color to draw users in.

## Why This Approach
The current design relies too heavily on white space and subtle accents, which the client finds "lifeless." By flipping the hierarchy—making the brand colors (Sage, Lilac, Cream) the primary surface colors and introducing "broken" layouts—we create the high-vibrancy, high-interest experience requested.

## Key Decisions

### 1. Color Palette Integration
- **Primary Surfaces:** Use solid **Sage (#80968B)** and **Lilac (#B09FC4)** for entire section backgrounds.
- **Contrast Text:** Use **Cream (#F6F7EC)** for text on dark Sage/Lilac backgrounds.
- **Bold Borders:** Implement 8px–16px solid borders in contrasting palette colors around image containers and section transitions.

### 2. Layout & Composition
- **Broken Grids:** Use absolute positioning and negative margins to overlap text blocks and images.
- **Asymmetry:** Move away from centered stacks; use alternating left/right weighted layouts with overlapping panels.
- **Translucent Surfaces:** Use glassmorphism (backdrop-blur) for cards and navigation to create depth.

### 3. Imagery & Motion
- **Parallax Backgrounds:** Implement parallax effects on section backgrounds and image containers (using Framer Motion/GSAP).
- **Softer Photos:** Apply Sage/Lilac color washes (multiply/soft-light blend modes) and subtle blurs to soften "harsh" photos.
- **Non-Rectangular Frames:** Use CSS `clip-path` or SVG masks for soft circular or organic framing of images.

### 4. Specific Content Fixes
- **Hero Image:** Replace the current "wedding venue" image with a celebrant-focused image.
- **Portrait Reduction:** Remove redundant photos of Peter; focus on "smiling baby" and ceremony-focused imagery.
- **Floral Motifs:** Integrate subtle botanical/floral SVG motifs as background decorations.

## Next Steps
→ `/workflows:plan` for implementation details, starting with the Tailwind config update and Homepage Hero redesign.
