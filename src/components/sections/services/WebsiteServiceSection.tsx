"use client";

import { useState } from "react";
import {
  AnimatedCounter,
  ConvergingPair,
  GradientLineReveal,
  ScrollReveal,
} from "@/components/motion";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { websiteServiceContent } from "@/content/services";
import { cn } from "@/lib/cn";

const previewUrls: Record<string, { url: string; accent: string }> = {
  "Company Profile": {
    url: "namabrand.com",
    accent:
      "radial-gradient(circle at 20% 25%, #FF6B3D 0%, rgba(255,107,61,0) 50%), radial-gradient(circle at 80% 75%, #1F6FE5 0%, rgba(31,111,229,0) 55%), radial-gradient(circle at 55% 40%, #8A2BE2 0%, rgba(138,43,226,0) 45%), rgba(255,255,255,0.06)",
  },
  "Landing Page": {
    url: "promo.namabrand.com",
    accent:
      "radial-gradient(circle at 25% 30%, #FFB300 0%, rgba(255,179,0,0) 50%), radial-gradient(circle at 80% 75%, #EC3A8C 0%, rgba(236,58,140,0) 55%), rgba(255,255,255,0.06)",
  },
  "Toko Online": {
    url: "shop.namabrand.com",
    accent:
      "radial-gradient(circle at 20% 25%, #1BC0E8 0%, rgba(27,192,232,0) 50%), radial-gradient(circle at 80% 75%, #1F6FE5 0%, rgba(31,111,229,0) 55%), rgba(255,255,255,0.06)",
  },
  Portofolio: {
    url: "karya.namabrand.com",
    accent:
      "radial-gradient(circle at 30% 25%, #EC3A8C 0%, rgba(236,58,140,0) 50%), radial-gradient(circle at 75% 80%, #8A2BE2 0%, rgba(138,43,226,0) 55%), rgba(255,255,255,0.06)",
  },
};

export function WebsiteServiceSection() {
  const [activeTag, setActiveTag] = useState(
    websiteServiceContent.tags?.[0] ?? "Company Profile"
  );
  const activePreview =
    previewUrls[activeTag] ?? previewUrls["Company Profile"];

  return (
    <div className="flex flex-1 flex-col justify-between gap-8">
      <ConvergingPair
        className="flex flex-1 flex-col gap-10 lg:flex-row lg:items-center lg:gap-14"
        leftClassName="flex min-w-0 flex-1 flex-col justify-center gap-5"
        rightClassName="flex w-full flex-none items-center justify-center lg:w-[500px]"
        left={
          <>
            <SectionHeading
              description={websiteServiceContent.description}
              eyebrowLineGradient="linear-gradient(90deg, #FFB300, #FF6B3D)"
              eyebrowPrefix={websiteServiceContent.eyebrow}
              eyebrowPrefixColor="#FF6B3D"
              title={
                <>
                  {websiteServiceContent.headingPrefix}
                  <GradientText
                    gradient={websiteServiceContent.highlightGradient}
                  >
                    {websiteServiceContent.headingHighlight}
                  </GradientText>
                  {websiteServiceContent.headingSuffix}
                </>
              }
            />

            <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {websiteServiceContent.features.map((feat, idx) => (
                <ScrollReveal key={feat} delay={100 + idx * 45}>
                  <div className="flex items-center gap-2.5 text-sm text-foreground">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height="18"
                      stroke={websiteServiceContent.checkColor}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <path d="m5 12 5 5 9-10" />
                    </svg>
                    <span>{feat}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div
              aria-label="Jenis website"
              className="mt-2 flex flex-wrap gap-2.5"
              role="group"
            >
              {websiteServiceContent.tags?.map((tag) => (
                <button
                  key={tag}
                  aria-pressed={activeTag === tag}
                  className={cn(
                    "cursor-pointer rounded-full border px-4 py-2 text-[12.5px] font-medium backdrop-blur-[14px] transition-all",
                    activeTag === tag
                      ? "border-white/40 bg-white/[0.16] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
                      : "border-white/24 bg-white/[0.09] text-foreground/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] hover:bg-white/[0.14]"
                  )}
                  onClick={() => setActiveTag(tag)}
                  type="button"
                >
                  {tag}
                </button>
              ))}
            </div>
          </>
        }
        right={
          <div className="w-full overflow-hidden rounded-[18px] border border-white/24 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_30px_60px_rgba(0,0,0,0.35)] backdrop-blur-[24px] saturate-150">
            <div className="flex h-9 items-center gap-[7px] bg-white/[0.08] px-3.5">
              <span className="h-[9px] w-[9px] rounded-full bg-[#FF6B3D]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#FFB300]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#1BC0E8]" />
              <span className="ml-3.5 flex h-[18px] flex-1 items-center rounded-[9px] bg-white/[0.08] px-3 text-[10px] tracking-[0.06em] text-muted">
                {activePreview.url}
              </span>
            </div>

            <div className="flex flex-col gap-3.5 p-[22px]">
              <div className="flex items-center justify-between">
                <span className="h-2 w-[70px] rounded bg-white/50" />
                <span className="flex gap-2">
                  <span className="h-1.5 w-7 rounded bg-white/20" />
                  <span className="h-1.5 w-7 rounded bg-white/20" />
                  <span className="h-1.5 w-7 rounded bg-white/20" />
                </span>
              </div>

              <div
                className="flex h-[150px] flex-col justify-end gap-2 rounded-xl p-[22px] transition-all duration-500"
                style={{ background: activePreview.accent }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                  {activeTag}
                </span>
                <span className="h-3 w-[62%] rounded-md bg-white/90" />
                <span className="h-2 w-[40%] rounded bg-white/55" />
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <span className="h-14 rounded-[10px] bg-white/[0.06]" />
                <span className="h-14 rounded-[10px] bg-white/[0.06]" />
                <span className="h-14 rounded-[10px] bg-white/[0.06]" />
              </div>
            </div>
          </div>
        }
      />

      <div>
        <GradientLineReveal className="mb-4 h-px w-full opacity-35" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {websiteServiceContent.specs.map((spec, idx) => (
            <ScrollReveal key={spec.label} delay={100 + idx * 80}>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  {spec.label}
                </span>
                <span className="text-[15px] font-semibold text-foreground">
                  {idx === 0 ? (
                    <>
                      <AnimatedCounter duration={900} target={7} /> –{" "}
                      <AnimatedCounter duration={1200} target={21} /> hari kerja
                    </>
                  ) : (
                    spec.value
                  )}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
