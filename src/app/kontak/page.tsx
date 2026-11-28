import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactSection } from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "FAQ & Kontak",
  description:
    "Pertanyaan umum dan informasi kontak DEKA CREATIVELY untuk konsultasi gratis proyek website, desain, dan dokumentasi.",
};

export default async function KontakPage({
  searchParams,
}: {
  searchParams: Promise<{ paket?: string }>;
}) {
  const params = await searchParams;

  return (
    <PageShell
      currentHref="/kontak"
      label="FAQ & Kontak"
      number="10"
      variant="kontak"
    >
      <ContactSection defaultPackage={params.paket} />
    </PageShell>
  );
}
