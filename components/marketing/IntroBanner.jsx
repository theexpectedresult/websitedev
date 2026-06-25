import React from "react";

/**
 * IntroBanner — the amber→purple→indigo page-intro banner from the pamphlets.
 */
export function IntroBanner({ icon = null, children, style = {} }) {
  return (
    <div style={{
      background: "var(--grad-intro)", color: "#fff", borderRadius: "12px",
      padding: "1.1rem 1.3rem", display: "flex", gap: "1rem", alignItems: "center",
      boxShadow: "0 6px 18px rgba(122,63,126,0.22)", ...style,
    }}>
      {icon && <span style={{ flex: "none", display: "inline-flex", fontSize: "1.6rem", lineHeight: 1 }}>{icon}</span>}
      <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.5 }}>{children}</p>
    </div>
  );
}
