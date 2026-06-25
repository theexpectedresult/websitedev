// src/data/services.ts
// Single source of truth for ER Tech Services commercial offerings.
// Drives the service cards, the Services page, and every industry page.
// Text is plain Unicode (no HTML entities) — components render it directly.

export type Accent = "sec" | "vid" | "acc" | "net" | "rec" | "av";

export interface Pillar {
  accent: Accent;   // controls the gradient cap + bullet colour (see tokens.css)
  icon: IconKey;    // see ICONS map below
  title: string;
  items: string[];
}

export interface SupportPanel {
  title: string;
  items: string[];
}

export interface Offering {
  slug: string;          // URL slug under /industries (or "general" for the overview)
  audience: string;      // header eyebrow
  title: string;         // header title
  subtitle: string;      // header subtitle
  intro: string;         // intro banner copy
  sectionTitle: string;  // section heading above the cards
  pillars: Pillar[];     // the six service cards
  support: SupportPanel; // the left "Additional Support" panel
  onePager: string;      // path to the HTML one-pager in /public/downloads
  isIndustry: boolean;   // true => appears under /industries; false => Services/Business overview
}

export type IconKey = "shield" | "camera" | "key" | "network" | "monitor" | "speaker" | "sensor";

// Emoji used on the pamphlets — swap for inline SVG icons later if desired.
export const ICONS: Record<IconKey, string> = {
  shield: "\u{1F6E1}\u{FE0F}",
  camera: "\u{1F4F9}",
  key: "\u{1F511}",
  network: "\u{1F310}",
  monitor: "\u{1F5A5}\u{FE0F}",
  speaker: "\u{1F50A}",
  sensor: "\u{1F4A8}",
};

// ---------------------------------------------------------------------------
// Shared across all offerings
// ---------------------------------------------------------------------------

export interface SmaTier {
  name: string;
  response: string;
  premium?: boolean;
}

export const smaTiers: SmaTier[] = [
  { name: "Standard", response: "Next business day" },
  { name: "Priority", response: "Same-day response" },
  { name: "Premium", response: "4-hr \u00B7 24/7", premium: true },
];

export const smaNote =
  "SMA clients always jump the queue ahead of non-contract calls.";

export const ongoingSupport: string[] = [
  "24/7 alarm monitoring contract",
  "Annual system inspection & certification",
  "Preventive maintenance plans",
  "Remote system health monitoring",
  "Extended warranty options",
];

// ---------------------------------------------------------------------------
// Offerings
// ---------------------------------------------------------------------------

export const offerings: Record<string, Offering> = {
  general: {
    slug: "general",
    audience: "Technology Offerings",
    title: "Overview & Services",
    subtitle: "One trusted partner, front door to back office",
    intro:
      "As your technology partner, we handle it all under one roof \u2014 from the front entrance to the back office, we design, install, and support the systems that keep your business secure, connected, and running smoothly.",
    sectionTitle: "SERVICES TAILORED TO YOUR BUSINESS",
    isIndustry: false,
    onePager: "/downloads/overview-general.html",
    pillars: [
      { accent: "sec", icon: "shield", title: "Security & Alarm", items: [
        "Intrusion alarm system",
        "Door & window sensors",
        "24/7 monitored service",
        "Emergency-services / duress button at point of sale",
        "After-hours premises protection",
      ]},
      { accent: "vid", icon: "camera", title: "Video Surveillance", items: [
        "Entrance, lobby & sales-floor cameras",
        "Entry, exit & parking coverage",
        "Back-of-house & stockroom monitoring",
        "POS-linked transaction video",
        "Remote mobile viewing + secure cloud / local storage",
      ]},
      { accent: "acc", icon: "key", title: "Access Control", items: [
        "Keypad, fob & keyless entry",
        "Separate access levels per area",
        "Staff vs. public control",
        "Audit trail & access logs",
        "After-hours lockdown capability",
      ]},
      { accent: "net", icon: "network", title: "Network Infrastructure", items: [
        "Structured cabling throughout",
        "Separate staff & guest Wi-Fi",
        "POS & device connectivity",
        "Equipment network drops",
        "Clean rack / closet buildout",
      ]},
      { accent: "rec", icon: "monitor", title: "Front Desk & Workspace", items: [
        "POS system & setup",
        "Workstation connectivity",
        "Display & signage TVs",
        "Digital signage & info boards",
        "Intercom & paging",
      ]},
      { accent: "av", icon: "speaker", title: "AV, Audio & Conference", items: [
        "TV & display installation",
        "Teams / Zoom Rooms",
        "Wireless presentation system",
        "Zoned background music & paging",
        "Scheduled promos & announcements (set times or intervals)",
        "Whole-building speaker installation",
        "One-touch room control",
      ]},
    ],
    support: { title: "Site & Infrastructure Support", items: [
      "Dedicated cabling for key equipment",
      "Isolated network segments for sensitive systems",
      "Clean, professional cable management",
      "Infrastructure ready for future growth",
      "Coordination with equipment vendors",
    ]},
  },

  restaurants: {
    slug: "restaurants",
    audience: "For Restaurants & Fast Food",
    title: "Technology Overview",
    subtitle: "From the front counter to the drive-thru",
    intro:
      "From the front counter to the drive-thru and the back dock, we handle it all under one roof \u2014 security, cameras, networks, and audio designed to cut shrink, speed up service, and keep every shift running smoothly.",
    sectionTitle: "SERVICES TAILORED TO YOUR RESTAURANT",
    isIndustry: true,
    onePager: "/downloads/restaurants.html",
    pillars: [
      { accent: "sec", icon: "shield", title: "Security & Alarm", items: [
        "Intrusion alarm & 24/7 monitoring",
        "Door & window sensors",
        "Walk-in & freezer temperature alerts",
        "Emergency-services / duress button at the register",
        "Closing & after-hours protection",
      ]},
      { accent: "vid", icon: "camera", title: "Video Surveillance", items: [
        "POS-overlay register cameras (deter cash shrink)",
        "Drive-thru & order-pickup coverage",
        "Kitchen & prep-line monitoring",
        "Dining room, patio & entrance cameras",
        "Remote mobile viewing across locations",
      ]},
      { accent: "acc", icon: "key", title: "Access Control", items: [
        "Staff-door keypad / fob entry",
        "Manager vs. crew access levels",
        "Back-door & delivery control",
        "Audit trail & access logs",
        "After-hours lockdown capability",
      ]},
      { accent: "net", icon: "network", title: "Network Infrastructure", items: [
        "Structured cabling throughout",
        "Separate POS & guest Wi-Fi (PCI-friendly)",
        "Online-ordering & kiosk connectivity",
        "Drive-thru & kitchen-display drops",
        "Clean rack / closet buildout",
      ]},
      { accent: "rec", icon: "monitor", title: "Front of House & Ordering", items: [
        "POS & terminal setup",
        "Digital menu boards",
        "Self-order kiosks & KDS displays",
        "Drive-thru order-confirmation screens",
        "Guest Wi-Fi & loyalty connectivity",
      ]},
      { accent: "av", icon: "speaker", title: "Audio & Atmosphere", items: [
        "Zoned background music by area",
        "Drive-thru & headset audio support",
        "Patio & dining-room speakers",
        "Paging & overhead announcements",
        "Scheduled specials & promo announcements (set times or intervals)",
        "TV & display installation",
        "One-touch volume / zone control",
      ]},
    ],
    support: { title: "Kitchen & Site Support", items: [
      "Dedicated cabling for POS & kitchen displays",
      "Isolated network for payment systems (PCI-friendly)",
      "Heat / grease-aware cable routing",
      "Infrastructure ready for added locations",
      "Coordination with POS & equipment vendors",
    ]},
  },

  "retail-pet": {
    slug: "retail-pet",
    audience: "For Pet Stores & Retail",
    title: "Technology Overview",
    subtitle: "Protect the floor, the till, and the stockroom",
    intro:
      "From the sales floor to the stockroom \u2014 and the grooming and animal areas in between \u2014 we handle it all under one roof: security, cameras, networks, and in-store audio designed to reduce shrink and make every visit smoother.",
    sectionTitle: "SERVICES TAILORED TO YOUR STORE",
    isIndustry: true,
    onePager: "/downloads/retail-pet.html",
    pillars: [
      { accent: "sec", icon: "shield", title: "Security & Alarm", items: [
        "Intrusion alarm & 24/7 monitoring",
        "Door & window sensors",
        "Stockroom & cash-office protection",
        "Emergency-services / duress button at the till",
        "Habitat & aquarium environment alerts",
      ]},
      { accent: "vid", icon: "camera", title: "Video Surveillance", items: [
        "Sales-floor & aisle coverage",
        "POS-overlay register cameras",
        "Entrance, exit & parking coverage",
        "Stockroom & receiving monitoring",
        "Grooming & live-animal area cameras",
        "Remote mobile viewing + secure storage",
      ]},
      { accent: "acc", icon: "key", title: "Access Control", items: [
        "Staff-only & stockroom entry control",
        "Manager vs. associate access levels",
        "Cash-office & safe-room control",
        "Audit trail & access logs",
        "After-hours lockdown capability",
      ]},
      { accent: "net", icon: "network", title: "Network Infrastructure", items: [
        "Structured cabling throughout",
        "Separate POS & guest Wi-Fi",
        "Inventory / handheld-scanner connectivity",
        "Back-office & receiving drops",
        "Clean rack / closet buildout",
      ]},
      { accent: "rec", icon: "monitor", title: "Sales Floor & Checkout", items: [
        "POS & terminal setup",
        "Digital signage & promo displays",
        "Self-checkout & price-check connectivity",
        "Window & in-store display TVs",
        "Guest Wi-Fi & loyalty connectivity",
      ]},
      { accent: "av", icon: "speaker", title: "Audio & Atmosphere", items: [
        "Zoned background music by department",
        "Paging & overhead announcements",
        "Scheduled promo & messaging audio (set times or intervals)",
        "TV & display installation",
        "One-touch volume / zone control",
      ]},
    ],
    support: { title: "Stockroom & Site Support", items: [
      "Dedicated cabling for POS & scanners",
      "Isolated network for payment systems",
      "Clean, professional cable management",
      "Infrastructure ready for store growth",
      "Coordination with POS & fixture vendors",
    ]},
  },

  "small-business": {
    slug: "small-business",
    audience: "For Local Small Business",
    title: "Technology Overview",
    subtitle: "Right-sized, no overkill, one local partner",
    intro:
      "One local partner for all of it \u2014 security, cameras, Wi-Fi, and audio, sized right for your shop and your budget. No big-box runaround, no app-juggling: honest advice and a clean install you can grow into.",
    sectionTitle: "SERVICES TAILORED TO YOUR SHOP",
    isIndustry: true,
    onePager: "/downloads/small-business.html",
    pillars: [
      { accent: "sec", icon: "shield", title: "Security & Alarm", items: [
        "Right-sized intrusion alarm",
        "Door & window sensors",
        "24/7 monitored service",
        "Emergency-services / duress button",
        "After-hours protection",
      ]},
      { accent: "vid", icon: "camera", title: "Video Surveillance", items: [
        "Entrance & register cameras",
        "Sales-floor / service-area coverage",
        "Parking & exterior coverage",
        "Remote viewing from your phone",
        "Secure cloud or local storage",
      ]},
      { accent: "acc", icon: "key", title: "Access Control", items: [
        "Simple keypad or fob entry",
        "Staff vs. owner access",
        "Back-door & stockroom control",
        "Access logs you can review",
        "One-button lockdown",
      ]},
      { accent: "net", icon: "network", title: "Network Infrastructure", items: [
        "Reliable business-grade Wi-Fi",
        "Separate staff & guest networks",
        "POS & card-reader connectivity",
        "Clean, tidy cabling",
        "Room to grow as you add devices",
      ]},
      { accent: "rec", icon: "monitor", title: "Front Counter & Workspace", items: [
        "POS & terminal setup",
        "Workstation & printer connectivity",
        "Window & counter display TVs",
        "Simple digital signage",
        "Guest Wi-Fi & loyalty connectivity",
      ]},
      { accent: "av", icon: "speaker", title: "Audio & Atmosphere", items: [
        "Background music for your space",
        "Overhead paging if you need it",
        "Scheduled announcements & promos (set times or intervals)",
        "TV & display installation",
        "Easy volume control",
        "One trusted setup, no app-juggling",
      ]},
    ],
    support: { title: "Local & On-Hand Support", items: [
      "One local point of contact",
      "Honest, right-sized recommendations",
      "Clean, professional installation",
      "Easy to expand later",
      "Coordination with your other vendors",
    ]},
  },

  clinics: {
    slug: "clinics",
    audience: "For Clinics & Healthcare",
    title: "Technology Overview",
    subtitle: "From the front desk to the treatment rooms",
    intro:
      "From the waiting room to the treatment rooms and back office, we handle it all under one roof \u2014 security, cameras, access control, networks, and AV designed for patient privacy, smooth front-desk flow, and reliable clinical equipment.",
    sectionTitle: "SERVICES TAILORED TO YOUR CLINIC",
    isIndustry: true,
    onePager: "/downloads/clinics.html",
    pillars: [
      { accent: "sec", icon: "shield", title: "Security & Alarm", items: [
        "Intrusion alarm & 24/7 monitoring",
        "Door & window sensors",
        "After-hours clinical-equipment protection",
        "Emergency-services / duress button at reception",
        "Secure-room & medication-storage alerts",
      ]},
      { accent: "vid", icon: "camera", title: "Video Surveillance", items: [
        "Reception & waiting-area cameras",
        "Entry, exit & parking coverage",
        "Corridor & common-area monitoring",
        "Remote mobile viewing",
        "Secure cloud or local storage",
      ]},
      { accent: "acc", icon: "key", title: "Access Control", items: [
        "Keypad, fob & keyless entry",
        "Separate access levels per area",
        "Clinical vs. staff vs. public control",
        "Audit trail & access logs",
        "After-hours lockdown capability",
      ]},
      { accent: "net", icon: "network", title: "Network Infrastructure", items: [
        "Structured cabling throughout",
        "Separate staff & guest Wi-Fi",
        "Isolated segments for diagnostic equipment",
        "Dedicated equipment network drops",
        "Clean rack / closet buildout",
      ]},
      { accent: "rec", icon: "monitor", title: "Reception & Front Desk", items: [
        "Workstation & check-in connectivity",
        "Patient check-in displays",
        "Waiting-room display TV",
        "Patient-education digital signage",
        "Intercom & paging",
      ]},
      { accent: "av", icon: "speaker", title: "AV, Audio & Conference", items: [
        "TV & display installation",
        "Teams / Zoom Rooms (telehealth)",
        "Wireless presentation system",
        "Zoned audio & paging",
        "Scheduled announcements (set times or intervals)",
        "One-touch room control",
      ]},
    ],
    support: { title: "Clinical & Site Support", items: [
      "Dedicated cabling for clinical equipment",
      "Isolated network segments for diagnostic tools",
      "Clean, professional cable management",
      "Infrastructure ready for future equipment",
      "Coordination with equipment vendors",
    ]},
  },

  schools: {
    slug: "schools",
    audience: "For Schools & Campuses",
    title: "Technology Overview",
    subtitle: "Safer campuses, smarter classrooms, reliable IT",
    intro:
      "From the front office to the back field, we handle it all under one roof \u2014 vape & environmental sensing, enterprise video, access control, mass notification, and the IT backbone that keeps a large campus connected, safe, and running.",
    sectionTitle: "SERVICES TAILORED TO YOUR SCHOOL",
    isIndustry: true,
    onePager: "/downloads/schools.html",
    pillars: [
      { accent: "sec", icon: "shield", title: "Security & Alarm", items: [
        "Intrusion alarm & 24/7 monitoring",
        "Door, window & perimeter sensors",
        "One-button lockdown initiation",
        "Emergency-services / duress alerts",
        "After-hours & holiday protection",
      ]},
      { accent: "vid", icon: "camera", title: "Enterprise Video", items: [
        "Campus-wide IP camera coverage",
        "Central video management (VMS)",
        "Multi-building, single-pane management",
        "AI analytics & fast event search",
        "District-level & remote viewing",
        "Secure retention & incident export",
      ]},
      { accent: "acc", icon: "key", title: "Access Control", items: [
        "Secured entry vestibules",
        "Visitor management & check-in",
        "Role-based access (staff / admin / contractor)",
        "Bell-schedule & zone door automation",
        "Campus-wide lockdown integration",
      ]},
      { accent: "rec", icon: "sensor", title: "Vape & Environmental Sensing \u2014 HALO", items: [
        "HALO Smart Sensors in washrooms & locker rooms (no cameras)",
        "Vape, THC & smoke detection",
        "Air quality: CO\u2082, TVOC, temp, humidity",
        "Spoken-keyword, aggression & help alerts",
        "Tamper & occupancy detection",
        "Real-time alerts to staff phones",
      ]},
      { accent: "net", icon: "network", title: "Network & IT Services", items: [
        "Structured cabling & fibre backbone",
        "High-density Wi-Fi for 1:1 device programs",
        "Switching, VLANs & segmentation",
        "Device & endpoint management",
        "Server / NVR room buildout",
        "Help-desk & ongoing IT support",
      ]},
      { accent: "av", icon: "speaker", title: "AV & Mass Notification", items: [
        "Classroom displays & projectors",
        "Gym & auditorium AV",
        "PA / intercom & paging",
        "Clock-synced bells & scheduled announcements",
        "Campus-wide mass notification",
        "Digital signage & wayfinding",
        "One-touch room & event control",
      ]},
    ],
    support: { title: "Campus & IT Support", items: [
      "Dedicated cabling for labs & AV",
      "Segmented networks for safety systems",
      "Clean, professional cable management",
      "Infrastructure ready for enrollment growth",
      "Coordination with district IT & vendors",
    ]},
  },
};

// Convenience: just the industry offerings, for the /industries index + nav.
export const industries: Offering[] = Object.values(offerings).filter(
  (o) => o.isIndustry
);
