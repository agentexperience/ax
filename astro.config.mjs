import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon"
import rehypeFigure from '@microflash/rehype-figure'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
});
