import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sebasarmijos.dev",
  integrations: [
    tailwind({
      // Desactiva la integración automática
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
