import React from "react";

/**
 * Status chip using the ER Tech tracker palette.
 * complete=green, progress=cream, parts=peach, blocked=red, info=teal, neutral=slate.
 */
export function StatusChip({ status = "info", children, dot = true, style = {} }) {
  const map = {
    complete: { color: "var(--success)", bg: "var(--success-surface)" },
    progress: { color: "var(--warning)", bg: "var(--warning-surface)" },
    parts: { color: "var(--attention)", bg: "var(--attention-surface)" },
    blocked: { color: "var(--danger)", bg: "var(--danger-surface)" },
    info: { color: "var(--brand-deep)", bg: "var(--brand-soft)" },
    neutral: { color: "var(--gray-700)", bg: "var(--gray-100)" },
  };
  const s = map[status] || map.info;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "0.4rem",
      padding: "0.2rem 0.6rem", borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)", fontSize: "var(--fs-xs)", fontWeight: "var(--fw-semibold)",
      lineHeight: 1.6, color: s.color, background: s.bg, ...style,
    }}>
      {dot && <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "currentColor" }} />}
      {children}
    </span>
  );
}
