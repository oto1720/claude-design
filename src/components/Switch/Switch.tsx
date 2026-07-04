import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import "./Switch.css";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Inline label shown next to the switch. */
  children?: ReactNode;
}

/**
 * A toggle switch for an immediate on/off setting. Use for settings that take
 * effect at once; use a `Checkbox` inside forms that are submitted.
 */
export function Switch({ id, className, children, ...rest }: SwitchProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <label
      className={["ds-switch", className ?? ""].filter(Boolean).join(" ")}
      htmlFor={inputId}
    >
      <input
        id={inputId}
        type="checkbox"
        role="switch"
        className="ds-switch__input"
        {...rest}
      />
      <span className="ds-switch__track" aria-hidden="true">
        <span className="ds-switch__thumb" />
      </span>
      {children && <span className="ds-switch__label">{children}</span>}
    </label>
  );
}
