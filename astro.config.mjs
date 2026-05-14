import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://happybein.com',
  integrations: [tailwind()],
  // Static output — perfect for Cloudflare Pages
  output: 'static',
});
