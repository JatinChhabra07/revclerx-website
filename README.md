# RevClerx.ai

Enterprise AI consulting marketing site. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 15.0.3 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 + custom design tokens
- **Animations**: Framer Motion + IntersectionObserver
- **Fonts**: Inter + Space Grotesk (via `next/font/google`)
- **Deploy**: Vercel-native, zero config

## Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home, hero + services + methodology |
| `/services` | `app/services/page.tsx` | Six service categories with anchors |
| `/industries` | `app/industries/page.tsx` | Twelve industry use-case cards |
| `/case-studies` | `app/case-studies/page.tsx` | Six detailed enterprise outcomes |
| `/about` | `app/about/page.tsx` | Mission, principles, leadership |
| `/contact` | `app/contact/page.tsx` | Form + FAQ |
| `*` | `app/not-found.tsx` | 404 |

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo at https://vercel.com/new.
3. Vercel auto-detects Next.js. Click Deploy.

No env vars required for the marketing site itself. To wire the contact form to a real backend, set `CONTACT_WEBHOOK_URL` and update `app/contact/page.tsx`.

## Project layout

```
app/                Next.js routes (App Router)
  globals.css       Tailwind + custom tokens + keyframes
  layout.tsx        Root html, fonts, OG metadata
  sitemap.ts        Dynamic sitemap.xml
  robots.ts         Dynamic robots.txt (allows GPTBot, ClaudeBot, PerplexityBot)
components/         Shared layout components
  Brand.tsx         Logo lockup
  Header.tsx        Sticky nav with mobile menu
  Footer.tsx        Four-column footer
  PageShell.tsx     Header + main + Footer wrapper
  Reveal.tsx        Scroll-triggered fade-up
  StatCounter.tsx   rAF number counter
  ui/               113-component library (Framer Motion)
lib/                Hooks + utilities
  motion.ts         Easing + Framer variants
  utils.ts          cn() className merger
  use-animation-config.ts
  use-magnetic.ts
public/             Static assets (logo, favicon)
_legacy/            Original static HTML (reference only)
```

## Brand tokens

| Token | Value |
|---|---|
| Primary gradient | `from-indigo-600 via-violet-600 to-fuchsia-600` |
| Background | `#ffffff` |
| Heading | `slate-900` |
| Body | `slate-600` |
| Border | `slate-200` |
| Surface | `bg-slate-50` |

## License

Proprietary, all rights reserved.
