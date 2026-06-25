import * as React from "react";

/**
 * Visual emphasis. @default "primary"
 * @startingPoint section="Core" subtitle="Brand buttons — cyan primary, blue secondary, outline & ghost" viewport="700x140"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. @default "primary" */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Icon node rendered before the label */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label */
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

/** Primary action control for ER Tech Services interfaces. */
export function Button(props: ButtonProps): JSX.Element;
