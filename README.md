# Sanjjay Premium Portfolio

A premium Apple-inspired personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Elegant sticky glassmorphism navbar with active section state
- Cinematic hero section with premium glow and CTA buttons
- About, projects, skills, timeline journey, highlights, and contact sections
- Framer Motion scroll reveal animations and polished hover interactions
- Data-driven content for easy personalization
- SEO metadata configured
- Vercel-ready setup

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Project Structure

```txt
app/
components/
data/
public/
utils/
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Build & Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Keep default Next.js build settings.
4. Deploy.

## Where to Edit Personal Content

- Core profile/contact details: `data/site.ts`
- Projects list: `data/projects.ts`
- Skills and highlights: `data/skills.ts`
- Journey timeline: `data/journey.ts`
- Sections/layout structure: `app/page.tsx`
- Hero/profile visual style: `components/Hero.tsx`

## Notes

- Replace resume link in `data/site.ts` (`resumeUrl`).
- Replace placeholder email if needed.
- Replace or customize profile image URL in `components/Hero.tsx`.
