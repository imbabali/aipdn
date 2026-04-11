@AGENTS.md

# AIPDN Project

## Overview
Website for the **African Inter-Party Dialogue Network (AIPDN)**, a pan-African organization facilitating structured, inclusive dialogue among political parties to strengthen democracy, promote peace, and foster inclusive governance. Secretariat housed by Prospect Peace Institute, Africa (PPI-A) in Nairobi, Kenya.

**Live site:** https://aipdn.vercel.app (pending DNS switch to aipdn.org)
**Site status:** OFFLINE as of 2026-04-11 — `src/proxy.ts` returns a barebones 404 for every request. To restore, delete `src/proxy.ts` and push to `main`.
**Repository:** https://github.com/imbabali/aipdn

## Tech Stack
- **Frontend:** Next.js 16.2 (App Router, Turbopack) + React 19.2 + TypeScript 5
- **Styling:** Tailwind CSS 4 (`@theme inline` syntax, `@import "tailwindcss"`)
- **Backend:** Supabase (PostgreSQL, Auth, Storage) via `@supabase/ssr` — connected and live
- **Database:** Supabase project `alenyaivwsvxfqyivygs` (eu-west-1)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Utilities:** clsx + tailwind-merge (`cn()` helper)
- **Hosting:** Vercel (auto-deploys from `main` branch)
- **Domain:** aipdn.org (registered at NameSilo, pending nameserver switch to Vercel)
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
│   ├── actions.ts          # Server actions → Supabase (contact, join, newsletter)
│   ├── globals.css         # Tailwind import, CSS variables, @theme inline, animations
│   ├── robots.ts           # SEO crawl rules
│   ├── sitemap.ts          # Dynamic XML sitemap (all routes + pillar pages)
│   ├── error.tsx           # Error boundary with retry
│   ├── loading.tsx         # Loading skeleton
│   ├── not-found.tsx       # Custom 404
│   ├── about/              # Our Story, Team (5 members), Governance
│   ├── what-we-do/         # Overview (real images) + [slug] dynamic pillar pages (5)
│   ├── events/             # Events listing (2 past events)
│   ├── news/               # News listing + [slug] article pages (3 articles)
│   ├── resources/          # Publications, Gallery (78 photos with lightbox), Toolkits
│   ├── network/            # Partners (19 orgs across 4 categories), Members
│   ├── get-involved/       # Join, Newsletter, Contact (each with client form component)
│   └── donate/             # M-Pesa donation flow with WhatsApp confirmation
├── components/
│   ├── layout/             # Header, Footer (incl. "Designed by IM Advisory" credit), DonateBanner
│   ├── home/               # Hero, PillarsCarousel, WhyDialogue, LatestNews, PartnersStrip, CTA
│   ├── shared/             # Section, SectionHeader, PageHero, FormStatus
│   ├── gallery-grid.tsx    # Client-side gallery with lightbox + keyboard nav
│   └── whatsapp-bubble.tsx # Floating WhatsApp chat button (0741694575)
├── lib/
│   ├── constants.ts        # Site config, contact, nav items, pillars, social links
│   ├── utils.ts            # cn(), formatDate(), truncate()
│   └── supabase/           # client.ts (browser), server.ts (SSR), types.ts (9 tables)
└── proxy.ts                # SITE OFFLINE: returns barebones 404 for all routes (delete to restore)
public/
└── images/
    ├── logo/               # logo.png (1024x1024), favicon-16.png, favicon-32.png, apple-touch-icon.png
    ├── team/               # 5 team member photos (768x768)
    ├── partners/           # 19 partner logos (including WANEP, IPS, CMD placeholders)
    ├── news/               # 3 article images
    ├── events/             # 2 event images
    ├── gallery/            # 78 gallery photos (migrated from WordPress)
    └── slider/             # 2 hero slider backgrounds (1920x600)
supabase/
└── migrations/             # 001_initial_schema.sql (9 tables + RLS policies)
```

## Backend (Supabase)

### Database Tables (all with RLS)
| Table | Public Read | Public Insert | Auth Required |
|-------|------------|---------------|---------------|
| team_members | Yes | No | Edit |
| events | Yes | No | Edit |
| publications | Yes | No | Edit |
| news_articles | Yes | No | Edit |
| partners | Yes | No | Edit |
| gallery_items | Yes | No | Edit |
| contact_submissions | No | Yes | Read/Edit |
| newsletter_subscribers | No | Yes | Read/Edit |
| membership_applications | No | Yes | Read/Edit |

### Form Actions (src/app/actions.ts)
All three forms are wired to Supabase and live:
- Contact → `contact_submissions` table
- Join Network → `membership_applications` table
- Newsletter → `newsletter_subscribers` table (duplicate-safe via unique constraint)

### Environment Variables (Vercel Production)
- `NEXT_PUBLIC_SUPABASE_URL` — set
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — set
- `NEXT_PUBLIC_SITE_URL` — set

## Architecture Decisions

### Server vs Client Components
- Pages are **server components by default** (enables metadata exports)
- `"use client"` only for: forms (`useActionState`), carousel, gallery lightbox, mobile menu, WhatsApp bubble, donate form, donate banner
- Form pages split: server page (metadata) + client form component

### Image Handling
- All images stored locally in `public/images/`
- Each hero background has a custom `imagePosition` prop tuned per image subject
- Team photos use per-member `objectPosition` based on face/body composition
- Next.js `<Image>` with `fill` + `priority` on heroes, `sizes` on grids
- AVIF + WebP formats enabled in next.config.ts
- Logo extracted from PDF source at 1024px resolution
- Favicon: generated from logo at 16px, 32px; apple-touch-icon at 180px

### Accessibility (WCAG 2.2 AA)
- Skip-to-content link in root layout
- `lang="en"` on `<html>`, semantic landmarks (`<main>`, `<nav>`, `<footer>`)
- All Lucide icons use `aria-hidden="true"` (decorative)
- `aria-current="page"` on active nav links (desktop + mobile)
- `aria-expanded` on all toggle buttons (dropdowns, mobile menu, submenus)
- Hero carousel: `role="tablist"` + `role="tab"` indicators, `aria-selected`, `aria-current`
- Forms: `aria-live` on status messages, `aria-describedby` linking forms to error output
- Gallery lightbox: `role="dialog"`, `aria-modal`, keyboard nav, focus trap
- Framer Motion: `useReducedMotion()` in hero, latest-news, why-dialogue components
- CSS `.animate-scroll`: respects `prefers-reduced-motion`
- Touch targets: min 44x44px on all interactive controls
- Decorative images use `alt=""`; decorative text uses `aria-hidden="true"`

### Donate Flow (M-Pesa)
- Linked to phone number 0741694575
- Preset amounts (KES 500, 1K, 2.5K, 5K, 10K, 25K) + custom amount
- Two-step: select amount, then confirm with copy-to-clipboard M-Pesa number
- "Confirm on WhatsApp" sends pre-filled message with amount + transaction code
- Donate button in header (all screen sizes) + banner above footer (hidden on /donate)

### Security Headers (next.config.ts)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- Static images: Cache-Control max-age=31536000, immutable

### Text Style Rules
- No em dashes — use commas, "including", "such as", or restructure sentences
- No unverified statistics — only use numbers provided by AIPDN
- Date ranges use "to" (e.g., "26th to 30th January")

## Domain & Hosting

### Current Setup
- **Registrar:** NameSilo (domain: aipdn.org, ~$10/year)
- **Current nameservers:** rs91.rcnoc.com, rs92.rcnoc.com (old WordPress host)
- **WordPress admin:** https://aipdn.org/wp-admin/ (user: imbabali)

### To Go Live (pending)
Change nameservers at NameSilo to:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```
Then clean up extra Vercel URLs, keeping only aipdn.org.

**Recommended:** Option A (keep NameSilo + Vercel free = ~$10/year total)

## Collaborators
- **imbabali** (owner) — solo (no other collaborators or pending invitations as of 2026-04-11)

## Completed Work
- [x] WCAG 2.2 AA accessibility audit and fixes (2026-03-25)
- [x] Favicon replaced with AIPDN logo (16px, 32px, 180px apple-touch-icon) (2026-03-26)
- [x] "Designed by IM Advisory" credit added to footer bottom bar (2026-03-26)
- [x] Service agreement drafted and finalised (2026-03-26)
- [x] Optical centering audit: adjusted objectPosition on 6 images across 6 files (2026-04-03)
- [x] Favicon regenerated: tight crop (Africa icon + AIPDN text) for 16/32px, full logo for 180/192px, added .ico multi-size (2026-04-03)
- [x] Bug fix: added missing objectPosition to upcoming events Image component in events/page.tsx (2026-04-03)
- [x] Accumulated WCAG audit, favicon regeneration, optical centering work committed and pushed to main (commit dc7a37c, 2026-04-11)
- [x] Site takedown: src/proxy.ts intercepts every route and returns a barebones 404 (commit d24471b, 2026-04-11)
- [x] Cleared GitHub collaborators: deleted expired admin invitation to tonmag006 (never accepted, sent 2026-03-22), repo is now solo (2026-04-11)

## Pending Work
- [ ] Bring site back online: delete `src/proxy.ts` and push to main (date TBD)
- [ ] Change nameservers at NameSilo to Vercel (ns1/ns2.vercel-dns.com)
- [ ] After DNS propagation: remove extra Vercel URLs, keep only aipdn.org
- [ ] Add real logos for IPS and CMD Kenya (currently using text placeholders)
- [ ] Add verified statistics when AIPDN provides them
- [ ] Plausible analytics integration (optional, $9/mo)
- [ ] Cancel old WordPress hosting after confirming new site works
