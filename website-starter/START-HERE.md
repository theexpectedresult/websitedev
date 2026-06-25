# START HERE — ER Tech Services website kit

This folder is a ready-to-build starter for the **commercial** site (ertechservices.ca).
Everything content-related is already written; Code just has to assemble the Astro site.

## What's in here
```
.
├─ START-HERE.md          ← you are here
├─ CLAUDE.md              ← Code auto-loads this as project context
├─ BRIEF.md              ← the full spec
├─ src/
│  ├─ data/services.ts    ← all five offerings + SMA tiers (content source of truth)
│  ├─ data/site.ts        ← brand, contact, licensing, nav, cross-link
│  └─ design/tokens.css   ← colours/gradients/fonts from the pamphlets
└─ public/
   └─ downloads/          ← the six one-pagers + insurance flyer
      ├─ overview-general.html
      ├─ restaurants.html
      ├─ retail-pet.html
      ├─ small-business.html
      ├─ clinics.html
      ├─ schools.html
      ├─ insurance-savings.html       (marketing flyer — with figures)
      └─ insurance-savings-soft.html  (marketing flyer — evergreen)
```

## How to get rolling (3 steps)

**1. Open this folder in Claude Code.**
   - Terminal: `cd` into this folder, then run `claude`.
   - Or open the folder in VS Code / the desktop app with the Claude Code extension.

**2. Give Code this first prompt (copy-paste):**

> Read CLAUDE.md and BRIEF.md, then scaffold an Astro static site in this folder.
> Build the shared layout, Masthead, SiteFooter, and ServiceCard first, and show me the
> ServiceCard rendered next to public/downloads/overview-general.html so I can confirm the
> match before you build the rest. Use src/data/services.ts and src/data/site.ts for all
> content — don't retype anything. Stop after the components for my review.

**3. Then iterate page by page.** Once the card matches, tell Code to continue with the
   pages in the order listed in CLAUDE.md (Home → Services → Industries → About → Contact → Quote).

## Before you go live (fill these in — they're flagged as placeholders)
- [ ] `SITE.formEndpoint` in `src/data/site.ts` — your Formspree/Web3Forms key (or host mailer).
- [ ] Confirm the licence wording/numbers in `SITE.licenses` against your letterhead.
- [ ] Decide the "Office" vs. person label for 778-808-8769.
- [ ] Add real photos to `public/img/` and (optional) a logo file.

## Deploy reminder
`ertechservices.ca` currently **auto-forwards** to theexpectedresult.ca. That forward has to
be **removed** and the domain pointed at its own hosting docroot before the built `dist/` can
go live. The WordPress residential site stays exactly as it is — we only link to it.
