@AGENTS.md

# AIPDN Project

## Overview
Website for the **African Inter-Party Dialogue Network (AIPDN)**, a pan-African organization facilitating structured, inclusive dialogue among political parties to strengthen democracy, promote peace, and foster inclusive governance. Secretariat housed by Prospect Peace Institute, Africa (PPI-A) in Nairobi, Kenya.

**Live site:** https://aipdn.vercel.app
**Repository:** https://github.com/imbabali/aipdn

## Tech Stack
- **Frontend:** Next.js 16.2 (App Router, Turbopack) + React 19.2 + TypeScript 5
- **Styling:** Tailwind CSS 4 (`@theme inline` syntax, `@import "tailwindcss"`)
- **Backend:** Supabase (PostgreSQL, Auth, Storage) via `@supabase/ssr` — configured, DB integration pending
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Utilities:** clsx + tailwind-merge (`cn()` helper)
- **Hosting:** Vercel (auto-deploys from `main` branch)
- **Package manager:** npm 11

## Key Commands
```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint
```

## Project Structure
```
src/
├── app/                    # Next.js App Router pages (32 routes)
│   ├── layout.tsx          # Root layout (fonts, header, donate banner, footer, WhatsApp)
│   ├── page.tsx            # Homepage (hero slider, pillars carousel, news, partners, CTA)
│   ├── actions.ts          # Server actions (contact, join, newsletter forms)
│   ├── globals.css         # Tailwind import, CSS variables, @theme inline, animations
│   ├── robots.ts           # SEO crawl rules
│   ├── sitemap.ts          # Dynamic XML sitemap (all routes + pillar pages)
│   ├── error.tsx           # Error boundary with retry
│   ├── loading.tsx         # Loading skeleton
│   ├── not-found.tsx       # Custom 404
│   ├── about/              # Our Story, Team (5 members), Governance
│   ├── what-we-do/         # Overview + [slug] dynamic pillar pages (5 pillars)
│   ├── events/             # Events listing (2 past events)
│   ├── news/               # News listing + [slug] article pages (3 articles)
│   ├── resources/          # Publications, Gallery (78 photos with lightbox), Toolkits
│   ├── network/            # Partners (19 orgs across 4 categories), Members
│   ├── get-involved/       # Join, Newsletter, Contact (each with client form component)
│   └── donate/             # M-Pesa donation flow with WhatsApp confirmation
├── components/
│   ├── layout/             # Header, Footer, DonateBanner
│   ├── home/               # Hero, PillarsCarousel, Pillars, WhyDialogue, LatestNews, PartnersStrip, CTA
│   ├── shared/             # Section, SectionHeader, PageHero, FormStatus
│   ├── gallery-grid.tsx    # Client-side gallery with lightbox + keyboard nav
│   └── whatsapp-bubble.tsx # Floating WhatsApp chat button (0741694575)
├── lib/
│   ├── constants.ts        # Site config, contact, nav items, pillars, social links
│   ├── utils.ts            # cn(), formatDate(), truncate()
│   └── supabase/           # client.ts (browser), server.ts (SSR), types.ts (DB schema)
public/
└── images/
    ├── logo/               # logo.png (1024x1024), logo-light.png (1024x821) — from PDF source
    ├── team/               # 5 team member photos (768x768)
    ├── partners/           # 19 partner logos
    ├── news/               # 3 article images
    ├── events/             # 2 event images
    ├── gallery/            # 78 gallery photos (migrated from WordPress)
    └── slider/             # 2 hero slider backgrounds (1920x600)
supabase/
└── migrations/             # 001_initial_schema.sql (9 tables + RLS policies)
```

## Architecture Decisions

### Server vs Client Components
- Pages are **server components by default** (enables metadata exports)
- `"use client"` only for: forms (`useActionState`), carousel, gallery lightbox, mobile menu, WhatsApp bubble, donate form
- Form pages split: server page (metadata) + client form component (e.g., `contact/page.tsx` + `contact/contact-form.tsx`)

### Image Handling
- All images stored locally in `public/images/` (migrated from WordPress)
- Each hero background has a custom `imagePosition` prop tuned per image subject placement
- Team photos use per-member `objectPosition` based on face/body composition
- Next.js `<Image>` with `fill` + `priority` on heroes, `sizes` on grids
- AVIF + WebP formats enabled in next.config.ts
- Logos extracted from PDF source at 1024px resolution

### Forms & Server Actions
- Server actions in `src/app/actions.ts` with email validation
- `useActionState` from React 19 for pending/success/error states
- `FormStatus` component with `role="alert"` for accessible feedback
- TODO: Wire to Supabase tables when DB is connected

### Donate Flow (M-Pesa)
- Linked to phone number 0741694575
- Preset amounts (KES 500, 1K, 2.5K, 5K, 10K, 25K) + custom amount
- Two-step: select amount, then confirm with copy-to-clipboard M-Pesa number
- "Confirm on WhatsApp" sends pre-filled message with amount + transaction code placeholder
- Donate button in header (all screen sizes) + banner above footer (hidden on /donate page)

### Responsive Design
- Mobile-first: `px-4 sm:px-6`, `p-5 sm:p-8`, `text-base sm:text-sm` on inputs
- All touch targets >= 44px
- Hero: `h-[500px] sm:h-[600px] md:h-[700px]`
- Footer newsletter stacks vertically on mobile
- Gallery lightbox: keyboard nav (Escape, Arrow keys), body scroll lock, `prefers-reduced-motion` support

### Security Headers (next.config.ts)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- Static images: Cache-Control max-age=31536000, immutable

### Accessibility (WCAG 2.2 AA)
- Skip-to-content link
- Focus-visible rings on all interactive elements
- ARIA labels, roles, aria-current, aria-modal on gallery/lightbox
- `role="alert"` on form feedback
- `role="status"` on loading spinner
- `autoComplete` on all form inputs
- `prefers-reduced-motion` fallback on carousel animation

### SEO
- `robots.ts` + `sitemap.ts` covering all routes
- `metadataBase` with template titles
- OpenGraph + Twitter Card metadata
- Dynamic `generateMetadata` on [slug] pages
- `generateStaticParams` for SSG on dynamic routes

## Collaborators
- **imbabali** (owner)
- **tonmag006** (admin)

## Pending Work
- [ ] Clear Supabase invoice (https://supabase.com/dashboard/org/ruelzgbvmwcimmuxjktk/invoices)
- [ ] Create Supabase project and run `supabase/migrations/001_initial_schema.sql`
- [ ] Add `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Wire form server actions to Supabase tables
- [ ] Migrate hardcoded content to Supabase queries
- [ ] Custom domain setup (aipdn.org -> Vercel)
- [ ] Plausible analytics integration (optional, $9/mo)
- [ ] Add logos for new partners: WANEP Senegal, IPS, CMD Kenya
- [ ] Verify and add real statistics when available from AIPDN
