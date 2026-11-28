import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Props = ComponentProps<"span"> & {
  gradient?: string;
};

export function GradientText({
  className,
  gradient = "linear-gradient(90deg, #FFB300 0%, #FF6B3D 20%, #EC3A8C 40%, #8A2BE2 62%, #1F6FE5 82%, #1BC0E8 100%)",
  style,
  children,
  ...props
}: Props) {
  return (
    <span
      className={cn(
        "font-display italic font-normal bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: gradient,
        WebkitBackgroundClip: "text",
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
