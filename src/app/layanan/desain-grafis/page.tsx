import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { DesignServiceSection } from "@/components/sections/services/DesignServiceSection";

export const metadata: Metadata = {
  title: "Layanan Desain Grafis",
  description:
    "Layanan desain logo, identitas brand, panduan visual, konten media sosial, brosur, katalog, dan kemasan.",
};

export default function LayananDesainGrafisPage() {
  return (
    <PageShell
      currentHref="/layanan/desain-grafis"
      label="Desain Grafis"
      number="06"
      variant="desain"
    >
      <DesignServiceSection />
    </PageShell>
  );
}
