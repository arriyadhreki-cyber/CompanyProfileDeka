import type { ComponentProps } from "react";

export function GradientText({
  className,
  children,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      className={[
        "bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}