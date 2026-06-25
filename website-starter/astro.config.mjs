// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Static commercial site for ER Tech Services (ertechservices.ca).
// Output is plain HTML in dist/ — upload to the ertechservices.ca docroot (see BRIEF.md §10).
export default defineConfig({
  site: "https://ertechservices.ca",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [sitemap()],
  // Dev-server sharing: listen on all interfaces and allow Cloudflare quick-tunnel
  // hostnames so `cloudflared tunnel --url http://localhost:4321` works for previews.
  // (No effect on `astro build` / the static dist/ output.)
  server: { host: true },
  vite: { server: { allowedHosts: [".trycloudflare.com"] } },
});
