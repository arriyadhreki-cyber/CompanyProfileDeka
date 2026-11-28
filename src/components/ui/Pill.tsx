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
        "inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs font-medium tracking-[0.2em] text-[#C4D0D8] backdrop-blur-[14px] shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
