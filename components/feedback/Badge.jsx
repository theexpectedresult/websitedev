import React from "react";

/** Small count / label badge. */
export function Badge({ children, tone = "brand", style = {} }) {
  const map = {
    brand: { color: "var(--text-on-accent)", bg: "var(--brand-deep)" },
    ink: { color: "var(--text-on-dark)", bg: "var(--ink)" },
    soft: { color: "var(--brand-deep)", bg: "var(--brand-soft)" },
    gold: { color: "#5a4708", bg: "#f7e6b0" },
    outline: { color: "var(--text-body)", bg: "transparent", border: "1px solid var(--border-strong)" },
  };
  const s = map[tone] || map.brand;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      minWidth: "1.25rem", padding: "0.1rem 0.45rem", borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-semibold)",
      lineHeight: 1.5, ...s, ...style,
    }}>
      {children}
    </span>
  );
}
