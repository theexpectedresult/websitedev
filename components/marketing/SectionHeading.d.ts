import * as React from "react";

export interface SectionHeadingProps {
  children?: React.ReactNode;
  /** @default "left" */
  align?: "left" | "center";
  style?: React.CSSProperties;
}

/** Section title with the green→indigo→purple brand gradient rule beneath it. */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
