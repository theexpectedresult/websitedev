# CLAUDE.md — ER Tech Services commercial website

You are building the **commercial** website for **ER Tech Services** (ertechservices.ca).
Read `BRIEF.md` in full before starting — it is the spec. This file is the quick-reference.

## What's already provided (do not re-create from scratch)
- `BRIEF.md` — full project spec (architecture, pages, deploy).
- `src/data/services.ts` — all six offerings (overview + 5 industries), the six pillars
  with every bullet, SMA tiers, support lists. **This is the content source of truth.**
- `src/data/site.ts` — brand, contact, licensing, nav, residential cross-link, ecosystems.
- `src/design/tokens.css` — colours, gradients, fonts lifted from the pamphlets.
- `public/downloads/*.html` — six service one-pagers + two insurance flyers (`insurance-savings.html` with figures, `insurance-savings-soft.html` evergreen — Vince picks one). Industry pages link to the one-pagers
  with a "View / print this one-pager" button. They print to 11×17 tabloid in-browser.

## Stack
- **Astro**, static output. Plain CSS using the tokens (no Tailwind). Self-host Barlow +
  Barlow Semi Condensed (Google Fonts) into `public/fonts/`.
- Quote form posts to `SITE.formEndpoint` (static endpoint; no backend).

## Build order
1. `Base.astro` layout (head, fonts, `tokens.css`), then `Masthead.astro` + `SiteFooter.astro`
   (read from `site.ts`; footer must name the legal entity + cross-link to theexpectedresult.ca).
2. `ServiceCard.astro` (props: accent, icon, title, items) — match the pamphlet exactly
   (gradient cap via `data-accent`, coloured bullet dots). Verify against
   `public/downloads/overview-general.html` before moving on.
3. `SmaTiers.astro`, `IntroBanner.astro`, `CtaBar.astro`, `QuoteForm.astro`.
4. Pages from `offerings` in services.ts: Home → Services (+ `#sma`) → Industries index →
   four industry pages → About → Contact → Quote → Insurance Savings (/insurance/, from SITE.promos + flyer).

## Hard rules
- **Never publish a street address.** City only: "Langley, BC". (It's the owner's residence.)
- Legal entity **Expected Result Technical Services Corporation** appears at the forefront
  (masthead line + footer). Make clear ER Tech Services and The Expected Result are one company.
- Canadian English spelling throughout.
- Content comes from `services.ts` / `site.ts` — don't hand-type bullets or drift wording.
- Don't touch theexpectedresult.ca or anything WordPress — we only cross-link to it.

## Confirm with Vince before launch (placeholders are in the data files)
- `SITE.formEndpoint` (Formspree/Web3Forms key or host mailer).
- Licence designation/numbers (`SITE.licenses`) — verify off the letterhead.
- "Office" vs. person label for 778-808-8769.

## Deploy (see BRIEF.md §10)
`npm run build` → upload `dist/` to the **ertechservices.ca** docroot. The domain currently
auto-forwards to theexpectedresult.ca — that forward must be removed first. Enforce SSL.
