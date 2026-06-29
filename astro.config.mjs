import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "static",
  adapter: vercel({ entrypointResolution: "auto" }),
  site: "https://sebasarmijos.dev",
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
