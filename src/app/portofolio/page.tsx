import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PortfolioSection } from "@/components/sections/portfolio/PortfolioSection";

export const metadata: Metadata = {
  title: "Portofolio & Testimoni",
  description:
    "Bukti karya DEKA CREATIVELY di bidang website, desain grafis, dokumentasi, dan branding beserta testimoni klien.",
};

export default function PortofolioPage() {
  return (
    <PageShell
      currentHref="/portofolio"
      label="Portofolio & Testimoni"
      number="09"
      variant="portofolio"
    >
      <PortfolioSection />
    </PageShell>
  );
}
