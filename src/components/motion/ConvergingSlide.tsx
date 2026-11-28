"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Side = "left" | "right";

/**
 * Converging Bidirectional Slide-In:
 * Kolom kiri masuk dari kiri (-distance) dan kolom kanan masuk dari kanan (+distance),
 * bertemu secara simetris di tengah saat container masuk ke viewport.
 */
export function ConvergingPair({
  left,
  right,
  className,
  leftClassName,
  rightClassName,
  distance = 48,
  duration = 820,
}: {
  left: ReactNode;
  right: ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  distance?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const panelStyle = (side: Side) => ({
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translate3d(0, 0, 0)"
      : `translate3d(${side === "left" ? -distance : distance}px, 0, 0)`,
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: side === "left" ? "40ms" : "120ms",
    willChange: visible ? "auto" : "opacity, transform",
  });

  return (
    <div ref={ref} className={cn(className)}>
      <div className={leftClassName} style={panelStyle("left")}>
        {left}
      </div>
      <div className={rightClassName} style={panelStyle("right")}>
        {right}
      </div>
    </div>
  );
}
