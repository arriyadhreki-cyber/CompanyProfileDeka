"use client";

import { useState } from "react";
import {
  ConvergingPair,
  GradientLineReveal,
  ScrollReveal,
} from "@/components/motion";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { designServiceContent } from "@/content/services";

const paletteColors = ["#FF6B3D", "#EC3A8C", "#8A2BE2", "#1BC0E8"];

export function DesignServiceSection() {
  const [selectedSwatch, setSelectedSwatch] = useState<string | null>(null);

  return (
    <div className="flex flex-1 flex-col justify-between gap-8">
      <ConvergingPair
        className="flex flex-1 flex-col gap-10 lg:flex-row lg:items-center lg:gap-14"
        leftClassName="grid w-full flex-none grid-cols-6 grid-rows-2 gap-3.5 lg:h-[370px] lg:w-[500px]"
        rightClassName="flex min-w-0 flex-1 flex-col justify-center gap-5"
        left={
          <>
            <div className="deka-glass-surface group relative col-span-3 flex min-h-[170px] items-center justify-center overflow-hidden rounded-[18px] bg-white/[0.06]">
              <div
                aria-hidden="true"
                className="h-[90px] w-[90px] rounded-full transition-transform duration-500 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, #FFB300 0%, #FF6B3D 30%, #EC3A8C 55%, #8A2BE2 78%, #1BC0E8 100%)",
                }}
              />
              <span className="absolute bottom-3 left-4 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted">
                LOGO
              </span>
            </div>

            <div
              className="deka-glass-surface relative col-span-3 min-h-[170px] overflow-hidden rounded-[18px]"
              style={{
                background:
                  "radial-gradient(circle at 25% 25%, #8A2BE2 0%, rgba(138,43,226,0) 60%), radial-gradient(circle at 80% 85%, #1BC0E8 0%, rgba(27,192,232,0) 55%), rgba(255,255,255,0.06)",
              }}
            >
              <span className="absolute left-[18px] top-[18px] font-display text-[30px] italic leading-none text-foreground">
                Tumbuh
                <br />
                bersama.
              </span>
              <span className="absolute bottom-3 left-4 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground">
                POST SOSMED
              </span>
            </div>

            <div className="deka-glass-surface col-span-2 flex min-h-[145px] flex-col justify-between gap-2.5 rounded-[18px] bg-white/[0.06] p-4">
              <div className="flex flex-wrap gap-1.5">
                {paletteColors.map((hex) => (
                  <button
                    key={hex}
                    aria-label={`Pilih warna ${hex}`}
                    className="h-[22px] w-[22px] cursor-pointer rounded-[6px] transition-transform hover:scale-110"
                    onClick={() => setSelectedSwatch(hex)}
                    style={{
                      backgroundColor: hex,
                      outline:
                        selectedSwatch === hex
                          ? "2px solid #F4F6F8"
                          : undefined,
                      outlineOffset: "2px",
                    }}
                    type="button"
                  />
                ))}
              </div>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted">
                {selectedSwatch ?? "PALET WARNA"}
              </span>
            </div>

            <div className="deka-glass-surface col-span-2 flex min-h-[145px] flex-col justify-between gap-2.5 rounded-[18px] bg-white/[0.06] p-4">
              <span className="text-[38px] font-light leading-none text-foreground">
                Aa
              </span>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted">
                TIPOGRAFI
              </span>
            </div>

            <div
              className="deka-glass-surface col-span-2 flex min-h-[145px] flex-col justify-end rounded-[18px] p-4"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, #FF6B3D 0%, rgba(255,107,61,0) 60%), rgba(255,255,255,0.06)",
              }}
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground">
                BROSUR
              </span>
            </div>
          </>
        }
        right={
          <>
            <SectionHeading
              description={designServiceContent.description}
              eyebrowLineGradient="linear-gradient(90deg, #EC3A8C, #8A2BE2)"
              eyebrowPrefix={designServiceContent.eyebrow}
              eyebrowPrefixColor="#EC3A8C"
              title={
                <>
                  {designServiceContent.headingPrefix}
                  <GradientText gradient={designServiceContent.highlightGradient}>
                    {designServiceContent.headingHighlight}
                  </GradientText>
                  {designServiceContent.headingSuffix}
                </>
              }
            />

            <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {designServiceContent.features.map((feat, idx) => (
                <ScrollReveal key={feat} delay={100 + idx * 45}>
                  <div className="flex items-center gap-2.5 text-sm text-foreground">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height="18"
                      stroke={designServiceContent.checkColor}
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
          </>
        }
      />

      <div>
        <GradientLineReveal className="mb-4 h-px w-full opacity-35" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {designServiceContent.specs.map((spec, idx) => (
            <ScrollReveal key={spec.label} delay={100 + idx * 80}>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  {spec.label}
                </span>
                <span className="text-[15px] font-semibold text-foreground">
                  {spec.value}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
