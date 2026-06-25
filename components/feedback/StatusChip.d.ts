import * as React from "react";

/**
 * Pill status chip reusing the project-tracker palette.
 * @startingPoint section="Core" subtitle="Tracker status chips — complete, in progress, needs parts, blocked" viewport="700x130"
 */
export interface StatusChipProps {
  /** Maps to the ER Tech tracker palette. @default "info" */
  status?: "complete" | "progress" | "parts" | "blocked" | "info" | "neutral";
  /** Show the leading status dot. @default true */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Pill status chip reusing the project-tracker palette. */
export function StatusChip(props: StatusChipProps): JSX.Element;
