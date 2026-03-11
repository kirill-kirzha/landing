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
| `--muted-foreground` | Warm gray | Lighter warm gray | Secondary text, labels |
| `--border` | Warm gray 90% | White 10% | Subtle borders, dividers |
| `--primary` | Espresso | Warm Paper | Buttons, strong emphasis |

### Gradient

| Name | CSS | Class |
|---|---|---|
| **Desert Mint** | `linear-gradient(135deg, var(--brand-mint), var(--brand-sand))` | `gradient-desert-mint` |
| **Desert Mint (text)** | Same, with background-clip | `text-gradient-desert-mint` |

Usage: maximum 2-3 instances per page. For: a hero metric, a decorative line. Never for: buttons, section backgrounds.

---

## 2. Typography

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
| `.type-display` | 44px - 88px (fluid) | 700 (bold) | 0.01em | 1.12 | Hero title, closing CTA. 1 per page max. |
| `.type-title` | 28px - 52px (fluid) | 700 (bold) | 0.01em | 1.15 | Section h2 |
| `.type-heading` | 18px - 24px (fluid) | 600 (semibold) | -0.01em | 1.25 | h3, card titles, case study names |

**Body (Manrope) — 3 levels:**

| Class | Size | Weight | Tracking | Line-height | Usage |
|---|---|---|---|---|---|
| `.type-body` | 16px - 18px (fluid) | 300 (light) | 0.01em | 1.7 | Section descriptions, hero subtitle |
| `.type-body-sm` | 14px (fixed) | 400 (regular) | 0.01em | 1.7 | Feature details, list items |
| `.type-label` | 14px (fixed) | 400 (regular) | 0.04em | default | Section badges, meta text, captions |

**Metrics (Playfair Display):**

| Class | Size (mobile - desktop) | Weight | Usage |
|---|---|---|---|
| `.type-metric` | 24px - 40px (fluid) | 700 | Key numbers (145x, 8x, 20+) |

### Bold/Light Contrast Rule

The `.type-display` class supports a signature typographic treatment: one keyword set to `font-normal` (400) while the rest stays bold (700). This creates a premium contrast effect.

**Rules:**
- Only on `.type-display` (hero titles)
- The light word must be a **significant/signature word**, never a conjunction or article
- Never put the light word at the end of the line
- Maximum 1 light word per title
- Example: `Your <span class="font-normal">Sovereign</span> AI Factory`

### Feature List Titles

Inside feature lists (Agents, Flows sections), use `.type-body-sm font-medium` for the feature title and `.type-body-sm` for the description. The `font-medium` override on `.type-body-sm` is the only accepted weight override.

### Navigation and Buttons

No `.type-*` class needed. Use standard Tailwind:
- Nav links: `text-sm` (14px), weight 400
- Buttons: `text-sm` (14px), weight 500
- Footer links: `text-sm` (14px), weight 400

---

## 3. Spacing

### Section Rhythm

Managed by the `Section` component, not by individual sections:

| Variant | Padding | Usage |
|---|---|---|
| **Default** | `py-28 sm:py-36` | Standard sections |
| **Large** | `py-36 sm:py-44` | Full-page sections |
| **None** | No padding | Clients marquee |

### Vertical Gaps (within sections)

| Gap | Value | Usage |
|---|---|---|
| Badge to title | `mt-4` | Standard |
| Title to body | `mt-5` | Standard |
| Body to content | `mt-8` | Lists, media, CTA |
| Content to CTA | `mt-8` | Link arrows, buttons |
| Hero badge to title | `mb-12` | Hero only (more breathing room) |
| Hero title to subtitle | `mt-8` | Hero only |
| Hero subtitle to CTA | `mt-10` | Hero only |

### Container Widths

| Size | Max Width | Usage |
|---|---|---|
| `default` | 80rem (1280px) | Standard content |
| `narrow` | 48rem (768px) | Centered text blocks |
| `wide` | 90rem (1440px) | Full-bleed content |
| `full` | No limit | Edge-to-edge |

---

## 4. Components

### Buttons (`Btn`)

| Variant | Style | Usage |
|---|---|---|
| `primary` | Espresso bg, Warm Paper text | Primary CTAs |
| `secondary` | Border, transparent bg | Secondary actions |
| `ghost` | No border, muted text | Tertiary, nav links |

All buttons: `rounded-full`, sizes `sm` (h-9), `default` (h-10), `lg` (h-11).

### Section Backgrounds

| Variant | Rendering | Usage |
|---|---|---|
| `default` | Warm Paper | Most sections |
| `muted` | Desert Sand Light | AI Factory, Case Studies |
| `dark` | Espresso + `.dark` class | Full contrast sections |

### Dividers

Gradient-based via `Section` component: `divider="top"`, `"bottom"`, `"both"`.

### Text Color on Backgrounds

| Background | Titles | Body | Details |
|---|---|---|---|
| Warm Paper | `text-foreground` | `text-muted-foreground` | `text-muted-foreground/70` |
| Desert Sand | `text-foreground` | `text-muted-foreground` | `text-muted-foreground/70` |
| Espresso (dark) | `text-foreground` (inverted) | `text-muted-foreground` (inverted) | auto |

---

## 5. Animation

| Property | Value |
|---|---|
| Easing | `[0.4, 0, 0.2, 1]` |
| Duration (standard) | `0.5s` |
| Duration (hero/cta) | `0.6s` |
| Viewport trigger | `once: true, margin: "-80px"` |
| List stagger | `staggerChildren: 0.08-0.12` |

---

## 6. Dark Mode

Not user-toggled. Applied per-section via `<Section background="dark">`. All tokens invert automatically via the `.dark` CSS class.

---

## 7. File Reference

| File | Contains |
|---|---|
| `src/app/globals.css` | Tokens, `.type-*` classes, gradients, base styles |
| `src/lib/fonts.ts` | Font definitions (Manrope, Geist Mono, Playfair Display) |
| `src/components/marketing/` | Reusable marketing primitives |
| `src/config/site.ts` | Navigation, URLs, metadata |
| `.cursor/rules/architecture.mdc` | Coding conventions for agents |
