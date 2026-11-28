import Link from "next/link";
import { GradientLineReveal, ScrollReveal } from "@/components/motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { commitmentsContent } from "@/content/commitments";
import { packagesContent } from "@/content/packages";

export function PackagesSection() {
  return (
    <div className="flex flex-1 flex-col justify-between gap-7">
      <SectionHeading
        eyebrow={packagesContent.eyebrow}
        title={
          <>
            {packagesContent.headingPrefix}
            <GradientText gradient="linear-gradient(90deg, #FFB300 0%, #FF6B3D 35%, #EC3A8C 70%, #8A2BE2 100%)">
              {packagesContent.headingHighlight}
            </GradientText>
            {packagesContent.headingSuffix}
          </>
        }
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {packagesContent.tiers.map((tier, idx) => (
          <ScrollReveal key={tier.id} delay={idx * 100}>
            <GlassCard
              className="flex h-full flex-col gap-3 p-7"
              featured={Boolean(tier.featured)}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-xs font-bold uppercase tracking-[0.22em]"
                  style={{ color: tier.accentColor }}
                >
                  {tier.name}
                </span>
                {tier.badge && (
                  <span
                    className="rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#0F1B22]"
                    style={{
                      background: "linear-gradient(90deg, #FFB300, #EC3A8C)",
                    }}
                  >
                    {tier.badge}
                  </span>
                )}
              </div>

              <span className="text-[13px] text-muted">{tier.subtitle}</span>
              <span className="text-[26px] font-semibold text-foreground">
                {tier.price}
              </span>

              <div
                aria-hidden="true"
                className={
                  tier.featured
                    ? "h-px bg-white/14"
                    : "h-px bg-white/10"
                }
              />

              <ul className="flex flex-1 flex-col gap-2.5 text-[13.5px] text-foreground">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      style={{ color: tier.accentColor }}
                    >
                      ✓
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                className="mt-3 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 text-xs font-semibold tracking-wide text-foreground transition-colors hover:border-white/35 hover:bg-white/[0.14]"
                href={`/kontak?paket=${tier.id}`}
              >
                Konsultasikan Paket {tier.name} →
              </Link>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-auto pt-2">
        <GradientLineReveal className="mb-4 h-px w-full opacity-35" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {commitmentsContent.map((item, idx) => (
            <ScrollReveal key={item.title} delay={120 + idx * 75}>
              <div className="flex flex-col gap-1">
                <span className="text-[14.5px] font-semibold text-foreground">
                  {item.title}
                </span>
                <span className="text-[12.5px] leading-[1.5] text-muted">
                  {item.description}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
