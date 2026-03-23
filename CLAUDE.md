@AGENTS.md

# AIPDN Project

## Overview
Website for the **African Inter-Party Dialogue Network (AIPDN)** — a pan-African organization facilitating structured, inclusive dialogue among political parties to strengthen democracy, promote peace, and foster inclusive governance. Secretariat housed by Prospect Peace Institute–Africa (PPI-A) in Nairobi, Kenya.

## Tech Stack
- **Frontend:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 (`@theme inline` syntax, `@import "tailwindcss"`)
- **Backend:** Supabase (PostgreSQL, Auth, Storage) — client configured, DB integration pending
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel (auto-deploys from `main` branch)
- **Repo:** https://github.com/imbabali/aipdn

## Key Commands
```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint
```

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, header, footer, donate banner, WhatsApp)
│   ├── page.tsx            # Homepage
│   ├── actions.ts          # Server actions (contact, join, newsletter forms)
│   ├── robots.ts           # SEO crawl rules
│   ├── sitemap.ts          # Dynamic XML sitemap
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Loading skeleton
│   ├── not-found.tsx       # Custom 404
│   ├── about/              # About, Team, Governance
│   ├── what-we-do/         # Overview + [slug] dynamic pillar pages
│   ├── events/             # Events listing
│   ├── news/               # News & Insights
│   ├── resources/          # Publications, Gallery, Toolkits
│   ├── network/            # Partners, Members
│   ├── get-involved/       # Join, Newsletter, Contact (with client form components)
│   └── donate/             # M-Pesa donation flow
├── components/
│   ├── layout/             # Header, Footer, DonateBanner
│   ├── home/               # Hero, PillarsCarousel, WhyDialogue, LatestNews, PartnersStrip, CTA
│   ├── shared/             # Section, SectionHeader, PageHero, FormStatus
│   ├── gallery-grid.tsx    # Client-side gallery with lightbox
│   └── whatsapp-bubble.tsx # Floating WhatsApp chat button
├── lib/
│   ├── constants.ts        # Site name, contact, nav items, pillars, social links
│   ├── utils.ts            # cn(), formatDate(), truncate()
│   └── supabase/           # client.ts, server.ts, types.ts
public/
└── images/                 # All static images
    ├── logo/               # logo.png, logo-light.jpg
    ├── team/               # 5 team member photos (768x768)
    ├── partners/           # 17 partner logos
    ├── news/               # 3 article images
    ├── events/             # 2 event images
    ├── gallery/            # 78 gallery photos
    └── slider/             # 2 hero slider backgrounds (1920x600)
supabase/
└── migrations/             # 001_initial_schema.sql (all tables + RLS)
```

## Architecture Decisions

### Server vs Client Components
- Pages are server components by default (metadata exports)
- Client components only for: forms (useActionState), carousel (useState/useEffect), gallery lightbox, mobile menu, WhatsApp bubble, donate form
- Form pages split into server page + client form component (e.g., `contact/page.tsx` + `contact/contact-form.tsx`)

### Image Handling
- All images stored locally in `public/images/` (migrated from WordPress)
- Each hero background has a custom `imagePosition` prop (object-position %) tuned to show faces
- Team photos use per-member `objectPosition` based on composition
- Next.js `<Image>` with `fill` + `priority` on heroes, `sizes` prop on grids
- AVIF + WebP formats enabled in next.config.ts

### Forms
- Server actions in `src/app/actions.ts` with validation
- `useActionState` from React 19 for pending/success/error states
- TODO: Wire to Supabase tables when DB is connected

### Donate Flow
- M-Pesa based — linked to phone number 0741694575
- Preset amounts (KES 500–25,000) + custom amount
- Two-step: select → confirm with copy-to-clipboard M-Pesa number
- "Confirm on WhatsApp" with pre-filled message including amount + transaction code placeholder
- Donate button visible in header on all screen sizes + banner above footer on every page (hidden on /donate)

### Responsive Design
- Mobile-first: `px-4 sm:px-6`, `p-5 sm:p-8`, `text-base sm:text-sm` on inputs (iOS zoom prevention)
- All touch targets ≥44px
- Hero heights: `h-[500px] sm:h-[600px] md:h-[700px]`
- Footer newsletter form stacks vertically on mobile
- Gallery lightbox: keyboard nav (Escape, arrows), body scroll lock

### Security Headers (next.config.ts)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- Static images: Cache-Control max-age=31536000, immutable

## Collaborators
- **imbabali** (owner)
- **tonmag006** (admin)

## Pending Work
- [ ] Connect Supabase (blocked by invoice — clear at https://supabase.com/dashboard/org/ruelzgbvmwcimmuxjktk/invoices)
- [ ] Run SQL migration `supabase/migrations/001_initial_schema.sql` in Supabase SQL editor
- [ ] Wire form actions to Supabase tables (contact_submissions, membership_applications, newsletter_subscribers)
- [ ] Add `.env.local` with Supabase URL + anon key
- [ ] Migrate content from hardcoded data to Supabase queries
- [ ] Custom domain setup (aipdn.org → Vercel)
- [ ] Plausible analytics integration
