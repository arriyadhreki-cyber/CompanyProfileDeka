import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";

export function GlassCard({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative rounded-card border border-line bg-white/60 backdrop-blur-md shadow-glass",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}