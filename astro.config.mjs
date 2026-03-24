// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Pon tu URL de GitHub Pages (Cámbialo por tu usuario real)
  site: 'https://William-Majico.github.io', 
  
  // 2. IMPORTANTE: Pon el nombre exacto de tu repositorio aquí
  base: '/portal-soporte-uma', 

  vite: {
    plugins: [tailwindcss()]
  }
});