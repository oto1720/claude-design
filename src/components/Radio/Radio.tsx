import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import "./Radio.css";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Inline label shown next to the dot. */
  children: ReactNode;
}

/**
 * A radio button for choosing one option from a set. Give every radio in a
 * group the same `name`.
 */
export function Radio({ id, className, children, ...rest }: RadioProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <label
      className={["ds-radio", className ?? ""].filter(Boolean).join(" ")}
      htmlFor={inputId}
    >
      <input id={inputId} type="radio" className="ds-radio__input" {...rest} />
      <span className="ds-radio__dot" aria-hidden="true" />
      <span className="ds-radio__label">{children}</span>
    </label>
  );
}
