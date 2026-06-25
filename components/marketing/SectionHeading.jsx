import React from "react";

/**
 * SectionHeading — pamphlet section title with the brand gradient rule beneath.
 */
export function SectionHeading({ children, align = "left", style = {} }) {
  return (
    <div style={{ textAlign: align, ...style }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", letterSpacing: "0.01em", color: "var(--ink)", margin: 0, textTransform: "uppercase" }}>{children}</h2>
      <div style={{ height: 4, borderRadius: "999px", background: "var(--grad-rule)", marginTop: "0.7rem", width: align === "center" ? "120px" : "100%", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }} />
    </div>
  );
}
