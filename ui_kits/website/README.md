# Website UI kit — ER Tech Services (commercial)

Recreation of the planned **commercial site** (ertechservices.ca) on the canonical pamphlet design system, with content driven verbatim from the real build kit — no copy drift.

**Screens (single interactive app):**
- **Home** — dark teal hero ("Front door to back office — under one roof"), six-pillar `ServiceCard` grid, SMA tier strip, industries row, insurance promo banner, ecosystems.
- **Services** — IntroBanner + section heading + full pillar grid + `#sma` tiers + CTA bar.
- **Industries** — index of the five industries → **industry detail** (intro banner, tailored pillars, support panel, SMA tiers, "view / print one-pager", CTA).
- **About** — company, service area, ecosystems, licensing.
- **Contact / Book a Walkthrough** — phones, email, vCard QR, quote form with confirmation.

**Files**
- `index.html` — loader + mount
- `WebsiteApp.jsx` — all sections/pages
- `content.js` — plain-JS copy of `services.ts` + `site.ts` (window.ERTechData)
- `downloads/` — the real print one-pagers (overview, 5 industries, insurance flyer)

Uses design-system components: `ServiceCard`, `SmaTiers`, `IntroBanner`, `SectionHeading`, `CtaBar`. Lucide icons via CDN.

> Recreation from the brief + real content. Form is a fake (no endpoint). Confirm phone labelling, licence string, and form endpoint before any production use (flagged in the brief).
