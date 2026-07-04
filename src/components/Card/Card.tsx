import type { HTMLAttributes, ReactNode } from "react";
import "./Card.css";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Optional title rendered at the top of the card, in navy. */
  title?: ReactNode;
  /** Optional footer area, e.g. actions. */
  footer?: ReactNode;
  /** Card body content. */
  children: ReactNode;
}

/**
 * A surface that groups related content. Uses a thin border rather than a
 * shadow, in keeping with the brand's restrained style.
 */
export function Card({
  title,
  footer,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={["ds-card", className ?? ""].filter(Boolean).join(" ")}
      {...rest}
    >
      {title != null && <div className="ds-card__title">{title}</div>}
      <div className="ds-card__body">{children}</div>
      {footer != null && <div className="ds-card__footer">{footer}</div>}
    </div>
  );
}
