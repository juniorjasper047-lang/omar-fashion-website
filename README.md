# Omar Fashion — Premium Kaftan Tailoring

A complete, production-ready marketing + consultation site for **Omar Fashion**, a premium
kaftan tailoring brand based in Accra, Ghana. Built with the Next.js 15 App Router,
TypeScript, Tailwind CSS, Framer Motion, react-hook-form + zod, sonner, next-themes,
and Lucide icons. The consultation form works out of the box (stores inquiries locally)
and sends a real email when a Resend API key is provided.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** with a custom luxury palette (charcoal / gold / cream)
- **Framer Motion** — subtle reveals, hover lifts, modal transitions
- **next/image** — optimized imagery with blur-ready loading
- **react-hook-form + zod** — validated consultation form
- **sonner** — elegant toasts
- **next-themes** — light/dark (dark by default)
- **@vercel/analytics** — privacy-friendly usage analytics
- **Resend** — consultation emails (optional; auto-falls back to a local store)

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: add RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Replace the images (most important for launch)

All imagery is referenced from **one place**: `lib/images.ts`. The site ships with
remote Unsplash placeholders so it looks complete immediately. To use real photography:

1. Drop your photos into `public/images/` (e.g. `public/images/kente-royale.jpg`).
   Recommended: 1400×1750px (4:5) for collections, 2000px wide for the hero.
2. Open `lib/images.ts` and change each URL to the local path, e.g.:
   ```ts
   hero: "/images/hero.jpg",
   collections: { "kente-royale": "/images/kente-royale.jpg", ... }
   ```
3. For the craft/process steps and the story image, edit the same file.
4. That's it — no component changes needed.

> Every `<Image>` already has descriptive `alt` text for accessibility and SEO.

## Update the text / content

All copy lives in **`lib/content.ts`** — brand name, nav, hero, the 8 collection
pieces (name, category, fabric, price, description), the 5 craft steps, the story,
and contact details (WhatsApp, email, location). Edit there; the UI updates
everywhere automatically.

## Change the logo

The logo is an inline SVG component in `components/logo.tsx` and the favicon is
`app/icon.svg`. Swap the SVG markup / file with your brand mark. The wordmark uses
the `font-serif` (Playfair Display) treatment.

## Environment variables

| Var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Enables email sending for consultations. Without it, inquiries are stored in `data/inquiries.json` and logged. |
| `CONSULTATION_TO` | Destination email (default `hello@omarfashion.com`). |
| `CONSULTATION_FROM` | From address for Resend. |

## Deploy (Vercel — recommended)

1. Push this folder to GitHub.
2. In Vercel: **New Project → Import repo**, framework = Next.js (auto-detected).
3. Add `RESEND_API_KEY` under **Settings → Environment Variables** (optional).
4. Deploy. Add a custom domain later under **Settings → Domains**.

Any Node host works (`npm run build && npm start`); for static export see Next docs.

## Future ideas (Phase 2)

- Online shop (Stripe / Paystack for Ghana) with the existing collections data.
- Client gallery / lookbook with auth.
- Journal / blog section.
- Downloadable measurement guide PDF + a step-by-step measurement wizard.
- Instagram / social feed integration.
- Booking calendar for fittings.
