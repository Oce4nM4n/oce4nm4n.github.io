import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import expressiveCode from 'astro-expressive-code';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://username.github.io',
  base: '/',
  trailingSlash: 'always',
  integrations: [tailwind(), expressiveCode()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
