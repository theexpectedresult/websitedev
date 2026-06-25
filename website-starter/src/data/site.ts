// src/data/site.ts
// One place for brand, contact, licensing, nav, and the residential cross-link.
// Change anything here and it updates the masthead, footer, contact page, etc.

export const SITE = {
  // --- Brand ---
  brand: "ER Tech Services",          // visible commercial wordmark (ER = Expected Result)
  brandAccentWord: "Tech",            // the word rendered in --brand colour
  legalEntity: "Expected Result Technical Services Corporation",
  tagline: "Front door to back office \u2014 under one roof",
  domain: "https://ertechservices.ca",

  // --- Contact ---
  // NOTE: never publish the street address (it is Vince's residence). City only.
  city: "Langley, BC",
  serviceArea: [
    "Pemberton to Hope",
    "Sea-to-Sky",
    "Metro Vancouver",
    "Fraser Valley",
    "Sunshine Coast",
    "Gulf Islands",
    "Vancouver Island",
    "Remote BC",
  ],
  serviceAreaLine:
    "From Pemberton to Hope, including the Sunshine Coast, Gulf Islands, Vancouver Island, and remote locations throughout BC.",
  phoneMobile: "778-246-2492",
  phoneOffice: "778-808-8769",   // labelling: pamphlets use "Office" — confirm vs. live site
  email: "results@ertechservices.ca",
  linkedin: "https://www.linkedin.com/company/expected-result-technical-services-corporation/",

  // --- Licensing (CONFIRM exact designation/numbers off the letterhead) ---
  licenses: [
    "Security Consultant Lic. #B7128",
    "TSBC LIC-00214786",
  ],

  // --- Sister site (residential, stays on WordPress this phase) ---
  residential: {
    label: "The Expected Result \u2014 Residential",
    blurb: "Home automation, lighting, AV & security for your home.",
    url: "https://theexpectedresult.ca",
  },

  // --- Primary navigation ---
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Industries", href: "/industries/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Book a Walkthrough", href: "/quote/", cta: true },
  ],

  // --- Credibility: ecosystems we work in ---
  ecosystems: [
    "Control4",
    "Crestron",
    "Lutron",
    "Alarm.com",
    "Hikvision",
    "DSC PowerSeries Neo / PowerG",
    "Araknis",
    "UniFi",
    "HALO Smart Sensor",
  ],

  // --- Marketing callouts (homepage banner / cross-promos) ---
  promos: [
    {
      title: "Your security system could lower your insurance premiums",
      hook: "Professionally monitored systems can earn 5\u201320% off home & business premiums. Ask us about the monitoring certificate you'll need to claim it.",
      href: "/insurance/",
      cta: "See how it works",
      flyer: "/downloads/insurance-savings.html",
    },
  ],

  // --- Quote form (Web3Forms — recommended) ---------------------------------------
  // The QuoteForm posts to `formEndpoint` and sends `formAccessKey` as the credential.
  // ENABLE IT IN ONE STEP (free, no account):
  //   1. Go to  https://web3forms.com
  //   2. Under "Create your Access Key", enter  results@ertechservices.ca
  //   3. Open that inbox, click the confirmation link, copy the Access Key (a UUID
  //      like 1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d)
  //   4. Paste it as `formAccessKey` below, replacing the placeholder. Done — rebuild.
  // Until the key is set, the form shows a friendly notice + disabled submit (no broken
  // posts). Submissions are emailed to the address you registered the key with above.
  //
  // Prefer Formspree instead? Set `formEndpoint` to your https://formspree.io/f/XXXXXXXX
  // endpoint and leave `formAccessKey` blank — the form also sends Formspree's
  // `_next` redirect + `_gotcha` honeypot, so no other change is needed.
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: "a63fdeff-11b7-40fb-aef0-8c4c70f84683",
} as const;

export type Site = typeof SITE;
