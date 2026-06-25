import * as React from "react";

export interface AvatarProps {
  /** Image URL; falls back to initials when absent */
  src?: string;
  /** Full name — used for alt text and initials */
  name?: string;
  /** Pixel diameter. @default 40 */
  size?: number;
  style?: React.CSSProperties;
}

/** Circular avatar with image or brand-tinted initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
