import React from "react";

/** Circular avatar with image or initials, brand-tinted fallback. */
export function Avatar({ src, name = "", size = 40, style = {} }) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  const dim = { width: `${size}px`, height: `${size}px` };
  if (src) {
    return <img src={src} alt={name} style={{ ...dim, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--border)", ...style }} />;
  }
  return (
    <span style={{
      ...dim, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center",
      background: "var(--brand-soft)", color: "var(--brand-deep)", fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)", fontSize: `${Math.round(size * 0.38)}px`,
      border: "1px solid var(--brand-tint)", ...style,
    }}>
      {initials || "?"}
    </span>
  );
}
