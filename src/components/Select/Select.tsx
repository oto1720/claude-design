import { useId } from "react";
import type { SelectHTMLAttributes, ReactNode } from "react";
import "./Select.css";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Visible label rendered above the field. */
  label?: string;
  /** Helper or error text rendered below the field. */
  hint?: string;
  /** Render the field in an error state. */
  invalid?: boolean;
  /** `<option>` elements. */
  children: ReactNode;
}

/**
 * A single-choice dropdown built on the native `<select>` for accessibility,
 * with a custom chevron. Prefer always providing a `label`.
 */
export function Select({
  label,
  hint,
  invalid = false,
  id,
  className,
  children,
  ...rest
}: SelectProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const hintId = hint ? `${fieldId}-hint` : undefined;

  return (
    <div className={["ds-field", className ?? ""].filter(Boolean).join(" ")}>
      {label && (
        <label className="ds-field__label" htmlFor={fieldId}>
          {label}
        </label>
      )}
      <div className="ds-select">
        <select
          id={fieldId}
          className={`ds-select__control${
            invalid ? " ds-select__control--invalid" : ""
          }`}
          aria-invalid={invalid || undefined}
          aria-describedby={hintId}
          {...rest}
        >
          {children}
        </select>
        <span className="ds-select__chevron" aria-hidden="true" />
      </div>
      {hint && (
        <span
          id={hintId}
          className={`ds-field__hint${invalid ? " ds-field__hint--error" : ""}`}
        >
          {hint}
        </span>
      )}
    </div>
  );
}
