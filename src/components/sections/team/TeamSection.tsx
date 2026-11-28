import { ScrollReveal } from "@/components/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamContent } from "@/content/team";

export function TeamSection() {
  return (
    <div className="flex flex-1 flex-col justify-between gap-8">
      <SectionHeading
        eyebrow={teamContent.eyebrow}
        title={
          <>
            {teamContent.headingPrefix}
            <GradientText gradient="linear-gradient(90deg, #EC3A8C 0%, #8A2BE2 50%, #1BC0E8 100%)">
              {teamContent.headingHighlight}
            </GradientText>
            {teamContent.headingSuffix}
          </>
        }
      />

      <div className="grid grid-cols-1 gap-5 overflow-x-clip sm:grid-cols-2 lg:grid-cols-4">
        {teamContent.members.map((member, idx) => {
          const isLeftHalf = idx < 2;
          const isOuter = idx === 0 || idx === 3;
          return (
            <ScrollReveal
              key={member.role}
              delay={isOuter ? 100 : 0}
              direction={isLeftHalf ? "left" : "right"}
              distance={isOuter ? 68 : 42}
              duration={820}
            >
              <GlassCard className="flex h-full flex-col gap-3.5 p-6">
              <div
                aria-hidden="true"
                className="flex h-[150px] items-center justify-center rounded-2xl font-display text-[54px] italic text-foreground transition-transform duration-500 group-hover/card:scale-[1.03]"
                style={{ background: member.gradient }}
              >
                {member.initial}
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-[17px] font-semibold text-foreground">
                  {member.name}
                </h2>
                <span
                  className="text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: member.roleColor }}
                >
                  {member.role}
                </span>
              </div>

              <p className="text-[13px] leading-[1.55] text-muted">
                {member.description}
              </p>
            </GlassCard>
          </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={220}>
        <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-5 lg:flex-row lg:items-center">
          <div className="flex max-w-[360px] flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              {teamContent.toolsTitle}
            </span>
            <span className="text-[13px] leading-[1.5] text-muted">
              {teamContent.toolsSubtitle}
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 lg:justify-end">
            {teamContent.tools.map((tool) => (
              <Pill
                key={tool}
                className="px-4 py-2 text-[13px] font-medium tracking-normal text-foreground transition-colors hover:border-white/35 hover:bg-white/[0.13]"
              >
                {tool}
              </Pill>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
