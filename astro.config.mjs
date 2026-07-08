import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Update this to your custom domain once it's connected in Cloudflare Pages.
  // This URL feeds the sitemap, canonical, and social-share tags.
  site: 'https://three-rivers-aerial.pages.dev',
  integrations: [sitemap()],
});
