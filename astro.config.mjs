import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Canonical apex domain. Feeds the sitemap, canonical, and social-share tags.
  // www.threeriversaerial.com 301-redirects to this via a Cloudflare Redirect Rule.
  site: 'https://threeriversaerial.com',
  integrations: [sitemap()],
  // Astro 7's default ('jsx') strips whitespace between text and inline
  // tags, which glues words to links in multi-line copy ("soget in touch").
  // `true` keeps the HTML-aware compression Astro used before.
  compressHTML: true,
});
