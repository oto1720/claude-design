import { useId } from "react";
import type { TextareaHTMLAttributes } from "react";
import "./Textarea.css";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Visible label rendered above the field. */
  label?: string;
  /** Helper or error text rendered below the field. */
  hint?: string;
  /** Render the field in an error state. */
  invalid?: boolean;
}

/**
 * A multi-line text field with an optional label and hint. Prefer always
 * providing a `label` for accessibility.
 */
export function Textarea({
  label,
  hint,
  invalid = false,
  id,
  className,
  rows = 4,
  ...rest
}: TextareaProps) {
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
      <textarea
        id={fieldId}
        rows={rows}
        className={`ds-textarea${invalid ? " ds-textarea--invalid" : ""}`}
        aria-invalid={invalid || undefined}
        aria-describedby={hintId}
        {...rest}
      />
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
