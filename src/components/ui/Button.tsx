import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
  "disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variantStyles: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/90",
  secondary: "bg-accent text-white hover:bg-accent/90",
  ghost: "border border-line text-foreground hover:bg-foreground/5",
  link: "text-foreground hover:text-accent px-0 h-auto",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  type?: never;
  disabled?: never;
  onClick?: never;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  external?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  form?: string;
  name?: string;
  value?: string;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (props.href !== undefined) {
    if (props.external) {
      return (
        <a
          className={classes}
          href={props.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={props.href}>
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, onClick, form, name, value } = props;
  return (
    <button
      className={classes}
      disabled={disabled}
      form={form}
      name={name}
      onClick={onClick}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
}