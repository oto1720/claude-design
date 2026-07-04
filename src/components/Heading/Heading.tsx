import type { HTMLAttributes, ReactNode } from "react";
import "./Heading.css";

export type HeadingLevel = 1 | 2;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading level — 1 for a slide/section title, 2 for a subheading. */
  level?: HeadingLevel;
  /** Optional leading number, e.g. `1` renders "01". */
  number?: number;
  /** Heading text. */
  children: ReactNode;
}

/**
 * A left-aligned heading in navy with a short accent (orange) underline, and
 * an optional leading number. This is the house style for titles — do not
 * center-align headings.
 */
export function Heading({
  level = 1,
  number,
  className,
  children,
  ...rest
}: HeadingProps) {
  const Tag = (`h${level}` as const) satisfies "h1" | "h2";
  const classes = [
    "ds-heading",
    `ds-heading--h${level}`,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...rest}>
      {number != null && (
        <span className="ds-heading__number">
          {String(number).padStart(2, "0")}
        </span>
      )}
      <span className="ds-heading__text">{children}</span>
    </Tag>
  );
}
