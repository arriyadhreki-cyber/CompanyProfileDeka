"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * High Line Reveal — bagian 1:
 * Menggambar garis spektrum / divider secara horizontal (scaleX 0 -> 1)
 * saat memasuki viewport.
 */
export function GradientLineReveal({
  className,
  delay = 0,
  duration = 750,
  origin = "left",
}: {
  className?: string;
  delay?: number;
  duration?: number;
  origin?: "left" | "center" | "right";
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("deka-spectrum-line", className)}
      style={{
        transformOrigin:
          origin === "left"
            ? "0% 50%"
            : origin === "right"
              ? "100% 50%"
              : "50% 50%",
        transform: visible ? "scaleX(1)" : "scaleX(0)",
        opacity: visible ? 1 : 0.25,
        transitionProperty: "transform, opacity",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
      }}
    />
  );
}

/**
 * High Line Reveal — bagian 2:
 * Reveal teks editorial menggunakan clip-path & vertical translate
 * seolah teks muncul dari balik garis batas presisi.
 */
export function TextLineReveal({
  children,
  className,
  delay = 80,
  duration = 800,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
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
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        style={{
          transform: visible ? "translate3d(0, 0%, 0)" : "translate3d(0, 105%, 0)",
          opacity: visible ? 1 : 0,
          clipPath: visible ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
          transitionProperty: "transform, opacity, clip-path",
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
