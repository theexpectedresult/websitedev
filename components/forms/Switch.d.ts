export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** Optional text label to the right of the track */
  label?: string;
  id?: string;
}

/** Brand-cyan toggle switch. */
export function Switch(props: SwitchProps): JSX.Element;
