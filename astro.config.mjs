import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://stargazers.club',
    integrations: [sitemap()],
    redirects: {
      '/blog': '/blog/1'
    },
});
