# Three Rivers Aerial Co.

Marketing website for Three Rivers Aerial Co. — drone photography and videography
for residential and commercial real estate in Pittsburgh, PA.

Built with [Astro](https://astro.build), hosted on
[Cloudflare Pages](https://pages.cloudflare.com), managed on GitHub.

## Local development

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # production build into dist/
```

## Deploying to Cloudflare Pages (one-time setup)

1. Sign in at <https://dash.cloudflare.com> → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize GitHub and select the `three-rivers-aerial` repository.
3. Build settings (Cloudflare auto-detects Astro, but confirm):
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Every push to `main` auto-deploys.
5. Optional: add a custom domain under the project's **Custom domains** tab,
   then update `site` in [astro.config.mjs](astro.config.mjs).

## Content checklist (things to personalize)

Done so far: real portfolio photos, the hero aerial video, the live contact form
(Formspree + real email/phone in [src/data/site.ts](src/data/site.ts)), and the
pricing packages.

Still to personalize:

- [ ] **About copy** — [src/components/About.astro](src/components/About.astro) still
      uses generic company copy. Add your name and story, and a headshot or
      drone-in-hand photo (`public/images/about.jpg`).
- [ ] **Social profiles** — add real profile URLs (Google Business, Instagram, etc.)
      to `socials` in [src/data/site.ts](src/data/site.ts); they feed the structured
      data automatically.
- [ ] **Broaden the portfolio** — the current three shots are all one residential
      block. Add commercial, riverfront, and twilight variety as new flights come in:
      drop web-sized photos (~1600px wide, JPEG q80) into `public/images/portfolio/`
      and add entries at the top of
      [src/components/Portfolio.astro](src/components/Portfolio.astro).

## Site structure

Single-page site with anchor navigation. Section order lives in
[src/pages/index.astro](src/pages/index.astro); each section is its own component
in `src/components/`. Colors and typography are CSS variables in
[src/styles/global.css](src/styles/global.css).
