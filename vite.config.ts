import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Keep this as "/" for Cloudflare Pages
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          // Keep specific public assets in root without hashing
          if (assetInfo.names && assetInfo.names.some(name => ['headshot.jpeg', 'resume.pdf', 'favicon.svg'].includes(name))) {
            return '[name].[ext]';
          }
          return "assets/[name].[hash].[ext]";
        },
      },
    },
  },
});
