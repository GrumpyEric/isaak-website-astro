import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import netlifyIntegration from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  // adapter: netlifyIntegration(),
  // output: "server",
  vite: {
    appType: "spa",
    // plugins: [
    //   TanStackRouterVite(),
    // ],
    ssr: {
      noExternal: ["react-icons", "@mui/material", "gsap"]
    },
  },
});
// 