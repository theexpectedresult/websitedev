/* ER Tech Services — commercial website UI kit (pamphlet design system).
   Content comes from content.js (window.ERTechData, derived from services.ts/site.ts).
   Components from window.ERTechServicesDesignSystem_dceeff. Lucide icons via CDN. */
(function () {
const WDS = window.ERTechServicesDesignSystem_dceeff;
const { ServiceCard, SmaTiers, IntroBanner, SectionHeading, CtaBar } = WDS;
const { SITE, offerings, industries, smaTiers, smaNote } = window.ERTechData;

const ICON_FOR = { shield: "shield", camera: "video", key: "key-round", network: "network", monitor: "monitor", speaker: "volume-2", sensor: "wind" };

/* Lucide icon */
function I({ name, size = 20, color = "var(--brand-deep)", stroke = 2 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, stroke: color, "stroke-width": stroke } });
    }
  }, [name, size, color, stroke]);
  return <span ref={ref} style={{ display: "inline-flex", width: size, height: size }} />;
}

/* Teal CTA button */
function CTA({ children, onClick, kind = "solid", size = "md", iconRight }) {
  const pad = size === "lg" ? "0.85rem 1.5rem" : size === "sm" ? "0.45rem 0.9rem" : "0.7rem 1.2rem";
  const fs = size === "lg" ? "1.05rem" : size === "sm" ? "0.85rem" : "0.95rem";
  const styles = kind === "solid"
    ? { background: "var(--brand-deep)", color: "#fff", border: "1px solid transparent" }
    : { background: "transparent", color: "var(--brand-deep)", border: "1.5px solid var(--brand-deep)" };
  return (
    <button onClick={onClick} style={{ ...styles, display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: pad, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: fs, borderRadius: "8px", cursor: "pointer", transition: "filter var(--dur-base) var(--ease)" }}
      onMouseEnter={(e) => e.currentTarget.style.filter = "brightness(1.08)"}
      onMouseLeave={(e) => e.currentTarget.style.filter = "none"}>
      {children}{iconRight}
    </button>
  );
}

const WRAP = { maxWidth: 1080, margin: "0 auto", padding: "0 var(--space-6)" };

/* ---------------- Masthead ---------------- */
function Masthead({ page, go }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ ...WRAP, height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ display: "flex", alignItems: "center", gap: "0.8rem", textDecoration: "none" }}>
          <img src="../../assets/logos/ertech-logo-tech-services.svg" alt="ER Tech Services" style={{ height: 48 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.66rem", color: "var(--text-muted)", maxWidth: 130, lineHeight: 1.25 }}>{SITE.legalEntity}</span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
          {SITE.nav.map((n) => {
            const key = n.href === "/" ? "home" : n.href.replace(/\//g, "");
            if (n.cta) return <CTA key={n.label} size="sm" onClick={() => go("quote")}>{n.label}</CTA>;
            return <a key={n.label} href="#" onClick={(e) => { e.preventDefault(); go(key); }}
              style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", color: page === key ? "var(--ink)" : "var(--text-muted)" }}>{n.label}</a>;
          })}
        </nav>
      </div>
    </header>
  );
}

/* ---------------- Footer ---------------- */
function SiteFooter({ go }) {
  return (
    <footer style={{ background: "var(--grad-footer)", color: "#e8edf3" }}>
      <div style={{ ...WRAP, padding: "var(--space-7) var(--space-6)", display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "var(--space-6)" }}>
        <div>
          <img src="../../assets/icons/ertech-favicon-192.png" alt="" style={{ height: 40, marginBottom: "var(--space-3)" }} />
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>{SITE.legalEntity}</div>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.5, margin: "0.4rem 0 0", maxWidth: 320 }}>{SITE.serviceAreaLine}</p>
        </div>
        <div style={{ fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <strong style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "0.2rem" }}>Contact</strong>
          <span>{SITE.city}</span>
          <span>Office {SITE.phoneOffice}</span>
          <span>Mobile {SITE.phoneMobile}</span>
          <span>{SITE.email}</span>
        </div>
        <div style={{ fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <strong style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "0.2rem" }}>Licensing</strong>
          {SITE.licenses.map((l) => <span key={l} style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>{l}</span>)}
          <a href={SITE.residential.url} style={{ color: "var(--brand)", textDecoration: "none", marginTop: "0.5rem", fontWeight: 600 }}>Looking for home / residential? →<br/>{SITE.residential.label}</a>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", padding: "var(--space-4)", textAlign: "center", fontSize: "0.78rem", color: "#9fb0c0" }}>
        © 2026 {SITE.legalEntity} · {SITE.city}
      </div>
    </footer>
  );
}

/* ---------------- Pillar grid ---------------- */
function PillarGrid({ pillars }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)" }}>
      {pillars.map((p) => (
        <ServiceCard key={p.title} accent={p.accent} title={p.title} items={p.items}
          icon={<I name={ICON_FOR[p.icon] || "circle"} size={20} color="#fff" />} />
      ))}
    </div>
  );
}

/* ---------------- Home ---------------- */
function Home({ go }) {
  const g = offerings.general;
  const promo = SITE.promos[0];
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--grad-header-left)", color: "#fff" }}>
        <div style={{ ...WRAP, padding: "var(--space-9) var(--space-6)", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "var(--space-7)", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--brand)" }}>{SITE.legalEntity}</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "3.4rem", lineHeight: 1.04, margin: "0.6rem 0 0.8rem" }}>Front door to back office —<br/>under one roof.</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: 1.5, color: "rgba(255,255,255,0.9)", maxWidth: 520, margin: 0 }}>
              One trusted partner for commercial security, video, access, networks, front-desk and AV — designed, installed and maintained to a single standard across Greater Vancouver.
            </p>
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-6)" }}>
              <CTA size="lg" onClick={() => go("quote")} iconRight={<I name="arrow-right" size={18} color="#fff" />}>Book a Walkthrough</CTA>
              <button onClick={() => go("services")} style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "0.85rem 1.5rem", borderRadius: "8px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1.05rem", cursor: "pointer" }}>Explore services</button>
            </div>
          </div>
          <div style={{ background: "var(--grad-header-right)", borderRadius: "14px", padding: "var(--space-6)", boxShadow: "0 16px 40px rgba(0,0,0,0.25)" }}>
            <img src="../../assets/logos/ertech-mark-mono.svg" alt="ER" style={{ height: 60, filter: "brightness(0) invert(1)", marginBottom: "var(--space-4)" }} />
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.15, marginBottom: "0.6rem" }}>Six disciplines.<br/>One accountable team.</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(255,255,255,0.82)", margin: 0 }}>{SITE.ecosystems.slice(0, 6).join(" · ")} & more — integrated under one roof.</p>
          </div>
        </div>
      </section>

      {/* Pillars at a glance */}
      <section style={{ ...WRAP, padding: "var(--space-8) var(--space-6) var(--space-6)" }}>
        <SectionHeading>{g.sectionTitle}</SectionHeading>
        <div style={{ marginTop: "var(--space-6)" }}><PillarGrid pillars={g.pillars} /></div>
      </section>

      {/* SMA teaser */}
      <section style={{ ...WRAP, padding: "var(--space-5) var(--space-6) var(--space-7)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: "var(--ink)", margin: "0 0 var(--space-4)" }}>Service &amp; Maintenance Agreements</h3>
        <SmaTiers tiers={smaTiers} note={smaNote} />
      </section>

      {/* Industries */}
      <section style={{ background: "var(--gray-50)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div style={{ ...WRAP, padding: "var(--space-7) var(--space-6)" }}>
          <SectionHeading>Built for your industry</SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "var(--space-3)", marginTop: "var(--space-5)" }}>
            {industries.map((o) => (
              <button key={o.slug} onClick={() => go("ind:" + o.slug)} style={{ textAlign: "left", background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "10px", padding: "var(--space-4)", cursor: "pointer", fontFamily: "var(--font-body)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.02rem", color: "var(--ink)", lineHeight: 1.1 }}>{o.audience.replace(/^For /, "")}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--brand-deep)", marginTop: "0.5rem", fontWeight: 600 }}>View →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance promo */}
      <section style={{ ...WRAP, padding: "var(--space-7) var(--space-6)" }}>
        <div style={{ background: "var(--grad-intro)", borderRadius: "14px", padding: "var(--space-6)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-5)", flexWrap: "wrap" }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", lineHeight: 1.1 }}>{promo.title}</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "rgba(255,255,255,0.92)", margin: "0.5rem 0 0" }}>{promo.hook}</p>
          </div>
          <button onClick={() => go("contact")} style={{ background: "#fff", color: "#7a3f7e", border: "none", padding: "0.8rem 1.4rem", borderRadius: "8px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", flex: "none" }}>{promo.cta}</button>
        </div>
      </section>

      {/* Ecosystems */}
      <section style={{ ...WRAP, padding: "0 var(--space-6) var(--space-8)" }}>
        <div style={{ textAlign: "center", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "var(--space-4)" }}>Ecosystems we work in</div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--space-3)" }}>
          {SITE.ecosystems.map((e) => (
            <span key={e} style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--ink)", background: "var(--gray-50)", border: "1px solid var(--line)", borderRadius: "999px", padding: "0.35rem 0.9rem" }}>{e}</span>
          ))}
        </div>
      </section>
    </>
  );
}

/* ---------------- Services ---------------- */
function Services({ go }) {
  const g = offerings.general;
  return (
    <div style={{ ...WRAP, padding: "var(--space-7) var(--space-6) var(--space-8)" }}>
      <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--brand-deep)" }}>{g.audience}</span>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2.8rem", color: "var(--ink)", margin: "0.3rem 0 var(--space-5)" }}>{g.title}</h1>
      <IntroBanner icon={<span>🏢</span>}>{g.intro}</IntroBanner>
      <div style={{ margin: "var(--space-7) 0 var(--space-6)" }}><SectionHeading>{g.sectionTitle}</SectionHeading></div>
      <PillarGrid pillars={g.pillars} />
      <div id="sma" style={{ marginTop: "var(--space-8)" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", color: "var(--ink)", margin: "0 0 var(--space-2)" }}>Service &amp; Maintenance Agreements</h2>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--text-body)", margin: "0 0 var(--space-5)", maxWidth: 620 }}>Pick the response tier that fits the site. SMA clients always jump the queue.</p>
        <SmaTiers tiers={smaTiers} note={smaNote} />
      </div>
      <div style={{ marginTop: "var(--space-8)" }}>
        <CtaBar subtitle="Front door to back office — one trusted partner." action={<button onClick={() => go("quote")} style={{ background: "#fff", color: "var(--brand-deep)", border: "none", padding: "0.8rem 1.4rem", borderRadius: "8px", fontFamily: "var(--font-body)", fontWeight: 700, cursor: "pointer" }}>Book a Walkthrough</button>} />
      </div>
    </div>
  );
}

/* ---------------- Industries index ---------------- */
function Industries({ go }) {
  return (
    <div style={{ ...WRAP, padding: "var(--space-7) var(--space-6) var(--space-8)" }}>
      <SectionHeading>Industries we serve</SectionHeading>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-4)", marginTop: "var(--space-6)" }}>
        {industries.map((o) => (
          <button key={o.slug} onClick={() => go("ind:" + o.slug)} style={{ textAlign: "left", background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "12px", padding: "var(--space-5)", cursor: "pointer", boxShadow: "0 1px 3px rgba(26,34,48,0.06)" }}>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-deep)" }}>{o.audience}</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--ink)", margin: "0.3rem 0 0.4rem" }}>{o.subtitle}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "var(--text-body)", lineHeight: 1.5 }}>{o.intro.slice(0, 120)}…</div>
            <div style={{ marginTop: "var(--space-3)", color: "var(--brand-deep)", fontWeight: 600, fontSize: "0.9rem" }}>View industry →</div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Industry detail ---------------- */
function IndustryDetail({ slug, go }) {
  const o = offerings[slug];
  if (!o) return null;
  return (
    <div style={{ ...WRAP, padding: "var(--space-7) var(--space-6) var(--space-8)" }}>
      <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--brand-deep)" }}>{o.audience}</span>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2.8rem", color: "var(--ink)", margin: "0.3rem 0 0.2rem" }}>{o.title}</h1>
      <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", color: "var(--brand-deep)", margin: "0 0 var(--space-5)" }}>{o.subtitle}</p>
      <IntroBanner icon={<span>🏢</span>}>{o.intro}</IntroBanner>
      <div style={{ margin: "var(--space-7) 0 var(--space-6)" }}><SectionHeading>{o.sectionTitle}</SectionHeading></div>
      <PillarGrid pillars={o.pillars} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)", marginTop: "var(--space-7)", alignItems: "start" }}>
        <div style={{ background: "var(--gray-50)", border: "1px solid var(--line)", borderRadius: "12px", padding: "var(--space-5)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", color: "var(--ink)", margin: "0 0 var(--space-3)" }}>{o.support.title}</h3>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {o.support.items.map((it) => (
              <li key={it} style={{ display: "flex", gap: "0.6rem", fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "var(--ink)" }}><span style={{ color: "var(--brand-deep)" }}>▪</span>{it}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", color: "var(--ink)", margin: "0 0 var(--space-3)" }}>Response tiers</h3>
          <SmaTiers tiers={smaTiers} note={smaNote} />
          <a href={"." + o.onePager} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "var(--space-4)", color: "var(--brand-deep)", fontFamily: "var(--font-body)", fontWeight: 600, textDecoration: "none" }}><I name="printer" size={16} /> View / print this one-pager</a>
        </div>
      </div>
      <div style={{ marginTop: "var(--space-8)" }}>
        <CtaBar title={"Let's scope your " + o.audience.replace(/^For /, "").toLowerCase()} subtitle="Book a walkthrough and we'll quote to one standard."
          action={<button onClick={() => go("quote")} style={{ background: "#fff", color: "var(--brand-deep)", border: "none", padding: "0.8rem 1.4rem", borderRadius: "8px", fontFamily: "var(--font-body)", fontWeight: 700, cursor: "pointer" }}>Book a Walkthrough</button>} />
      </div>
    </div>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <div style={{ ...WRAP, padding: "var(--space-7) var(--space-6) var(--space-8)" }}>
      <SectionHeading>About {SITE.brand}</SectionHeading>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", lineHeight: 1.6, color: "var(--text-body)", maxWidth: 700, marginTop: "var(--space-5)" }}>
        {SITE.brand} is the commercial division of {SITE.legalEntity}. We design, install and maintain integrated security, video, access, networking, front-desk and AV systems — one accountable local team, front door to back office.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)", marginTop: "var(--space-7)" }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", color: "var(--ink)" }}>Service area</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "var(--space-3)" }}>
            {SITE.serviceArea.map((s) => <span key={s} style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", background: "var(--gray-50)", border: "1px solid var(--line)", borderRadius: "999px", padding: "0.3rem 0.8rem", color: "var(--ink)" }}>{s}</span>)}
          </div>
        </div>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", color: "var(--ink)" }}>Ecosystems &amp; licensing</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-body)", margin: "var(--space-3) 0" }}>{SITE.ecosystems.join(" · ")}</p>
          {SITE.licenses.map((l) => <div key={l} style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--ink)" }}>{l}</div>)}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Contact / Quote ---------------- */
function Contact({ quote }) {
  const [sent, setSent] = React.useState(false);
  const field = { border: "1px solid var(--border-strong)", borderRadius: "8px", padding: "0.6rem 0.75rem", fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--ink)", width: "100%", boxSizing: "border-box" };
  const lab = { fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.3rem", display: "block" };
  return (
    <div style={{ ...WRAP, padding: "var(--space-7) var(--space-6) var(--space-8)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)" }}>
      <div>
        <SectionHeading>{quote ? "Book a Walkthrough" : "Contact"}</SectionHeading>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "var(--text-body)", margin: "var(--space-5) 0", maxWidth: 420 }}>
          Tell us about the site and what you're protecting or connecting. A licensed integrator replies within one business day.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--ink)" }}>
          <span style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}><I name="phone" size={18} /> Office {SITE.phoneOffice} · Mobile {SITE.phoneMobile}</span>
          <span style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}><I name="mail" size={18} /> {SITE.email}</span>
          <span style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}><I name="map-pin" size={18} /> {SITE.city}</span>
        </div>
        <div style={{ marginTop: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <img src="../../assets/qr/qr-contact-vcard.svg" alt="vCard QR" style={{ width: 96, height: 96, border: "1px solid var(--line)", borderRadius: "8px", padding: 4, background: "#fff" }} />
          <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-muted)" }}>Scan to save our contact card.<br/>Works offline — vCard encoded in the QR.</div>
        </div>
      </div>
      <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "12px", boxShadow: "0 6px 18px rgba(26,34,48,0.08)", overflow: "hidden" }}>
        <div style={{ height: 6, background: "var(--grad-rule)" }} />
        <div style={{ padding: "var(--space-5)" }}>
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "var(--space-3)", minHeight: 320, textAlign: "center" }}>
              <I name="check-circle-2" size={44} color="var(--acc)" />
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.4rem", color: "var(--ink)", margin: 0 }}>Request received</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "var(--text-body)", margin: 0 }}>We'll be in touch within one business day.</p>
              <CTA kind="outline" size="sm" onClick={() => setSent(false)}>Send another</CTA>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <div><label style={lab}>Name</label><input style={field} placeholder="Jordan Vega" required /></div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
                <div><label style={lab}>Email</label><input style={field} type="email" placeholder="you@company.com" required /></div>
                <div><label style={lab}>Phone</label><input style={field} placeholder="778-…" /></div>
              </div>
              <div><label style={lab}>Type</label>
                <select style={field} defaultValue="">
                  <option value="" disabled>Select…</option>
                  {["Restaurant", "Retail / Pet", "Small business", "Office", "Clinic", "School / Campus", "Other"].map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div><label style={lab}>What do you need?</label><textarea rows={3} style={{ ...field, resize: "vertical" }} placeholder="e.g. 12-camera retrofit + access control for a warehouse" /></div>
              <CTA size="md" onClick={() => {}}>Request walkthrough</CTA>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- App ---------------- */
function WebsiteApp() {
  const [route, setRoute] = React.useState("home");
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0 }); };
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  const page = route.startsWith("ind:") ? "industries" : route;
  let view;
  if (route === "home") view = <Home go={go} />;
  else if (route === "services") view = <Services go={go} />;
  else if (route === "industries") view = <Industries go={go} />;
  else if (route.startsWith("ind:")) view = <IndustryDetail slug={route.slice(4)} go={go} />;
  else if (route === "about") view = <About />;
  else if (route === "contact") view = <Contact />;
  else if (route === "quote") view = <Contact quote />;
  else view = <Home go={go} />;
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh", fontFamily: "var(--font-body)" }}>
      <Masthead page={page} go={go} />
      {view}
      <SiteFooter go={go} />
    </div>
  );
}

window.ERTechWebsiteApp = WebsiteApp;
})();
