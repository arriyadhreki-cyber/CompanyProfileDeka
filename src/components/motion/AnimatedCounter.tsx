"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Animated Number Counter:
 * Menghitung angka dari 0 ke nilai target secara halus saat elemen masuk viewport,
 * menggunakan tabular-nums agar tidak terjadi layout shift selama animasi.
 */
export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1400,
  padZero = false,
  className,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  padZero?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            observer.unobserve(entry.target);

            const startTime = performance.now();
            const step = (now: number) => {
              const elapsed = now - startTime;
              const t = Math.min(1, elapsed / duration);
              // Ease-out expo
              const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
              setValue(Math.round(target * eased));
              if (t < 1) {
                requestAnimationFrame(step);
              }
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted = padZero
    ? String(value).padStart(2, "0")
    : String(value);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
