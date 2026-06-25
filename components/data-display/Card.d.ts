import * as React from "react";

/**
 * Base content surface — white, subtle border, soft shadow.
 * @startingPoint section="Core" subtitle="Surface card with optional gradient accent bar" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show the cyan→blue gradient accent bar across the top. @default false */
  accent?: boolean;
  /** Apply default internal padding. @default true */
  padded?: boolean;
  /** Lift on hover (use for clickable cards). @default false */
  interactive?: boolean;
  children?: React.ReactNode;
}

/** Base content surface — white, subtle border, soft shadow. */
export function Card(props: CardProps): JSX.Element;
