import React from "react";

/** Inline alert / callout with left accent bar in the matching status color. */
export function Alert({ tone = "info", title, children, style = {} }) {
  const map = {
    info: { color: "var(--blue-700)", bg: "var(--cyan-50)", accent: "var(--brand-cyan)" },
    success: { color: "var(--success)", bg: "var(--success-surface)", accent: "var(--success)" },
    warning: { color: "var(--warning)", bg: "var(--warning-surface)", accent: "var(--warning)" },
    danger: { color: "var(--danger)", bg: "var(--danger-surface)", accent: "var(--danger)" },
  };
  const s = map[tone] || map.info;
  return (
    <div style={{
      display: "flex", gap: "0.75rem", padding: "0.85rem 1rem",
      background: s.bg, borderRadius: "var(--radius-md)",
      borderLeft: `4px solid ${s.accent}`, fontFamily: "var(--font-sans)", ...style,
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
        {title && <strong style={{ fontSize: "var(--fs-sm)", fontWeight: "var(--fw-semibold)", color: s.color }}>{title}</strong>}
        {children && <span style={{ fontSize: "var(--fs-sm)", color: "var(--text-body)", lineHeight: "var(--lh-base)" }}>{children}</span>}
      </div>
    </div>
  );
}
