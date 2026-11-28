import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ServicesOverviewSection } from "@/components/sections/services/ServicesOverviewSection";

export const metadata: Metadata = {
  title: "Layanan & Alur Kerja",
  description:
    "Tiga layanan utama DEKA CREATIVELY: Pembuatan Website, Desain Grafis, dan Dokumentasi dengan alur kerja terstruktur.",
};

export default function LayananPage() {
  return (
    <PageShell
      currentHref="/layanan"
      label="Layanan & Alur Kerja"
      number="04"
      variant="layanan"
    >
      <ServicesOverviewSection />
    </PageShell>
  );
}
