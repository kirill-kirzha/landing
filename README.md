# Aleria V2

Sovereign AI platform marketing site. Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | App Router, Turbopack, SSG |
| React | 19.2.4 | UI |
| Tailwind CSS | v4 | Styling via CSS variables |
| Framer Motion | 12.x | Animations |
| TypeScript | 5.x | Type safety |
| Lucide React | — | Icons |
| Deployment | Vercel | — |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design System

See **[DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)** for the full visual identity reference:
- Color palette (Warm Paper, Espresso, Desert Sand, Brand Mint, Brand Sand)
- Typography (Source Serif 4 headings, Geist Sans body)
- Spacing, components, animation patterns
- Dark mode strategy (per-section, not user-toggled)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens (CSS variables, light/dark)
│   ├── layout.tsx           # Root layout, metadata, fonts
│   └── page.tsx             # Homepage (composes 12 sections)
│
├── components/
│   ├── layout/              # Header, Footer, MobileNav
│   ├── marketing/           # Reusable marketing primitives
│   │   ├── badge.tsx
│   │   ├── button.tsx        # Polymorphic Btn (link or button)
│   │   ├── container.tsx
│   │   ├── link-arrow.tsx
│   │   ├── media-frame.tsx
│   │   └── section.tsx       # Section wrapper (spacing, bg, dividers)
│   └── sections/
│       └── home/             # 12 homepage sections
│
├── config/site.ts           # Navigation, URLs, metadata
├── lib/
│   ├── fonts.ts             # Source Serif 4, Geist Sans, Geist Mono
│   └── utils.ts             # cn() utility
└── types/index.ts           # Shared TypeScript types
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
