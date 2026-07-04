import type { HTMLAttributes, ReactNode } from "react";
import "./Callout.css";

export type CalloutTone = "note" | "emphasis";

export interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * `note` — a quote / annotation: navy left rule with muted grey text.
   * `emphasis` — highlight a point: accent (orange) left band + tint.
   */
  tone?: CalloutTone;
  /** Callout content. */
  children: ReactNode;
}

/**
 * A block for quotes, annotations, or highlighted points. Use `note` for
 * supporting notes and quotes, and `emphasis` sparingly to draw the eye to a
 * single key point.
 */
export function Callout({
  tone = "note",
  className,
  children,
  ...rest
}: CalloutProps) {
  const classes = ["ds-callout", `ds-callout--${tone}`, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
