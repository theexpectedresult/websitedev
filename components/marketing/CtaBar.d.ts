import * as React from "react";

export interface CtaBarProps {
  /** @default "Schedule a walkthrough" */
  title?: string;
  subtitle?: string;
  /** Action node (Button / link) rendered on the right */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Repeating dark-gradient call-to-action band. */
export function CtaBar(props: CtaBarProps): JSX.Element;
