import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link" | "gradient";
type Size = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2 " +
  "disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap cursor-pointer";

const variantStyles: Record<Variant, string> = {
  primary: "bg-foreground text-[#0F1B22] hover:bg-foreground/90 font-semibold",
  secondary: "bg-accent text-white hover:bg-accent/90 font-semibold",
  ghost:
    "border border-white/20 bg-white/[0.08] text-foreground backdrop-blur-md hover:bg-white/[0.14] hover:border-white/30",
  link: "text-foreground hover:text-accent-2 px-0 h-auto",
  gradient:
    "text-[#0F1B22] font-bold shadow-[0_12px_30px_rgba(236,58,140,0.25)] hover:brightness-110 active:scale-[0.99]",
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
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const gradientStyle =
    variant === "gradient"
      ? {
          backgroundImage:
            "linear-gradient(90deg, #FFB300 0%, #FF6B3D 25%, #EC3A8C 55%, #8A6BF0 80%, #1BC0E8 100%)",
        }
      : undefined;

  if (props.href !== undefined) {
    if (props.external) {
      return (
        <a
          className={classes}
          href={props.href}
          rel="noopener noreferrer"
          style={gradientStyle}
          target="_blank"
        >
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={props.href} style={gradientStyle}>
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
      style={gradientStyle}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
}
