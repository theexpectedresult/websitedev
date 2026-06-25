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
    "Sea-to-Sky / Pemberton",
    "Squamish & Whistler",
    "Metro Vancouver",
    "Fraser Valley to Hope",
    "Vancouver Island",
    "Gulf Islands",
    "Sunshine Coast",
  ],
  serviceAreaLine:
    "From Pemberton through the Fraser Valley to Hope, across Metro Vancouver, Vancouver Island, the Gulf Islands & the Sunshine Coast.",
  phoneMobile: "778-246-2492",
  phoneOffice: "778-808-8769",   // labelling: pamphlets use "Office" — confirm vs. live site
  email: "results@ertechservices.ca",
  linkedin: "https://www.linkedin.com/in/vinceyost/",

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

  // --- Quote form endpoint (fill in Formspree/Web3Forms key or host mailer) ---
  formEndpoint: "REPLACE_WITH_FORM_ENDPOINT",
} as const;

export type Site = typeof SITE;
