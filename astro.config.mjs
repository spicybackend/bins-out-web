import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://YOUR_GITHUB_USERNAME.github.io",
  output: "static",
  build: {
    assets: "assets",
  },
});
