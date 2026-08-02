// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
site: 'https://portfolio.ltorres.dev',
base: '/portfolio_astro',
vite: {
    plugins: [tailwindcss()],
  },
});
