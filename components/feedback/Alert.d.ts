import * as React from "react";

export interface AlertProps {
  /** @default "info" */
  tone?: "info" | "success" | "warning" | "danger";
  title?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Inline callout with a status-colored left accent bar. */
export function Alert(props: AlertProps): JSX.Element;
