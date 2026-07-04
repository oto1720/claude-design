import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import "./Checkbox.css";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Inline label shown next to the box. */
  children: ReactNode;
}

/** A checkbox for toggling a single option on or off. */
export function Checkbox({ id, className, children, ...rest }: CheckboxProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <label
      className={["ds-checkbox", className ?? ""].filter(Boolean).join(" ")}
      htmlFor={inputId}
    >
      <input
        id={inputId}
        type="checkbox"
        className="ds-checkbox__input"
        {...rest}
      />
      <span className="ds-checkbox__box" aria-hidden="true" />
      <span className="ds-checkbox__label">{children}</span>
    </label>
  );
}
