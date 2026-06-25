import * as React from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Optional count rendered as a small pill */
  badge?: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  /** Controlled active tab id */
  value?: string;
  /** Initial tab id when uncontrolled */
  defaultValue?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/** Underline tab bar with a cyan active indicator. */
export function Tabs(props: TabsProps): JSX.Element;
