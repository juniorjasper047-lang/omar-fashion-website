# Client Update Guide — Omar Fashion Website

This is written for a **non-technical** brand owner (Omar / team). You can request
changes by sending a message; you don't need to touch code. But if you want to do
small updates yourself, here's the simplest path.

## 1. Send me new photos

- Email or WhatsApp the photos you want on the site.
- Tell me which slot each photo is for: **Hero**, a specific kaftan name
  (e.g. "Kente Royale"), a **Craft step** (Fabric / Cutting / Embroidery / Fitting /
  Finishing), or the **Story** image.
- I'll drop them in `public/images/` and update `lib/images.ts`.

Minimum sizes:
- Hero: 2000px wide
- Kaftans: 1400×1750px (portrait)
- Craft / Story: 1000px wide

## 2. Change words on the site

Almost everything you read on the site is in one file: **`lib/content.ts`**.
Send me the new text and I'll update it. Common requests:

- Change a kaftan name, price, or description
- Add or remove a kaftan from the collection
- Change the phone number, WhatsApp, email, or location
- Change the hero headline or the "story" paragraph

## 3. Change the logo

Send me your logo as an SVG or PNG. I'll replace `components/logo.tsx` (on-page mark)
and `app/icon.svg` (browser tab icon).

## 4. Receive consultation requests

When a customer fills the **"Request a Custom Kaftan or Book a Fitting"** form:

- If `RESEND_API_KEY` is set, you get an email at `hello@omarfashion.com`.
- If not, the request is saved in `data/inquiries.json` and printed to the server log.

Either way, every request includes name, WhatsApp, email, style/occasion, contact
time, budget, and notes/measurements.

## 5. Go live

The site deploys to **Vercel** with one click from GitHub. After that, you get a
`omarfashion.com`-style link and can connect your own domain. I'll handle this on request.

---
**Quick rule of thumb:** If it's a *photo* → send it. If it's *words* → send the new
text. Everything else, just ask.
