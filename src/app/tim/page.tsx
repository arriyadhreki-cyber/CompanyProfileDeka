import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { TeamSection } from "@/components/sections/team/TeamSection";

export const metadata: Metadata = {
  title: "Tim Kami",
  description:
    "Orang-orang di balik setiap karya DEKA CREATIVELY beserta perangkat kerja standar industri kami.",
};

export default function TimPage() {
  return (
    <PageShell
      currentHref="/tim"
      label="Tim Kami"
      number="03"
      variant="tim"
    >
      <TeamSection />
    </PageShell>
  );
}
