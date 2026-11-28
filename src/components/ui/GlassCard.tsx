"use client";

import { useRef, type ComponentProps, type MouseEvent } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = ComponentProps<"div"> & {
  interactive?: boolean;
  featured?: boolean;
};

export function GlassCard({
  className,
  children,
  interactive = true,
  featured = false,
  onMouseMove,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(e);
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--spotlight-x", `${x}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group/card relative overflow-hidden rounded-[22px] transition-[transform,border-color,box-shadow] duration-300",
        featured ? "deka-growth-border" : "deka-glass-surface",
        interactive &&
          "hover:-translate-y-1 hover:border-white/30 motion-reduce:hover:translate-y-0",
        className
      )}
      {...props}
    >
      {interactive && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 motion-reduce:hidden"
          style={{
            background:
              "radial-gradient(360px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(255,255,255,0.11), transparent 60%)",
          }}
        />
      )}
      {children}
    </div>
  );
}
