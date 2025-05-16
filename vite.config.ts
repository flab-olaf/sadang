import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@remote": path.resolve(__dirname, "src/remote"),
      "@components": path.resolve(__dirname, "src/components"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@models": path.resolve(__dirname, "src/models"),
    },
  },
});
