import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "static",
  adapter: vercel(),
  site: "https://sebasarmijos.dev",
  redirects: {
    "/servicios/optimizacion-seo": "/servicios/posicionamiento-seo",
  },
  integrations: [
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
});
