import React from "react";

/**
 * Surface card — white, subtle border + soft shadow, ~12px radius.
 * Optional teal gradient accent bar on top.
 */
export function Card({ children, accent = false, padded = true, interactive = false, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: hover && interactive ? "var(--shadow-md)" : "var(--shadow-sm)",
        overflow: "hidden",
        transition: "box-shadow var(--dur-base) var(--ease), transform var(--dur-base) var(--ease)",
        transform: hover && interactive ? "translateY(-2px)" : "none",
        cursor: interactive ? "pointer" : "default",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {accent && <div style={{ height: "4px", background: "var(--brand-gradient)" }} />}
      <div style={{ padding: padded ? "var(--space-5)" : 0 }}>{children}</div>
    </div>
  );
}
