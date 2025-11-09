import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://bins.spicybackend.dev/",
  output: "static",
  build: {
    assets: "assets",
  },
});
