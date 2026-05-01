# Handoff: CRUK Therapeutics Accelerator — Landing & Programme

## Overview
Two marketing/recruitment pages for **Cancer Research Horizons' Therapeutics Accelerator** — a four-month, oncology-specific founder programme:

1. **Landing page** — top-of-funnel pitch: hero, overview, "what we offer" stats, five numbered feature rows, CTA, related teasers.
2. **Programme page** — deep-dive: hero, breadcrumbs, About, four-phase timeline, eligibility cards, scroll-pinned "How to apply" timeline, curriculum pillars, FAQs, CTA.

The pages share Cancer Research Horizons chrome (header, footer, teaser strip).

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behaviour. They are **not production code to copy directly**. The implementation task is to recreate these designs in the target codebase's environment (CMS, React/Next.js, Vue, etc.) using its established components, design tokens, and conventions.

The HTML uses inline-Babel JSX with React 18 loaded from a CDN — that delivery model is for prototyping only. In production:
- Convert each `*.jsx` file into proper components in your framework.
- Replace the global `window.X = X` exports with normal module imports.
- Move the inline `<style>` and shared CSS into your styling system (CSS modules, Tailwind, styled-components, etc.).
- Local `Progress` font files in `assets/fonts/` should be self-hosted; `Poppins` is loaded from Google Fonts in the prototype.

## Fidelity
**High-fidelity (hifi)**. Final colours, typography, spacing, copy and interactions are settled. Recreate pixel-perfectly using the codebase's existing primitives. Where this codebase has equivalents (Buttons, Headers, Footers, breadcrumbs, accordion), prefer those over re-implementing — but match the exact tokens listed in **Design Tokens** below.

## Screens / Views

### 1. Landing page (`landing_v2.jsx`)
**Purpose:** Convert eligible UK researchers into programme applicants.

**Layout (top → bottom):**
1. **Header** (shared) — dark `#0E0F24`, 150px tall, logo left, nav right (`About / Researchers / Partnering [active] / Investors / Our science / Portfolio / News & Events / Contact`) + search icon. Active link uses cyan underline.
2. **Hero — full-bleed** (`v2h-full`):
   - Background: `assets/hero.jpg`, dark gradient overlay (`linear-gradient(180deg, rgba(14,15,36,0.15) 0%, rgba(14,15,36,0.55) 60%, rgba(14,15,36,0.85) 100%)`)
   - Min-height 620px; content bottom-aligned, padded 0 50px 72px
   - Kicker: "CANCER THERAPEUTIC ACCELERATOR" with 36px × 2px cyan rule before it
   - H1 (Progress 76px / 1.02 / -0.02em): "Accelerate your pathway from researcher to founder."
   - Sub: 19px / 1.5, white 90%, max 680px
3. **Sub-nav** (shared `SubNav`): sticky strip on dark navy `#0E0F24`, 28px 50px, gap 40, 2px cyan top-border. Label "IN THIS SECTION" (cyan, 12px, letter-spacing 2.4px) + links: `Programme details` / `FAQs`. Active = cyan underline.
4. **Overview rich-text** (`v2-rt`): 2-col grid (1fr 1fr, gap 64). Left = label "OVERVIEW" + lead h2 (Progress 40px / -0.012em). Right = body 16px / 1.65 + primary button "Learn more about eligibility and how to apply" → navigates to Programme.
5. **What we offer — stats band** (`v2-stats`): 80px 50px on `--navy #00007E`, white. Header row = h2 "What we offer" + kicker "PROGRAMME IN NUMBERS" (cyan, 11px, letter-spacing 2px), 1px white-15% rule below. 4-col grid, dividers 1px white-12%. Each stat: number Progress 64px (with cyan 28px superscript), 14px / 2px / cyan line above 11px label, 14px white-85% body. Numbers: `4 mo`, `£40 k`, `£250 k`, `1:1`.
6. **Five numbered feature rows** (`v2-feature`): 2-col grid 1:1, min-height 480px, alternating image/body via `v2-feature--reverse`.
   - Body padding 80px 50px, max-width 640px, centred vertically
   - Number kicker "01 · WHAT SETS US APART" (12px / letter-spacing 2px) preceded by 32px × 2px cyan rule
   - h3 (Progress 40px / 1.1 / -0.01em)
   - 18px / 1.55 paragraphs
   - Outline button "Learn more"
   - Rows: 01 What sets us apart · 02 Founder development · 03 Multiple pathways · 04 Non-dilutive at entry · 05 Infrastructure
7. **CTA band** (`v2-cta`): `--navy` background, 80px 50px, 3px cyan top-border. 2-col 1.2fr / 1fr. Title left "Let us help you make an impact." (Progress 44px). Right = white-85% paragraph + cyan button "Get in touch today" (cyan bg, navy text, 14px 24px, weight 600, letter-spacing 1.6px).
8. **Teasers** (shared) — 3-up image cards (Researchers / Our start-up portfolio / Events).
9. **Footer** (shared) — see below.

**Hero variants** (prop `heroStyle`): `fullbleed` (default, above), `split` (text/image 50:50 with metadata dl), `type` (huge typographic 104px h1, no image), `offset` (white card overlapping a dimmed bg image).

### 2. Programme page (`programme_v2.jsx`)
**Purpose:** Detailed programme info + drive applications.

**Layout (top → bottom):**
1. **Header** (shared, same as landing).
2. **Hero — poster** (`v2h-poster`): 2-col grid 1.15fr / 1fr on navy. Left body padded 72px 56px 64px, with cyan 3px vertical rule `-20px` to its left. Kicker "● PROGRAMME DETAILS" (cyan dot 8px, letter-spacing 2.8px). H1 (Progress clamp 40–64px) "Apply to be part of our pilot programme." Right = `assets/programme-hero.jpg` with subtle grayscale/contrast filter and corner gradients. Two buttons: white `btn--on-dark` "Apply now" + ghost `btn--ghost-on-dark` "See how to apply".
3. **Crumbs** (shared): `Cancer Research Horizons › Therapeutics Accelerator › Programme details`, on white, 16px 50px, 14px text, separator = thin solid triangle `CrumbChevron` in cyan.
4. **About strip** (`v2-about`): 96px 50px, 3-col grid (460px / 40px / 1fr) but with both label + lead in col 1 row 1 and body in col 3 row 1. Lead Progress 44px / -0.015em.
5. **What's included — 4-card grid** (`v2-inc`): off-white `#FAFAFA` bg, 96px 50px. Header = title (Progress 40px) + lede (18px / 1.55). 4-col grid, gap 24. Cards: white, 1px rule border, 32px 28px, with cyan number "01"–"04" (Progress 14px) divided by rule, h4 (Progress 26px), body (15px / 1.55), and metadata kicker at bottom (11px / letter-spacing 2px). Steps: Pre-accelerator / Acceleration / Demo Day / Yearly conference.
6. **Eligibility — card grid** (`v2-elig`): white, 96px 50px. Header 460px+1fr. 5-col grid; card 4-up + a 5th `v2-elig__card--cta` (navy bg, white text, "Ready to apply?" with arrow icon). Each card has a 44px circular check icon (1.5px navy stroke), h4 (Progress 22px), 14px body. Cards: Researchers & PIs · Open funding base · Early concepts · Modality agnostic · Apply (CTA).
7. **How to apply — Waabi-style scroll-pinned timeline** (`v2-apply`): off-white. Critical interaction — see **Interactions & Behaviour**.
8. **Curriculum — pillar rows** (`v2-curr2`): white, 96px 50px. Header (460px / 1fr). Each pillar row is a grid of `80px / 340px / 1fr / 1fr` columns (number / name / outcomes / modules). Number = Progress 40px in cyan; name = Progress 26px navy; outcomes & modules = 14px / 1.55 with capped uppercase 10px label. Top + bottom 1px rules. Four pillars: 01 Scientific excellence · 02 Commercial strategy · 03 Regulatory & IP · 04 Founder & team.
9. **FAQs — inline accordion** (`v2-faq`): off-white, 96px 50px, max-width 1440px. Each row 1px-rule top/bottom, 32px padding. Question button = `grid-template-columns: 44px 1fr` with 32px navy disc (white chevron), 26px / weight 600 question. Open animates `grid-template-rows: 0fr → 1fr` and rotates the disc 180°. Six FAQs (see source). Foot row = "Can't find the answer you're looking for?" + "Contact the team" button.
10. **CTA band** (`v2-cta`): same component as landing, with copy "Ready to build? Apply by 30 June 2026." and button "Start your application".
11. **Teasers** + **Footer** (shared).

**Hero variants** for Programme: `classic`/`fullbleed` (poster, default), `split`, `type`, `offset`.

## Interactions & Behaviour

### Header search
Static icon, no behaviour wired.

### Sub-nav (Landing)
Sticky at top: 56. Link click navigates between Landing/Programme pages.

### Hero variant prop
`heroStyle` selects one of the four hero layouts (controlled by Tweaks panel; ship default `fullbleed` for Landing, `classic` for Programme).

### Tone variant prop
`tone` ∈ `quiet | punchy | image` adds a class on the root `.site`. `punchy` bumps headline weight to 600 and adds extra cyan accents; `image` extends `v2-feature` and `v2h-split` min-heights.

### Programme — "How to apply" scroll-pinned timeline
This is the most complex interaction in the design. Reference: `programme_v2.jsx` lines for `#apply` + matching CSS `.v2-apply` block.

Layout:
- Section is taller than the viewport (text items each min-height 70vh).
- 2-column body (1fr / 1fr, column-gap 120). Centre rail in the gap.
- **Counter** ("NN / 05") sticky at left edge, viewport centre. Number wheel translates -48px per active step.
- **Text items** stack down the left column (right-aligned, max-width 440).
- **Image** in right column is sticky at top:0, height 100vh, crossfades between 5 panes.
- **Centre rail** (2px wide) renders a vertical line growing from body-top to a 12px cyan dot pinned at viewport centre.

JS behaviour (single scroll listener):
1. Compute progress `p = clamp(-bodyRect.top / (bodyRect.height - vh), 0, 1)`. Set CSS var `--progress`.
2. Rail line height: cap at last item's centre relative to body top; otherwise `vh*0.5 - bodyRect.top`. Set `--rail-line-h`.
3. Active step: walk items, set step to last index whose centre is above (vh*0.5 + vh*0.2). Drives `is-active` on items + image panes, plus counter wheel transform.
4. Per-item opacity: distance of item centre from viewport mid, mapped `1 → 0.1` over a 50vh fade range. Set `--item-opacity` on each item.
5. Counter fade: once last item's centre passes above viewport centre, fade counter over the same 50vh range (`--counter-opacity`, `--counter-shift` translateY).

The component uses native `position: sticky` for the image and counter — when the body's bottom rises past the viewport, sticky naturally releases them.

### FAQ accordion
Single-open. Click toggles `is-open`. Animates `grid-template-rows` from `0fr → 1fr` over 250ms ease, and rotates the navy disc 180°. Question content fades in via `overflow: hidden` on the row's `<p>`.

### Buttons
- `.btn` — primary navy fill, white text, 16px 30px padding, min-height 50px, weight 500, 12px text, letter-spacing 1px, uppercase, 1px navy border. Hover: `#14148f`. Active: translateY(1px).
- `.btn--outline` — transparent, navy text, navy border. Hover: navy fill.
- `.btn--on-dark` — white fill, navy text. Hover: cyan fill.
- `.btn--ghost-on-dark` — transparent, white text + border. Hover: white fill, navy text.

### Hover states
- Header nav links → cyan
- Sub-nav links → cyan + cyan underline
- Crumb links → opacity 0.7 → 1 + navy
- Teaser titles → `#14148f`, arrow translateX(3px)
- FAQ question → no colour change (button is just the trigger; the disc shifts)

## State Management
Per-page React state in this prototype:
- `page` — `landing | programme` (lifted to App; persisted to localStorage in prototype, replace with router in production).
- `tweaks` — `{ v2HeroStyle, v2Tone }` (only for the Tweaks panel; remove in production unless you ship variants).
- `openFaq` — index of currently-open FAQ (-1 = none) on Programme page.
- `applyStep`, `applyProgress` — driven by scroll listener; set on rAF-friendly `scroll` events.
- `inclStep`, `inclProgress` — declared but unused (legacy from earlier pinned variant).

No data fetching in the prototype. In production, copy will likely come from a CMS — model each card/row/step as a content entry.

## Design Tokens

### Colors (CSS variables — see `styles.css` :root)
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0E0F24` | Primary dark — header, hero overlays, footer bg |
| `--ink-2` | `#000026` | Body text |
| `--navy` | `#00007E` | Brand primary — h2/h3, buttons, stats band, CTA band |
| `--navy-ink` | `#0E0F24` | Same as `--ink` |
| `--cyan` | `#00D8F0` | Accent — rules, kickers, links, highlights |
| `--blue-mid` | `#3333CC` | Mid electric blue |
| `--off` | `#FAFAFA` | Off-white section bg (What's included, How to apply, FAQs) |
| `--rule` | `rgba(14,15,36,0.1)` | 1px hairline rules |
| `--rule-2` | `rgba(14,15,36,0.7)` | Stronger rule (rare) |
| `--white` | `#ffffff` | — |
| `--grey-txt` | `#CBCBDF` | Hero subtitle text on dark |
| `--grey-bg` | `#E7E7E9` | Page chrome bg outside the design |

Additional rail accent in How-to-apply: `#7FE0E0` (lighter cyan).

### Typography
- **Display:** `Progress` (self-hosted TTF in `assets/fonts/` — Light 300, Regular 400, Medium 500, SemiBold 600). Fallback: `Georgia, serif`. Display weight is consistently 500 with negative letter-spacing (`-0.005em` to `-0.025em` depending on size).
- **Body / UI:** `Poppins` (400, 500, 600) via Google Fonts. Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

Type scale in use:
- Hero h1 — Progress 500 / 76px (full) · 68px (split) · 104px (type) · 54px (offset) · clamp 40–64 (poster)
- Section h2 — Progress 500 / 40–44px / -0.01em
- Big stat number — Progress 500 / 64px / -0.025em (with cyan 28px sup)
- Pillar/feature h3 — Progress 500 / 26–40px
- Card title — Progress 500 / 22–26px / -0.005em
- FAQ question — Poppins 600 / 26px (yes — not Progress here)
- Body — 14–19px / 1.45–1.65 (most body 16–18px / 1.55)
- Kickers/labels — Poppins 500 or 600 / 10–11px / letter-spacing 2–2.4px / uppercase / navy or cyan

### Spacing
Section padding is consistently `80px 50px` or `96px 50px` (50px page gutter). Card grids use 20–24px gaps. The page is centred at `max-width: 1440px` with a fixed 1440-wide content frame in this prototype (`.site { width: 1440px }` — relax this in production for fluid layouts).

### Borders
Hairlines are 1px `var(--rule)`. Section dividers and stats grids use 2px cyan top-borders for accent. The CTA band has a 3px cyan top-border. Buttons have 1px borders matching their fill colour.

### Shadows
Minimal. Stats poster floats use `0 12px 32px rgba(0,0,0,0.25)` and `0 16px 40px rgba(0,0,0,0.22)`. CTAs and the page wrap have soft `0 4px 40px rgba(0,0,0,0.08)`. Default elsewhere: no shadow.

### Border radius
Almost everything is `0` (sharp corners — intentional editorial feel). Only circular elements: `44px` eligibility check, `32px` FAQ disc, `50%` social icons & cyan dot.

## Assets
All in the project's `assets/` folder, copied here:
- `logo.png` — Cancer Research Horizons header logo (200×80)
- `hero.jpg` — Landing hero background (full-bleed variant)
- `programme-hero.jpg` — Programme poster hero right-column photo
- `apply-01.jpg` … `apply-05.jpg` (and `apply-03.png`) — How-to-apply step images (5)
- `cta-image.png` — CTA band image (currently unused)
- `crumb-chevron.svg`, `icon-chevron-small-right.svg`, `icon-search.svg` — utility icons (most are inlined as React SVGs in `shared.jsx`)
- `fonts/Progress-{Light,Regular,Medium,SemiBold}.ttf` — display typeface

Teaser images in `landing_v2.jsx` and the unsplash photos in feature rows are pulled from Unsplash by URL — replace with real, licensed photography in production.

## Files in this bundle
- `Prototype.html` — entry point; mounts React, renders `<App>` with page switcher
- `shared.jsx` — `Header`, `SubNav`, `Footer`, `Teasers`, `CrumbChevron` and inline-SVG icons
- `landing_v2.jsx` — Landing page; exports `window.LandingPageV2`
- `programme_v2.jsx` — Programme page (incl. scroll-pinned How-to-apply); exports `window.ProgrammePageV2`
- `styles.css` — shared chrome (tokens, header, hero, sub-nav, crumbs, buttons, footer, teasers, basic CTA)
- `styles_v2.css` — V2-specific layouts (hero variants, stats band, feature rows, About, What's included grid, Eligibility, How to apply, Curriculum, FAQ, CTA band, tones)
- `assets/` — see above

## Implementation notes for Claude Code
1. **Start with tokens.** Map the CSS variables in `styles.css` :root into your theme system before touching components. Most styling falls out of those once they're correct.
2. **Treat `shared.jsx` as primitives.** Header, Footer, Teasers, Crumbs, CrumbChevron, and the icon set are reused across both pages. Build them once.
3. **Buttons.** The `.btn` family in `styles.css` covers every CTA. Match the four modifier classes.
4. **The "How to apply" pin** — keep the JS intact when porting. It's a single scroll handler updating CSS vars + state; don't try to replace it with IntersectionObserver — the rail-line growth needs continuous scroll position.
5. **Skip prototype scaffolding.** The Tweaks panel, the prototype switcher bar, the localStorage page persistence, the `heroStyle`/`tone` props, and the unused `v2-pin` styles are exploration tooling — don't ship them.
6. **Hero is variant-driven in the prototype.** Production should pick one hero per page and remove the others. Recommended: `fullbleed` for Landing, `classic`/poster for Programme.
7. **Fluid layout.** `.site { width: 1440px }` is a prototype constraint. Replace with `max-width: 1440px; width: 100%;` and add responsive breakpoints — there are partial `@media` rules in `styles_v2.css` for the included grid you can extend.
