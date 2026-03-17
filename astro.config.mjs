import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon"
import rehypeFigure from '@microflash/rehype-figure'
import sitemap from '@astrojs/sitemap';

const markdownImageWidths = [400, 800, 1200];
const markdownImageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px";
const markdownFallbackWidth = 1200;
const markdownFallbackHeight = 675;

const toCdnImage = (url, width = 800) =>
  `/.netlify/images?url=${encodeURIComponent(url)}&w=${width}&fm=avif&q=80`;

// Convert markdown image nodes to Netlify Image CDN variants with responsive sources.
function rehypeNetlifyImageCdn() {
  return (tree) => {
    let firstImage = true;

    const visit = (node) => {
      if (!node || typeof node !== "object") return;

      if (node.type === "element" && node.tagName === "img") {
        const properties = node.properties || {};
        const source = typeof properties.src === "string" ? properties.src : "";
        const isLocalImage = source.startsWith("/");

        if (isLocalImage) {
          properties.src = toCdnImage(source, 800);
          properties.srcset = markdownImageWidths
            .map((width) => `${toCdnImage(source, width)} ${width}w`)
            .join(", ");
          properties.sizes = markdownImageSizes;
        }

        if (!properties.width) properties.width = markdownFallbackWidth;
        if (!properties.height) properties.height = markdownFallbackHeight;
        properties.decoding = "async";

        if (firstImage) {
          properties.loading = "eager";
          properties.fetchpriority = "high";
          firstImage = false;
        } else if (!properties.loading) {
          properties.loading = "lazy";
        }

        node.properties = properties;
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://agentexperience.ax',
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      // because we have a lot of in flight page structures, we are
      // allow listing what goes into the sitemap.
      filter: (page) => {

        const {pathname} = new URL(page);

        switch (pathname){
          case '/':
          case '/articles/':
          case '/research/':
            return true;
          default:
            break;
        }

        if (pathname.startsWith('/research/')) {
          return true;
        }

        if (pathname.startsWith('/concepts/')) {
          return true;
        }

        return false;
      }
    })
  ],
  markdown: {
    rehypePlugins: [
      rehypeFigure,
      rehypeNetlifyImageCdn,
    ],
  },
});
