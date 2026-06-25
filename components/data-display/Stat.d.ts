import * as React from "react";

export interface StatProps {
  /** Uppercase eyebrow label */
  label: string;
  /** Primary metric value */
  value: React.ReactNode;
  /** Trailing unit, e.g. "open" or "%" */
  unit?: string;
  /** Delta caption, e.g. "+2 this week" */
  delta?: string;
  /** Color of the delta. @default "up" */
  deltaTone?: "up" | "down" | "flat";
  /** Optional leading icon node */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

/** KPI metric block for dashboards and trackers. */
export function Stat(props: StatProps): JSX.Element;
