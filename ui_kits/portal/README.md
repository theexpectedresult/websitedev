# Portal UI kit — ER Tech Operations

Internal operations / project-tracker dashboard built on the design-system primitives (`Card`, `Stat`, `StatusChip`, `Tabs`, `Badge`, `Avatar`, `Button`, `Input`). Lucide line icons via CDN.

**Layout:** navy sidebar (Dashboard / Work orders / Devices / Clients / Settings), white top bar with search + "New work order".

**Dashboard:** four KPI stat tiles, a work-orders table with tracker status chips (Active/All tabs), and a device-fleet panel.
**Work orders:** full table view.

Sidebar nav switches pages via in-page state.

**Files:** `index.html` (loader + mount) · `PortalApp.jsx` (all sections + mock data).

> Brand recreation from the ER Tech brand kit — no live portal source was provided. Status chips reuse the company's document/tracker palette (green/cream/peach).
