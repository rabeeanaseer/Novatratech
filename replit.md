# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Artifacts

### NovatraTech Website (`artifacts/novatratech`)
- **Preview path**: `/` (root)
- **Type**: react-vite (frontend-only, no backend)
- **Stack**: React, Vite, Tailwind CSS v4, Framer Motion, Wouter, Lucide React, Three.js + @react-three/fiber

#### Hybrid Elite Theme
- **Hero + CTA sections**: Dark `#0B1220` background (immersive, high-impact)
- **Content sections**: Light `#F7F9FC` / white / `#EEF2FF`
- **Primary**: `#4F7CFF`, **Accent**: `#00D4FF`, **Secondary**: `#7B61FF`, **Text**: `#0B1220`
- **Footer**: dark bg `#0B1220` (intentional contrast)
- Gradient text: `text-gradient-blue` (blue → purple → cyan)

#### Pages
- **Home** — Dark hero (particles + grid bg), stats, service cards with spotlight hover, case studies, why us, academy preview, dark CTA
- **Solutions** — Dark hero, 6 solution cards with glassmorphism + spotlight hover, dark CTA
- **Solutions sub-pages** (×6): `/solutions/ai-automation`, `/solutions/web-development`, `/solutions/saas-development`, `/solutions/app-development`, `/solutions/growth-funnels`, `/solutions/digital-marketing`
  - Each: Dark hero (left text + right animated nodes canvas + floating icon), What This Is, What You Get (card carousel slider), Use Cases, Why It Matters, Dark CTA
- **Academy** — Hero, Web Dev Bootcamp ($299), 12-week curriculum grid, Coming Soon courses, Why Academy, Final CTA
- **About** — Hero, Story, Founder (Rabeea Naseer), Values, Why Different
- **Contact** — Form → `/api/contact` (nodemailer), WhatsApp + email side panel
- **Products, Privacy, Terms** — basic pages

#### Components
- `Navbar.tsx` — white/blur bg on scroll, dark text, light active states
- `Footer.tsx` — dark bg, 4 columns (Brand+Social, Solutions, Company, CTA+WhatsApp)
- `FloatingCTA.tsx` — WhatsApp pulse button (bottom-right)
- `ParticleCanvas.tsx` — canvas particle mesh for home hero (55 nodes, optimized for dark bg)
- `ThreeDScene.tsx` — WebGL detection + lazy loads `ThreeDSceneInner` or falls back to `FallbackCanvas`
- `ThreeDSceneInner.tsx` — @react-three/fiber 3D scene: 22 nodes + line segments + rotation + mouse parallax
- `WhatYouGetCarousel.tsx` — Card carousel: auto-play 4.5s, pause on hover, arrows + dots, touch swipe, progress bar, fade+scale transitions
- `SolutionTemplate.tsx` — shared template for all 6 solution sub-pages; uses ThreeDScene + WhatYouGetCarousel
- `ScrollToTop.tsx` / `ScrollReset.tsx` — scroll to top on route change

#### Card System
- Glassmorphism: white bg with subtle gradient overlay + soft border
- Hover: `translateY(-8px)` + colored box-shadow glow + gradient top border
- Spotlight hover: mouse-follow radial gradient light effect (Solutions page, Home service cards)
- Icon badges with colored backgrounds and shadow-sm

#### Key Details
- WhatsApp: https://wa.me/923225194889
- Contact email: novatratechsmcpvtltd@gmail.com
- Founder: Rabeea Naseer, AI & Data-Driven Systems Developer, Founder & CEO
- Three.js: lazy-loaded via Suspense; WebGL detection before attempting 3D render
- Social icons in footer: Facebook, Instagram, Pinterest, X (Twitter)

### API Server (`artifacts/api-server`)
- **Preview path**: `/api`
- **Type**: Express 5 + TypeScript
- **Routes**: `GET /api/healthz`, `POST /api/contact` (nodemailer email)
- **Email**: sends to `novatratechsmcpvtltd@gmail.com` — requires `SMTP_USER` + `SMTP_PASS` env vars (Gmail)
- Gracefully degrades (logs but doesn't crash) if SMTP not configured

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
