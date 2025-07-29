// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react"; // 👈 Importa React

export default defineConfig({
  integrations: [react()], // 👈 Activa React
  vite: {
    plugins: [tailwindcss()],
  },
});
