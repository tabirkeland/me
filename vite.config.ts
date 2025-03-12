import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Create different configs for development vs production
export default defineConfig(({ command }) => {
  const common = {
    plugins: [react()],
    base: "/",
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
  };

  if (command === "serve") {
    // dev-specific config
    return common;
  } else {
    // production-specific config
    return {
      ...common,
      build: {
        assetsInlineLimit: 0,
        rollupOptions: {
          output: {
            entryFileNames: "assets/[name].[hash].js",
            chunkFileNames: "assets/[name].[hash].js",
            assetFileNames: "assets/[name].[hash].[ext]",
            format: "es",
          },
        },
      },
    };
  }
});
