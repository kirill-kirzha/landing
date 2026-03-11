# Aleria V2 — Design System

Reference document for the Aleria V2 visual identity. All values are implemented in `src/app/globals.css` and available as CSS classes or Tailwind utilities.

---

## 1. Color Palette

### Brand Colors

| Name | Role | oklch | Tailwind |
|---|---|---|---|
| **Warm Paper** | Primary background | `oklch(0.98 0.004 90)` | `bg-background` |
| **Espresso** | Primary text, dark backgrounds | `oklch(0.11 0.008 55)` | `text-foreground`, `bg-foreground` |
| **Desert Sand Light** | Section contrast background | `oklch(0.94 0.025 82)` | `bg-muted` |
| **Brand Sand** | Typography accent, warm highlights | `oklch(0.93 0.05 85)` | `text-brand-sand`, `bg-brand-sand` |
| **Brand Mint** | Primary accent, interactive cues | `oklch(0.84 0.2 155)` | `text-brand-mint`, `bg-brand-mint` |

### Semantic Text Color Tiers

4-tier system for text hierarchy. All tiers auto-invert in dark mode via `.dark` class.

| Tier | Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|---|
| **Primary** | `text-foreground` | Espresso | Warm Paper | Headings, strong text |
| **Secondary** | `text-muted-foreground` | `oklch(0.35)` | `oklch(0.58)` | Body text, descriptions |
| **Tertiary** | `text-tertiary` | `oklch(0.52)` | `oklch(0.48)` | Feature details, list descriptions |
| **Quaternary** | `text-quaternary` | `oklch(0.64)` | `oklch(0.38)` | Meta text, footer links, subtle labels |

### Semantic Colors

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--background` | Warm Paper | Espresso | Page background |
| `--foreground` | Espresso | Warm Paper | Primary text |
| `--muted` | Desert Sand Light | Dark warm | Section contrast backgrounds |
| `--muted-foreground` | Warm gray | Lighter warm gray | Secondary text |
| `--border` | Warm gray 90% | White 10% | Subtle borders, dividers |
| `--primary` | Espresso | Warm Paper | Buttons, strong emphasis |

### Accessibility

All text/background combinations pass **WCAG AAA** (7:1 minimum):

| Combination | Ratio |
|---|---|
| Espresso on Warm Paper | 17.8:1 |
| Muted-foreground on Warm Paper | 8.96:1 |
| Muted-foreground on Desert Sand | 7.73:1 |

---

## 2. Gradient & Brand Effects

### Gradient Classes

| Class | Effect | Usage |
|---|---|---|
| `.gradient-desert-mint` | Solid gradient fill mint-to-sand | Decorative backgrounds |
| `.text-gradient-desert-mint` | Gradient text (background-clip) | Single keyword in a title metric |
| `.line-gradient` | 1px horizontal line, fades at edges | Header separator, section dividers |
| `.border-gradient` | Gradient border, solid background | Card outlines, elements |
| `.border-gradient-glow` | Gradient border + frosted glass + glow | CTA buttons (outline variant) |
| `.btn-primary-gradient` | Espresso fill + gradient border | CTA buttons (primary variant) |

### Usage Rules

- `.line-gradient` : header separator, max 1-2 decorative lines per page
- `.border-gradient` / `.border-gradient-glow` : CTA buttons, feature cards. Not for all cards.
- `.btn-primary-gradient` : primary CTA buttons only
- `.text-gradient-desert-mint` : max 1 per page, on a key metric or keyword
- Never use gradient as full section background

---

## 3. Typography

### Font Stack

| Role | Font | Variable | Applied via |
|---|---|---|---|
| **Headings** (h1, h2) | Playfair Display | `--font-serif` | CSS rule in `globals.css` (automatic) |
| **Body** | Manrope | `--font-manrope` → `--font-sans` | `font-sans` on `<html>` (automatic) |
| **Monospace** | Geist Mono | `--font-geist-mono` → `--font-mono` | `font-mono` class |

### Optical Typography

Applied globally in `globals.css` base layer:

| Property | Target | Effect |
|---|---|---|
| `text-wrap: balance` | h1, h2 | Balanced line breaks for headings |
| `text-wrap: pretty` | p | Prevents orphans in paragraphs |
| `text-rendering: optimizeLegibility` | h1, h2, h3 | Enhanced kerning and ligatures |
| `font-feature-settings: "kern", "liga", "calt"` | h1, h2, h3 | Explicit OpenType features |

### Type Scale

All typography uses dedicated CSS classes. **Never combine manual font-size + font-weight + tracking + line-height.** Always use a `.type-*` class.

**Headings (Playfair Display) — 3 levels:**

| Class | Size (mobile - desktop) | Weight | Tracking | Line-height | Usage |
|---|---|---|---|---|---|
| `.type-display` | 44px - 88px (fluid) | 700 (bold) | 0.01em | 1.12 | Hero title, closing CTA. Max 2 per page. |
| `.type-title` | 28px - 52px (fluid) | 700 (bold) | 0.01em | 1.15 | Section h2 |
| `.type-heading` | 18px - 24px (fluid) | 600 (semibold) | -0.01em | 1.25 | h3, card titles, case study names |

**Body (Manrope) — 3 levels:**

| Class | Size | Weight | Tracking | Line-height | Usage |
|---|---|---|---|---|---|
| `.type-body` | 16px - 18px (fluid) | 400 (regular) | 0.01em | 1.65 | Section descriptions, hero subtitle |
| `.type-body-sm` | 14px (fixed) | 400 (regular) | 0.01em | 1.65 | Feature details, list items |
| `.type-label` | 12px - 14px (fluid) | 500 (medium) | 0.06em | default | Section badges, meta text. Auto uppercase. |

**Metrics (Playfair Display):**

| Class | Size (mobile - desktop) | Weight | Usage |
|---|---|---|---|
| `.type-metric` | 24px - 40px (fluid) | 700 | Key numbers (145x, 8x, 20+) |

### Bold/Light Contrast Rule

A signature typographic treatment: one keyword set to `font-normal` (400) while the rest stays bold (700).

**Rules:**
- Applied on all h1 and h2 titles (`.type-display` and `.type-title`)
- The light word must be a **significant/signature word**, never a conjunction or article
- Never put the light word at the end of the line
- Maximum 1 light word per title
- Example: `Your <span class="font-normal">Sovereign</span> AI Factory`

### Feature List Titles

Inside feature lists (Agents, Flows sections), use `.type-body-sm font-medium` for the feature title and `.type-body-sm` for the description. The `font-medium` override is the only accepted weight override.

### Navigation and Buttons

No `.type-*` class needed. Use standard Tailwind:
- Nav links: `text-sm`, weight 400
- Buttons: `text-sm` (default/lg), `text-xs` (sm), weight 500 (via `font-medium` on Btn)
- Footer links: `text-sm`, weight 400

---

## 4. Spacing

### Section Rhythm

Managed by the `Section` component with progressive responsive padding:

| Variant | Padding (mobile / tablet / desktop) | Usage |
|---|---|---|
| **Default** | `py-24 / py-32 / py-40` | Standard sections |
| **Large** | `py-32 / py-40 / py-48` | Statement sections |
| **None** | No padding | Clients marquee |

### Container Padding

Responsive horizontal padding via `Container` component:

| Breakpoint | Padding | Effective width on 375px / 768px / 1440px |
|---|---|---|
| Mobile | `px-5` (20px) | 335px |
| Tablet (sm) | `px-6` (24px) | 720px |
| Desktop (lg) | `px-8` (32px) | Capped by `max-width` |

### Vertical Gaps (within sections)

| Gap | Value | Usage |
|---|---|---|
| Badge to title | `mt-6` | All sections |
| Title to body | `mt-6` | All sections |
| Body to content | `mt-8` - `mt-10` | Lists, media, CTA |
| Content to CTA | `mt-8` | Link arrows, buttons |
| Hero badge to title | `mb-12` | Hero only |
| Hero title to subtitle | `mt-8` | Hero only |
| Hero subtitle to CTA | `mt-12` | Hero only |

### Container Widths

| Size | Max Width | Usage |
|---|---|---|
| `default` | 80rem (1280px) | Standard content |
| `narrow` | 48rem (768px) | Centered text blocks |
| `wide` | 90rem (1440px) | Full-bleed content |
| `full` | No limit | Edge-to-edge |

Centered section headers use `max-w-3xl` (48rem).

---

## 5. Shadows

Elevation system via Tailwind utilities. All values defined in `@theme inline`.

| Token | Value | Usage |
|---|---|---|
| `shadow-xs` | `0 1px 2px` | Subtle lift |
| `shadow-sm` | `0 2px 4px` | Cards, buttons |
| `shadow-md` | `0 4px 12px` | Dropdowns, popovers |
| `shadow-lg` | `0 8px 24px` | Modals, dialogs |
| `shadow-xl` | `0 20px 48px` | Hero elements |

---

## 6. Layout Tokens

| Token | Variable | Value | Usage |
|---|---|---|---|
| Header height | `--header-height` | `4rem` (64px) | Sticky header, scroll offsets |
| Z-index header | `--z-header` | 50 | Fixed header |
| Z-index overlay | `--z-overlay` | 40 | Overlays, backdrops |
| Z-index modal | `--z-modal` | 60 | Dialogs, modals |
| Z-index tooltip | `--z-tooltip` | 70 | Tooltips, toasts |

---

## 7. Transitions

### CSS Tokens

| Token | Value | Usage |
|---|---|---|
| `--duration-fast` | 150ms | Hover, focus |
| `--duration-normal` | 200ms | Interactions |
| `--duration-slow` | 300ms | Page-level transitions |
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing |

### Framer Motion Constants (`src/lib/motion.ts`)

| Export | Value | Usage |
|---|---|---|
| `EASE` | `[0.4, 0, 0.2, 1]` | Bezier easing tuple |
| `DURATION.fast` | `0.15` | Quick transitions |
| `DURATION.normal` | `0.5` | Standard scroll-reveal |
| `DURATION.slow` | `0.6` | Hero, CTA entrances |
| `VIEWPORT` | `{ once: true, margin: "-80px" }` | InView trigger config |
| `fadeUp` | Variants: y16→0 + opacity | Section entrance |
| `fadeIn` | Variants: opacity 0→1 | Staggered child entrance |
| `stagger(delay)` | Parent variants factory | Staggered list container |

---

## 8. Components

### Buttons (`Btn`)

| Variant | Style | Usage |
|---|---|---|
| `primary` | Espresso bg + gradient border + press scale | Primary CTAs |
| `secondary` | Solid border, transparent bg + press scale | Secondary actions |
| `outline_gradient` | Gradient border + frosted glass + glow + press scale | Signature secondary CTAs |
| `ghost` | No border, muted text | Tertiary, nav links |

All buttons: `rounded-full`, sizes `sm` (h-9), `default` (h-10), `lg` (h-11).
All buttons use `.focus-ring` class for keyboard accessibility.
Press feedback: `active:scale-[0.98]` on primary, secondary, outline_gradient.

### Section Backgrounds

| Variant | Rendering | Usage |
|---|---|---|
| `default` | Warm Paper | Most sections |
| `muted` | Desert Sand Light | Agents, Try Aleria |
| `dark` | `.dark` class + `bg-background text-foreground` (auto-inverted) | More Products |

### Header

- Transparent background with `backdrop-blur-2xl` and `backdrop-saturate-150`
- Height: `var(--header-height)` (4rem)
- `.line-gradient` separator at the bottom
- Responsive padding: `px-5 sm:px-6 lg:px-8`
- Works on all background colors without clash

### Dividers

Gradient-based via `Section` component: `divider="top"`, `"bottom"`, `"both"`.
All decorative dividers have `aria-hidden="true"`.

### Text Color on Backgrounds

| Background | Titles | Body | Details | Meta |
|---|---|---|---|---|
| Warm Paper | `text-foreground` | `text-muted-foreground` | `text-tertiary` | `text-quaternary` |
| Desert Sand | `text-foreground` | `text-muted-foreground` | `text-tertiary` | `text-quaternary` |
| Espresso (dark) | `text-foreground` (auto) | `text-muted-foreground` (auto) | `text-tertiary` (auto) | `text-quaternary` (auto) |

---

## 9. Accessibility

### Keyboard Navigation
- **Skip link**: `<a class="skip-link">` in layout, visually hidden until focused
- **Focus ring**: `.focus-ring` class — `ring-2 ring-ring ring-offset-2`
- All buttons and links use `.focus-ring` for visible keyboard focus

### ARIA
- `aria-label` on navigation landmarks (`<nav>`)
- `aria-expanded` on toggle buttons (mobile menu, accordions)
- `aria-hidden="true"` on decorative elements (gradients, dividers, icons)
- `role="tablist"` / `role="tab"` / `role="tabpanel"` on Why Teams capability switcher
- `role="contentinfo"` on footer

### Motion
- `<MotionConfig reducedMotion="user">` wraps the app via `Providers` component
- CSS `@media (prefers-reduced-motion: reduce)` kills all CSS animations/transitions
- Framer Motion respects system preference automatically

---

## 10. Animation

| Property | Value |
|---|---|
| Easing | `[0.4, 0, 0.2, 1]` |
| Duration (standard) | `0.5s` |
| Duration (hero/cta) | `0.6s` |
| Viewport trigger | `once: true, margin: "-80px"` |
| List stagger | `staggerChildren: 0.08-0.12` |

---

## 11. Responsive

### Mobile Adaptations
- Metrics: stack vertically on mobile (`flex-col sm:flex-row`)
- Ecosystem numbers (01/02/03): hidden on mobile (`max-sm:hidden`)
- 2-col grids: `gap-12` on mobile, `gap-24` on desktop
- Why Teams: accordion on mobile, hover 2-col on desktop
- Container padding: 20px mobile → 24px tablet → 32px desktop

### Fluid Typography
All `.type-*` classes use `clamp()` for smooth scaling between 375px and 1440px viewport. No breakpoints on font sizes.

---

## 12. Dark Mode

Not user-toggled. Applied per-section via `<Section background="dark">`. All semantic tokens (including tertiary/quaternary) invert automatically via the `.dark` CSS class.

Homepage dark sections: **More Products** (Dashboard AI + Video AI).

---

## 13. File Reference

| File | Contains |
|---|---|
| `src/app/globals.css` | Tokens, `.type-*` classes, gradient effects, base styles, accessibility |
| `src/lib/fonts.ts` | Font definitions (Manrope, Geist Mono, Playfair Display) |
| `src/lib/motion.ts` | Animation constants (EASE, DURATION, VIEWPORT, variants) |
| `src/lib/utils.ts` | `cn()` utility (clsx + tailwind-merge) |
| `src/components/providers.tsx` | MotionConfig with `reducedMotion="user"` |
| `src/components/marketing/` | Reusable primitives (Btn, Section, Container, Badge, LinkArrow, MediaFrame) |
| `src/config/site.ts` | Navigation, URLs, metadata |
| `.cursor/rules/architecture.mdc` | Coding conventions for agents |
