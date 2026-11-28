import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PackagesSection } from "@/components/sections/packages/PackagesSection";

export const metadata: Metadata = {
  title: "Paket & Komitmen",
  description:
    "Pilihan paket Starter, Growth, dan Premium dari DEKA CREATIVELY lengkap dengan komitmen kerja transparan.",
};

export default function PaketPage() {
  return (
    <PageShell
      currentHref="/paket"
      label="Paket & Komitmen"
      number="08"
      variant="paket"
    >
      <PackagesSection />
    </PageShell>
  );
}
