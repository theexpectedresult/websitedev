import * as React from "react";

export interface IntroBannerProps {
  /** Optional leading icon node */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Amber→purple→indigo page-intro banner (pamphlet signature). */
export function IntroBanner(props: IntroBannerProps): JSX.Element;
