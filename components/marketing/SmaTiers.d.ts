import * as React from "react";

export interface SmaTier {
  name: string;
  response: string;
  premium?: boolean;
}

export interface SmaTiersProps {
  /** Defaults to Standard / Priority / Premium if omitted */
  tiers?: SmaTier[];
  /** Italic note under the strip, e.g. the "jump the queue" line */
  note?: string;
  style?: React.CSSProperties;
}

/** Service & Maintenance Agreement tier strip; Premium tier gold-highlighted. */
export function SmaTiers(props: SmaTiersProps): JSX.Element;
