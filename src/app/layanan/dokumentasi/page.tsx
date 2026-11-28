import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { DocumentationServiceSection } from "@/components/sections/services/DocumentationServiceSection";

export const metadata: Metadata = {
  title: "Layanan Dokumentasi",
  description:
    "Layanan foto produk, foto kegiatan, video profil perusahaan, konten reels, liputan acara, dan editing profesional.",
};

export default function LayananDokumentasiPage() {
  return (
    <PageShell
      currentHref="/layanan/dokumentasi"
      label="Dokumentasi"
      number="07"
      variant="dokumentasi"
    >
      <DocumentationServiceSection />
    </PageShell>
  );
}
