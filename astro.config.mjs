import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  // output: 'server',
  vite: {
    ssr: {
      noExternal: ["react-icons", "@mui/material", "gsap"]
    }
  }
});