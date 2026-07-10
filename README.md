# Furo Enterprises LLC — Next.js Site

Dark industrial-themed marketing site for Furo Enterprises LLC, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Fully SEO-optimized with dynamic OG images, JSON-LD schema, and a tree-shaken icon set for fast loading.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). (Confirmed working — dev server starts in ~2s.)

## Build for production

```bash
npm run build
npm run start
```

Production build verified clean (7/7 routes generated, no type errors) as of the last SEO/perf pass.

## Project structure

```
app/                  Root layout, page, global styles
  layout.tsx          Metadata, viewport, JSON-LD (GeneralContractor schema), robots/canonical config
  opengraph-image.tsx Dynamic branded OG image (1200x630, next/og)
  twitter-image.tsx   Dynamic branded Twitter card image
  robots.ts           robots.txt file convention
  sitemap.ts          sitemap.xml file convention
  manifest.ts         Web app manifest
components/           Navbar, Hero, Services, About, Gallery, Testimonials, Contact, Footer, MobileCta, PageTransition
                       (Promo/Giveaway section removed; all icons are lucide-react, no Font Awesome CDN)
lib/data.ts            Services / gallery (8 items incl. vehicle undercoating) / testimonials content
public/                logo.png + project photos
```

## Notes

- Fonts (Inter, Space Grotesk) load via `next/font/google` and are self-hosted at build time — an internet connection is required during `npm run build`.
- All icons are `lucide-react` SVG components (Font Awesome CDN link removed from `layout.tsx`) — this removes a render-blocking third-party stylesheet request for faster loads.
- Hero background image uses `next/image` with `priority` for LCP optimization; remote Unsplash images are allowed via `images.remotePatterns` in `next.config.mjs`.
- SEO: full Metadata API config (title template, canonical, robots directives), dynamic OG/Twitter images, and JSON-LD `GeneralContractor` schema (address, geo, hours, service catalog, aggregate rating) are all wired up in `app/layout.tsx` and the `app/opengraph-image.tsx` / `app/twitter-image.tsx` file conventions.
- The contact form is client-side only (shows a confirmation message on submit). Wire the `handleSubmit` function in `components/Contact.tsx` up to your form backend or email service of choice (Formspree, Resend, etc.) before going live.
- Update `siteUrl` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` once the site has a real domain, and swap the Google Maps embed URL in `components/Contact.tsx` if the business address changes.
- The matching static HTML site (`index.html` / `furo-enterprises-website.html` in the parent folder) has the same meta tags, OG/Twitter tags, and JSON-LD schema mirrored in manually, for parity if that version is ever deployed instead.
