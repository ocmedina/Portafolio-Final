// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://tu-dominio.com', // Actualiza con tu dominio real
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Optimización de imágenes
    remotePatterns: [{ protocol: "https" }],
  },
});
