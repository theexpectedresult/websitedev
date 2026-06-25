import React from "react";

/**
 * ER Tech Services primary button.
 * Variants reuse the canonical palette: deep teal (primary), ink (secondary),
 * outline + ghost for low-emphasis actions.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "0.4rem 0.85rem", fontSize: "var(--fs-xs)", gap: "0.4rem" },
    md: { padding: "0.65rem 1.1rem", fontSize: "var(--fs-sm)", gap: "0.5rem" },
    lg: { padding: "0.85rem 1.5rem", fontSize: "var(--fs-base)", gap: "0.5rem" },
  };

  const variants = {
    primary: { background: "var(--brand-deep)", color: "var(--text-on-accent)", border: "1px solid transparent", boxShadow: "var(--shadow-sm)" },
    secondary: { background: "var(--ink)", color: "var(--text-on-accent)", border: "1px solid transparent", boxShadow: "var(--shadow-sm)" },
    outline: { background: "var(--white)", color: "var(--brand-deep)", border: "1px solid var(--border-strong)", boxShadow: "none" },
    ghost: { background: "transparent", color: "var(--brand-deep)", border: "1px solid transparent", boxShadow: "none" },
    danger: { background: "var(--danger)", color: "var(--white)", border: "1px solid transparent", boxShadow: "var(--shadow-sm)" },
  };

  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-semibold)",
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-base) var(--ease), transform var(--dur-fast) var(--ease), box-shadow var(--dur-base) var(--ease)",
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const hoverBg = {
    primary: "var(--color-link-hover)",
    secondary: "#2c3647",
    outline: "var(--gray-50)",
    ghost: "var(--brand-soft)",
    danger: "#B91C1C",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      style={base}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = hoverBg[variant]; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.background = variants[variant].background; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "translateY(1px)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
