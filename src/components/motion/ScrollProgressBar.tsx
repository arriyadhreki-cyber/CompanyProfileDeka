"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll Progress Indicator dengan CSS Scroll-Driven Animation (`animation-timeline: scroll()`)
 * dan fallback listener untuk browser yang belum mendukung scroll-timeline.
 */
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    if (
      typeof CSS !== "undefined" &&
      CSS.supports("animation-timeline", "scroll()")
    ) {
      return;
    }

    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio =
        scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      el.style.transform = `scaleX(${ratio})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-white/[0.06]"
    >
      <div
        ref={barRef}
        className="deka-scroll-progress deka-spectrum-line h-full w-full"
      />
    </div>
  );
}
