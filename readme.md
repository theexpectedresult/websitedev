# ER Tech Services — Design System

A brand & UI system for **ER Tech Services** (commercial) and its residential sub-brand **The Expected Result**, both operated by *Expected Result Technical Services Corporation*.

> ER Tech Services designs, installs and maintains integrated **security, video surveillance, access control, network, front-desk and AV** systems for commercial and institutional clients across Greater Vancouver. Licensed BC integrator — **Security Consultant Lic. #B7128 · TSBC LIC-00214786**.

- **Legal entity:** Expected Result Technical Services Corporation · Langley, BC (named at the forefront on all commercial collateral)
- **Contact:** results@ertechservices.ca · Office 778-808-8769 · Mobile 778-246-2492
- **Commercial:** ertechservices.ca (this system) · **Residential:** theexpectedresult.ca (WordPress, cross-link only)

## Repository layout
This repo combines the **design system** (this folder) with the **commercial-website build kit** (`website-starter/`).
- **Building the website?** → see **`HANDOFF.md`**, then `website-starter/START-HERE.md`.
- **Designing ER Tech UI / collateral?** → keep reading this guide; link `styles.css`, use `components/`.
- **Pushing to GitHub?** → commands are in `HANDOFF.md`.

## One unified system
This system was first drafted from a brand *setup kit* (cyan `#13A2CA` + Inter). The client then supplied the **real commercial build kit** (`ertech-commercial-starter`) whose pamphlet tokens are declared *"the single source of truth… so web and print never drift."* We realigned to that and **retired the cyan/Inter palette entirely** — there is now one canonical system.

- **CANONICAL & ONLY** (`tokens/brand.css`): **Barlow + Barlow Semi Condensed**, ink `#1a2230`, teal brand `#39c6c0` (deep teal `#1f6d6a` for links/text on white), and the **six-pillar accent palette** with gradient "caps." Generic UI neutrals, status colours and on-dark text are folded into this same file so consumers link one palette. This drives marketing, print **and** the internal portal alike.

## Sources provided
- `uploads/ertech-commercial-starter/` — **the real commercial website build kit** (Astro). Source of truth:
  - `src/design/tokens.css` — pamphlet colours, gradients, fonts (→ `tokens/brand.css`).
  - `src/data/services.ts` — six pillars + every bullet, SMA tiers, support panels, 5 industries (→ `ui_kits/website/content.js`).
  - `src/data/site.ts` — brand, contact, licensing, nav, ecosystems, residential cross-link, insurance promo.
  - `BRIEF.md` / `CLAUDE.md` / `START-HERE.md` — the full spec.
  - `public/downloads/*.html` — six print one-pagers + insurance flyer (copied to `ui_kits/website/downloads/`).
- `uploads/ertech-design-setup-kit.md` + `ertech-design-tokens.css` + `tokens.json` — the earlier setup-kit palette (cyan/Inter), now **superseded** by the pamphlet system.
- Logos, marks, favicons, contact QR codes → `assets/`.

> No Figma was provided; no live site source beyond this starter. The website UI kit recreates the planned commercial site from the brief + real content.

---

## Content fundamentals (voice & copy)

- **Tone:** confident, plain-spoken, **tradesperson-credible**. "Under one roof," honest tradeoffs over hype. Benefit-led but specific.
- **Person:** speak to the client as **"you"**; the company is **"we."** Lead with the **legal entity** on commercial pieces; make clear ER Tech Services and The Expected Result are one company ("ER" *is* Expected Result).
- **Spelling:** **Canadian English** throughout.
- **Casing:** Sentence case for body; Barlow Semi Condensed display titles are often set in caps (section headings). Eyebrows are uppercase, tracked.
- **Hard rules:** **never name competitors.** **Never publish a street address** — city only ("Langley, BC"); the address is the owner's residence. Always credit licences.
- **Emoji:** the printed pamphlets use a few emoji as pillar icons, but the web/system standard is **Lucide line icons** (see Iconography) — no emoji in digital UI.
- **Signature lines / data:** SMA = "SMA clients always jump the queue ahead of non-contract calls." Tiers: Standard = next business day · Priority = same-day · Premium = 4-hr · 24/7.
- **Footer / contact:** legal entity · Langley BC · Office 778-808-8769 · Mobile 778-246-2492 · results@ertechservices.ca · licences · cross-link to theexpectedresult.ca.

---

## Visual foundations (canonical pamphlet system)

- **Color:** light backgrounds (paper `#fff`, light slate `#f8fafc`); ink `#1a2230` for type; **teal `#39c6c0`** for the "Tech" wordmark, links and highlights (use `--brand-deep #1f6d6a` for legible links/text on white). The defining device is the **six-pillar accent palette** — each service has a colour and a **gradient "cap"**: Security `--sec` teal-navy, Video `--vid` amber, Access `--acc` green, Network `--net` indigo, Front Desk `--rec` cyan, AV `--av` purple. Section dividers use the green→indigo→purple `--grad-rule`; page intros use the amber→purple→indigo `--grad-intro` banner; headers/footers use dark teal/slate gradients.
- **Type:** **Barlow Semi Condensed** (600/700) for headings, the wordmark and card caps; **Barlow** (400–600) for body/UI. JetBrains Mono for licences/specs/IDs. (Inter ships only as an optional `--font-docs` fallback for Word/print collateral.)
- **The ServiceCard** is the signature object: white card, hairline `--line` border, 12px radius, a coloured gradient **cap** (icon + title in Barlow Semi Condensed, white) over a bulleted body with **accent-coloured bullet dots**. Web and print render it identically.
- **SMA tiers:** Standard / Priority / **Premium (gold)** strip, Premium highlighted with a gold border + glow.
- **Spacing / corners:** 4px base scale; 12px card radius; pill chips. Generous whitespace, card-based layouts.
- **Borders & shadows:** hairline `#d8dde6`; soft, low shadows. Premium SMA tier gets a gold-tinted shadow.
- **Motion:** restrained — fades + short lifts, `--ease`, 120/200/320ms. No bounces or loops.
- **Hover/press:** links brighten/darken one step; CTA buttons brighten ~8%; cards lift slightly.

---

## Iconography

- **Pillar identity** comes from the six accent colours + gradient caps — that *is* the brand's visual signature, more than any icon set.
- **Icons:** standardize on **[Lucide](https://lucide.dev)** line icons (CDN), even ~2px stroke. Pillar mapping used in the kits: Security→`shield`, Video→`video`, Access→`key-round`, Network→`network`, Front Desk→`monitor`, AV→`volume-2`, HALO sensor→`wind`.
  > ⚠️ Lucide is a substitute (the pamphlets used emoji placeholders, flagged in `services.ts` as "swap for inline SVG icons later"). Swap if ER Tech adopts a specific set.
- **Brand mark & motif:** the **ER diamond mark** (`assets/logos/ertech-mark*.svg`) + its 4-dot motif; the mono mark reverses cleanly to white (E/R are transparent cutouts) for dark panels.
- **No emoji / Unicode-glyph icons in digital UI.** QR codes (`assets/qr/`) for contact/vCard on print + the contact page.

---

## Index / manifest

**Root** — `styles.css` (entry; `@import`s only), `readme.md`, `SKILL.md`

**`tokens/`**
- `fonts.css` — Barlow + Barlow Semi Condensed + JetBrains Mono (+ optional Inter for docs)
- `brand.css` — **THE palette**: pamphlet tokens (pillars, caps, gradients, SMA, fonts) + folded-in neutrals, status & on-dark tokens + `[data-accent]` helper
- `typography.css` — shared scale/weights/tracking · `spacing.css` — spacing/radii/shadows/motion

**`guidelines/foundations/`** — specimen cards (Colors incl. pillars/gradients/SMA, Type, Spacing, Brand)

**`components/`** (namespace `window.ERTechServicesDesignSystem_dceeff`)
- `marketing/` — **ServiceCard**, **SmaTiers**, **IntroBanner**, **SectionHeading**, **CtaBar** (the pamphlet kit)
- `forms/` — Button, Input, Switch · `feedback/` — StatusChip, Badge, Alert · `data-display/` — Card, Stat, Avatar · `navigation/` — Tabs (used by the internal portal)

**`ui_kits/`**
- `website/` — **commercial site** (Home · Services · Industries → industry detail · About · Contact / Book a Walkthrough), driven by `content.js` (derived from `services.ts`/`site.ts`) + real print one-pagers in `downloads/`
- `portal/` — internal operations / project-tracker dashboard (same teal/Barlow palette)

**`templates/`** — reusable starting points (Design Components) consuming projects can copy; each folder is self-contained (local logo/QR assets + a `ds-base.js` that loads `styles.css` + `_ds_bundle.js`). Shown in the "Templates" picker.
- `document/` — **Document** · branded proposal / spec sheet / letter (US Letter, printable)
- `marketing-page/` — **Marketing Page** · web landing page (hero + six ServiceCards + SMA + CTA)
- `flyer/` — **Flyer** · print one-pager matching the pamphlets (six pillars + SMA + contact QR)
- `deck/` — **Slide Deck** · 16:9 slides (title / section / pillars / closing)
- `dashboard/` — **Operations Dashboard** · internal app screen (KPIs, work-order table, device fleet)
> Consumers: point the `base` line in each template's `ds-base.js` at the bound `_ds/<folder>` tree (the file logs guidance if the bundle 404s).

**`assets/`** — `logos/`, `icons/`, `qr/`

---

*Generated artifacts (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`) are produced automatically — do not edit by hand.*
