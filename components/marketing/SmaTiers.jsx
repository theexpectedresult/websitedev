import React from "react";

/**
 * SmaTiers — Service & Maintenance Agreement strip.
 * Standard / Priority / Premium (gold). Premium tier highlighted.
 */
export function SmaTiers({ tiers, note, style = {} }) {
  const data = tiers || [
    { name: "Standard", response: "Next business day" },
    { name: "Priority", response: "Same-day response" },
    { name: "Premium", response: "4-hr · 24/7", premium: true },
  ];
  const colorFor = (t) => t.premium ? "var(--sma-premium)" : t.name === "Priority" ? "var(--sma-priority)" : "var(--sma-standard)";
  return (
    <div style={{ ...style }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${data.length}, 1fr)`, gap: "0.85rem" }}>
        {data.map((t) => {
          const c = colorFor(t);
          return (
            <div key={t.name} style={{
              borderRadius: "12px", overflow: "hidden", background: "var(--paper)",
              border: t.premium ? `2px solid ${c}` : "1px solid var(--line)",
              boxShadow: t.premium ? "0 6px 18px rgba(202,162,51,0.22)" : "0 1px 3px rgba(26,34,48,0.07)",
            }}>
              <div style={{ height: 6, background: c }} />
              <div style={{ padding: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--ink)" }}>{t.name}</span>
                  {t.premium && <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: c, border: `1px solid ${c}`, borderRadius: "999px", padding: "1px 7px" }}>Top tier</span>}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", color: "var(--text-body)" }}>{t.response}</div>
              </div>
            </div>
          );
        })}
      </div>
      {note && <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-muted)", margin: "0.85rem 0 0", fontStyle: "italic" }}>{note}</p>}
    </div>
  );
}
