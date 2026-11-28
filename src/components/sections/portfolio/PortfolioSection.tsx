"use client";

import { useState } from "react";
import {
  AnimatedCounter,
  ConvergingPair,
  GradientLineReveal,
  ScrollReveal,
} from "@/components/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioContent } from "@/content/portofolio";
import { testimonialsContent } from "@/content/testimonials";
import { cn } from "@/lib/cn";

const categories = [
  "SEMUA",
  "WEBSITE",
  "DESAIN GRAFIS",
  "DOKUMENTASI",
  "BRANDING",
] as const;

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("SEMUA");

  const visibleProjects =
    selectedCategory === "SEMUA"
      ? portfolioContent.projects
      : portfolioContent.projects.filter(
          (p) => p.category === selectedCategory
        );

  return (
    <div className="flex flex-1 flex-col justify-between gap-6">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-10">
        <SectionHeading
          eyebrow={portfolioContent.eyebrow}
          title={
            <>
              {portfolioContent.headingPrefix}
              <GradientText gradient="linear-gradient(90deg, #FFB300 0%, #FF6B3D 50%, #EC3A8C 100%)">
                {portfolioContent.headingHighlight}
              </GradientText>
              {portfolioContent.headingSuffix}
            </>
          }
        />

        <div className="flex flex-wrap gap-8 sm:gap-10">
          {portfolioContent.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <span className="text-[30px] font-light leading-none text-foreground">
                <AnimatedCounter
                  padZero
                  suffix={stat.suffix}
                  target={stat.target}
                />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-label="Filter kategori portofolio"
        className="flex flex-wrap gap-2"
        role="group"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            aria-pressed={selectedCategory === cat}
            className={cn(
              "cursor-pointer rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all",
              selectedCategory === cat
                ? "border-white/40 bg-white/[0.16] text-foreground"
                : "border-white/15 bg-white/[0.05] text-muted hover:border-white/25 hover:text-foreground"
            )}
            onClick={() => setSelectedCategory(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <ConvergingPair
        className="flex flex-1 flex-col gap-7 lg:flex-row"
        leftClassName="grid min-w-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2"
        rightClassName="flex w-full flex-none flex-col gap-4 lg:w-[400px]"
        left={
          <>
            {visibleProjects.map((project) => (
              <GlassCard
                key={project.id}
                className="relative min-h-[176px] overflow-hidden rounded-[18px]"
                style={{ background: project.gradient }}
              >
                <div className="flex h-full flex-col justify-end bg-gradient-to-t from-[#0F1B22]/95 via-[#0F1B22]/55 to-transparent p-[18px] pt-9">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/90">
                    {project.category}
                  </span>
                  <h2 className="mt-0.5 text-[15px] font-medium text-foreground">
                    {project.title}
                  </h2>
                  <span className="text-xs text-muted">
                    {project.clientYear}
                  </span>
                </div>
              </GlassCard>
            ))}
          </>
        }
        right={
          <>
            {testimonialsContent.map((t, idx) => (
              <GlassCard
                key={idx}
                className="flex flex-1 flex-col justify-between gap-3 rounded-[20px] px-6 py-[22px]"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-[44px] leading-[0.6]"
                  style={{ color: t.quoteColor }}
                >
                  “
                </span>
                <p className="text-[14.5px] leading-[1.6] text-foreground">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-9 w-9 flex-none rounded-full"
                    style={{ background: t.avatarGradient }}
                  />
                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-semibold text-foreground">
                      {t.clientName}
                    </span>
                    <span className="text-xs text-muted">{t.clientRole}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </>
        }
      />

      <div className="pt-1">
        <GradientLineReveal className="mb-4 h-px w-full opacity-35" />
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-7">
          <span className="flex-none text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            {portfolioContent.clientsLabel}
          </span>
          <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {portfolioContent.clients.map((client, idx) => (
              <ScrollReveal key={client} delay={80 + idx * 55}>
                <span className="flex h-[34px] items-center justify-center rounded-[10px] border border-dashed border-white/22 px-3 text-xs text-muted transition-colors hover:border-white/40 hover:text-foreground">
                  {client}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
