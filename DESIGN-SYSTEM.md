# Aleria V2 — Design System

Reference document for the Aleria V2 visual identity. All values are implemented as CSS custom properties in `src/app/globals.css` and available as Tailwind utilities.

---

## 1. Color Palette

### Brand Colors

| Name | Role | Light Mode | Dark Mode | Tailwind |
|---|---|---|---|---|
| **Warm Paper** | Primary background | `#FAF9F5` | — | `bg-background` |
| **Espresso** | Primary text, dark backgrounds | `#14110e` | — | `text-foreground`, `bg-foreground` |
| **Desert Sand Light** | Section contrast background | `#f5edda` | `oklch(0.18)` | `bg-muted` |
| **Brand Sand** | Typography accent, warm highlights | `#f8e8c6` | adjusted | `text-brand-sand`, `bg-brand-sand`, `border-brand-sand` |
| **Brand Mint** | Primary accent, interactive cues | `#00f07b` | adjusted | `text-brand-mint`, `bg-brand-mint`, `border-brand-mint` |

### Semantic Colors

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--background` | Warm Paper | Espresso | Page background |
| `--foreground` | Espresso | Warm Paper | Primary text |
| `--muted` | Desert Sand Light | Dark warm | Section contrast backgrounds |
| `--muted-foreground` | `oklch(0.48)` | `oklch(0.58)` | Secondary text, labels |
| `--border` | `oklch(0.90)` warm | `oklch(1/10%)` | Subtle borders, dividers |
| `--primary` | Espresso | Warm Paper | Buttons, strong emphasis |
| `--primary-foreground` | Warm Paper | Espresso | Text on primary |

### Gradient

| Name | CSS | Class |
|---|---|---|
| **Desert Mint** | `linear-gradient(135deg, var(--brand-mint), var(--brand-sand))` | `gradient-desert-mint` |
| **Desert Mint (text)** | Same, with background-clip | `text-gradient-desert-mint` |

**Usage rules:**
- Use sparingly — maximum 2-3 instances per page
- Appropriate for: a single hero keyword, a hero metric, a decorative line
- Never for: full buttons, section backgrounds, body text

---

## 2. Typography

### Font Stack

| Role | Font | Variable | Tailwind | Weight |
|---|---|---|---|---|
| **Headings** (h1, h2) | Source Serif 4 | `--font-serif` | `font-serif` | 400, 500, 600, 700 |
| **Body** | Geist Sans | `--font-geist-sans` | `font-sans` | System default |
| **Monospace** | Geist Mono | `--font-geist-mono` | `font-mono` | System default |

### Heading Scale

Applied globally via `globals.css` — all `<h1>` and `<h2>` elements use Source Serif 4 automatically.

| Element | Sizes (responsive) | Weight | Tracking |
|---|---|---|---|
| **Hero h1** | `text-5xl` → `text-8xl` | `font-semibold` | `tracking-tight` |
| **Section h2** | `text-3xl` → `text-5xl` | `font-semibold` | `tracking-tight` |
| **Subsection h2** | `text-3xl` → `text-4xl` | `font-semibold` | `tracking-tight` |
| **Card h3** | `text-xl` → `text-2xl` | `font-semibold` | `tracking-tight` |

### Body Text

| Role | Class | Example |
|---|---|---|
| Body large | `text-lg leading-relaxed text-muted-foreground` | Section descriptions |
| Body | `text-sm leading-relaxed text-muted-foreground/70` | Feature descriptions, bullets |
| Label | `text-sm text-muted-foreground` | Section badges, meta text |
| Caption | `text-xs text-muted-foreground/40` | Marquee items, fine print |

---

## 3. Spacing

### Section Rhythm

| Variant | Padding | Usage |
|---|---|---|
| **Default** | `py-28 sm:py-36` | Standard sections |
| **Large** | `py-36 sm:py-44` | Hero-level sections |
| **None** | `py-0` | Clients marquee, tight sections |

### Container Widths

| Size | Max Width | Usage |
|---|---|---|
| `default` | `max-w-7xl` (80rem) | Standard content |
| `narrow` | `max-w-3xl` (48rem) | Centered text blocks |
| `wide` | `max-w-[90rem]` | Full-bleed content |
| `full` | No limit | Edge-to-edge |

All containers use `mx-auto px-6`.

---

## 4. Components

### Buttons (`Btn`)

| Variant | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `primary` | Espresso bg, Warm Paper text | Inverted | Primary CTAs |
| `secondary` | Transparent, border | Border on dark | Secondary actions |
| `ghost` | Transparent, muted text | Light text | Tertiary, nav links |

All buttons use `rounded-full`. Sizes: `sm` (h-9), `default` (h-10), `lg` (h-11).

### Section Backgrounds

| Variant | Rendering | Usage |
|---|---|---|
| `default` | Warm Paper (transparent) | Most sections |
| `muted` | Desert Sand Light | AI Factory, Case Studies |
| `dark` | Espresso bg + `.dark` class | Contrast sections (inverts all tokens) |

### Dividers

Gradient-based, not solid borders:
```css
bg-gradient-to-r from-transparent via-border/40 to-transparent
```
Applied via `Section` component: `divider="top"`, `divider="bottom"`, `divider="both"`.

### Links

| Component | Rendering | Usage |
|---|---|---|
| `LinkArrow` | Text + animated `→` | Section CTAs ("Discover Sources →") |
| Nav links | `text-muted-foreground hover:text-foreground` | Header, footer |

---

## 5. Animation

### Motion Values

| Property | Value |
|---|---|
| Easing | `[0.4, 0, 0.2, 1]` |
| Duration (standard) | `0.5s` |
| Duration (hero/cta) | `0.6s` |
| Viewport trigger | `once: true, margin: "-80px"` |
| List stagger | `staggerChildren: 0.08–0.12` |

### Patterns

- **Fade up**: `initial={{ opacity: 0, y: 20 }}` → visible
- **Stagger list**: `variants` with `staggerChildren` on parent
- **Marquee**: CSS `@keyframes marquee` at `50s linear infinite`
- **Text cycle**: `AnimatePresence mode="wait"` with y-axis swap

---

## 6. Dark Mode

Dark mode is **not user-toggled**. It is applied per-section via the `.dark` class to create contrast blocks within the light-first page.

```tsx
<Section background="dark">
  {/* All tokens automatically invert */}
</Section>
```

When `.dark` is applied:
- `--background` → Espresso
- `--foreground` → Warm Paper
- `--muted-foreground` → lighter warm gray
- `--brand-sand` and `--brand-mint` adjust for dark background legibility

---

## 7. File Reference

| File | Contains |
|---|---|
| `src/app/globals.css` | All CSS tokens, gradients, base styles |
| `src/lib/fonts.ts` | Font definitions (Geist Sans, Geist Mono, Source Serif 4) |
| `src/components/marketing/` | Reusable marketing primitives |
| `src/config/site.ts` | Navigation, URLs, metadata |
| `.cursor/rules/architecture.mdc` | Coding conventions for agents |
