# Handoff — ER Tech Services

This repository has **two parts**:

| Path | What it is | Who uses it |
|---|---|---|
| **`/` (root)** | The **design system** — tokens, React component primitives, brand assets, specimen cards, brand guide (`readme.md`). | Reference for any ER Tech UI / collateral. |
| **`website-starter/`** | The **commercial-website build kit** (Astro). All content + tokens are written; the site itself is not built yet. | The developer building **ertechservices.ca**. |

The two share one palette: `website-starter/src/design/tokens.css` is the canonical pamphlet token file, and the root `tokens/brand.css` mirrors it verbatim (plus generic UI neutrals/status). Web and print read the same values so they never drift.

---

## For the developer — building the website

Everything you need is in **`website-starter/`**. Start there:

1. `cd website-starter`
2. Open in **Claude Code** (run `claude`) or your editor.
3. Read `CLAUDE.md` and `BRIEF.md`, then follow `START-HERE.md` (it has a copy-paste first prompt).
4. Content is the source of truth — pull from `src/data/services.ts` and `src/data/site.ts`; **don't retype copy**.
5. Match the print one-pagers in `public/downloads/*.html` — they show the exact ServiceCard / SMA / banner treatments.

**Brand assets are already provided** (the starter's were empty placeholders):
- `website-starter/public/brand/` — logos, the ER diamond mark (color + mono), contact QR codes.
- `website-starter/public/favicon.ico`, `favicon-32/192/512.png`, `apple-touch-icon.png`, `site.webmanifest`.
- `website-starter/public/img/ertech-logo-tech-services.svg` — primary wordmark.

**Still to fill in before go-live** (flagged in `START-HERE.md`):
- `SITE.formEndpoint` in `src/data/site.ts` (Formspree/Web3Forms key).
- Confirm licence wording/numbers against letterhead.
- Add real project photos to `public/img/`.
- Remove the `ertechservices.ca → theexpectedresult.ca` domain forward before deploying `dist/`.

## Using the design system (root)

- Link `styles.css` to inherit every token (colors, type, spacing, shadows).
- Component primitives live in `components/`; each has a `.prompt.md` usage note. They're plain React (JSX) referencing CSS custom properties — lift the patterns, or load the precompiled `_ds_bundle.js` and read them off `window.ERTechServicesDesignSystem_dceeff`.
- `readme.md` is the full brand guide (voice, visual foundations, iconography, manifest).
- `SKILL.md` makes this folder usable as a Claude Code skill (`ertech-design`).

---

## Pushing this to GitHub

This package was prepared in a design tool that can't push for you — run these once locally (or have the developer do it):

```bash
# from the repository root
git init
git add .
git commit -m "ER Tech Services design system + commercial website starter"

# create an empty repo on github.com first (e.g. ertech-design-system, private), then:
git remote add origin git@github.com:<your-org>/ertech-design-system.git
git branch -M main
git push -u origin main
```

> Tip: with the GitHub CLI you can skip the website step —
> `gh repo create ertech-design-system --private --source=. --remote=origin --push`

`node_modules/`, `dist/`, and build caches are already git-ignored.
