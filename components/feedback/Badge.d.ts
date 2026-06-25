import * as React from "react";

export interface BadgeProps {
  /** @default "brand" */
  tone?: "brand" | "ink" | "soft" | "gold" | "outline";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Compact count or label badge. */
export function Badge(props: BadgeProps): JSX.Element;
