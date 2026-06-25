import React from "react";

/**
 * CtaBar — repeating "Schedule a walkthrough" call-to-action band.
 * Uses the dark header gradient; cta is rendered as a passed-in node (e.g. a Button or link).
 */
export function CtaBar({ title = "Schedule a walkthrough", subtitle, action = null, style = {} }) {
  return (
    <div style={{
      background: "var(--grad-header-left)", color: "#fff", borderRadius: "12px",
      padding: "1.5rem 1.6rem", display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "1.2rem", flexWrap: "wrap", ...style,
    }}>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.1 }}>{title}</div>
        {subtitle && <div style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "rgba(255,255,255,0.85)", marginTop: "0.3rem" }}>{subtitle}</div>}
      </div>
      {action}
    </div>
  );
}
