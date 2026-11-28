import {
  AnimatedCounter,
  ConvergingPair,
  GradientLineReveal,
  ScrollReveal,
} from "@/components/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/content/about";

export function AboutSection() {
  const foundingYear = Number(aboutContent.stats[0]?.value) || 2024;

  return (
    <div className="flex flex-1 flex-col justify-between gap-8">
      <ConvergingPair
        className="flex flex-1 flex-col gap-10 lg:flex-row lg:items-center lg:gap-16"
        leftClassName="flex min-w-0 flex-1 flex-col justify-center gap-5"
        rightClassName="flex w-full flex-none flex-col justify-center gap-4 lg:w-[430px]"
        left={
          <>
            <SectionHeading
              eyebrow={aboutContent.eyebrow}
              title={
                <>
                  {aboutContent.headingPrefix}
                  <GradientText gradient="linear-gradient(90deg, #FFB300 0%, #FF6B3D 35%, #EC3A8C 70%, #8A2BE2 100%)">
                    {aboutContent.headingHighlight}
                  </GradientText>
                  {aboutContent.headingSuffix}
                </>
              }
            />

            {aboutContent.paragraphs.map((p, idx) => (
              <ScrollReveal key={idx} delay={120 + idx * 90}>
                <p className="text-[15.5px] leading-[1.75] text-muted">{p}</p>
              </ScrollReveal>
            ))}

            <div className="pt-1">
              <GradientLineReveal className="mb-4 h-px w-full opacity-35" />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-8">
                {aboutContent.stats.map((stat, idx) => (
                  <ScrollReveal key={stat.label} delay={220 + idx * 70}>
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                        {stat.label}
                      </span>
                      <span className="text-[15px] font-semibold text-foreground">
                        {idx === 0 ? (
                          <AnimatedCounter target={foundingYear} />
                        ) : (
                          stat.value
                        )}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </>
        }
        right={
          <>
            <GlassCard
              className="flex flex-col gap-2.5 p-7"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, rgba(236,58,140,0.18) 0%, rgba(15,27,34,0) 55%), rgba(255,255,255,0.08)",
              }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F77DB4]">
                {aboutContent.vision.label}
              </span>
              <p className="text-[17px] font-medium leading-[1.55] text-foreground">
                {aboutContent.vision.text}
              </p>
            </GlassCard>

            <GlassCard
              className="flex flex-col gap-3 p-7"
              style={{
                background:
                  "radial-gradient(circle at 100% 0%, rgba(27,192,232,0.16) 0%, rgba(15,27,34,0) 55%), rgba(255,255,255,0.08)",
              }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#5FD6F2]">
                {aboutContent.mission.label}
              </span>
              <ol className="flex flex-col gap-3">
                {aboutContent.mission.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-[14.5px] leading-[1.55] text-foreground"
                  >
                    <span className="font-bold tabular-nums text-[#5FD6F2]">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </GlassCard>
          </>
        }
      />

      <div className="border-t border-white/10 pt-5">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {aboutContent.values.map((val, idx) => (
            <ScrollReveal key={val.title} delay={100 + idx * 80}>
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-2.5 text-base font-semibold text-foreground">
                  <span
                    aria-hidden="true"
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: val.dotColor }}
                  />
                  {val.title}
                </span>
                <span className="text-[13px] leading-[1.5] text-muted">
                  {val.description}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
