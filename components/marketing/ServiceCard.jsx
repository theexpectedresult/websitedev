import React from "react";

/**
 * ServiceCard — the signature ER Tech pamphlet card.
 * A coloured gradient "cap" (per-pillar accent) over a bulleted body with
 * accent-coloured bullet dots. Web + print share this exact treatment.
 *
 * accent: "sec" | "vid" | "acc" | "net" | "rec" | "av" → drives cap gradient + dots.
 */
export function ServiceCard({ accent = "sec", icon = null, title, items = [], style = {} }) {
  return (
    <div data-accent={accent} style={{
      background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "12px",
      overflow: "hidden", boxShadow: "0 1px 3px rgba(26,34,48,0.08)",
      display: "flex", flexDirection: "column", ...style,
    }}>
      <div style={{
        background: "var(--cap, var(--accent))", color: "#fff",
        padding: "0.7rem 1rem", display: "flex", alignItems: "center", gap: "0.6rem",
      }}>
        {icon && <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span>}
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "0.01em", lineHeight: 1.1 }}>{title}</span>
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: "0.9rem 1rem 1.1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.4, color: "var(--ink)" }}>
            <span style={{ flex: "none", width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", marginTop: "0.42rem" }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
