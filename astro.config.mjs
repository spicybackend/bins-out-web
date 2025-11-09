import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://spicybackend.github.io/bins-out-web",
  output: "static",
  build: {
    assets: "assets",
  },
});
