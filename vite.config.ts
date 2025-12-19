import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
const env = loadEnv(process.cwd(), '');
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: parseInt(env.VITE_PORT) || 5000, 
  },
  preview: { // For the production preview server
    port: 3001
  }
});
