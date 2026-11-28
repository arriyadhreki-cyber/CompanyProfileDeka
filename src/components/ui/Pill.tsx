import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Pill({
  className,
  children,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}