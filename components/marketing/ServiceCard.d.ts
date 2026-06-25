import * as React from "react";

export type Accent = "sec" | "vid" | "acc" | "net" | "rec" | "av";

/**
 * The signature ER Tech pamphlet service card — gradient cap + accent bullets.
 * @startingPoint section="Marketing" subtitle="Pamphlet service card — gradient cap + accent bullets" viewport="360x420"
 */
export interface ServiceCardProps {
  /** Pillar accent → cap gradient + bullet colour. @default "sec" */
  accent?: Accent;
  /** Icon node rendered in the cap (Lucide icon recommended) */
  icon?: React.ReactNode;
  title: string;
  /** Bulleted capability list */
  items: string[];
  style?: React.CSSProperties;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
