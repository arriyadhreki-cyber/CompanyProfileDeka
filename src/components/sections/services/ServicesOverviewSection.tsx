import Link from "next/link";
import { GradientLineReveal, ScrollReveal } from "@/components/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesOverviewContent } from "@/content/services";
import type { ServiceOverview } from "@/types/content";

function ServiceIcon({ type }: { type: ServiceOverview["icon"] }) {
  if (type === "monitor") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
        width="24"
      >
        <rect height="12" rx="2" width="18" x="3" y="4" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    );
  }
  if (type === "layers") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M12 3 3 8l9 5 9-5-9-5z" />
        <path d="m3 13 9 5 9-5" />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

export function ServicesOverviewSection() {
  return (
    <div className="flex flex-1 flex-col justify-between gap-8">
      <SectionHeading
        eyebrow={servicesOverviewContent.eyebrow}
        title={
          <>
            {servicesOverviewContent.headingPrefix}
            <GradientText gradient="linear-gradient(90deg, #EC3A8C 0%, #8A2BE2 50%, #1BC0E8 100%)">
              {servicesOverviewContent.headingHighlight}
            </GradientText>
            {servicesOverviewContent.headingSuffix}
          </>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {servicesOverviewContent.services.map((svc, idx) => (
          <ScrollReveal key={svc.slug} delay={idx * 100}>
            <Link className="block h-full" href={svc.href}>
              <GlassCard className="flex h-full flex-col gap-3.5 rounded-[20px] p-7">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{ background: svc.topLineGradient }}
                />

                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-[14px]"
                    style={{
                      backgroundColor: svc.iconBg,
                      color: svc.iconColor,
                    }}
                  >
                    <ServiceIcon type={svc.icon} />
                  </div>
                  <span className="text-xs font-bold tabular-nums tracking-[0.12em] text-muted">
                    {svc.number}
                  </span>
                </div>

                <h2 className="text-[22px] font-semibold text-foreground">
                  {svc.title}
                </h2>
                <p className="text-sm leading-[1.6] text-muted">
                  {svc.description}
                </p>

                <ul className="mt-1 flex flex-col gap-2.5">
                  {svc.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2.5 text-[13.5px] text-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 flex-none rounded-full"
                        style={{ backgroundColor: svc.dotColor }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <span
                  className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-semibold tracking-wide transition-transform duration-200 group-hover/card:translate-x-1"
                  style={{ color: svc.iconColor }}
                >
                  Lihat detail layanan →
                </span>
              </GlassCard>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <div className="flex flex-col gap-4 pt-2">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {servicesOverviewContent.workflowLabel}
        </span>
        <GradientLineReveal className="h-px w-full" duration={950} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {servicesOverviewContent.workflow.map((step, idx) => (
            <ScrollReveal key={step.number} delay={120 + idx * 80}>
              <div className="flex flex-col gap-1">
                <span className="text-[15px] font-semibold text-foreground">
                  <span
                    className="mr-2.5 tabular-nums"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                  {step.title}
                </span>
                <span className="text-[13px] leading-[1.5] text-muted">
                  {step.description}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
