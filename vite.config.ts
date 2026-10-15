import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Serve CDN-hosted Lovable assets (e.g. /__l5e/assets-v1/...) locally in dev
    proxy: {
      "/__l5e/assets-v1": {
        target: "https://id-preview--41481522-1ae1-44ad-b48c-73b88ada59c9.lovable.app",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
