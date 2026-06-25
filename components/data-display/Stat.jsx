import React from "react";

/** KPI / metric stat block for dashboards. */
export function Stat({ label, value, unit, delta, deltaTone = "up", icon = null, style = {} }) {
  const tone = deltaTone === "up" ? "var(--success)" : deltaTone === "down" ? "var(--danger)" : "var(--text-muted)";
  return (
    <div style={{ fontFamily: "var(--font-sans)", display: "flex", flexDirection: "column", gap: "0.35rem", ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        {icon && <span style={{ color: "var(--brand-deep)", display: "inline-flex" }}>{icon}</span>}
        <span style={{ fontSize: "var(--fs-xs)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.3rem" }}>
        <span style={{ fontSize: "var(--fs-3xl)", fontWeight: "var(--fw-bold)", color: "var(--text-strong)", lineHeight: 1 }}>{value}</span>
        {unit && <span style={{ fontSize: "var(--fs-sm)", color: "var(--text-muted)" }}>{unit}</span>}
      </div>
      {delta && <span style={{ fontSize: "var(--fs-xs)", fontWeight: "var(--fw-medium)", color: tone }}>{delta}</span>}
    </div>
  );
}
