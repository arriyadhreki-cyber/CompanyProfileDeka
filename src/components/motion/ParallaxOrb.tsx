"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Ambient radial glow orb dengan CSS scroll-driven parallax (`animation-timeline: view()`)
 * dan fallback IntersectionObserver + scroll listener jika CSS view() belum didukung.
 */
export function ParallaxOrb({
  className,
  background,
  speed = 0.08,
}: {
  className?: string;
  background: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (
      typeof CSS !== "undefined" &&
      CSS.supports("(animation-timeline: view()) and (animation-range: entry)")
    ) {
      return;
    }

    let active = false;
    const onScroll = () => {
      if (!active) return;
      const offset = window.scrollY * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        active = entries.some((e) => e.isIntersecting);
        if (active) {
          window.addEventListener("scroll", onScroll, { passive: true });
          onScroll();
        } else {
          window.removeEventListener("scroll", onScroll);
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "deka-orb-scroll pointer-events-none rounded-full",
        className
      )}
      style={{ background }}
    />
  );
}
