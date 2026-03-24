// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://william-majico.github.io',
  base: '/portal-soporte-uma',
  vite: {
    plugins: [tailwindcss()]
  }
});