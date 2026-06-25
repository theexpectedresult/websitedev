# ER Tech Services — commercial website

Static [Astro](https://astro.build) site for **ertechservices.ca**, the commercial face of
**Expected Result Technical Services Corporation**.

- **Spec:** [`BRIEF.md`](./BRIEF.md) (full) · [`CLAUDE.md`](./CLAUDE.md) (quick-reference + hard rules)
- **Content source of truth:** [`src/data/site.ts`](./src/data/site.ts) (brand, contact,
  licensing, nav, service area, promos) and [`src/data/services.ts`](./src/data/services.ts)
  (the six pillars, SMA tiers, support lists). Edit content there — pages read from it.
- **Design tokens:** [`src/design/tokens.css`](./src/design/tokens.css) (colours/gradients/fonts,
  lifted from the pamphlets so web + print never drift). Fonts are self-hosted in `public/fonts/`.

## Prerequisites

- **Node.js 18+** (built on Node 24).
- For `npm run share` only: **cloudflared**
  - Windows: `winget install --id Cloudflare.cloudflared`
  - macOS: `brew install cloudflared`
  - Linux: <https://pkg.cloudflare.com/>

## Commands

```bash
npm install        # once
npm run dev        # local dev server at http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the built dist/ locally
npm run share      # dev server + public Cloudflare tunnel URL (see below)
```

## Sharing a live preview (`npm run share`)

Runs `astro dev` and a **Cloudflare quick tunnel** together, then prints a public
`https://<random>.trycloudflare.com` URL you can send to someone to view the work-in-progress.

- Ctrl+C stops both the dev server and the tunnel.
- Requires `cloudflared` (see Prerequisites). Without it, the local dev server still starts and
  you'll get an install hint.
- The tunnel is **temporary and unauthenticated**, with a new random URL each run — fine for a
  quick preview, not a permanent link. Stop any other dev server first so it lands on port 4321.
- Enabled by `server.host: true` + `vite.server.allowedHosts: ['.trycloudflare.com']` in
  [`astro.config.mjs`](./astro.config.mjs). These are **dev-only** and do not affect `npm run build`.

## Deploy

`npm run build`, then upload the contents of `dist/` to the **ertechservices.ca** docroot.
The domain currently auto-forwards to theexpectedresult.ca — that forward must be removed and
SSL enforced first. Full steps in [`BRIEF.md` §10](./BRIEF.md).

## Before launch (placeholders flagged in the data files)

- `SITE.formEndpoint` in `src/data/site.ts` — Formspree/Web3Forms key (instructions are in a
  comment right at that line; the quote form shows a warning until it's set).
- Licence designation/numbers in `SITE.licenses` — verify off the letterhead.
- The "Office" vs. person label for `778-808-8769`.
