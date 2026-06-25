import React from "react";

/** Toggle switch in brand teal. */
export function Switch({ checked = false, onChange, disabled = false, label, id }) {
  const switchId = id || (label ? `sw-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const track = {
    width: "40px", height: "22px", borderRadius: "var(--radius-pill)",
    background: checked ? "var(--brand-deep)" : "var(--gray-300)",
    position: "relative", transition: "background var(--dur-base) var(--ease)",
    cursor: disabled ? "not-allowed" : "pointer", flex: "none",
    opacity: disabled ? 0.5 : 1,
  };
  const knob = {
    position: "absolute", top: "2px", left: checked ? "20px" : "2px",
    width: "18px", height: "18px", borderRadius: "50%", background: "var(--white)",
    boxShadow: "var(--shadow-sm)", transition: "left var(--dur-base) var(--ease)",
  };
  return (
    <label htmlFor={switchId} style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontFamily: "var(--font-sans)", cursor: disabled ? "not-allowed" : "pointer" }}>
      <span
        role="switch"
        aria-checked={checked}
        style={track}
        onClick={() => !disabled && onChange && onChange(!checked)}
      >
        <span style={knob} />
      </span>
      {label && <span style={{ fontSize: "var(--fs-sm)", color: "var(--text-body)" }}>{label}</span>}
      <input id={switchId} type="checkbox" checked={checked} onChange={() => {}} style={{ display: "none" }} />
    </label>
  );
}
