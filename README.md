# Asol Media (asol-media)

Asol Media is a **visual communications studio** creating premium **film, photography, livestream, and aerial coverage** for institutions, families, and brands—built for moments that cannot feel ordinary.

## Highlights
- **Cinematic homepage experience** with a hero carousel and sectioned marketing content
- **Modern UI/UX** with accessible navigation patterns (skip link, responsive menu behavior)
- **Interactive experience** including scroll-reveal sections and a custom cursor layer
- **Client-side routing** via `react-router-dom` for marketing pages

## Tech Stack
- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Routing:** `react-router-dom`
- **Tooling:** ESLint, PostCSS
- **Integrations (dependencies):** Firebase, EmailJS, analytics helper hooks (see `src/lib`)

## Available Scripts
From the project root:
- `npm run dev` — Start development server
- `npm run build` — Build for production (`tsc -b && vite build`)
- `npm run lint` — Run ESLint
- `npm run preview` — Preview the production build locally

## Getting Started
### Prerequisites
- Node.js (LTS recommended)

### Install & Run
```bash
npm install
npm run dev
```
Then open the URL shown in your terminal.

## Routes / Pages
The navigation is configured for:
- `/about`
- `/services`
- `/work`
- `/clients`
- `/shop`
- `/insights`
- `/contact`

The homepage is defined in `src/pages/Home.tsx`, and shared layout/navigation is implemented in `src/components/Layout.tsx`.

## Deployment
This project includes a `vercel.json` configuration, and is suitable for deployment on **Vercel**.
1. Run `npm run build`
2. Deploy the build output using Vercel (or via Vercel Git integration)

## License
All rights reserved.
