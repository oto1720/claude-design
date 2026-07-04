import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button. */
  variant?: ButtonVariant;
  /** Size of the button. */
  size?: ButtonSize;
  /** Stretch to fill the width of its container. */
  fullWidth?: boolean;
  /** Button label / content. */
  children: ReactNode;
}

/**
 * The primary interactive element. Use `variant="primary"` for the main
 * action on a screen, and at most one primary button per view.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    "ds-button",
    `ds-button--${variant}`,
    `ds-button--${size}`,
    fullWidth ? "ds-button--full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
