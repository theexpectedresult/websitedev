import React from "react";

/**
 * Underline tabs with a teal active indicator.
 * Controlled (pass value + onChange) or uncontrolled (defaultValue).
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, style = {} }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const select = (id) => { if (value === undefined) setInternal(id); onChange && onChange(id); };

  return (
    <div role="tablist" style={{
      display: "flex", gap: "var(--space-5)",
      borderBottom: "1px solid var(--border)", fontFamily: "var(--font-sans)", ...style,
    }}>
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={on}
            onClick={() => select(t.id)}
            style={{
              appearance: "none", background: "none", border: "none", cursor: "pointer",
              padding: "0.65rem 0.15rem", marginBottom: "-1px",
              fontSize: "var(--fs-sm)", fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
              color: on ? "var(--text-strong)" : "var(--text-muted)",
              borderBottom: `2px solid ${on ? "var(--brand-deep)" : "transparent"}`,
              transition: "color var(--dur-base) var(--ease), border-color var(--dur-base) var(--ease)",
              display: "inline-flex", alignItems: "center", gap: "0.45rem",
            }}
          >
            {t.label}
            {t.badge != null && (
              <span style={{
                fontSize: "var(--fs-xs)", fontWeight: "var(--fw-semibold)",
                background: on ? "var(--brand-soft)" : "var(--gray-100)",
                color: on ? "var(--brand-deep)" : "var(--text-muted)",
                borderRadius: "var(--radius-pill)", padding: "0.05rem 0.45rem",
              }}>{t.badge}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
