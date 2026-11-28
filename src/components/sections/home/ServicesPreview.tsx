import Link from "next/link";
import { homeContent } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Layanan Kami"
            title="Solusi Kreatif untuk Bisnis Anda"
            description="Dari identitas visual hingga kehadiran digital, kami menyediakan layanan yang dirancang untuk mendorong pertumbuhan."
          />
          <Link 
            href="/layanan" 
            className="text-sm font-medium text-accent hover:underline underline-offset-4 shrink-0 pb-1"
          >
            Lihat Semua Layanan &rarr;
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeContent.services.map((service, i) => (
            <Link key={i} href={service.href} className="group block">
              <GlassCard className="p-8 h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-accent/30">
                <h3 className="font-display text-2xl mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.desc}
                </p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}