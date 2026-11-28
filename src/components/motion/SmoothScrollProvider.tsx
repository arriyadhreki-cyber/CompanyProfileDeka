"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SmoothScrollContextValue = {
  scrollY: number;
  velocity: number;
  progress: number;
  scrollTo: (targetY: number) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollY: 0,
  velocity: 0,
  progress: 0,
  scrollTo: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

function findScrollableAncestor(target: EventTarget | null): HTMLElement | null {
  let el = target instanceof HTMLElement ? target : null;
  while (el && el !== document.body && el !== document.documentElement) {
    const style = window.getComputedStyle(el);
    const overflowY = style.overflowY;
    if (
      (overflowY === "auto" || overflowY === "scroll") &&
      el.scrollHeight > el.clientHeight + 2
    ) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

/**
 * Momentum Smooth Scrolling engine berbasis physics exponential damping
 * yang menggerakkan native window.scrollTo({ behavior: "instant" }),
 * sehingga CSS Scroll-Driven Animations (view()/scroll()) dan IntersectionObserver
 * tetap berjalan presisi di dokumen utama.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [metrics, setMetrics] = useState({
    scrollY: 0,
    velocity: 0,
    progress: 0,
  });

  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const isDrivingRef = useRef(false);
  const lastTimeRef = useRef<number>(0);

  // Sinkronisasi ulang posisi scroll saat pindah halaman
  useEffect(() => {
    const y = window.scrollY;
    targetRef.current = y;
    currentRef.current = y;
    velocityRef.current = 0;
  }, [pathname]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const getMaxScroll = () =>
      Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

    const publishMetrics = (y: number, vel: number) => {
      const max = getMaxScroll();
      const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      document.documentElement.style.setProperty(
        "--scroll-velocity",
        vel.toFixed(3)
      );
      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toFixed(4)
      );
      setMetrics({ scrollY: y, velocity: vel, progress });
    };

    const stopLoop = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      isDrivingRef.current = false;
      velocityRef.current = 0;
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastTimeRef.current) / 1000));
      lastTimeRef.current = now;

      const maxScroll = getMaxScroll();
      targetRef.current = Math.min(maxScroll, Math.max(0, targetRef.current));

      const prev = currentRef.current;
      // Exponential frame-rate independent damping untuk rasa momentum halus
      const damping = 1 - Math.exp(-9.5 * dt);
      const next = prev + (targetRef.current - prev) * damping;
      const diff = targetRef.current - next;

      currentRef.current = Math.abs(diff) < 0.35 ? targetRef.current : next;
      const instantVelocity = (currentRef.current - prev) / (dt * 60);
      velocityRef.current = instantVelocity;

      window.scrollTo({
        top: currentRef.current,
        behavior: "instant" as ScrollBehavior,
      });

      publishMetrics(currentRef.current, instantVelocity);

      if (Math.abs(targetRef.current - currentRef.current) >= 0.35) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        stopLoop();
        publishMetrics(currentRef.current, 0);
      }
    };

    const startLoop = () => {
      if (rafRef.current !== null) return;
      isDrivingRef.current = true;
      lastTimeRef.current = performance.now();
      rafRef.current = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      if (reducedMotion.matches || coarsePointer.matches) return;
      if (e.ctrlKey || e.metaKey) return;
      // Abaikan scroll horizontal murni atau saat dialog terbuka
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      if (document.body.style.overflow === "hidden") return;

      const scrollableAncestor = findScrollableAncestor(e.target);
      if (scrollableAncestor) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableAncestor;
        const atTop = scrollTop <= 0 && e.deltaY < 0;
        const atBottom =
          scrollTop + clientHeight >= scrollHeight - 1 && e.deltaY > 0;
        if (!atTop && !atBottom) return;
      }

      e.preventDefault();

      // Normalisasi deltaMode (pixel vs line vs page)
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 32;
      else if (e.deltaMode === 2) delta *= window.innerHeight * 0.85;

      if (!isDrivingRef.current) {
        currentRef.current = window.scrollY;
        targetRef.current = window.scrollY;
      }

      const maxScroll = getMaxScroll();
      targetRef.current = Math.min(
        maxScroll,
        Math.max(0, targetRef.current + delta * 1.05)
      );

      startLoop();
    };

    const onNativeScroll = () => {
      if (isDrivingRef.current) return;
      const y = window.scrollY;
      currentRef.current = y;
      targetRef.current = y;
      publishMetrics(y, 0);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(
          e.key
        )
      ) {
        // Biarkan native keyboard scrolling mengambil alih tanpa bentrok
        if (isDrivingRef.current) {
          stopLoop();
          targetRef.current = window.scrollY;
          currentRef.current = window.scrollY;
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onNativeScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown, { passive: true });

    publishMetrics(window.scrollY, 0);

    return () => {
      stopLoop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onNativeScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const scrollTo = (targetY: number) => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) {
      window.scrollTo(0, targetY);
      return;
    }
    const maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
    currentRef.current = window.scrollY;
    targetRef.current = Math.min(maxScroll, Math.max(0, targetY));
    if (rafRef.current === null) {
      isDrivingRef.current = true;
      lastTimeRef.current = performance.now();
      const step = (now: number) => {
        const dt = Math.min(0.05, Math.max(0.001, (now - lastTimeRef.current) / 1000));
        lastTimeRef.current = now;
        const damping = 1 - Math.exp(-9.5 * dt);
        const next =
          currentRef.current + (targetRef.current - currentRef.current) * damping;
        currentRef.current =
          Math.abs(targetRef.current - next) < 0.35 ? targetRef.current : next;
        window.scrollTo({
          top: currentRef.current,
          behavior: "instant" as ScrollBehavior,
        });
        if (Math.abs(targetRef.current - currentRef.current) >= 0.35) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
          isDrivingRef.current = false;
        }
      };
      rafRef.current = requestAnimationFrame(step);
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ ...metrics, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
