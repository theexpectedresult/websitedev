# PROJECT-SUMMARY.md — ER Tech Services commercial website

**What this is:** the keep-forever overview of the ertechservices.ca commercial site — what
it is, how it's built, where everything lives, how it got deployed, and what to know before
the next round of changes. Written 2026-06-25, just after go-live.

> **Companion docs:** [`BRIEF.md`](./BRIEF.md) = original spec · [`CLAUDE.md`](./CLAUDE.md) =
> build rules · [`README.md`](./README.md) = run/dev commands · [`LAUNCH.md`](./LAUNCH.md) =
> deploy checklist. This file ties them together and records what was actually done.

---

## 1. At a glance

| | |
|---|---|
| **Live URL** | https://ertechservices.ca (apex + `www`, HTTPS enforced) |
| **What it is** | Marketing site for **ER Tech Services**, the commercial brand of **Expected Result Technical Services Corporation** (Langley, BC) |
| **Sister site** | https://theexpectedresult.ca (residential, WordPress — **not touched**, cross-linked only) |
| **Stack** | Astro 4.16 static site, plain CSS + design tokens, self-hosted fonts |
| **Hosting** | Docker container (nginx) behind a **Caddy** reverse proxy (TLS + HTTP/3) |
| **Repo** | github.com/theexpectedresult/websitedev — site lives in `website-starter/` |
| **Status (2026-06-25)** | **Live and verified.** All 12 pages, quote form, SSL, redirects confirmed working. |

---

## 2. Architecture & guiding principles

- **Static output.** No backend, no database. `npm run build` → `dist/` of plain HTML/CSS/JS.
- **Content is data-driven.** Every word of copy comes from two files —
  `src/data/site.ts` (brand, contact, nav, licensing, promos, form config) and
  `src/data/services.ts` (the six pillars, SMA tiers, support lists, industry offerings).
  **Pages never hand-type copy** — they map over these. Change the data, the whole site updates.
- **Design tokens, no framework.** Colours/gradients/fonts live in `src/design/tokens.css`,
  lifted from the print pamphlets. Plain CSS + Astro scoped styles. No Tailwind.
- **Self-hosted fonts.** Barlow (400/500/600) + Barlow Semi Condensed (600/700) as woff2 in
  `public/fonts/` — no Google Fonts network dependency at runtime.
- **The form has no server.** It POSTs client-side to Web3Forms (see §6).

### Hard rules (from CLAUDE.md — keep honouring these)
1. **Never publish a street address** — city only ("Langley, BC"). It's the owner's residence.
2. **Legal entity at the forefront** — "Expected Result Technical Services Corporation" in the
   masthead line + footer; make clear ER Tech Services and The Expected Result are one company.
3. **Canadian English** spelling throughout.
4. **Copy comes from the data files** — don't drift wording or hand-type bullets.
5. **Don't touch theexpectedresult.ca / WordPress** — cross-link only.

---

## 3. Repo layout (what lives where)

```
website-starter/
├─ astro.config.mjs      site URL, sitemap integration, dev-only tunnel host config
├─ src/
│  ├─ data/
│  │  ├─ site.ts         ★ brand, contact, nav, licences, promos, FORM config
│  │  └─ services.ts     ★ pillars, SMA tiers, support, industry offerings + ICONS
│  ├─ design/
│  │  ├─ tokens.css      ★ colours, gradients, font stacks (source of truth for styling)
│  │  ├─ fonts.css       @font-face for the self-hosted Barlow faces
│  │  ├─ base.css        global element styles
│  │  └─ components/     Masthead, SiteFooter, BrandMark, ServiceCard, SmaTiers,
│  │                     IntroBanner/PageHero, CtaBar, QuoteForm, etc.
│  ├─ layouts/
│  │  └─ Base.astro      <head> (meta/OG/canonical/fonts/favicons) + Masthead + Footer shell
│  └─ pages/             index, services, industries/index + [slug], about, contact,
│                        quote, insurance/index  → one .astro per route
├─ public/
│  ├─ fonts/             self-hosted woff2
│  ├─ brand/             logo art + QR codes
│  ├─ downloads/         6 service one-pagers + 2 insurance flyers (print to 11×17)
│  ├─ robots.txt         AI-crawler-friendly + Sitemap line
│  ├─ humans.txt         credits (linked from <head> rel="author")
│  └─ contact.vcf        downloadable vCard
├─ Dockerfile            ★ multi-stage build → nginx (Derek's deploy)
├─ docker-compose.yml    ★ joins the external caddy-proxy network
├─ nginx.conf            ★ static serving + try_files + gzip
├─ BRIEF.md  CLAUDE.md  README.md  LAUNCH.md  PROJECT-SUMMARY.md (this file)
```
★ = the files you'll most often touch for content/config/deploy changes.

---

## 4. Pages (12 routes)

| Route | Source | Notes |
|---|---|---|
| `/` | `pages/index.astro` | Home: pillars, ecosystems, promos, CTAs |
| `/services/` (+ `#sma`) | `pages/services/index.astro` | Six pillars + SMA tiers anchor |
| `/industries/` | `pages/industries/index.astro` | Index of the five industries |
| `/industries/{slug}/` | `pages/industries/[slug].astro` | restaurants, retail-pet, small-business, clinics, schools — generated via `getStaticPaths` over `industries` in services.ts. Each links to its `/downloads/*.html` one-pager. |
| `/about/` | `pages/about.astro` | Story + prominent service-area line + region chips |
| `/contact/` | `pages/contact.astro` | Phones, JS-obfuscated email, vCard + QR, no street address |
| `/quote/` | `pages/quote.astro` | Web3Forms quote form; `?sent=1` shows the thank-you state |
| `/insurance/` | `pages/insurance/index.astro` | Insurance-savings promo (from `SITE.promos`) |

Adding a page = add a `.astro` file under `src/pages/`; the sitemap picks it up automatically
on the next build.

---

## 5. Branding / logo

- The masthead and footer use the **inlined ER diamond monogram** in
  `src/design/components/BrandMark.astro` (not an `<img>`). It's inlined so page CSS custom
  properties (`--er-*`) can recolour it for the dark masthead — white letters, brand-cyan dots,
  faint light shadow. External SVGs can't receive page CSS vars, which is why it's inlined.
- Other brand art lives in `public/brand/` (`ertech-mark.svg`, `ertech-mark-mono.svg`, the two
  full wordmark SVGs). The full wordmarks have **dark text baked in**, so they're not legible
  directly on the dark masthead without a plate — hence the inlined mark.
- **OPEN TASK:** swap in the final logo art when Vince provides it. Replace the mark inside
  `BrandMark.astro` (and/or the masthead/footer lockup). Confirm artwork + colours with Vince
  first. (Tracked in project memory as `update-logo-task`.)

---

## 6. The quote form (Web3Forms)

- **Component:** `src/design/components/QuoteForm.astro`. **Config:** `SITE.formEndpoint` +
  `SITE.formAccessKey` in `site.ts`.
- Posts **client-side** to `https://api.web3forms.com/submit`. Submissions email to
  **results@ertechservices.ca** (the address the key is registered to).
- The **access key is public by design** — it's embedded in the form HTML. That is expected,
  not a leak. (Web3Forms blocks server-side/non-browser POSTs, so the key can't be abused the
  way an API secret could.)
- If the key were ever missing/blank, the form auto-shows a friendly notice + disabled submit
  instead of posting into the void.
- **Status:** wired and **live-tested** — a real submission delivered to the inbox. Verified.
- **To re-key** (e.g. new address): create a new key at web3forms.com for the target inbox,
  paste it as `formAccessKey`, rebuild. To switch to Formspree instead, set `formEndpoint` to
  the Formspree URL and blank the key — the form already sends Formspree's `_next` + `_gotcha`.

---

## 7. How it was deployed (what Derek actually did)

The site went live via **Docker behind Caddy**, not the cPanel/FTP path described in LAUNCH.md.
Both reach the same result (serve the static `dist/`); this is the one in production:

- **`Dockerfile`** — multi-stage: `node:20-alpine` runs `npm ci && npm run build`, then
  `nginx:alpine` serves the built `/app/dist`. nginx config copied from `nginx.conf`.
- **`nginx.conf`** — serves `/usr/share/nginx/html`, `try_files $uri $uri/ $uri/index.html =404`
  (handles Astro's directory-style URLs), gzip on for html/css/js/svg. Listens on port 80.
- **`docker-compose.yml`** — builds the image as container `ertech-web`, `restart: unless-stopped`,
  joined to the **external `caddy-proxy` network**. A separate **Caddy** reverse proxy on that
  network terminates TLS, auto-provisions the Let's Encrypt cert, enforces HTTPS, and adds HTTP/3.

**To redeploy after a content change:**
```bash
git pull
docker compose up -d --build      # rebuilds dist/ inside the image and restarts the container
```
No file uploads — the build happens inside the container. Caddy keeps serving the old container
until the new one is healthy.

**Verified live (2026-06-25):** apex + www over SSL, HTTP→HTTPS 308 redirect, all 12 sitemap
pages, quote form enabled, industry one-pagers, robots.txt + sitemap resolving. Server header
shows `Caddy → nginx/1.31.2`.

> Note: `LAUNCH.md` still documents the **cPanel/FTP** path (the originally-planned route). It's
> not wrong, just not what was used. Keep it as the fallback/manual option; this section is the
> source of truth for the live setup.

---

## 8. Local development

```bash
npm install        # first time
npm run dev        # http://localhost:4321  (live reload)
npm run build      # static output → dist/
npm run preview    # serve the built dist/ locally
npm run share      # dev server + Cloudflare quick tunnel for sharing a live preview (needs cloudflared)
```
- **Node 18+** (built on Node 20/24).
- `@astrojs/sitemap` is pinned to **3.2.1** — newer 3.7.x assumes Astro 5 and crashes the build
  on this Astro 4.16 project. **Don't bump it without also upgrading Astro.**
- The **sitemap 404s in `dev`** — it's only generated at build time. That's expected; it resolves
  in `preview`/production.

---

## 9. Common future tasks — where to start

| You want to… | Edit |
|---|---|
| Change a phone, email, LinkedIn, licence, service area | `src/data/site.ts` |
| Reword services / pillars / SMA tiers / an industry | `src/data/services.ts` |
| Change a colour, gradient, or font | `src/design/tokens.css` |
| Swap the logo | `src/design/components/BrandMark.astro` (+ `public/brand/`) |
| Add a page | new `.astro` in `src/pages/` (sitemap auto-updates) |
| Edit a printable one-pager | `public/downloads/*.html` |
| Re-key or re-target the form | `SITE.formEndpoint` / `formAccessKey` in `site.ts` |
| Change nav links/order | `SITE.nav` in `site.ts` |
| Push changes live | `git pull && docker compose up -d --build` on the host (see §7) |

**Always rebuild after editing data/CSS** — the site is static; nothing changes live until you
rebuild and (in production) redeploy the container.

---

## 10. Known follow-ups (not blockers)

- **Logo art** — final logo still pending from Vince (see §5). Inlined diamond mark in place.
- **`www` → apex redirect** — `www` currently serves directly (200) rather than 301-ing to the
  apex. Canonical tags handle SEO dedup, so this is cosmetic; add a Caddy redirect if you want
  one canonical host.
- **Google Search Console** — submit `https://ertechservices.ca/sitemap-index.xml` post-launch.
- *(Resolved 2026-06-25)* LAUNCH.md now points to §7 for the live Docker setup and its LinkedIn
  note is corrected — kept as the manual-fallback deploy doc.

---

*Maintained alongside the code. When you make a structural change, update the relevant section
here so the next person (or next AI session) inherits an accurate map.*
