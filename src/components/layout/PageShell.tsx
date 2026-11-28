import type { ReactNode } from "react";
import { ParallaxOrb } from "@/components/motion";
import { cn } from "@/lib/cn";
import { PageBadge } from "./PageBadge";
import { PageNav } from "./PageNav";

export type PageGlowVariant =
  | "tentang"
  | "tim"
  | "layanan"
  | "website"
  | "desain"
  | "dokumentasi"
  | "paket"
  | "portofolio"
  | "kontak";

const variantBackgrounds: Record<PageGlowVariant, string> = {
  tentang:
    "radial-gradient(circle at 92% 90%, rgba(27,192,232,0.42) 0, rgba(27,192,232,0) 32%), radial-gradient(circle at 4% 8%, rgba(236,58,140,0.45) 0, rgba(236,58,140,0) 30%), radial-gradient(circle at 55% 100%, rgba(138,43,226,0.40) 0, rgba(138,43,226,0) 32%), #0F1B22",
  tim: "radial-gradient(circle at 8% 95%, rgba(31,111,229,0.46) 0, rgba(31,111,229,0) 32%), radial-gradient(circle at 96% 6%, rgba(236,58,140,0.42) 0, rgba(236,58,140,0) 30%), radial-gradient(circle at 70% 100%, rgba(255,107,61,0.36) 0, rgba(255,107,61,0) 30%), #0F1B22",
  layanan:
    "radial-gradient(circle at 10% 20%, rgba(255,179,0,0.30) 0, rgba(255,179,0,0) 26%), radial-gradient(circle at 92% 55%, rgba(138,43,226,0.50) 0, rgba(138,43,226,0) 34%), radial-gradient(circle at 30% 100%, rgba(27,192,232,0.38) 0, rgba(27,192,232,0) 32%), #0F1B22",
  website:
    "radial-gradient(circle at 94% 20%, rgba(255,107,61,0.46) 0, rgba(255,107,61,0) 32%), radial-gradient(circle at 5% 90%, rgba(138,43,226,0.44) 0, rgba(138,43,226,0) 32%), radial-gradient(circle at 75% 100%, rgba(31,111,229,0.44) 0, rgba(31,111,229,0) 32%), #0F1B22",
  desain:
    "radial-gradient(circle at 6% 14%, rgba(138,43,226,0.48) 0, rgba(138,43,226,0) 32%), radial-gradient(circle at 96% 92%, rgba(255,107,61,0.42) 0, rgba(255,107,61,0) 32%), radial-gradient(circle at 40% 102%, rgba(236,58,140,0.42) 0, rgba(236,58,140,0) 32%), #0F1B22",
  dokumentasi:
    "radial-gradient(circle at 95% 10%, rgba(27,192,232,0.46) 0, rgba(27,192,232,0) 32%), radial-gradient(circle at 4% 88%, rgba(31,111,229,0.46) 0, rgba(31,111,229,0) 32%), radial-gradient(circle at 45% 104%, rgba(138,43,226,0.42) 0, rgba(138,43,226,0) 32%), #0F1B22",
  paket:
    "radial-gradient(circle at 8% 12%, rgba(255,107,61,0.40) 0, rgba(255,107,61,0) 30%), radial-gradient(circle at 94% 40%, rgba(27,192,232,0.38) 0, rgba(27,192,232,0) 32%), radial-gradient(circle at 50% 104%, rgba(138,43,226,0.50) 0, rgba(138,43,226,0) 36%), #0F1B22",
  portofolio:
    "radial-gradient(circle at 92% 8%, rgba(255,179,0,0.30) 0, rgba(255,179,0,0) 26%), radial-gradient(circle at 5% 70%, rgba(236,58,140,0.44) 0, rgba(236,58,140,0) 32%), radial-gradient(circle at 80% 104%, rgba(31,111,229,0.50) 0, rgba(31,111,229,0) 34%), #0F1B22",
  kontak:
    "radial-gradient(circle at 96% 70%, rgba(236,58,140,0.46) 0, rgba(236,58,140,0) 34%), radial-gradient(circle at 4% 8%, rgba(255,107,61,0.36) 0, rgba(255,107,61,0) 28%), radial-gradient(circle at 60% 102%, rgba(31,111,229,0.50) 0, rgba(31,111,229,0) 34%), radial-gradient(circle at 80% 0%, rgba(27,192,232,0.32) 0, rgba(27,192,232,0) 28%), #0F1B22",
};

const variantOrb: Record<
  PageGlowVariant,
  { position: string; gradient: string }
> = {
  tentang: {
    position: "-left-[200px] -top-[240px] h-[640px] w-[640px]",
    gradient:
      "radial-gradient(circle, rgba(255,107,61,0.12) 0%, rgba(15,27,34,0) 70%)",
  },
  tim: {
    position: "-right-[220px] -top-[240px] h-[640px] w-[640px]",
    gradient:
      "radial-gradient(circle, rgba(138,43,226,0.14) 0%, rgba(15,27,34,0) 70%)",
  },
  layanan: {
    position: "-right-[220px] -bottom-[280px] h-[680px] w-[680px]",
    gradient:
      "radial-gradient(circle, rgba(138,43,226,0.16) 0%, rgba(15,27,34,0) 70%)",
  },
  website: {
    position: "-right-[200px] -bottom-[260px] h-[640px] w-[640px]",
    gradient:
      "radial-gradient(circle, rgba(255,107,61,0.14) 0%, rgba(15,27,34,0) 70%)",
  },
  desain: {
    position: "-left-[220px] -bottom-[260px] h-[640px] w-[640px]",
    gradient:
      "radial-gradient(circle, rgba(236,58,140,0.14) 0%, rgba(15,27,34,0) 70%)",
  },
  dokumentasi: {
    position: "-right-[220px] -top-[240px] h-[640px] w-[640px]",
    gradient:
      "radial-gradient(circle, rgba(27,192,232,0.14) 0%, rgba(15,27,34,0) 70%)",
  },
  paket: {
    position: "left-[30%] -top-[300px] h-[700px] w-[700px]",
    gradient:
      "radial-gradient(circle, rgba(138,43,226,0.14) 0%, rgba(15,27,34,0) 70%)",
  },
  portofolio: {
    position: "-right-[220px] -bottom-[260px] h-[640px] w-[640px]",
    gradient:
      "radial-gradient(circle, rgba(31,111,229,0.16) 0%, rgba(15,27,34,0) 70%)",
  },
  kontak: {
    position: "-left-[180px] -bottom-[240px] h-[620px] w-[620px]",
    gradient:
      "radial-gradient(circle, rgba(236,58,140,0.12) 0%, rgba(15,27,34,0) 70%)",
  },
};

export function PageShell({
  number,
  label,
  currentHref,
  variant,
  children,
  className,
}: {
  number: string;
  label: string;
  currentHref: string;
  variant: PageGlowVariant;
  children: ReactNode;
  className?: string;
}) {
  const orb = variantOrb[variant];

  return (
    <section
      className={cn(
        "relative min-h-[calc(100dvh-4rem)] overflow-x-clip px-5 py-10 text-foreground sm:px-10 lg:px-[72px] lg:py-12",
        className
      )}
      style={{ background: variantBackgrounds[variant] }}
    >
      <ParallaxOrb
        background={orb.gradient}
        className={cn("absolute", orb.position)}
      />

      <div className="relative mx-auto flex min-h-[calc(100dvh-10rem)] max-w-[1136px] flex-col">
        <PageBadge label={label} number={number} />
        <div className="flex flex-1 flex-col">{children}</div>
        <PageNav current={currentHref} />
      </div>
    </section>
  );
}
