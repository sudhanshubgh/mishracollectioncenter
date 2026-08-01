import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative base so the built site works whether it's served from
  // the repo root or a GitHub Pages project subpath (username.github.io/repo).
  base: "./",
});
