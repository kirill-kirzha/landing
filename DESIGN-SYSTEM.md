# Aleria V2 — Design System

Reference document for the Aleria V2 visual identity. All values are implemented in `src/app/globals.css` and available as CSS classes or Tailwind utilities.

---

## 1. Color Palette

### Brand Colors

| Name | Role | Hex (approx) | Tailwind |
|---|---|---|---|
| **Warm Paper** | Primary background | `#FAF9F5` | `bg-background` |
| **Espresso** | Primary text, dark backgrounds | `#14110e` | `text-foreground`, `bg-foreground` |
| **Desert Sand Light** | Section contrast background | `#f5edda` | `bg-muted` |
| **Brand Sand** | Typography accent, warm highlights | `#f8e8c6` | `text-brand-sand`, `bg-brand-sand` |
| **Brand Mint** | Primary accent, interactive cues | `#00f07b` | `text-brand-mint`, `bg-brand-mint` |

### Semantic Colors

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--background` | Warm Paper | Espresso | Page background |
| `--foreground` | Espresso | Warm Paper | Primary text |
| `--muted` | Desert Sand Light | Dark warm | Section contrast backgrounds |
| `--muted-foreground` | Warm gray (0.35) | Lighter warm gray | Secondary text, labels |
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
| **Body** | Manrope | `--font-geist-sans` | `font-sans` on `<html>` (automatic) |
| **Monospace** | Geist Mono | `--font-geist-mono` | `font-mono` class |

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
- Buttons: `text-sm`, weight 500 (via `font-medium` on Btn)
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

## 5. Components

### Buttons (`Btn`)

| Variant | Style | Usage |
|---|---|---|
| `primary` | Espresso bg + gradient border liser + frosted glow | Primary CTAs |
| `secondary` | Solid border, transparent bg | Secondary actions |
| `outline_gradient` | Gradient border + frosted glass + glow | Signature secondary CTAs |
| `ghost` | No border, muted text | Tertiary, nav links |

All buttons: `rounded-full`, sizes `sm` (h-9), `default` (h-10), `lg` (h-11).

### Section Backgrounds

| Variant | Rendering | Usage |
|---|---|---|
| `default` | Warm Paper | Most sections |
| `muted` | Desert Sand Light | Agents, Try Aleria |
| `dark` | Espresso + `.dark` class | More Products (Dashboard AI + Video AI) |

### Header

- Transparent background with `backdrop-blur-2xl` and `backdrop-saturate-150`
- `.line-gradient` separator at the bottom
- Works on all background colors without clash

### Dividers

Gradient-based via `Section` component: `divider="top"`, `"bottom"`, `"both"`.

### Text Color on Backgrounds

| Background | Titles | Body | Details |
|---|---|---|---|
| Warm Paper | `text-foreground` | `text-muted-foreground` | `text-muted-foreground/70` |
| Desert Sand | `text-foreground` | `text-muted-foreground` | `text-muted-foreground/70` |
| Espresso (dark) | `text-foreground` (auto-inverted) | `text-muted-foreground` (auto-inverted) | auto |

---

## 6. Animation

| Property | Value |
|---|---|
| Easing | `[0.4, 0, 0.2, 1]` |
| Duration (standard) | `0.5s` |
| Duration (hero/cta) | `0.6s` |
| Viewport trigger | `once: true, margin: "-80px"` |
| List stagger | `staggerChildren: 0.08-0.12` |

---

## 7. Responsive

### Mobile Adaptations
- Metrics: stack vertically on mobile (`flex-col sm:flex-row`)
- Ecosystem numbers (01/02/03): hidden on mobile (`max-sm:hidden`)
- 2-col grids: `gap-12` on mobile, `gap-24` on desktop
- Why Teams: accordion on mobile, hover 2-col on desktop

### Fluid Typography
All `.type-*` classes use `clamp()` for smooth scaling between 375px and 1440px viewport. No breakpoints on font sizes.

---

## 8. Dark Mode

Not user-toggled. Applied per-section via `<Section background="dark">`. All semantic tokens invert automatically via the `.dark` CSS class.

Homepage dark sections: **More Products** (Dashboard AI + Video AI).

---

## 9. File Reference

| File | Contains |
|---|---|
| `src/app/globals.css` | Tokens, `.type-*` classes, gradient effects, base styles |
| `src/lib/fonts.ts` | Font definitions (Manrope, Geist Mono, Playfair Display) |
| `src/components/marketing/` | Reusable marketing primitives (Btn, Section, Container, Badge, LinkArrow, MediaFrame) |
| `src/config/site.ts` | Navigation, URLs, metadata |
| `.cursor/rules/architecture.mdc` | Coding conventions for agents |
