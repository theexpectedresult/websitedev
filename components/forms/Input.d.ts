import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label shown above the control */
  label?: string;
  /** Helper text below the field */
  hint?: string;
  /** Error message; turns the field red and overrides hint */
  error?: string;
  /** Icon node rendered inside the field, left of the text */
  iconLeft?: React.ReactNode;
}

/** Labelled text input with cyan focus ring and error state. */
export function Input(props: InputProps): JSX.Element;
