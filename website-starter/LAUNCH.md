# LAUNCH.md — deploying ertechservices.ca

Go-live steps for the **ER Tech Services** commercial site (static Astro → `dist/`).
Audience: whoever pushes it live (Derek). Full background is in [`BRIEF.md` §10](./BRIEF.md).

> The site is **static HTML**. There is no backend to run — you build `dist/` and upload it.
> The quote form posts to Web3Forms (already configured), so nothing server-side is needed.

> **Already live (2026-06-25):** the site shipped via **Docker behind a Caddy reverse proxy**
> (`Dockerfile` + `docker-compose.yml` + `nginx.conf`), not the cPanel/FTP path below. See
> [`PROJECT-SUMMARY.md` §7](./PROJECT-SUMMARY.md) for the live setup + the one-line redeploy
> (`docker compose up -d --build`). The steps below remain valid as the **manual fallback**.

---

## 1. Build the site

On any machine with Node 18+ (built on Node 24):

```bash
git pull origin main
npm ci            # clean install from package-lock.json
npm run build     # outputs static files to dist/
```

`dist/` now contains the whole site (`index.html`, `/services/`, `/industries/…`, `robots.txt`,
`sitemap-index.xml`, `sitemap-0.xml`, fonts, downloads, etc.).

> Do **not** upload `src/`, `node_modules/`, or the repo itself — only the **contents of `dist/`**.

---

## 2. Point the domain at its own hosting

**The blocker:** ertechservices.ca currently **auto-forwards** to theexpectedresult.ca.

1. In the domain/registrar (or host) control panel, **remove that forward / redirect**.
2. Point **ertechservices.ca** (and `www`) at the hosting account's docroot.
3. **Do not touch theexpectedresult.ca or its WordPress** — we only cross-link to it.

---

## 3. Upload `dist/`

Upload the **contents** of `dist/` to the ertechservices.ca docroot
(e.g. `public_html/`) via cPanel File Manager or FTP/SFTP.

- The docroot should end up with `index.html` at its top level (not inside a `dist/` subfolder).
- Replace any existing placeholder/parked files.

---

## 4. Enforce SSL

1. Issue/enable an SSL certificate (Let's Encrypt via the host is fine).
2. Force **https://** (redirect http → https), and redirect `www` → apex (or vice-versa,
   whichever you standardise on).

---

## 5. Smoke test (5 minutes, mobile + desktop)

- [ ] `https://ertechservices.ca/` loads over SSL (padlock), no mixed-content warnings
- [ ] Nav works: Home · Services · Industries · About · Contact · Book a Walkthrough
- [ ] `/services/#sma` scrolls to the SMA tiers
- [ ] All five industry pages load and their **"View / print this one-pager"** buttons open
- [ ] **Quote form** (`/quote/`): submit a real test → redirects to the "Thanks — we've got it"
      screen **and** the email lands in **results@ertechservices.ca**
- [ ] Footer **cross-link to theexpectedresult.ca** works; that site still works unchanged
- [ ] `https://ertechservices.ca/sitemap-index.xml` and `/robots.txt` resolve
- [ ] Contact page vCard download + QR work

---

## 6. After launch

- Submit the sitemap in Google Search Console: `https://ertechservices.ca/sitemap-index.xml`
- The Web3Forms access key in `src/data/site.ts` is public by design (embedded in the form) —
  that's expected, not a leak.

---

## Rollback

It's a static upload — to roll back, re-upload the previous `dist/` (or restore the host's
file backup). Nothing in a database to migrate.

---

## Known follow-ups (not blockers)

- **Logo:** the masthead/footer use the inlined ER diamond mark (`src/design/components/BrandMark.astro`);
  final logo art is a pending task.
- **LinkedIn:** standardised to the **company page** everywhere (`src/data/site.ts` and
  `public/contact.vcf`).
- Licence numbers (`SITE.licenses`) and the "Office" phone label are confirmed for live.
