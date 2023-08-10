import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/plant-finder",
  plugins: [react()],
  server: {
    port: 3006,
  },
});
