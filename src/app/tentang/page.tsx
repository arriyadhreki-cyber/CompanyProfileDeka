import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { AboutSection } from "@/components/sections/about/AboutSection";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal DEKA CREATIVELY — studio kreatif digital dengan visi, misi, dan nilai kerja untuk membantu brand bertumbuh.",
};

export default function TentangPage() {
  return (
    <PageShell
      currentHref="/tentang"
      label="Tentang Kami"
      number="02"
      variant="tentang"
    >
      <AboutSection />
    </PageShell>
  );
}
