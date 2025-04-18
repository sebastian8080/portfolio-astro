import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    // Desactiva la integración automática
    applyBaseStyles: false,
  })],
});