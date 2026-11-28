import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function GlassCard({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative rounded-card border border-white/10 bg-white/5 backdrop-blur-xl shadow-glass",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}