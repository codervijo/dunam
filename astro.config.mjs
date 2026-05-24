// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dunam.co',
  integrations: [sitemap()],
  output: 'static',
});
