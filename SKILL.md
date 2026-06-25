---
name: ertech-design
description: Use this skill to generate well-branded interfaces and assets for ER Tech Services (and its residential sub-brand The Expected Result), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

ER Tech Services is a licensed BC security, video surveillance, access control, network, front-desk and AV integrator. Designs read clean, technical and trustworthy — built on **teal `#39c6c0`** (deep teal `#1f6d6a` for links/text on white), ink `#1a2230`, **Barlow + Barlow Semi Condensed** type, light/paper backgrounds, card layouts, hairline borders and the signature **six-pillar accent palette** with gradient "caps" (Security/Video/Access/Network/Front Desk/AV). Never name competitors; never publish a street address; no emoji in digital UI (use Lucide line icons).

Key files:
- `readme.md` — full brand guide: repo layout, content/voice, visual foundations, iconography, manifest.
- `styles.css` + `tokens/` — design tokens (`brand.css` is the single palette: pillars, caps, gradients, SMA, fonts + neutrals/status). Link `styles.css` to inherit everything.
- `components/` — reusable React primitives. **marketing/**: ServiceCard, SmaTiers, IntroBanner, SectionHeading, CtaBar (the pamphlet kit). **forms/**: Button, Input, Switch · **feedback/**: StatusChip, Badge, Alert · **data-display/**: Card, Stat, Avatar · **navigation/**: Tabs. Each has a `.prompt.md`; mount via `window.ERTechServicesDesignSystem_dceeff` after loading `_ds_bundle.js`.
- `ui_kits/website/` and `ui_kits/portal/` — full-screen recreations (marketing site, operations dashboard).
- `templates/` — reusable starting points (Document/proposal, Marketing page, Flyer, Slide deck, Operations dashboard). Each folder is self-contained; copy one and fill it in.
- `assets/` — logos, marks, favicons, contact QR codes.
- `website-starter/` — the real commercial-site build kit (Astro) for a developer: `BRIEF.md`, `CLAUDE.md`, content in `src/data/`, tokens, and the print one-pagers. Build target, not part of the design library.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
