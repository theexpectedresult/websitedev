/* @ds-bundle: {"format":3,"namespace":"ERTechServicesDesignSystem_dceeff","components":[{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Stat","sourcePath":"components/data-display/Stat.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"StatusChip","sourcePath":"components/feedback/StatusChip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"CtaBar","sourcePath":"components/marketing/CtaBar.jsx"},{"name":"IntroBanner","sourcePath":"components/marketing/IntroBanner.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"SmaTiers","sourcePath":"components/marketing/SmaTiers.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ICONS","sourcePath":"website-starter/src/data/services.ts"},{"name":"SITE","sourcePath":"website-starter/src/data/site.ts"}],"sourceHashes":{"components/data-display/Avatar.jsx":"cf54b4edae22","components/data-display/Card.jsx":"66d1eb44b5a4","components/data-display/Stat.jsx":"c85d8c2fd52a","components/feedback/Alert.jsx":"687428303c3e","components/feedback/Badge.jsx":"9d3e51086cf8","components/feedback/StatusChip.jsx":"77d32167520f","components/forms/Button.jsx":"2986aa27ed99","components/forms/Input.jsx":"da88b322eec0","components/forms/Switch.jsx":"48ec9125ab7f","components/marketing/CtaBar.jsx":"709bddf5dfb6","components/marketing/IntroBanner.jsx":"4d29373c0fa5","components/marketing/SectionHeading.jsx":"02979dfa94d1","components/marketing/ServiceCard.jsx":"a657d19f2c38","components/marketing/SmaTiers.jsx":"00ccc0492197","components/navigation/Tabs.jsx":"b43cf19d1782","ui_kits/portal/PortalApp.jsx":"c605695c64fb","ui_kits/website/WebsiteApp.jsx":"85813b19f1ed","ui_kits/website/content.js":"120da4cc48f5","uploads/tailwind.config.js":"567c7b7c1789","website-starter/src/data/services.ts":"f264a8eab956","website-starter/src/data/site.ts":"38ab9faa48fa"},"inlinedExternals":[],"unexposedExports":[{"name":"industries","sourcePath":"website-starter/src/data/services.ts"},{"name":"offerings","sourcePath":"website-starter/src/data/services.ts"},{"name":"ongoingSupport","sourcePath":"website-starter/src/data/services.ts"},{"name":"smaNote","sourcePath":"website-starter/src/data/services.ts"},{"name":"smaTiers","sourcePath":"website-starter/src/data/services.ts"}]} */

(() => {

const __ds_ns = (window.ERTechServicesDesignSystem_dceeff = window.ERTechServicesDesignSystem_dceeff || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Avatar.jsx
try { (() => {
/** Circular avatar with image or initials, brand-tinted fallback. */
function Avatar({
  src,
  name = "",
  size = 40,
  style = {}
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  const dim = {
    width: `${size}px`,
    height: `${size}px`
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: name,
      style: {
        ...dim,
        borderRadius: "50%",
        objectFit: "cover",
        border: "1px solid var(--border)",
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...dim,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--brand-soft)",
      color: "var(--brand-deep)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: `${Math.round(size * 0.38)}px`,
      border: "1px solid var(--brand-tint)",
      ...style
    }
  }, initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card — white, subtle border + soft shadow, ~12px radius.
 * Optional teal gradient accent bar on top.
 */
function Card({
  children,
  accent = false,
  padded = true,
  interactive = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: hover && interactive ? "var(--shadow-md)" : "var(--shadow-sm)",
      overflow: "hidden",
      transition: "box-shadow var(--dur-base) var(--ease), transform var(--dur-base) var(--ease)",
      transform: hover && interactive ? "translateY(-2px)" : "none",
      cursor: interactive ? "pointer" : "default",
      fontFamily: "var(--font-sans)",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), accent && /*#__PURE__*/React.createElement("div", {
    style: {
      height: "4px",
      background: "var(--brand-gradient)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padded ? "var(--space-5)" : 0
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Stat.jsx
try { (() => {
/** KPI / metric stat block for dashboards. */
function Stat({
  label,
  value,
  unit,
  delta,
  deltaTone = "up",
  icon = null,
  style = {}
}) {
  const tone = deltaTone === "up" ? "var(--success)" : deltaTone === "down" ? "var(--danger)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      gap: "0.35rem",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-deep)",
      display: "inline-flex"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "0.3rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-3xl)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)"
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-medium)",
      color: tone
    }
  }, delta));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/** Inline alert / callout with left accent bar in the matching status color. */
function Alert({
  tone = "info",
  title,
  children,
  style = {}
}) {
  const map = {
    info: {
      color: "var(--blue-700)",
      bg: "var(--cyan-50)",
      accent: "var(--brand-cyan)"
    },
    success: {
      color: "var(--success)",
      bg: "var(--success-surface)",
      accent: "var(--success)"
    },
    warning: {
      color: "var(--warning)",
      bg: "var(--warning-surface)",
      accent: "var(--warning)"
    },
    danger: {
      color: "var(--danger)",
      bg: "var(--danger-surface)",
      accent: "var(--danger)"
    }
  };
  const s = map[tone] || map.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.75rem",
      padding: "0.85rem 1rem",
      background: s.bg,
      borderRadius: "var(--radius-md)",
      borderLeft: `4px solid ${s.accent}`,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.15rem"
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: s.color
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)",
      lineHeight: "var(--lh-base)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/** Small count / label badge. */
function Badge({
  children,
  tone = "brand",
  style = {}
}) {
  const map = {
    brand: {
      color: "var(--text-on-accent)",
      bg: "var(--brand-deep)"
    },
    ink: {
      color: "var(--text-on-dark)",
      bg: "var(--ink)"
    },
    soft: {
      color: "var(--brand-deep)",
      bg: "var(--brand-soft)"
    },
    gold: {
      color: "#5a4708",
      bg: "#f7e6b0"
    },
    outline: {
      color: "var(--text-body)",
      bg: "transparent",
      border: "1px solid var(--border-strong)"
    }
  };
  const s = map[tone] || map.brand;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "1.25rem",
      padding: "0.1rem 0.45rem",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1.5,
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusChip.jsx
try { (() => {
/**
 * Status chip using the ER Tech tracker palette.
 * complete=green, progress=cream, parts=peach, blocked=red, info=teal, neutral=slate.
 */
function StatusChip({
  status = "info",
  children,
  dot = true,
  style = {}
}) {
  const map = {
    complete: {
      color: "var(--success)",
      bg: "var(--success-surface)"
    },
    progress: {
      color: "var(--warning)",
      bg: "var(--warning-surface)"
    },
    parts: {
      color: "var(--attention)",
      bg: "var(--attention-surface)"
    },
    blocked: {
      color: "var(--danger)",
      bg: "var(--danger-surface)"
    },
    info: {
      color: "var(--brand-deep)",
      bg: "var(--brand-soft)"
    },
    neutral: {
      color: "var(--gray-700)",
      bg: "var(--gray-100)"
    }
  };
  const s = map[status] || map.info;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.2rem 0.6rem",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1.6,
      color: s.color,
      background: s.bg,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ER Tech Services primary button.
 * Variants reuse the canonical palette: deep teal (primary), ink (secondary),
 * outline + ghost for low-emphasis actions.
 */
function Button({
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
    sm: {
      padding: "0.4rem 0.85rem",
      fontSize: "var(--fs-xs)",
      gap: "0.4rem"
    },
    md: {
      padding: "0.65rem 1.1rem",
      fontSize: "var(--fs-sm)",
      gap: "0.5rem"
    },
    lg: {
      padding: "0.85rem 1.5rem",
      fontSize: "var(--fs-base)",
      gap: "0.5rem"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand-deep)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--ink)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "var(--white)",
      color: "var(--brand-deep)",
      border: "1px solid var(--border-strong)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-deep)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    danger: {
      background: "var(--danger)",
      color: "var(--white)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    }
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
    ...style
  };
  const hoverBg = {
    primary: "var(--color-link-hover)",
    secondary: "#2c3647",
    outline: "var(--gray-50)",
    ghost: "var(--brand-soft)",
    danger: "#B91C1C"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hoverBg[variant];
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants[variant].background;
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "translateY(1px)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "translateY(0)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with label, hint, and error states. Teal focus ring.
 */
function Input({
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
  const wrap = {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
    fontFamily: "var(--font-sans)"
  };
  const lab = {
    fontSize: "var(--fs-sm)",
    fontWeight: "var(--fw-medium)",
    color: "var(--text-strong)"
  };
  const field = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "var(--white)",
    border: `1px solid ${error ? "var(--danger)" : focused ? "var(--brand-deep)" : "var(--border-strong)"}`,
    borderRadius: "var(--radius-md)",
    padding: "0 0.75rem",
    boxShadow: focused ? "var(--shadow-focus)" : "none",
    transition: "border-color var(--dur-base) var(--ease), box-shadow var(--dur-base) var(--ease)"
  };
  const input = {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    padding: "0.6rem 0",
    fontSize: "var(--fs-sm)",
    fontFamily: "var(--font-sans)",
    color: "var(--text-body)",
    width: "100%"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: lab
  }, label), /*#__PURE__*/React.createElement("div", {
    style: field
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: input,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch in brand teal. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  id
}) {
  const switchId = id || (label ? `sw-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const track = {
    width: "40px",
    height: "22px",
    borderRadius: "var(--radius-pill)",
    background: checked ? "var(--brand-deep)" : "var(--gray-300)",
    position: "relative",
    transition: "background var(--dur-base) var(--ease)",
    cursor: disabled ? "not-allowed" : "pointer",
    flex: "none",
    opacity: disabled ? 0.5 : 1
  };
  const knob = {
    position: "absolute",
    top: "2px",
    left: checked ? "20px" : "2px",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    background: "var(--white)",
    boxShadow: "var(--shadow-sm)",
    transition: "left var(--dur-base) var(--ease)"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    style: track,
    onClick: () => !disabled && onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("span", {
    style: knob
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    id: switchId,
    type: "checkbox",
    checked: checked,
    onChange: () => {},
    style: {
      display: "none"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CtaBar.jsx
try { (() => {
/**
 * CtaBar — repeating "Schedule a walkthrough" call-to-action band.
 * Uses the dark header gradient; cta is rendered as a passed-in node (e.g. a Button or link).
 */
function CtaBar({
  title = "Schedule a walkthrough",
  subtitle,
  action = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--grad-header-left)",
      color: "#fff",
      borderRadius: "12px",
      padding: "1.5rem 1.6rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1.2rem",
      flexWrap: "wrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.1
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.95rem",
      color: "rgba(255,255,255,0.85)",
      marginTop: "0.3rem"
    }
  }, subtitle)), action);
}
Object.assign(__ds_scope, { CtaBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CtaBar.jsx", error: String((e && e.message) || e) }); }

// components/marketing/IntroBanner.jsx
try { (() => {
/**
 * IntroBanner — the amber→purple→indigo page-intro banner from the pamphlets.
 */
function IntroBanner({
  icon = null,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--grad-intro)",
      color: "#fff",
      borderRadius: "12px",
      padding: "1.1rem 1.3rem",
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      boxShadow: "0 6px 18px rgba(122,63,126,0.22)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "inline-flex",
      fontSize: "1.6rem",
      lineHeight: 1
    }
  }, icon), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "1rem",
      lineHeight: 1.5
    }
  }, children));
}
Object.assign(__ds_scope, { IntroBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/IntroBanner.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — pamphlet section title with the brand gradient rule beneath.
 */
function SectionHeading({
  children,
  align = "left",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "0.01em",
      color: "var(--ink)",
      margin: 0,
      textTransform: "uppercase"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: "999px",
      background: "var(--grad-rule)",
      marginTop: "0.7rem",
      width: align === "center" ? "120px" : "100%",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
/**
 * ServiceCard — the signature ER Tech pamphlet card.
 * A coloured gradient "cap" (per-pillar accent) over a bulleted body with
 * accent-coloured bullet dots. Web + print share this exact treatment.
 *
 * accent: "sec" | "vid" | "acc" | "net" | "rec" | "av" → drives cap gradient + dots.
 */
function ServiceCard({
  accent = "sec",
  icon = null,
  title,
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-accent": accent,
    style: {
      background: "var(--paper)",
      border: "1px solid var(--line)",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(26,34,48,0.08)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cap, var(--accent))",
      color: "#fff",
      padding: "0.7rem 1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.6rem"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.15rem",
      letterSpacing: "0.01em",
      lineHeight: 1.1
    }
  }, title)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: "0.9rem 1rem 1.1rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "0.6rem",
      alignItems: "flex-start",
      fontFamily: "var(--font-body)",
      fontSize: "0.92rem",
      lineHeight: 1.4,
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--accent)",
      marginTop: "0.42rem"
    }
  }), /*#__PURE__*/React.createElement("span", null, it)))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SmaTiers.jsx
try { (() => {
/**
 * SmaTiers — Service & Maintenance Agreement strip.
 * Standard / Priority / Premium (gold). Premium tier highlighted.
 */
function SmaTiers({
  tiers,
  note,
  style = {}
}) {
  const data = tiers || [{
    name: "Standard",
    response: "Next business day"
  }, {
    name: "Priority",
    response: "Same-day response"
  }, {
    name: "Premium",
    response: "4-hr · 24/7",
    premium: true
  }];
  const colorFor = t => t.premium ? "var(--sma-premium)" : t.name === "Priority" ? "var(--sma-priority)" : "var(--sma-standard)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${data.length}, 1fr)`,
      gap: "0.85rem"
    }
  }, data.map(t => {
    const c = colorFor(t);
    return /*#__PURE__*/React.createElement("div", {
      key: t.name,
      style: {
        borderRadius: "12px",
        overflow: "hidden",
        background: "var(--paper)",
        border: t.premium ? `2px solid ${c}` : "1px solid var(--line)",
        boxShadow: t.premium ? "0 6px 18px rgba(202,162,51,0.22)" : "0 1px 3px rgba(26,34,48,0.07)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: c
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "1rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "0.3rem"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.1rem",
        color: "var(--ink)"
      }
    }, t.name), t.premium && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "0.62rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: c,
        border: `1px solid ${c}`,
        borderRadius: "999px",
        padding: "1px 7px"
      }
    }, "Top tier")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "0.92rem",
        color: "var(--text-body)"
      }
    }, t.response)));
  })), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.85rem",
      color: "var(--text-muted)",
      margin: "0.85rem 0 0",
      fontStyle: "italic"
    }
  }, note));
}
Object.assign(__ds_scope, { SmaTiers });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SmaTiers.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Underline tabs with a teal active indicator.
 * Controlled (pass value + onChange) or uncontrolled (defaultValue).
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-5)",
      borderBottom: "1px solid var(--border)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.id),
      style: {
        appearance: "none",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0.65rem 0.15rem",
        marginBottom: "-1px",
        fontSize: "var(--fs-sm)",
        fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
        color: on ? "var(--text-strong)" : "var(--text-muted)",
        borderBottom: `2px solid ${on ? "var(--brand-deep)" : "transparent"}`,
        transition: "color var(--dur-base) var(--ease), border-color var(--dur-base) var(--ease)",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.45rem"
      }
    }, t.label, t.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-xs)",
        fontWeight: "var(--fw-semibold)",
        background: on ? "var(--brand-soft)" : "var(--gray-100)",
        color: on ? "var(--brand-deep)" : "var(--text-muted)",
        borderRadius: "var(--radius-pill)",
        padding: "0.05rem 0.45rem"
      }
    }, t.badge));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalApp.jsx
try { (() => {
/* ER Tech Services — operations / project-tracker dashboard UI kit.
   Consumes design-system primitives. Lucide line icons via CDN. */
const PDS = window.ERTechServicesDesignSystem_dceeff;
const {
  Button,
  Input,
  Card,
  Stat,
  StatusChip,
  Badge,
  Avatar,
  Tabs
} = PDS;
function PIcon({
  name,
  size = 20,
  color = "var(--text-muted)",
  stroke = 1.9
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          "stroke-width": stroke
        },
        nameAttr: "data-lucide",
        icons: window.lucide.icons
      });
    }
  }, [name, size, color, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      width: size,
      height: size
    }
  });
}
const NAV = [["layout-dashboard", "Dashboard"], ["clipboard-list", "Work orders"], ["cctv", "Devices"], ["users", "Clients"], ["settings", "Settings"]];
const ORDERS = [["WO-2041", "Avigilon 12-cam retrofit", "Harbour Logistics", "complete", "Installed", "D. Kessler"], ["WO-2042", "Control4 whole-home AV", "Westview Residence", "progress", "In progress", "R. Singh"], ["WO-2043", "Access control — 6 doors", "Meridian Offices", "parts", "Needs parts", "A. Pham"], ["WO-2044", "Alarm.com monitoring setup", "Cedar Dental", "complete", "Installed", "D. Kessler"], ["WO-2045", "Araknis network refresh", "Lonsdale Studio", "blocked", "Blocked", "J. Vega"], ["WO-2046", "Crestron boardroom", "Pacific Capital", "info", "Scheduled", "R. Singh"]];
const DEVICES = [["Avigilon H5A", "Cameras", 248, 250, "complete"], ["DSC PowerSeries", "Alarm panels", 31, 31, "complete"], ["Araknis AN-310", "Network switches", 18, 19, "parts"], ["Control4 EA-5", "Controllers", 22, 22, "complete"]];
function Sidebar({
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 230,
      flex: "none",
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      display: "flex",
      flexDirection: "column",
      padding: "var(--space-5) var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "0 var(--space-2) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/ertech-favicon-192.png",
    alt: "",
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-base)",
      lineHeight: 1
    }
  }, "ER Tech", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-medium)",
      color: "rgba(255,255,255,0.6)"
    }
  }, "Operations"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, NAV.map(([icon, label]) => {
    const on = active === label;
    return /*#__PURE__*/React.createElement("button", {
      key: label,
      onClick: () => setActive(label),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "0.6rem 0.75rem",
        border: "none",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        textAlign: "left",
        background: on ? "rgba(57,198,192,0.18)" : "transparent",
        color: on ? "#fff" : "rgba(255,255,255,0.72)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-sm)",
        fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)"
      }
    }, /*#__PURE__*/React.createElement(PIcon, {
      name: icon,
      size: 18,
      color: on ? "var(--brand)" : "rgba(255,255,255,0.5)"
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "var(--space-3)",
      borderRadius: "var(--radius-md)",
      background: "rgba(255,255,255,0.05)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dana Kessler",
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-xs)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: "var(--fw-semibold)"
    }
  }, "Dana Kessler"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.55)"
    }
  }, "Lead integrator"))));
}
function TopBar({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      flex: "none",
      borderBottom: "1px solid var(--border)",
      background: "var(--white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--text-h3)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search work orders, sites\u2026",
    iconLeft: /*#__PURE__*/React.createElement(PIcon, {
      name: "search",
      size: 16,
      color: "var(--text-muted)"
    })
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(PIcon, {
      name: "plus",
      size: 16,
      color: "#fff"
    })
  }, "New work order")));
}
function StatRow() {
  const stats = [["clipboard-list", "Open work orders", "12", "+3 this week", "up"], ["cctv", "Devices online", "319", "of 322", "flat"], ["circle-alert", "Needs attention", "2", "1 blocked · 1 parts", "down"], ["check-circle-2", "Closed this month", "47", "+11 vs last", "up"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-4)"
    }
  }, stats.map(([icon, label, value, delta, tone]) => /*#__PURE__*/React.createElement(Card, {
    key: label
  }, /*#__PURE__*/React.createElement(Stat, {
    label: label,
    value: value,
    delta: delta,
    deltaTone: tone,
    icon: /*#__PURE__*/React.createElement(PIcon, {
      name: icon,
      size: 18,
      color: "var(--brand-deep)"
    })
  }))));
}
function OrdersTable({
  limit
}) {
  const rows = limit ? ORDERS.slice(0, limit) : ORDERS;
  const th = {
    textAlign: "left",
    fontSize: "var(--fs-xs)",
    fontWeight: "var(--fw-semibold)",
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    padding: "0 var(--space-4) var(--space-3)"
  };
  const td = {
    padding: "var(--space-3) var(--space-4)",
    fontSize: "var(--fs-sm)",
    color: "var(--text-body)",
    borderTop: "1px solid var(--border)"
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Order"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Project"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Client"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Owner"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(([id, proj, client, status, label, owner]) => /*#__PURE__*/React.createElement("tr", {
    key: id
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: "var(--font-mono)",
      color: "var(--text-strong)",
      fontWeight: "var(--fw-medium)"
    }
  }, id), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: "var(--text-strong)",
      fontWeight: "var(--fw-medium)"
    }
  }, proj), /*#__PURE__*/React.createElement("td", {
    style: td
  }, client), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: status
  }, label)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: owner,
    size: 26
  }), owner))))));
}
function DevicePanel() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, DEVICES.map(([name, kind, online, total, status]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-md)",
      background: "var(--brand-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "cpu",
    size: 18,
    color: "var(--brand-deep)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)"
    }
  }, kind)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-strong)"
    }
  }, online, "/", total), /*#__PURE__*/React.createElement(StatusChip, {
    status: status,
    dot: false
  }, online === total ? "All online" : "Check")))));
}
function Dashboard() {
  const [tab, setTab] = React.useState("active");
  const limit = tab === "active" ? 4 : undefined;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(StatRow, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5) var(--space-5) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--text-h3)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Work orders"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(PIcon, {
      name: "arrow-right",
      size: 16,
      color: "var(--brand-deep)"
    })
  }, "View all")), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: "active",
      label: "Active",
      badge: 4
    }, {
      id: "all",
      label: "All",
      badge: 6
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-2) var(--space-1) var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(OrdersTable, {
    limit: limit
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--text-h3)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Device fleet"), /*#__PURE__*/React.createElement(Badge, {
    tone: "soft"
  }, "99% up")), /*#__PURE__*/React.createElement(DevicePanel, null))));
}
function WorkOrdersPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(OrdersTable, null))));
}
function PortalApp() {
  const [active, setActive] = React.useState("Dashboard");
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      overflow: "hidden",
      fontFamily: "var(--font-sans)",
      background: "var(--bg-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: active
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, active === "Work orders" ? /*#__PURE__*/React.createElement(WorkOrdersPage, null) : /*#__PURE__*/React.createElement(Dashboard, null))));
}
window.ERTechPortalApp = PortalApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteApp.jsx
try { (() => {
/* ER Tech Services — commercial website UI kit (pamphlet design system).
   Content comes from content.js (window.ERTechData, derived from services.ts/site.ts).
   Components from window.ERTechServicesDesignSystem_dceeff. Lucide icons via CDN. */
(function () {
  const WDS = window.ERTechServicesDesignSystem_dceeff;
  const {
    ServiceCard,
    SmaTiers,
    IntroBanner,
    SectionHeading,
    CtaBar
  } = WDS;
  const {
    SITE,
    offerings,
    industries,
    smaTiers,
    smaNote
  } = window.ERTechData;
  const ICON_FOR = {
    shield: "shield",
    camera: "video",
    key: "key-round",
    network: "network",
    monitor: "monitor",
    speaker: "volume-2",
    sensor: "wind"
  };

  /* Lucide icon */
  function I({
    name,
    size = 20,
    color = "var(--brand-deep)",
    stroke = 2
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (ref.current && window.lucide) {
        ref.current.innerHTML = "";
        const el = document.createElement("i");
        el.setAttribute("data-lucide", name);
        ref.current.appendChild(el);
        window.lucide.createIcons({
          attrs: {
            width: size,
            height: size,
            stroke: color,
            "stroke-width": stroke
          }
        });
      }
    }, [name, size, color, stroke]);
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      style: {
        display: "inline-flex",
        width: size,
        height: size
      }
    });
  }

  /* Teal CTA button */
  function CTA({
    children,
    onClick,
    kind = "solid",
    size = "md",
    iconRight
  }) {
    const pad = size === "lg" ? "0.85rem 1.5rem" : size === "sm" ? "0.45rem 0.9rem" : "0.7rem 1.2rem";
    const fs = size === "lg" ? "1.05rem" : size === "sm" ? "0.85rem" : "0.95rem";
    const styles = kind === "solid" ? {
      background: "var(--brand-deep)",
      color: "#fff",
      border: "1px solid transparent"
    } : {
      background: "transparent",
      color: "var(--brand-deep)",
      border: "1.5px solid var(--brand-deep)"
    };
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        ...styles,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: pad,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: fs,
        borderRadius: "8px",
        cursor: "pointer",
        transition: "filter var(--dur-base) var(--ease)"
      },
      onMouseEnter: e => e.currentTarget.style.filter = "brightness(1.08)",
      onMouseLeave: e => e.currentTarget.style.filter = "none"
    }, children, iconRight);
  }
  const WRAP = {
    maxWidth: 1080,
    margin: "0 auto",
    padding: "0 var(--space-6)"
  };

  /* ---------------- Masthead ---------------- */
  function Masthead({
    page,
    go
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...WRAP,
        height: 76,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("home");
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.8rem",
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/ertech-logo-tech-services.svg",
      alt: "ER Tech Services",
      style: {
        height: 48
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "0.66rem",
        color: "var(--text-muted)",
        maxWidth: 130,
        lineHeight: 1.25
      }
    }, SITE.legalEntity)), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)"
      }
    }, SITE.nav.map(n => {
      const key = n.href === "/" ? "home" : n.href.replace(/\//g, "");
      if (n.cta) return /*#__PURE__*/React.createElement(CTA, {
        key: n.label,
        size: "sm",
        onClick: () => go("quote")
      }, n.label);
      return /*#__PURE__*/React.createElement("a", {
        key: n.label,
        href: "#",
        onClick: e => {
          e.preventDefault();
          go(key);
        },
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          fontWeight: 600,
          textDecoration: "none",
          color: page === key ? "var(--ink)" : "var(--text-muted)"
        }
      }, n.label);
    }))));
  }

  /* ---------------- Footer ---------------- */
  function SiteFooter({
    go
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--grad-footer)",
        color: "#e8edf3"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...WRAP,
        padding: "var(--space-7) var(--space-6)",
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr 1fr",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icons/ertech-favicon-192.png",
      alt: "",
      style: {
        height: 40,
        marginBottom: "var(--space-3)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.1rem",
        color: "#fff"
      }
    }, SITE.legalEntity), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "0.9rem",
        lineHeight: 1.5,
        margin: "0.4rem 0 0",
        maxWidth: 320
      }
    }, SITE.serviceAreaLine)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.9rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "#fff",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        marginBottom: "0.2rem"
      }
    }, "Contact"), /*#__PURE__*/React.createElement("span", null, SITE.city), /*#__PURE__*/React.createElement("span", null, "Office ", SITE.phoneOffice), /*#__PURE__*/React.createElement("span", null, "Mobile ", SITE.phoneMobile), /*#__PURE__*/React.createElement("span", null, SITE.email)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.9rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "#fff",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        marginBottom: "0.2rem"
      }
    }, "Licensing"), SITE.licenses.map(l => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem"
      }
    }, l)), /*#__PURE__*/React.createElement("a", {
      href: SITE.residential.url,
      style: {
        color: "var(--brand)",
        textDecoration: "none",
        marginTop: "0.5rem",
        fontWeight: 600
      }
    }, "Looking for home / residential? \u2192", /*#__PURE__*/React.createElement("br", null), SITE.residential.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid rgba(255,255,255,0.12)",
        padding: "var(--space-4)",
        textAlign: "center",
        fontSize: "0.78rem",
        color: "#9fb0c0"
      }
    }, "\xA9 2026 ", SITE.legalEntity, " \xB7 ", SITE.city));
  }

  /* ---------------- Pillar grid ---------------- */
  function PillarGrid({
    pillars
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--space-4)"
      }
    }, pillars.map(p => /*#__PURE__*/React.createElement(ServiceCard, {
      key: p.title,
      accent: p.accent,
      title: p.title,
      items: p.items,
      icon: /*#__PURE__*/React.createElement(I, {
        name: ICON_FOR[p.icon] || "circle",
        size: 20,
        color: "#fff"
      })
    })));
  }

  /* ---------------- Home ---------------- */
  function Home({
    go
  }) {
    const g = offerings.general;
    const promo = SITE.promos[0];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--grad-header-left)",
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...WRAP,
        padding: "var(--space-9) var(--space-6)",
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: "var(--space-7)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "0.8rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--brand)"
      }
    }, SITE.legalEntity), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "3.4rem",
        lineHeight: 1.04,
        margin: "0.6rem 0 0.8rem"
      }
    }, "Front door to back office \u2014", /*#__PURE__*/React.createElement("br", null), "under one roof."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "1.15rem",
        lineHeight: 1.5,
        color: "rgba(255,255,255,0.9)",
        maxWidth: 520,
        margin: 0
      }
    }, "One trusted partner for commercial security, video, access, networks, front-desk and AV \u2014 designed, installed and maintained to a single standard across Greater Vancouver."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        marginTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(CTA, {
      size: "lg",
      onClick: () => go("quote"),
      iconRight: /*#__PURE__*/React.createElement(I, {
        name: "arrow-right",
        size: 18,
        color: "#fff"
      })
    }, "Book a Walkthrough"), /*#__PURE__*/React.createElement("button", {
      onClick: () => go("services"),
      style: {
        background: "rgba(255,255,255,0.12)",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.3)",
        padding: "0.85rem 1.5rem",
        borderRadius: "8px",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: "1.05rem",
        cursor: "pointer"
      }
    }, "Explore services"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--grad-header-right)",
        borderRadius: "14px",
        padding: "var(--space-6)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.25)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/ertech-mark-mono.svg",
      alt: "ER",
      style: {
        height: 60,
        filter: "brightness(0) invert(1)",
        marginBottom: "var(--space-4)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.5rem",
        lineHeight: 1.15,
        marginBottom: "0.6rem"
      }
    }, "Six disciplines.", /*#__PURE__*/React.createElement("br", null), "One accountable team."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "0.9rem",
        color: "rgba(255,255,255,0.82)",
        margin: 0
      }
    }, SITE.ecosystems.slice(0, 6).join(" · "), " & more \u2014 integrated under one roof.")))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...WRAP,
        padding: "var(--space-8) var(--space-6) var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, null, g.sectionTitle), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(PillarGrid, {
      pillars: g.pillars
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...WRAP,
        padding: "var(--space-5) var(--space-6) var(--space-7)"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.6rem",
        color: "var(--ink)",
        margin: "0 0 var(--space-4)"
      }
    }, "Service & Maintenance Agreements"), /*#__PURE__*/React.createElement(SmaTiers, {
      tiers: smaTiers,
      note: smaNote
    })), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--gray-50)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...WRAP,
        padding: "var(--space-7) var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, null, "Built for your industry"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "var(--space-3)",
        marginTop: "var(--space-5)"
      }
    }, industries.map(o => /*#__PURE__*/React.createElement("button", {
      key: o.slug,
      onClick: () => go("ind:" + o.slug),
      style: {
        textAlign: "left",
        background: "var(--paper)",
        border: "1px solid var(--line)",
        borderRadius: "10px",
        padding: "var(--space-4)",
        cursor: "pointer",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.02rem",
        color: "var(--ink)",
        lineHeight: 1.1
      }
    }, o.audience.replace(/^For /, "")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.82rem",
        color: "var(--brand-deep)",
        marginTop: "0.5rem",
        fontWeight: 600
      }
    }, "View \u2192")))))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...WRAP,
        padding: "var(--space-7) var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--grad-intro)",
        borderRadius: "14px",
        padding: "var(--space-6)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-5)",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.6rem",
        lineHeight: 1.1
      }
    }, promo.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "1rem",
        color: "rgba(255,255,255,0.92)",
        margin: "0.5rem 0 0"
      }
    }, promo.hook)), /*#__PURE__*/React.createElement("button", {
      onClick: () => go("contact"),
      style: {
        background: "#fff",
        color: "#7a3f7e",
        border: "none",
        padding: "0.8rem 1.4rem",
        borderRadius: "8px",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "0.95rem",
        cursor: "pointer",
        flex: "none"
      }
    }, promo.cta))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...WRAP,
        padding: "0 var(--space-6) var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "0.78rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        marginBottom: "var(--space-4)"
      }
    }, "Ecosystems we work in"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "var(--space-3)"
      }
    }, SITE.ecosystems.map(e => /*#__PURE__*/React.createElement("span", {
      key: e,
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "0.85rem",
        color: "var(--ink)",
        background: "var(--gray-50)",
        border: "1px solid var(--line)",
        borderRadius: "999px",
        padding: "0.35rem 0.9rem"
      }
    }, e)))));
  }

  /* ---------------- Services ---------------- */
  function Services({
    go
  }) {
    const g = offerings.general;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...WRAP,
        padding: "var(--space-7) var(--space-6) var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "0.8rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--brand-deep)"
      }
    }, g.audience), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "2.8rem",
        color: "var(--ink)",
        margin: "0.3rem 0 var(--space-5)"
      }
    }, g.title), /*#__PURE__*/React.createElement(IntroBanner, {
      icon: /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFE2")
    }, g.intro), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "var(--space-7) 0 var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, null, g.sectionTitle)), /*#__PURE__*/React.createElement(PillarGrid, {
      pillars: g.pillars
    }), /*#__PURE__*/React.createElement("div", {
      id: "sma",
      style: {
        marginTop: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "2rem",
        color: "var(--ink)",
        margin: "0 0 var(--space-2)"
      }
    }, "Service & Maintenance Agreements"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        color: "var(--text-body)",
        margin: "0 0 var(--space-5)",
        maxWidth: 620
      }
    }, "Pick the response tier that fits the site. SMA clients always jump the queue."), /*#__PURE__*/React.createElement(SmaTiers, {
      tiers: smaTiers,
      note: smaNote
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(CtaBar, {
      subtitle: "Front door to back office \u2014 one trusted partner.",
      action: /*#__PURE__*/React.createElement("button", {
        onClick: () => go("quote"),
        style: {
          background: "#fff",
          color: "var(--brand-deep)",
          border: "none",
          padding: "0.8rem 1.4rem",
          borderRadius: "8px",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          cursor: "pointer"
        }
      }, "Book a Walkthrough")
    })));
  }

  /* ---------------- Industries index ---------------- */
  function Industries({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...WRAP,
        padding: "var(--space-7) var(--space-6) var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, null, "Industries we serve"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "var(--space-4)",
        marginTop: "var(--space-6)"
      }
    }, industries.map(o => /*#__PURE__*/React.createElement("button", {
      key: o.slug,
      onClick: () => go("ind:" + o.slug),
      style: {
        textAlign: "left",
        background: "var(--paper)",
        border: "1px solid var(--line)",
        borderRadius: "12px",
        padding: "var(--space-5)",
        cursor: "pointer",
        boxShadow: "0 1px 3px rgba(26,34,48,0.06)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "0.78rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--brand-deep)"
      }
    }, o.audience), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.5rem",
        color: "var(--ink)",
        margin: "0.3rem 0 0.4rem"
      }
    }, o.subtitle), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "0.92rem",
        color: "var(--text-body)",
        lineHeight: 1.5
      }
    }, o.intro.slice(0, 120), "\u2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-3)",
        color: "var(--brand-deep)",
        fontWeight: 600,
        fontSize: "0.9rem"
      }
    }, "View industry \u2192")))));
  }

  /* ---------------- Industry detail ---------------- */
  function IndustryDetail({
    slug,
    go
  }) {
    const o = offerings[slug];
    if (!o) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...WRAP,
        padding: "var(--space-7) var(--space-6) var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "0.8rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--brand-deep)"
      }
    }, o.audience), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "2.8rem",
        color: "var(--ink)",
        margin: "0.3rem 0 0.2rem"
      }
    }, o.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "1.4rem",
        color: "var(--brand-deep)",
        margin: "0 0 var(--space-5)"
      }
    }, o.subtitle), /*#__PURE__*/React.createElement(IntroBanner, {
      icon: /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFE2")
    }, o.intro), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "var(--space-7) 0 var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, null, o.sectionTitle)), /*#__PURE__*/React.createElement(PillarGrid, {
      pillars: o.pillars
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-5)",
        marginTop: "var(--space-7)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--gray-50)",
        border: "1px solid var(--line)",
        borderRadius: "12px",
        padding: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.3rem",
        color: "var(--ink)",
        margin: "0 0 var(--space-3)"
      }
    }, o.support.title), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }
    }, o.support.items.map(it => /*#__PURE__*/React.createElement("li", {
      key: it,
      style: {
        display: "flex",
        gap: "0.6rem",
        fontFamily: "var(--font-body)",
        fontSize: "0.92rem",
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--brand-deep)"
      }
    }, "\u25AA"), it)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.3rem",
        color: "var(--ink)",
        margin: "0 0 var(--space-3)"
      }
    }, "Response tiers"), /*#__PURE__*/React.createElement(SmaTiers, {
      tiers: smaTiers,
      note: smaNote
    }), /*#__PURE__*/React.createElement("a", {
      href: "." + o.onePager,
      target: "_blank",
      rel: "noreferrer",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        marginTop: "var(--space-4)",
        color: "var(--brand-deep)",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(I, {
      name: "printer",
      size: 16
    }), " View / print this one-pager"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(CtaBar, {
      title: "Let's scope your " + o.audience.replace(/^For /, "").toLowerCase(),
      subtitle: "Book a walkthrough and we'll quote to one standard.",
      action: /*#__PURE__*/React.createElement("button", {
        onClick: () => go("quote"),
        style: {
          background: "#fff",
          color: "var(--brand-deep)",
          border: "none",
          padding: "0.8rem 1.4rem",
          borderRadius: "8px",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          cursor: "pointer"
        }
      }, "Book a Walkthrough")
    })));
  }

  /* ---------------- About ---------------- */
  function About() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...WRAP,
        padding: "var(--space-7) var(--space-6) var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, null, "About ", SITE.brand), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "1.1rem",
        lineHeight: 1.6,
        color: "var(--text-body)",
        maxWidth: 700,
        marginTop: "var(--space-5)"
      }
    }, SITE.brand, " is the commercial division of ", SITE.legalEntity, ". We design, install and maintain integrated security, video, access, networking, front-desk and AV systems \u2014 one accountable local team, front door to back office."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-6)",
        marginTop: "var(--space-7)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.3rem",
        color: "var(--ink)"
      }
    }, "Service area"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginTop: "var(--space-3)"
      }
    }, SITE.serviceArea.map(s => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "0.88rem",
        background: "var(--gray-50)",
        border: "1px solid var(--line)",
        borderRadius: "999px",
        padding: "0.3rem 0.8rem",
        color: "var(--ink)"
      }
    }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.3rem",
        color: "var(--ink)"
      }
    }, "Ecosystems & licensing"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "0.9rem",
        color: "var(--text-body)",
        margin: "var(--space-3) 0"
      }
    }, SITE.ecosystems.join(" · ")), SITE.licenses.map(l => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "0.85rem",
        color: "var(--ink)"
      }
    }, l)))));
  }

  /* ---------------- Contact / Quote ---------------- */
  function Contact({
    quote
  }) {
    const [sent, setSent] = React.useState(false);
    const field = {
      border: "1px solid var(--border-strong)",
      borderRadius: "8px",
      padding: "0.6rem 0.75rem",
      fontFamily: "var(--font-body)",
      fontSize: "0.95rem",
      color: "var(--ink)",
      width: "100%",
      boxSizing: "border-box"
    };
    const lab = {
      fontFamily: "var(--font-body)",
      fontSize: "0.85rem",
      fontWeight: 600,
      color: "var(--ink)",
      marginBottom: "0.3rem",
      display: "block"
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...WRAP,
        padding: "var(--space-7) var(--space-6) var(--space-8)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, null, quote ? "Book a Walkthrough" : "Contact"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "1.05rem",
        color: "var(--text-body)",
        margin: "var(--space-5) 0",
        maxWidth: 420
      }
    }, "Tell us about the site and what you're protecting or connecting. A licensed integrator replies within one business day."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        fontFamily: "var(--font-body)",
        fontSize: "0.95rem",
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: "0.6rem",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(I, {
      name: "phone",
      size: 18
    }), " Office ", SITE.phoneOffice, " \xB7 Mobile ", SITE.phoneMobile), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: "0.6rem",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(I, {
      name: "mail",
      size: 18
    }), " ", SITE.email), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: "0.6rem",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(I, {
      name: "map-pin",
      size: 18
    }), " ", SITE.city)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-6)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/qr/qr-contact-vcard.svg",
      alt: "vCard QR",
      style: {
        width: 96,
        height: 96,
        border: "1px solid var(--line)",
        borderRadius: "8px",
        padding: 4,
        background: "#fff"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "0.85rem",
        color: "var(--text-muted)"
      }
    }, "Scan to save our contact card.", /*#__PURE__*/React.createElement("br", null), "Works offline \u2014 vCard encoded in the QR."))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--paper)",
        border: "1px solid var(--line)",
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(26,34,48,0.08)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: "var(--grad-rule)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-5)"
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-3)",
        minHeight: 320,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(I, {
      name: "check-circle-2",
      size: 44,
      color: "var(--acc)"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.4rem",
        color: "var(--ink)",
        margin: 0
      }
    }, "Request received"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "0.95rem",
        color: "var(--text-body)",
        margin: 0
      }
    }, "We'll be in touch within one business day."), /*#__PURE__*/React.createElement(CTA, {
      kind: "outline",
      size: "sm",
      onClick: () => setSent(false)
    }, "Send another")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lab
    }, "Name"), /*#__PURE__*/React.createElement("input", {
      style: field,
      placeholder: "Jordan Vega",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lab
    }, "Email"), /*#__PURE__*/React.createElement("input", {
      style: field,
      type: "email",
      placeholder: "you@company.com",
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lab
    }, "Phone"), /*#__PURE__*/React.createElement("input", {
      style: field,
      placeholder: "778-\u2026"
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lab
    }, "Type"), /*#__PURE__*/React.createElement("select", {
      style: field,
      defaultValue: ""
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "Select\u2026"), ["Restaurant", "Retail / Pet", "Small business", "Office", "Clinic", "School / Campus", "Other"].map(t => /*#__PURE__*/React.createElement("option", {
      key: t
    }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lab
    }, "What do you need?"), /*#__PURE__*/React.createElement("textarea", {
      rows: 3,
      style: {
        ...field,
        resize: "vertical"
      },
      placeholder: "e.g. 12-camera retrofit + access control for a warehouse"
    })), /*#__PURE__*/React.createElement(CTA, {
      size: "md",
      onClick: () => {}
    }, "Request walkthrough")))));
  }

  /* ---------------- App ---------------- */
  function WebsiteApp() {
    const [route, setRoute] = React.useState("home");
    const go = r => {
      setRoute(r);
      window.scrollTo({
        top: 0
      });
    };
    React.useEffect(() => {
      if (window.lucide) window.lucide.createIcons();
    });
    const page = route.startsWith("ind:") ? "industries" : route;
    let view;
    if (route === "home") view = /*#__PURE__*/React.createElement(Home, {
      go: go
    });else if (route === "services") view = /*#__PURE__*/React.createElement(Services, {
      go: go
    });else if (route === "industries") view = /*#__PURE__*/React.createElement(Industries, {
      go: go
    });else if (route.startsWith("ind:")) view = /*#__PURE__*/React.createElement(IndustryDetail, {
      slug: route.slice(4),
      go: go
    });else if (route === "about") view = /*#__PURE__*/React.createElement(About, null);else if (route === "contact") view = /*#__PURE__*/React.createElement(Contact, null);else if (route === "quote") view = /*#__PURE__*/React.createElement(Contact, {
      quote: true
    });else view = /*#__PURE__*/React.createElement(Home, {
      go: go
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--paper)",
        minHeight: "100vh",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement(Masthead, {
      page: page,
      go: go
    }), view, /*#__PURE__*/React.createElement(SiteFooter, {
      go: go
    }));
  }
  window.ERTechWebsiteApp = WebsiteApp;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.js
try { (() => {
/* Auto-derived from ertech-commercial-starter/src/data/{services,site}.ts.
   Plain-JS copy of the content source of truth (no drift). Exposed on window. */

// src/data/site.ts
// One place for brand, contact, licensing, nav, and the residential cross-link.
// Change anything here and it updates the masthead, footer, contact page, etc.

(function () {
  const SITE = {
    // --- Brand ---
    brand: "ER Tech Services",
    // visible commercial wordmark (ER = Expected Result)
    brandAccentWord: "Tech",
    // the word rendered in --brand colour
    legalEntity: "Expected Result Technical Services Corporation",
    tagline: "Front door to back office \u2014 under one roof",
    domain: "https://ertechservices.ca",
    // --- Contact ---
    // NOTE: never publish the street address (it is Vince's residence). City only.
    city: "Langley, BC",
    serviceArea: ["Sea-to-Sky / Pemberton", "Squamish & Whistler", "Metro Vancouver", "Fraser Valley to Hope", "Vancouver Island", "Gulf Islands", "Sunshine Coast"],
    serviceAreaLine: "From Pemberton through the Fraser Valley to Hope, across Metro Vancouver, Vancouver Island, the Gulf Islands & the Sunshine Coast.",
    phoneMobile: "778-246-2492",
    phoneOffice: "778-808-8769",
    // labelling: pamphlets use "Office" — confirm vs. live site
    email: "results@ertechservices.ca",
    linkedin: "https://www.linkedin.com/in/vinceyost/",
    // --- Licensing (CONFIRM exact designation/numbers off the letterhead) ---
    licenses: ["Security Consultant Lic. #B7128", "TSBC LIC-00214786"],
    // --- Sister site (residential, stays on WordPress this phase) ---
    residential: {
      label: "The Expected Result \u2014 Residential",
      blurb: "Home automation, lighting, AV & security for your home.",
      url: "https://theexpectedresult.ca"
    },
    // --- Primary navigation ---
    nav: [{
      label: "Home",
      href: "/"
    }, {
      label: "Services",
      href: "/services/"
    }, {
      label: "Industries",
      href: "/industries/"
    }, {
      label: "About",
      href: "/about/"
    }, {
      label: "Contact",
      href: "/contact/"
    }, {
      label: "Book a Walkthrough",
      href: "/quote/",
      cta: true
    }],
    // --- Credibility: ecosystems we work in ---
    ecosystems: ["Control4", "Crestron", "Lutron", "Alarm.com", "Hikvision", "DSC PowerSeries Neo / PowerG", "Araknis", "UniFi", "HALO Smart Sensor"],
    // --- Marketing callouts (homepage banner / cross-promos) ---
    promos: [{
      title: "Your security system could lower your insurance premiums",
      hook: "Professionally monitored systems can earn 5\u201320% off home & business premiums. Ask us about the monitoring certificate you'll need to claim it.",
      href: "/insurance/",
      cta: "See how it works",
      flyer: "/downloads/insurance-savings.html"
    }],
    // --- Quote form endpoint (fill in Formspree/Web3Forms key or host mailer) ---
    formEndpoint: "REPLACE_WITH_FORM_ENDPOINT"
  };
  const ICONS = {
    shield: "\u{1F6E1}\u{FE0F}",
    camera: "\u{1F4F9}",
    key: "\u{1F511}",
    network: "\u{1F310}",
    monitor: "\u{1F5A5}\u{FE0F}",
    speaker: "\u{1F50A}",
    sensor: "\u{1F4A8}"
  };

  // ---------------------------------------------------------------------------
  // Shared across all offerings
  // ---------------------------------------------------------------------------

  const smaTiers = [{
    name: "Standard",
    response: "Next business day"
  }, {
    name: "Priority",
    response: "Same-day response"
  }, {
    name: "Premium",
    response: "4-hr \u00B7 24/7",
    premium: true
  }];
  const smaNote = "SMA clients always jump the queue ahead of non-contract calls.";
  const ongoingSupport = ["24/7 alarm monitoring contract", "Annual system inspection & certification", "Preventive maintenance plans", "Remote system health monitoring", "Extended warranty options"];

  // ---------------------------------------------------------------------------
  // Offerings
  // ---------------------------------------------------------------------------

  const offerings = {
    general: {
      slug: "general",
      audience: "Technology Offerings",
      title: "Overview & Services",
      subtitle: "One trusted partner, front door to back office",
      intro: "As your technology partner, we handle it all under one roof \u2014 from the front entrance to the back office, we design, install, and support the systems that keep your business secure, connected, and running smoothly.",
      sectionTitle: "SERVICES TAILORED TO YOUR BUSINESS",
      isIndustry: false,
      onePager: "/downloads/overview-general.html",
      pillars: [{
        accent: "sec",
        icon: "shield",
        title: "Security & Alarm",
        items: ["Intrusion alarm system", "Door & window sensors", "24/7 monitored service", "Emergency-services / duress button at point of sale", "After-hours premises protection"]
      }, {
        accent: "vid",
        icon: "camera",
        title: "Video Surveillance",
        items: ["Entrance, lobby & sales-floor cameras", "Entry, exit & parking coverage", "Back-of-house & stockroom monitoring", "POS-linked transaction video", "Remote mobile viewing + secure cloud / local storage"]
      }, {
        accent: "acc",
        icon: "key",
        title: "Access Control",
        items: ["Keypad, fob & keyless entry", "Separate access levels per area", "Staff vs. public control", "Audit trail & access logs", "After-hours lockdown capability"]
      }, {
        accent: "net",
        icon: "network",
        title: "Network Infrastructure",
        items: ["Structured cabling throughout", "Separate staff & guest Wi-Fi", "POS & device connectivity", "Equipment network drops", "Clean rack / closet buildout"]
      }, {
        accent: "rec",
        icon: "monitor",
        title: "Front Desk & Workspace",
        items: ["POS system & setup", "Workstation connectivity", "Display & signage TVs", "Digital signage & info boards", "Intercom & paging"]
      }, {
        accent: "av",
        icon: "speaker",
        title: "AV, Audio & Conference",
        items: ["TV & display installation", "Teams / Zoom Rooms", "Wireless presentation system", "Zoned background music & paging", "Scheduled promos & announcements (set times or intervals)", "Whole-building speaker installation", "One-touch room control"]
      }],
      support: {
        title: "Site & Infrastructure Support",
        items: ["Dedicated cabling for key equipment", "Isolated network segments for sensitive systems", "Clean, professional cable management", "Infrastructure ready for future growth", "Coordination with equipment vendors"]
      }
    },
    restaurants: {
      slug: "restaurants",
      audience: "For Restaurants & Fast Food",
      title: "Technology Overview",
      subtitle: "From the front counter to the drive-thru",
      intro: "From the front counter to the drive-thru and the back dock, we handle it all under one roof \u2014 security, cameras, networks, and audio designed to cut shrink, speed up service, and keep every shift running smoothly.",
      sectionTitle: "SERVICES TAILORED TO YOUR RESTAURANT",
      isIndustry: true,
      onePager: "/downloads/restaurants.html",
      pillars: [{
        accent: "sec",
        icon: "shield",
        title: "Security & Alarm",
        items: ["Intrusion alarm & 24/7 monitoring", "Door & window sensors", "Walk-in & freezer temperature alerts", "Emergency-services / duress button at the register", "Closing & after-hours protection"]
      }, {
        accent: "vid",
        icon: "camera",
        title: "Video Surveillance",
        items: ["POS-overlay register cameras (deter cash shrink)", "Drive-thru & order-pickup coverage", "Kitchen & prep-line monitoring", "Dining room, patio & entrance cameras", "Remote mobile viewing across locations"]
      }, {
        accent: "acc",
        icon: "key",
        title: "Access Control",
        items: ["Staff-door keypad / fob entry", "Manager vs. crew access levels", "Back-door & delivery control", "Audit trail & access logs", "After-hours lockdown capability"]
      }, {
        accent: "net",
        icon: "network",
        title: "Network Infrastructure",
        items: ["Structured cabling throughout", "Separate POS & guest Wi-Fi (PCI-friendly)", "Online-ordering & kiosk connectivity", "Drive-thru & kitchen-display drops", "Clean rack / closet buildout"]
      }, {
        accent: "rec",
        icon: "monitor",
        title: "Front of House & Ordering",
        items: ["POS & terminal setup", "Digital menu boards", "Self-order kiosks & KDS displays", "Drive-thru order-confirmation screens", "Guest Wi-Fi & loyalty connectivity"]
      }, {
        accent: "av",
        icon: "speaker",
        title: "Audio & Atmosphere",
        items: ["Zoned background music by area", "Drive-thru & headset audio support", "Patio & dining-room speakers", "Paging & overhead announcements", "Scheduled specials & promo announcements (set times or intervals)", "TV & display installation", "One-touch volume / zone control"]
      }],
      support: {
        title: "Kitchen & Site Support",
        items: ["Dedicated cabling for POS & kitchen displays", "Isolated network for payment systems (PCI-friendly)", "Heat / grease-aware cable routing", "Infrastructure ready for added locations", "Coordination with POS & equipment vendors"]
      }
    },
    "retail-pet": {
      slug: "retail-pet",
      audience: "For Pet Stores & Retail",
      title: "Technology Overview",
      subtitle: "Protect the floor, the till, and the stockroom",
      intro: "From the sales floor to the stockroom \u2014 and the grooming and animal areas in between \u2014 we handle it all under one roof: security, cameras, networks, and in-store audio designed to reduce shrink and make every visit smoother.",
      sectionTitle: "SERVICES TAILORED TO YOUR STORE",
      isIndustry: true,
      onePager: "/downloads/retail-pet.html",
      pillars: [{
        accent: "sec",
        icon: "shield",
        title: "Security & Alarm",
        items: ["Intrusion alarm & 24/7 monitoring", "Door & window sensors", "Stockroom & cash-office protection", "Emergency-services / duress button at the till", "Habitat & aquarium environment alerts"]
      }, {
        accent: "vid",
        icon: "camera",
        title: "Video Surveillance",
        items: ["Sales-floor & aisle coverage", "POS-overlay register cameras", "Entrance, exit & parking coverage", "Stockroom & receiving monitoring", "Grooming & live-animal area cameras", "Remote mobile viewing + secure storage"]
      }, {
        accent: "acc",
        icon: "key",
        title: "Access Control",
        items: ["Staff-only & stockroom entry control", "Manager vs. associate access levels", "Cash-office & safe-room control", "Audit trail & access logs", "After-hours lockdown capability"]
      }, {
        accent: "net",
        icon: "network",
        title: "Network Infrastructure",
        items: ["Structured cabling throughout", "Separate POS & guest Wi-Fi", "Inventory / handheld-scanner connectivity", "Back-office & receiving drops", "Clean rack / closet buildout"]
      }, {
        accent: "rec",
        icon: "monitor",
        title: "Sales Floor & Checkout",
        items: ["POS & terminal setup", "Digital signage & promo displays", "Self-checkout & price-check connectivity", "Window & in-store display TVs", "Guest Wi-Fi & loyalty connectivity"]
      }, {
        accent: "av",
        icon: "speaker",
        title: "Audio & Atmosphere",
        items: ["Zoned background music by department", "Paging & overhead announcements", "Scheduled promo & messaging audio (set times or intervals)", "TV & display installation", "One-touch volume / zone control"]
      }],
      support: {
        title: "Stockroom & Site Support",
        items: ["Dedicated cabling for POS & scanners", "Isolated network for payment systems", "Clean, professional cable management", "Infrastructure ready for store growth", "Coordination with POS & fixture vendors"]
      }
    },
    "small-business": {
      slug: "small-business",
      audience: "For Local Small Business",
      title: "Technology Overview",
      subtitle: "Right-sized, no overkill, one local partner",
      intro: "One local partner for all of it \u2014 security, cameras, Wi-Fi, and audio, sized right for your shop and your budget. No big-box runaround, no app-juggling: honest advice and a clean install you can grow into.",
      sectionTitle: "SERVICES TAILORED TO YOUR SHOP",
      isIndustry: true,
      onePager: "/downloads/small-business.html",
      pillars: [{
        accent: "sec",
        icon: "shield",
        title: "Security & Alarm",
        items: ["Right-sized intrusion alarm", "Door & window sensors", "24/7 monitored service", "Emergency-services / duress button", "After-hours protection"]
      }, {
        accent: "vid",
        icon: "camera",
        title: "Video Surveillance",
        items: ["Entrance & register cameras", "Sales-floor / service-area coverage", "Parking & exterior coverage", "Remote viewing from your phone", "Secure cloud or local storage"]
      }, {
        accent: "acc",
        icon: "key",
        title: "Access Control",
        items: ["Simple keypad or fob entry", "Staff vs. owner access", "Back-door & stockroom control", "Access logs you can review", "One-button lockdown"]
      }, {
        accent: "net",
        icon: "network",
        title: "Network Infrastructure",
        items: ["Reliable business-grade Wi-Fi", "Separate staff & guest networks", "POS & card-reader connectivity", "Clean, tidy cabling", "Room to grow as you add devices"]
      }, {
        accent: "rec",
        icon: "monitor",
        title: "Front Counter & Workspace",
        items: ["POS & terminal setup", "Workstation & printer connectivity", "Window & counter display TVs", "Simple digital signage", "Guest Wi-Fi & loyalty connectivity"]
      }, {
        accent: "av",
        icon: "speaker",
        title: "Audio & Atmosphere",
        items: ["Background music for your space", "Overhead paging if you need it", "Scheduled announcements & promos (set times or intervals)", "TV & display installation", "Easy volume control", "One trusted setup, no app-juggling"]
      }],
      support: {
        title: "Local & On-Hand Support",
        items: ["One local point of contact", "Honest, right-sized recommendations", "Clean, professional installation", "Easy to expand later", "Coordination with your other vendors"]
      }
    },
    clinics: {
      slug: "clinics",
      audience: "For Clinics & Healthcare",
      title: "Technology Overview",
      subtitle: "From the front desk to the treatment rooms",
      intro: "From the waiting room to the treatment rooms and back office, we handle it all under one roof \u2014 security, cameras, access control, networks, and AV designed for patient privacy, smooth front-desk flow, and reliable clinical equipment.",
      sectionTitle: "SERVICES TAILORED TO YOUR CLINIC",
      isIndustry: true,
      onePager: "/downloads/clinics.html",
      pillars: [{
        accent: "sec",
        icon: "shield",
        title: "Security & Alarm",
        items: ["Intrusion alarm & 24/7 monitoring", "Door & window sensors", "After-hours clinical-equipment protection", "Emergency-services / duress button at reception", "Secure-room & medication-storage alerts"]
      }, {
        accent: "vid",
        icon: "camera",
        title: "Video Surveillance",
        items: ["Reception & waiting-area cameras", "Entry, exit & parking coverage", "Corridor & common-area monitoring", "Remote mobile viewing", "Secure cloud or local storage"]
      }, {
        accent: "acc",
        icon: "key",
        title: "Access Control",
        items: ["Keypad, fob & keyless entry", "Separate access levels per area", "Clinical vs. staff vs. public control", "Audit trail & access logs", "After-hours lockdown capability"]
      }, {
        accent: "net",
        icon: "network",
        title: "Network Infrastructure",
        items: ["Structured cabling throughout", "Separate staff & guest Wi-Fi", "Isolated segments for diagnostic equipment", "Dedicated equipment network drops", "Clean rack / closet buildout"]
      }, {
        accent: "rec",
        icon: "monitor",
        title: "Reception & Front Desk",
        items: ["Workstation & check-in connectivity", "Patient check-in displays", "Waiting-room display TV", "Patient-education digital signage", "Intercom & paging"]
      }, {
        accent: "av",
        icon: "speaker",
        title: "AV, Audio & Conference",
        items: ["TV & display installation", "Teams / Zoom Rooms (telehealth)", "Wireless presentation system", "Zoned audio & paging", "Scheduled announcements (set times or intervals)", "One-touch room control"]
      }],
      support: {
        title: "Clinical & Site Support",
        items: ["Dedicated cabling for clinical equipment", "Isolated network segments for diagnostic tools", "Clean, professional cable management", "Infrastructure ready for future equipment", "Coordination with equipment vendors"]
      }
    },
    schools: {
      slug: "schools",
      audience: "For Schools & Campuses",
      title: "Technology Overview",
      subtitle: "Safer campuses, smarter classrooms, reliable IT",
      intro: "From the front office to the back field, we handle it all under one roof \u2014 vape & environmental sensing, enterprise video, access control, mass notification, and the IT backbone that keeps a large campus connected, safe, and running.",
      sectionTitle: "SERVICES TAILORED TO YOUR SCHOOL",
      isIndustry: true,
      onePager: "/downloads/schools.html",
      pillars: [{
        accent: "sec",
        icon: "shield",
        title: "Security & Alarm",
        items: ["Intrusion alarm & 24/7 monitoring", "Door, window & perimeter sensors", "One-button lockdown initiation", "Emergency-services / duress alerts", "After-hours & holiday protection"]
      }, {
        accent: "vid",
        icon: "camera",
        title: "Enterprise Video",
        items: ["Campus-wide IP camera coverage", "Central video management (VMS)", "Multi-building, single-pane management", "AI analytics & fast event search", "District-level & remote viewing", "Secure retention & incident export"]
      }, {
        accent: "acc",
        icon: "key",
        title: "Access Control",
        items: ["Secured entry vestibules", "Visitor management & check-in", "Role-based access (staff / admin / contractor)", "Bell-schedule & zone door automation", "Campus-wide lockdown integration"]
      }, {
        accent: "rec",
        icon: "sensor",
        title: "Vape & Environmental Sensing \u2014 HALO",
        items: ["HALO Smart Sensors in washrooms & locker rooms (no cameras)", "Vape, THC & smoke detection", "Air quality: CO\u2082, TVOC, temp, humidity", "Spoken-keyword, aggression & help alerts", "Tamper & occupancy detection", "Real-time alerts to staff phones"]
      }, {
        accent: "net",
        icon: "network",
        title: "Network & IT Services",
        items: ["Structured cabling & fibre backbone", "High-density Wi-Fi for 1:1 device programs", "Switching, VLANs & segmentation", "Device & endpoint management", "Server / NVR room buildout", "Help-desk & ongoing IT support"]
      }, {
        accent: "av",
        icon: "speaker",
        title: "AV & Mass Notification",
        items: ["Classroom displays & projectors", "Gym & auditorium AV", "PA / intercom & paging", "Clock-synced bells & scheduled announcements", "Campus-wide mass notification", "Digital signage & wayfinding", "One-touch room & event control"]
      }],
      support: {
        title: "Campus & IT Support",
        items: ["Dedicated cabling for labs & AV", "Segmented networks for safety systems", "Clean, professional cable management", "Infrastructure ready for enrollment growth", "Coordination with district IT & vendors"]
      }
    }
  };

  // Convenience: just the industry offerings, for the /industries index + nav.
  const industries = Object.values(offerings).filter(o => o.isIndustry);
  window.ERTechData = {
    SITE,
    offerings,
    industries,
    smaTiers,
    smaNote,
    ongoingSupport,
    ICONS
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.js", error: String((e && e.message) || e) }); }

// uploads/tailwind.config.js
try { (() => {
/**
 * ER Tech Services — Tailwind config
 * Brand: ER Tech Services / The Expected Result
 * Confirmed colors: cyan #13A2CA · blue #1274BB · navy #1F3864
 *
 * Tokens live in ./tokens.json (single source of truth — edit there, not here).
 * This config targets Tailwind v3. If your Astro site is on Tailwind v4,
 * map these tokens via @theme in CSS instead — ertech-design-tokens.css
 * already exposes every value as a CSS variable you can reference directly.
 *
 * Neutrals: use Tailwind's native `slate-*` (it matches our gray ramp).
 * Spacing: left at Tailwind defaults on purpose, so existing utilities
 * keep their familiar values.
 */
const tokens = require('./tokens.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Adjust these globs to match your project structure.
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}', './components/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // New color keys — no collision with Tailwind defaults.
      // Use: bg-primary, text-ink, bg-secondary-600, text-success bg-success-surface
      colors: tokens.color,
      // Use: bg-brand-gradient, bg-brand-gradient-soft
      backgroundImage: tokens.backgroundImage,
      // Use: font-sans (Inter), font-display, font-mono
      fontFamily: tokens.fontFamily,
      // Adds font-regular/medium/semibold/bold (defaults preserved)
      fontWeight: tokens.fontWeight,
      // Brand type scale (1.250 major third). Remove this line to keep
      // Tailwind's native font sizes.
      fontSize: tokens.fontSize,
      lineHeight: tokens.lineHeight,
      letterSpacing: tokens.letterSpacing,
      // Use: rounded (8px default), rounded-pill for chips
      borderRadius: tokens.borderRadius,
      // Use: shadow-card, shadow-card-md, shadow-card-lg, shadow-focus
      boxShadow: tokens.boxShadow,
      transitionTimingFunction: tokens.transitionTimingFunction,
      transitionDuration: tokens.transitionDuration
    }
  },
  plugins: []
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/tailwind.config.js", error: String((e && e.message) || e) }); }

// website-starter/src/data/services.ts
try { (() => {
// src/data/services.ts
// Single source of truth for ER Tech Services commercial offerings.
// Drives the service cards, the Services page, and every industry page.
// Text is plain Unicode (no HTML entities) — components render it directly.

// Emoji used on the pamphlets — swap for inline SVG icons later if desired.
const ICONS = {
  shield: "\u{1F6E1}\u{FE0F}",
  camera: "\u{1F4F9}",
  key: "\u{1F511}",
  network: "\u{1F310}",
  monitor: "\u{1F5A5}\u{FE0F}",
  speaker: "\u{1F50A}",
  sensor: "\u{1F4A8}"
};

// ---------------------------------------------------------------------------
// Shared across all offerings
// ---------------------------------------------------------------------------

const smaTiers = [{
  name: "Standard",
  response: "Next business day"
}, {
  name: "Priority",
  response: "Same-day response"
}, {
  name: "Premium",
  response: "4-hr \u00B7 24/7",
  premium: true
}];
const smaNote = "SMA clients always jump the queue ahead of non-contract calls.";
const ongoingSupport = ["24/7 alarm monitoring contract", "Annual system inspection & certification", "Preventive maintenance plans", "Remote system health monitoring", "Extended warranty options"];

// ---------------------------------------------------------------------------
// Offerings
// ---------------------------------------------------------------------------

const offerings = {
  general: {
    slug: "general",
    audience: "Technology Offerings",
    title: "Overview & Services",
    subtitle: "One trusted partner, front door to back office",
    intro: "As your technology partner, we handle it all under one roof \u2014 from the front entrance to the back office, we design, install, and support the systems that keep your business secure, connected, and running smoothly.",
    sectionTitle: "SERVICES TAILORED TO YOUR BUSINESS",
    isIndustry: false,
    onePager: "/downloads/overview-general.html",
    pillars: [{
      accent: "sec",
      icon: "shield",
      title: "Security & Alarm",
      items: ["Intrusion alarm system", "Door & window sensors", "24/7 monitored service", "Emergency-services / duress button at point of sale", "After-hours premises protection"]
    }, {
      accent: "vid",
      icon: "camera",
      title: "Video Surveillance",
      items: ["Entrance, lobby & sales-floor cameras", "Entry, exit & parking coverage", "Back-of-house & stockroom monitoring", "POS-linked transaction video", "Remote mobile viewing + secure cloud / local storage"]
    }, {
      accent: "acc",
      icon: "key",
      title: "Access Control",
      items: ["Keypad, fob & keyless entry", "Separate access levels per area", "Staff vs. public control", "Audit trail & access logs", "After-hours lockdown capability"]
    }, {
      accent: "net",
      icon: "network",
      title: "Network Infrastructure",
      items: ["Structured cabling throughout", "Separate staff & guest Wi-Fi", "POS & device connectivity", "Equipment network drops", "Clean rack / closet buildout"]
    }, {
      accent: "rec",
      icon: "monitor",
      title: "Front Desk & Workspace",
      items: ["POS system & setup", "Workstation connectivity", "Display & signage TVs", "Digital signage & info boards", "Intercom & paging"]
    }, {
      accent: "av",
      icon: "speaker",
      title: "AV, Audio & Conference",
      items: ["TV & display installation", "Teams / Zoom Rooms", "Wireless presentation system", "Zoned background music & paging", "Scheduled promos & announcements (set times or intervals)", "Whole-building speaker installation", "One-touch room control"]
    }],
    support: {
      title: "Site & Infrastructure Support",
      items: ["Dedicated cabling for key equipment", "Isolated network segments for sensitive systems", "Clean, professional cable management", "Infrastructure ready for future growth", "Coordination with equipment vendors"]
    }
  },
  restaurants: {
    slug: "restaurants",
    audience: "For Restaurants & Fast Food",
    title: "Technology Overview",
    subtitle: "From the front counter to the drive-thru",
    intro: "From the front counter to the drive-thru and the back dock, we handle it all under one roof \u2014 security, cameras, networks, and audio designed to cut shrink, speed up service, and keep every shift running smoothly.",
    sectionTitle: "SERVICES TAILORED TO YOUR RESTAURANT",
    isIndustry: true,
    onePager: "/downloads/restaurants.html",
    pillars: [{
      accent: "sec",
      icon: "shield",
      title: "Security & Alarm",
      items: ["Intrusion alarm & 24/7 monitoring", "Door & window sensors", "Walk-in & freezer temperature alerts", "Emergency-services / duress button at the register", "Closing & after-hours protection"]
    }, {
      accent: "vid",
      icon: "camera",
      title: "Video Surveillance",
      items: ["POS-overlay register cameras (deter cash shrink)", "Drive-thru & order-pickup coverage", "Kitchen & prep-line monitoring", "Dining room, patio & entrance cameras", "Remote mobile viewing across locations"]
    }, {
      accent: "acc",
      icon: "key",
      title: "Access Control",
      items: ["Staff-door keypad / fob entry", "Manager vs. crew access levels", "Back-door & delivery control", "Audit trail & access logs", "After-hours lockdown capability"]
    }, {
      accent: "net",
      icon: "network",
      title: "Network Infrastructure",
      items: ["Structured cabling throughout", "Separate POS & guest Wi-Fi (PCI-friendly)", "Online-ordering & kiosk connectivity", "Drive-thru & kitchen-display drops", "Clean rack / closet buildout"]
    }, {
      accent: "rec",
      icon: "monitor",
      title: "Front of House & Ordering",
      items: ["POS & terminal setup", "Digital menu boards", "Self-order kiosks & KDS displays", "Drive-thru order-confirmation screens", "Guest Wi-Fi & loyalty connectivity"]
    }, {
      accent: "av",
      icon: "speaker",
      title: "Audio & Atmosphere",
      items: ["Zoned background music by area", "Drive-thru & headset audio support", "Patio & dining-room speakers", "Paging & overhead announcements", "Scheduled specials & promo announcements (set times or intervals)", "TV & display installation", "One-touch volume / zone control"]
    }],
    support: {
      title: "Kitchen & Site Support",
      items: ["Dedicated cabling for POS & kitchen displays", "Isolated network for payment systems (PCI-friendly)", "Heat / grease-aware cable routing", "Infrastructure ready for added locations", "Coordination with POS & equipment vendors"]
    }
  },
  "retail-pet": {
    slug: "retail-pet",
    audience: "For Pet Stores & Retail",
    title: "Technology Overview",
    subtitle: "Protect the floor, the till, and the stockroom",
    intro: "From the sales floor to the stockroom \u2014 and the grooming and animal areas in between \u2014 we handle it all under one roof: security, cameras, networks, and in-store audio designed to reduce shrink and make every visit smoother.",
    sectionTitle: "SERVICES TAILORED TO YOUR STORE",
    isIndustry: true,
    onePager: "/downloads/retail-pet.html",
    pillars: [{
      accent: "sec",
      icon: "shield",
      title: "Security & Alarm",
      items: ["Intrusion alarm & 24/7 monitoring", "Door & window sensors", "Stockroom & cash-office protection", "Emergency-services / duress button at the till", "Habitat & aquarium environment alerts"]
    }, {
      accent: "vid",
      icon: "camera",
      title: "Video Surveillance",
      items: ["Sales-floor & aisle coverage", "POS-overlay register cameras", "Entrance, exit & parking coverage", "Stockroom & receiving monitoring", "Grooming & live-animal area cameras", "Remote mobile viewing + secure storage"]
    }, {
      accent: "acc",
      icon: "key",
      title: "Access Control",
      items: ["Staff-only & stockroom entry control", "Manager vs. associate access levels", "Cash-office & safe-room control", "Audit trail & access logs", "After-hours lockdown capability"]
    }, {
      accent: "net",
      icon: "network",
      title: "Network Infrastructure",
      items: ["Structured cabling throughout", "Separate POS & guest Wi-Fi", "Inventory / handheld-scanner connectivity", "Back-office & receiving drops", "Clean rack / closet buildout"]
    }, {
      accent: "rec",
      icon: "monitor",
      title: "Sales Floor & Checkout",
      items: ["POS & terminal setup", "Digital signage & promo displays", "Self-checkout & price-check connectivity", "Window & in-store display TVs", "Guest Wi-Fi & loyalty connectivity"]
    }, {
      accent: "av",
      icon: "speaker",
      title: "Audio & Atmosphere",
      items: ["Zoned background music by department", "Paging & overhead announcements", "Scheduled promo & messaging audio (set times or intervals)", "TV & display installation", "One-touch volume / zone control"]
    }],
    support: {
      title: "Stockroom & Site Support",
      items: ["Dedicated cabling for POS & scanners", "Isolated network for payment systems", "Clean, professional cable management", "Infrastructure ready for store growth", "Coordination with POS & fixture vendors"]
    }
  },
  "small-business": {
    slug: "small-business",
    audience: "For Local Small Business",
    title: "Technology Overview",
    subtitle: "Right-sized, no overkill, one local partner",
    intro: "One local partner for all of it \u2014 security, cameras, Wi-Fi, and audio, sized right for your shop and your budget. No big-box runaround, no app-juggling: honest advice and a clean install you can grow into.",
    sectionTitle: "SERVICES TAILORED TO YOUR SHOP",
    isIndustry: true,
    onePager: "/downloads/small-business.html",
    pillars: [{
      accent: "sec",
      icon: "shield",
      title: "Security & Alarm",
      items: ["Right-sized intrusion alarm", "Door & window sensors", "24/7 monitored service", "Emergency-services / duress button", "After-hours protection"]
    }, {
      accent: "vid",
      icon: "camera",
      title: "Video Surveillance",
      items: ["Entrance & register cameras", "Sales-floor / service-area coverage", "Parking & exterior coverage", "Remote viewing from your phone", "Secure cloud or local storage"]
    }, {
      accent: "acc",
      icon: "key",
      title: "Access Control",
      items: ["Simple keypad or fob entry", "Staff vs. owner access", "Back-door & stockroom control", "Access logs you can review", "One-button lockdown"]
    }, {
      accent: "net",
      icon: "network",
      title: "Network Infrastructure",
      items: ["Reliable business-grade Wi-Fi", "Separate staff & guest networks", "POS & card-reader connectivity", "Clean, tidy cabling", "Room to grow as you add devices"]
    }, {
      accent: "rec",
      icon: "monitor",
      title: "Front Counter & Workspace",
      items: ["POS & terminal setup", "Workstation & printer connectivity", "Window & counter display TVs", "Simple digital signage", "Guest Wi-Fi & loyalty connectivity"]
    }, {
      accent: "av",
      icon: "speaker",
      title: "Audio & Atmosphere",
      items: ["Background music for your space", "Overhead paging if you need it", "Scheduled announcements & promos (set times or intervals)", "TV & display installation", "Easy volume control", "One trusted setup, no app-juggling"]
    }],
    support: {
      title: "Local & On-Hand Support",
      items: ["One local point of contact", "Honest, right-sized recommendations", "Clean, professional installation", "Easy to expand later", "Coordination with your other vendors"]
    }
  },
  clinics: {
    slug: "clinics",
    audience: "For Clinics & Healthcare",
    title: "Technology Overview",
    subtitle: "From the front desk to the treatment rooms",
    intro: "From the waiting room to the treatment rooms and back office, we handle it all under one roof \u2014 security, cameras, access control, networks, and AV designed for patient privacy, smooth front-desk flow, and reliable clinical equipment.",
    sectionTitle: "SERVICES TAILORED TO YOUR CLINIC",
    isIndustry: true,
    onePager: "/downloads/clinics.html",
    pillars: [{
      accent: "sec",
      icon: "shield",
      title: "Security & Alarm",
      items: ["Intrusion alarm & 24/7 monitoring", "Door & window sensors", "After-hours clinical-equipment protection", "Emergency-services / duress button at reception", "Secure-room & medication-storage alerts"]
    }, {
      accent: "vid",
      icon: "camera",
      title: "Video Surveillance",
      items: ["Reception & waiting-area cameras", "Entry, exit & parking coverage", "Corridor & common-area monitoring", "Remote mobile viewing", "Secure cloud or local storage"]
    }, {
      accent: "acc",
      icon: "key",
      title: "Access Control",
      items: ["Keypad, fob & keyless entry", "Separate access levels per area", "Clinical vs. staff vs. public control", "Audit trail & access logs", "After-hours lockdown capability"]
    }, {
      accent: "net",
      icon: "network",
      title: "Network Infrastructure",
      items: ["Structured cabling throughout", "Separate staff & guest Wi-Fi", "Isolated segments for diagnostic equipment", "Dedicated equipment network drops", "Clean rack / closet buildout"]
    }, {
      accent: "rec",
      icon: "monitor",
      title: "Reception & Front Desk",
      items: ["Workstation & check-in connectivity", "Patient check-in displays", "Waiting-room display TV", "Patient-education digital signage", "Intercom & paging"]
    }, {
      accent: "av",
      icon: "speaker",
      title: "AV, Audio & Conference",
      items: ["TV & display installation", "Teams / Zoom Rooms (telehealth)", "Wireless presentation system", "Zoned audio & paging", "Scheduled announcements (set times or intervals)", "One-touch room control"]
    }],
    support: {
      title: "Clinical & Site Support",
      items: ["Dedicated cabling for clinical equipment", "Isolated network segments for diagnostic tools", "Clean, professional cable management", "Infrastructure ready for future equipment", "Coordination with equipment vendors"]
    }
  },
  schools: {
    slug: "schools",
    audience: "For Schools & Campuses",
    title: "Technology Overview",
    subtitle: "Safer campuses, smarter classrooms, reliable IT",
    intro: "From the front office to the back field, we handle it all under one roof \u2014 vape & environmental sensing, enterprise video, access control, mass notification, and the IT backbone that keeps a large campus connected, safe, and running.",
    sectionTitle: "SERVICES TAILORED TO YOUR SCHOOL",
    isIndustry: true,
    onePager: "/downloads/schools.html",
    pillars: [{
      accent: "sec",
      icon: "shield",
      title: "Security & Alarm",
      items: ["Intrusion alarm & 24/7 monitoring", "Door, window & perimeter sensors", "One-button lockdown initiation", "Emergency-services / duress alerts", "After-hours & holiday protection"]
    }, {
      accent: "vid",
      icon: "camera",
      title: "Enterprise Video",
      items: ["Campus-wide IP camera coverage", "Central video management (VMS)", "Multi-building, single-pane management", "AI analytics & fast event search", "District-level & remote viewing", "Secure retention & incident export"]
    }, {
      accent: "acc",
      icon: "key",
      title: "Access Control",
      items: ["Secured entry vestibules", "Visitor management & check-in", "Role-based access (staff / admin / contractor)", "Bell-schedule & zone door automation", "Campus-wide lockdown integration"]
    }, {
      accent: "rec",
      icon: "sensor",
      title: "Vape & Environmental Sensing \u2014 HALO",
      items: ["HALO Smart Sensors in washrooms & locker rooms (no cameras)", "Vape, THC & smoke detection", "Air quality: CO\u2082, TVOC, temp, humidity", "Spoken-keyword, aggression & help alerts", "Tamper & occupancy detection", "Real-time alerts to staff phones"]
    }, {
      accent: "net",
      icon: "network",
      title: "Network & IT Services",
      items: ["Structured cabling & fibre backbone", "High-density Wi-Fi for 1:1 device programs", "Switching, VLANs & segmentation", "Device & endpoint management", "Server / NVR room buildout", "Help-desk & ongoing IT support"]
    }, {
      accent: "av",
      icon: "speaker",
      title: "AV & Mass Notification",
      items: ["Classroom displays & projectors", "Gym & auditorium AV", "PA / intercom & paging", "Clock-synced bells & scheduled announcements", "Campus-wide mass notification", "Digital signage & wayfinding", "One-touch room & event control"]
    }],
    support: {
      title: "Campus & IT Support",
      items: ["Dedicated cabling for labs & AV", "Segmented networks for safety systems", "Clean, professional cable management", "Infrastructure ready for enrollment growth", "Coordination with district IT & vendors"]
    }
  }
};

// Convenience: just the industry offerings, for the /industries index + nav.
const industries = Object.values(offerings).filter(o => o.isIndustry);
Object.assign(__ds_scope, { ICONS, smaTiers, smaNote, ongoingSupport, offerings, industries });
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-starter/src/data/services.ts", error: String((e && e.message) || e) }); }

// website-starter/src/data/site.ts
try { (() => {
// src/data/site.ts
// One place for brand, contact, licensing, nav, and the residential cross-link.
// Change anything here and it updates the masthead, footer, contact page, etc.

const SITE = {
  // --- Brand ---
  brand: "ER Tech Services",
  // visible commercial wordmark (ER = Expected Result)
  brandAccentWord: "Tech",
  // the word rendered in --brand colour
  legalEntity: "Expected Result Technical Services Corporation",
  tagline: "Front door to back office \u2014 under one roof",
  domain: "https://ertechservices.ca",
  // --- Contact ---
  // NOTE: never publish the street address (it is Vince's residence). City only.
  city: "Langley, BC",
  serviceArea: ["Sea-to-Sky / Pemberton", "Squamish & Whistler", "Metro Vancouver", "Fraser Valley to Hope", "Vancouver Island", "Gulf Islands", "Sunshine Coast"],
  serviceAreaLine: "From Pemberton through the Fraser Valley to Hope, across Metro Vancouver, Vancouver Island, the Gulf Islands & the Sunshine Coast.",
  phoneMobile: "778-246-2492",
  phoneOffice: "778-808-8769",
  // labelling: pamphlets use "Office" — confirm vs. live site
  email: "results@ertechservices.ca",
  linkedin: "https://www.linkedin.com/in/vinceyost/",
  // --- Licensing (CONFIRM exact designation/numbers off the letterhead) ---
  licenses: ["Security Consultant Lic. #B7128", "TSBC LIC-00214786"],
  // --- Sister site (residential, stays on WordPress this phase) ---
  residential: {
    label: "The Expected Result \u2014 Residential",
    blurb: "Home automation, lighting, AV & security for your home.",
    url: "https://theexpectedresult.ca"
  },
  // --- Primary navigation ---
  nav: [{
    label: "Home",
    href: "/"
  }, {
    label: "Services",
    href: "/services/"
  }, {
    label: "Industries",
    href: "/industries/"
  }, {
    label: "About",
    href: "/about/"
  }, {
    label: "Contact",
    href: "/contact/"
  }, {
    label: "Book a Walkthrough",
    href: "/quote/",
    cta: true
  }],
  // --- Credibility: ecosystems we work in ---
  ecosystems: ["Control4", "Crestron", "Lutron", "Alarm.com", "Hikvision", "DSC PowerSeries Neo / PowerG", "Araknis", "UniFi", "HALO Smart Sensor"],
  // --- Marketing callouts (homepage banner / cross-promos) ---
  promos: [{
    title: "Your security system could lower your insurance premiums",
    hook: "Professionally monitored systems can earn 5\u201320% off home & business premiums. Ask us about the monitoring certificate you'll need to claim it.",
    href: "/insurance/",
    cta: "See how it works",
    flyer: "/downloads/insurance-savings.html"
  }],
  // --- Quote form endpoint (fill in Formspree/Web3Forms key or host mailer) ---
  formEndpoint: "REPLACE_WITH_FORM_ENDPOINT"
};
Object.assign(__ds_scope, { SITE });
})(); } catch (e) { __ds_ns.__errors.push({ path: "website-starter/src/data/site.ts", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.StatusChip = __ds_scope.StatusChip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CtaBar = __ds_scope.CtaBar;

__ds_ns.IntroBanner = __ds_scope.IntroBanner;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.SmaTiers = __ds_scope.SmaTiers;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.SITE = __ds_scope.SITE;

})();
