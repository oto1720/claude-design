import type { HTMLAttributes, ReactNode } from "react";
import "./Badge.css";

export type BadgeTone = "neutral" | "accent" | "navy";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Semantic color of the badge. */
  tone?: BadgeTone;
  /** Badge content. */
  children: ReactNode;
}

/**
 * A small status label used to annotate other content, e.g. "Active",
 * "Beta", or a count.
 */
export function Badge({ tone = "neutral", className, children, ...rest }: BadgeProps) {
  const classes = ["ds-badge", `ds-badge--${tone}`, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
