import type { TeamMember } from "@/types/content";

export const teamContent = {
  pageNumber: "03",
  eyebrow: "TIM KAMI",
  headingPrefix: "Orang-orang di balik ",
  headingHighlight: "setiap karya",
  headingSuffix: ".",
  members: [
    {
      name: "Deka Founder",
      initial: "N",
      role: "FOUNDER · CREATIVE DIRECTOR",
      roleColor: "#FF9A73",
      description:
        "Memimpin arah kreatif dan memastikan setiap proyek selaras dengan tujuan klien.",
      gradient:
        "radial-gradient(circle at 30% 25%, #FF6B3D 0%, rgba(255,107,61,0) 55%), radial-gradient(circle at 75% 80%, #EC3A8C 0%, rgba(236,58,140,0) 55%), rgba(255,255,255,0.06)",
    },
    {
      name: "Tim Web Dev",
      initial: "N",
      role: "WEB DEVELOPER",
      roleColor: "#5FD6F2",
      description:
        "Membangun website yang cepat, aman, dan nyaman di semua perangkat.",
      gradient:
        "radial-gradient(circle at 70% 25%, #1BC0E8 0%, rgba(27,192,232,0) 55%), radial-gradient(circle at 25% 80%, #1F6FE5 0%, rgba(31,111,229,0) 55%), rgba(255,255,255,0.06)",
    },
    {
      name: "Tim Desain",
      initial: "N",
      role: "GRAPHIC DESIGNER",
      roleColor: "#F77DB4",
      description:
        "Merancang identitas visual dan konten yang konsisten dan mudah dikenali.",
      gradient:
        "radial-gradient(circle at 70% 25%, #EC3A8C 0%, rgba(236,58,140,0) 55%), radial-gradient(circle at 25% 80%, #8A2BE2 0%, rgba(138,43,226,0) 55%), rgba(255,255,255,0.06)",
    },
    {
      name: "Tim Produksi",
      initial: "N",
      role: "FOTO & VIDEO",
      roleColor: "#FFC94D",
      description:
        "Merekam momen dan mengolahnya menjadi cerita visual yang kuat.",
      gradient:
        "radial-gradient(circle at 30% 25%, #FFB300 0%, rgba(255,179,0,0) 55%), radial-gradient(circle at 75% 80%, #1F6FE5 0%, rgba(31,111,229,0) 55%), rgba(255,255,255,0.06)",
    },
  ] satisfies TeamMember[],
  toolsTitle: "PERANGKAT KERJA",
  toolsSubtitle: "Standar industri untuk hasil yang rapi dan siap pakai.",
  tools: [
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Premiere Pro",
    "WordPress",
  ],
};
