import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import "./Input.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Visible label rendered above the field. */
  label?: string;
  /** Helper or error text rendered below the field. */
  hint?: string;
  /** Render the field in an error state. */
  invalid?: boolean;
}

/**
 * A single-line text field with an optional label and hint. Prefer always
 * providing a `label` for accessibility.
 */
export function Input({
  label,
  hint,
  invalid = false,
  id,
  className,
  ...rest
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const hintId = hint ? `${inputId}-hint` : undefined;

  return (
    <div className={["ds-field", className ?? ""].filter(Boolean).join(" ")}>
      {label && (
        <label className="ds-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`ds-input${invalid ? " ds-input--invalid" : ""}`}
        aria-invalid={invalid || undefined}
        aria-describedby={hintId}
        {...rest}
      />
      {hint && (
        <span
          id={hintId}
          className={`ds-field__hint${
            invalid ? " ds-field__hint--error" : ""
          }`}
        >
          {hint}
        </span>
      )}
    </div>
  );
}
