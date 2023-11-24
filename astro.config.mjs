import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://magnificent-brioche-27e6bc.netlify.app/',
    integrations: [sitemap()],
    // redirects: {
    //   '/blog': '/blog/1'
    // },
});
