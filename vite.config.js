import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    pure: ["console.log", "console.warn", "console.info", "console.debug"],
  },
  build: {
    chunkSizeWarningLimit: 3500,
  },
  assetsInclude: ["**/*.glb"],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});