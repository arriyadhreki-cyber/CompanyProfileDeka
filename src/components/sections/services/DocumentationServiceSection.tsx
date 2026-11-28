"use client";

import { useEffect, useState } from "react";
import {
  ConvergingPair,
  GradientLineReveal,
  ScrollReveal,
} from "@/components/motion";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { documentationServiceContent } from "@/content/services";
import { cn } from "@/lib/cn";

const clipPresets = [
  {
    id: "profil",
    label: "VIDEO PROFIL",
    durationSec: 45,
    backdrop:
      "radial-gradient(circle at 22% 25%, #1BC0E8 0%, rgba(27,192,232,0) 50%), radial-gradient(circle at 80% 80%, #8A2BE2 0%, rgba(138,43,226,0) 55%), radial-gradient(circle at 60% 30%, #1F6FE5 0%, rgba(31,111,229,0) 50%), rgba(255,255,255,0.06)",
    thumb:
      "radial-gradient(circle at 30% 30%, #FFB300 0%, rgba(255,179,0,0) 60%), rgba(255,255,255,0.06)",
  },
  {
    id: "produk",
    label: "FOTO PRODUK",
    durationSec: 30,
    backdrop:
      "radial-gradient(circle at 30% 30%, #FFB300 0%, rgba(255,179,0,0) 52%), radial-gradient(circle at 75% 75%, #EC3A8C 0%, rgba(236,58,140,0) 55%), rgba(255,255,255,0.06)",
    thumb:
      "radial-gradient(circle at 70% 30%, #EC3A8C 0%, rgba(236,58,140,0) 60%), rgba(255,255,255,0.06)",
  },
  {
    id: "reels",
    label: "KONTEN REELS",
    durationSec: 25,
    backdrop:
      "radial-gradient(circle at 30% 70%, #8A2BE2 0%, rgba(138,43,226,0) 55%), radial-gradient(circle at 75% 25%, #EC3A8C 0%, rgba(236,58,140,0) 52%), rgba(255,255,255,0.06)",
    thumb:
      "radial-gradient(circle at 30% 70%, #8A2BE2 0%, rgba(138,43,226,0) 60%), rgba(255,255,255,0.06)",
  },
  {
    id: "acara",
    label: "LIPUTAN ACARA",
    durationSec: 60,
    backdrop:
      "radial-gradient(circle at 70% 70%, #1BC0E8 0%, rgba(27,192,232,0) 55%), radial-gradient(circle at 25% 25%, #1F6FE5 0%, rgba(31,111,229,0) 52%), rgba(255,255,255,0.06)",
    thumb:
      "radial-gradient(circle at 70% 70%, #1BC0E8 0%, rgba(27,192,232,0) 60%), rgba(255,255,255,0.06)",
  },
];

export function DocumentationServiceSection() {
  const [activeClipIdx, setActiveClipIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(15);

  const activeClip = clipPresets[activeClipIdx];

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setElapsed((prev) =>
        prev >= activeClip.durationSec ? 0 : prev + 1
      );
    }, 1000);
    return () => window.clearInterval(timer);
  }, [playing, activeClip.durationSec]);

  const progressPct = Math.round(
    (elapsed / activeClip.durationSec) * 100
  );
  const formattedTime = `00:${String(elapsed).padStart(2, "0")}`;

  return (
    <div className="flex flex-1 flex-col justify-between gap-8">
      <ConvergingPair
        className="flex flex-1 flex-col gap-10 lg:flex-row lg:items-center lg:gap-14"
        leftClassName="flex min-w-0 flex-1 flex-col justify-center gap-5"
        rightClassName="flex w-full flex-none flex-col justify-center gap-3.5 lg:w-[500px]"
        left={
          <>
            <SectionHeading
              description={documentationServiceContent.description}
              eyebrowLineGradient="linear-gradient(90deg, #1F6FE5, #1BC0E8)"
              eyebrowPrefix={documentationServiceContent.eyebrow}
              eyebrowPrefixColor="#1BC0E8"
              title={
                <>
                  {documentationServiceContent.headingPrefix}
                  <GradientText
                    gradient={documentationServiceContent.highlightGradient}
                  >
                    {documentationServiceContent.headingHighlight}
                  </GradientText>
                  {documentationServiceContent.headingSuffix}
                </>
              }
            />

            <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {documentationServiceContent.features.map((feat, idx) => (
                <ScrollReveal key={feat} delay={100 + idx * 45}>
                  <div className="flex items-center gap-2.5 text-sm text-foreground">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      height="18"
                      stroke={documentationServiceContent.checkColor}
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
        right={
          <>
            <div
              className="relative h-[250px] overflow-hidden rounded-[20px] border border-white/12 transition-all duration-500"
              style={{ background: activeClip.backdrop }}
            >
              <button
                aria-label={
                  playing
                    ? `Jeda pratinjau ${activeClip.label}`
                    : `Putar pratinjau ${activeClip.label}`
                }
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-[#0F1B22]/55 text-foreground backdrop-blur-md transition-transform hover:scale-105"
                onClick={() => setPlaying((p) => !p)}
                type="button"
              >
                {playing ? (
                  <svg
                    aria-hidden="true"
                    fill="#F4F6F8"
                    height="20"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <rect height="14" rx="1" width="4" x="6" y="5" />
                    <rect height="14" rx="1" width="4" x="14" y="5" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    fill="#F4F6F8"
                    height="22"
                    viewBox="0 0 24 24"
                    width="22"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <div className="absolute inset-x-[18px] bottom-3.5 flex items-center gap-2.5">
                <span className="text-[10.5px] font-semibold tabular-nums tracking-[0.1em]">
                  {playing ? formattedTime : "00:00"}
                </span>
                <span className="relative h-[3px] flex-1 rounded-sm bg-white/25">
                  <span
                    className="absolute inset-y-0 left-0 rounded-sm bg-foreground transition-[width] duration-300"
                    style={{ width: `${playing ? progressPct : 34}%` }}
                  />
                </span>
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em]">
                  {activeClip.label}
                </span>
              </div>
            </div>

            <div
              aria-label="Pilih pratinjau klip dokumentasi"
              className="grid grid-cols-4 gap-2.5"
              role="group"
            >
              {clipPresets.map((clip, idx) => (
                <button
                  key={clip.id}
                  aria-label={`Tampilkan ${clip.label}`}
                  aria-pressed={activeClipIdx === idx}
                  className={cn(
                    "deka-glass-surface h-[84px] cursor-pointer rounded-xl transition-all duration-200 hover:-translate-y-0.5",
                    activeClipIdx === idx &&
                      "ring-2 ring-[#5FD6F2] ring-offset-2 ring-offset-[#0F1B22]"
                  )}
                  onClick={() => {
                    setActiveClipIdx(idx);
                    setElapsed(0);
                  }}
                  style={{ background: clip.thumb }}
                  type="button"
                />
              ))}
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              CONTOH KEBUTUHAN: FOTO · VIDEO · REELS
            </span>
          </>
        }
      />

      <div>
        <GradientLineReveal className="mb-4 h-px w-full opacity-35" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {documentationServiceContent.specs.map((spec, idx) => (
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
