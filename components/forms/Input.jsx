import React from "react";

/**
 * Text input with label, hint, and error states. Teal focus ring.
 */
export function Input({
  label,
  hint,
  error,
  id,
  iconLeft = null,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);

  const wrap = { display: "flex", flexDirection: "column", gap: "0.35rem", fontFamily: "var(--font-sans)" };
  const lab = { fontSize: "var(--fs-sm)", fontWeight: "var(--fw-medium)", color: "var(--text-strong)" };
  const field = {
    display: "flex", alignItems: "center", gap: "0.5rem",
    background: "var(--white)",
    border: `1px solid ${error ? "var(--danger)" : focused ? "var(--brand-deep)" : "var(--border-strong)"}`,
    borderRadius: "var(--radius-md)",
    padding: "0 0.75rem",
    boxShadow: focused ? "var(--shadow-focus)" : "none",
    transition: "border-color var(--dur-base) var(--ease), box-shadow var(--dur-base) var(--ease)",
  };
  const input = {
    flex: 1, border: "none", outline: "none", background: "transparent",
    padding: "0.6rem 0", fontSize: "var(--fs-sm)", fontFamily: "var(--font-sans)",
    color: "var(--text-body)", width: "100%",
  };

  return (
    <div style={{ ...wrap, ...style }}>
      {label && <label htmlFor={inputId} style={lab}>{label}</label>}
      <div style={field}>
        {iconLeft}
        <input
          id={inputId}
          style={input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: "var(--fs-xs)", color: error ? "var(--danger)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
