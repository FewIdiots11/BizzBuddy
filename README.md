# BizzBuddy.ai

AI marketing assistant for small businesses — Next.js + TypeScript + Tailwind, with a real
Gemini-powered backend (no API key ever reaches the browser).

## 1. Install & run

```bash
npm install
cp .env.example .env.local
# open .env.local and paste your real Gemini key:
# GEMINI_API_KEY=your_real_key_here
npm run dev
```

Open http://localhost:3000 — the Create tab now calls `/api/generate`, which calls Gemini
server-side using your key from `.env.local`. That file is git-ignored, so it never gets
committed or exposed.

Get a free Gemini API key at https://aistudio.google.com/app/apikey.

## 2. Where things live

- **Your API key** → `.env.local` (create it from `.env.example`). Never put it in any
  `.tsx`, `.ts`, or client-side file.
- **Pricing packages** (names, prices, currency, features, button text) → `config/pricing.ts`.
  One file, nothing else to touch.
- **Text generation (ad copy, descriptions, hashtags, keywords)** → `services/grok.ts`
  (calls Google's Gemini API). A `services/grok.ts` is also included if you ever
  want to switch to xAI's Grok instead — just change the import in
  `app/api/generate/route.ts`.
- **Image generation** → `services/imageGeneration.ts`. No image provider is wired up by
  default, so this returns "not supported" honestly rather than faking a picture. To add a
  real image provider (xAI's grok-2-image, Imagen, DALL-E, Stability, etc.), implement the
  fetch call inside `generateImage()` — the function signature stays the same, so no other
  file needs to change.
- **Video generation** → `services/videoGeneration.ts`. Same pattern: no provider connected
  by default, swap one in without touching the UI.
- **UI components** → `components/` (Sidebar, ChatInterface, CampaignCard, Projects, Pricing).
- **Projects** are saved to the browser's `localStorage` for this demo. Swap in a real
  database later by replacing the `loadProjects`/`saveProjects` functions in
  `components/Projects.tsx`.

## 3. Deploying

Push this to GitHub, then deploy on Vercel (or any Next.js host). In the host's dashboard,
add an environment variable `GEMINI_API_KEY` with your real key — do **not** commit `.env`
or `.env.local` to Git (already handled by `.gitignore`).

## 4. Errors are handled gracefully

Missing/invalid key, rate limits, malformed AI responses, and network errors all show a
friendly in-app message instead of a raw stack trace. Full error details are still logged
to the server console for debugging.
