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

- [ ] **Portfolio photos** — drop images into `public/images/portfolio/` and update
      the list at the top of [src/components/Portfolio.astro](src/components/Portfolio.astro).
      Export around 1600px wide, JPEG quality ~80.
- [ ] **Hero image** — replace the stylized skyline with your best aerial shot:
      see the comment at the top of [src/components/Hero.astro](src/components/Hero.astro).
- [ ] **Contact form** — create a free form at <https://formspree.io> and paste the
      form ID into [src/components/Contact.astro](src/components/Contact.astro)
      (`FORM_ACTION`). Also update the email and phone constants there.
- [ ] **Pricing** — edit package names, prices, and inclusions at the top of
      [src/components/Pricing.astro](src/components/Pricing.astro).
- [ ] **About copy** — personalize [src/components/About.astro](src/components/About.astro)
      with your name and story.

## Site structure

Single-page site with anchor navigation. Section order lives in
[src/pages/index.astro](src/pages/index.astro); each section is its own component
in `src/components/`. Colors and typography are CSS variables in
[src/styles/global.css](src/styles/global.css).
