import type { CoreValue, MetaStat } from "@/types/content";

export const aboutContent = {
  pageNumber: "02",
  eyebrow: "TENTANG KAMI",
  headingPrefix: "Dimulai dari semangat ",
  headingHighlight: "berkreasi",
  headingSuffix: ".",
  paragraphs: [
    "DEKA CREATIVELY adalah studio digital marketing yang dirintis oleh anak muda yang ingin berkreasi sekaligus bertumbuh. Kami percaya brand yang kuat lahir dari ide yang jelas, visual yang rapi, dan kerja yang konsisten.",
    "Kami melayani pembuatan website, desain grafis, dan dokumentasi, dan tumbuh bersama setiap klien yang mempercayakan brand-nya kepada kami.",
  ],
  stats: [
    { label: "BERDIRI", value: "2024" },
    { label: "BASIS", value: "Indonesia" },
    { label: "LAYANAN", value: "Web · Desain · Dokumentasi" },
  ] satisfies MetaStat[],
  vision: {
    label: "VISI",
    text: "Menjadi mitra kreatif digital yang dipercaya untuk membantu brand lokal tampil profesional dan terus bertumbuh.",
  },
  mission: {
    label: "MISI",
    items: [
      "Menghadirkan karya yang berangkat dari strategi, bukan sekadar tampilan.",
      "Menjaga komunikasi yang jelas dan hasil yang tepat waktu.",
      "Terus belajar dan berkembang bersama klien.",
    ],
  },
  values: [
    {
      title: "Kreatif",
      description: "Ide segar yang relevan dengan target audiens.",
      dotColor: "#FF6B3D",
    },
    {
      title: "Terpercaya",
      description: "Jujur dalam proses, tepat janji dalam hasil.",
      dotColor: "#EC3A8C",
    },
    {
      title: "Kolaboratif",
      description: "Klien terlibat di setiap tahap kerja.",
      dotColor: "#8F6BF0",
    },
    {
      title: "Bertumbuh",
      description: "Setiap proyek jadi pijakan untuk lebih baik.",
      dotColor: "#1BC0E8",
    },
  ] satisfies CoreValue[],
};
