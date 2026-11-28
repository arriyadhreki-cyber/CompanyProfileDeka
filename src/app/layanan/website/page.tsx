import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { WebsiteServiceSection } from "@/components/sections/services/WebsiteServiceSection";

export const metadata: Metadata = {
  title: "Layanan Website",
  description:
    "Pembuatan website company profile, landing page, toko online, dan portofolio yang cepat, responsif, dan aman.",
};

export default function LayananWebsitePage() {
  return (
    <PageShell
      currentHref="/layanan/website"
      label="Website"
      number="05"
      variant="website"
    >
      <WebsiteServiceSection />
    </PageShell>
  );
}
