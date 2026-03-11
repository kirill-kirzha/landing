# Aleria V2

Sovereign AI platform marketing site. Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | App Router, Turbopack, SSG |
| React | 19.2.3 | UI |
| Tailwind CSS | v4 | Styling via CSS variables |
| Framer Motion | 12.x | Animations |
| TypeScript | 5.x | Type safety |
| Lucide React | Icons |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens (CSS variables, light/dark)
│   ├── layout.tsx           # Root layout, metadata, fonts
│   └── page.tsx             # Homepage (composes sections)
│
├── components/
│   ├── layout/              # Header, Footer, MobileNav
│   ├── marketing/           # Reusable marketing primitives
│   │   ├── badge.tsx         # Section label text
│   │   ├── button.tsx        # Polymorphic button (link or button)
│   │   ├── container.tsx     # Max-width wrapper
│   │   ├── link-arrow.tsx    # Text link with animated arrow
│   │   ├── media-frame.tsx   # Video/image placeholder frame
│   │   ├── metrics.tsx       # Key metrics display
│   │   └── section.tsx       # Section wrapper (spacing, bg, dividers)
│   └── sections/
│       └── home/             # 12 homepage sections
│
├── config/
│   └── site.ts              # Navigation, URLs, metadata strings
│
├── lib/
│   ├── fonts.ts             # Geist Sans + Mono
│   └── utils.ts             # cn() utility
│
└── types/
    └── index.ts             # Shared TypeScript types
```

## Architecture Decisions

### No Shadcn UI on marketing pages

Shadcn UI is built for application UIs (dashboards, forms, data tables). Marketing sites like vercel.com and anthropic.com use custom components with Tailwind. We follow the same approach:

- `components/marketing/` — Custom primitives using CSS variables from `globals.css`
- No external component library on the frontend
- Shadcn can be re-added later for application pages (login, settings, admin)

### Design tokens

All colors, spacing, and radii are defined as CSS custom properties in `globals.css` with light/dark mode support via oklch. Components reference tokens via Tailwind (e.g., `text-foreground`, `bg-muted/15`, `border-border/30`).

### Component patterns

- **`Btn`** — Polymorphic: pass `href` for a `<Link>`, omit for a `<button>`. Variants: `primary`, `secondary`, `ghost`. Sizes: `sm`, `default`, `lg`.
- **`Section`** — Handles spacing (`default`/`lg`/`none`), background (`default`/`muted`), and gradient dividers (`top`/`bottom`/`both`/`none`).
- **`Container`** — Max-width wrapper: `default` (7xl), `narrow` (3xl), `wide` (90rem), `full`.

### Animations

All animations use Framer Motion with a consistent ease curve `[0.4, 0, 0.2, 1]`, `duration: 0.5s`, and `viewport: { once: true, margin: "-80px" }`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
