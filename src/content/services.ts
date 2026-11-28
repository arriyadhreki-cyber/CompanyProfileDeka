import type {
  ServiceDetail,
  ServiceOverview,
  WorkflowStep,
} from "@/types/content";

export const servicesOverviewContent = {
  pageNumber: "04",
  eyebrow: "LAYANAN KAMI",
  headingPrefix: "Tiga layanan, satu tujuan: brand yang ",
  headingHighlight: "bertumbuh",
  headingSuffix: ".",
  services: [
    {
      number: "01",
      slug: "website",
      href: "/layanan/website",
      title: "Pembuatan Website",
      description:
        "Website yang tampil profesional dan mudah diakses di semua perangkat.",
      bullets: [
        "Company profile dan landing page",
        "Website toko dan portofolio",
        "Desain responsif dan SEO dasar",
      ],
      accentColor: "#FF6B3D",
      dotColor: "#FF6B3D",
      topLineGradient: "linear-gradient(90deg, #FFB300, #FF6B3D)",
      iconBg: "rgba(255,107,61,0.14)",
      iconColor: "#FF9A73",
      icon: "monitor",
    },
    {
      number: "02",
      slug: "desain-grafis",
      href: "/layanan/desain-grafis",
      title: "Desain Grafis",
      description:
        "Identitas visual yang konsisten, dari logo hingga konten harian.",
      bullets: [
        "Logo dan identitas brand",
        "Konten media sosial dan poster",
        "Brosur, katalog, dan kemasan",
      ],
      accentColor: "#EC3A8C",
      dotColor: "#EC3A8C",
      topLineGradient: "linear-gradient(90deg, #EC3A8C, #8A2BE2)",
      iconBg: "rgba(236,58,140,0.14)",
      iconColor: "#F77DB4",
      icon: "layers",
    },
    {
      number: "03",
      slug: "dokumentasi",
      href: "/layanan/dokumentasi",
      title: "Dokumentasi",
      description:
        "Foto dan video yang merekam momen dan menguatkan cerita brand.",
      bullets: [
        "Foto produk dan kegiatan",
        "Video profil dan konten reels",
        "Liputan acara dan editing",
      ],
      accentColor: "#1BC0E8",
      dotColor: "#1BC0E8",
      topLineGradient: "linear-gradient(90deg, #1F6FE5, #1BC0E8)",
      iconBg: "rgba(27,192,232,0.14)",
      iconColor: "#5FD6F2",
      icon: "camera",
    },
  ] satisfies ServiceOverview[],
  workflowLabel: "ALUR KERJA",
  workflow: [
    {
      number: "01",
      title: "Konsultasi",
      description: "Diskusi tujuan, target, dan kebutuhan.",
      color: "#FF6B3D",
    },
    {
      number: "02",
      title: "Konsep",
      description: "Strategi kreatif dan arah visual.",
      color: "#EC3A8C",
    },
    {
      number: "03",
      title: "Produksi",
      description: "Desain, pengembangan, dan pengambilan gambar.",
      color: "#8F6BF0",
    },
    {
      number: "04",
      title: "Peluncuran",
      description: "Revisi, serah terima, dan pendampingan.",
      color: "#1BC0E8",
    },
  ] satisfies WorkflowStep[],
};

export const websiteServiceContent: ServiceDetail = {
  eyebrow: "LAYANAN 01",
  headingPrefix: "Website yang ",
  headingHighlight: "bekerja",
  headingSuffix: " untuk bisnis Anda.",
  highlightGradient:
    "linear-gradient(90deg, #FFB300 0%, #FF6B3D 50%, #EC3A8C 100%)",
  description:
    "Website adalah wajah digital brand. Kami membangunnya agar tampil profesional, cepat dibuka, dan mudah dikelola.",
  features: [
    "Desain responsif",
    "SEO dasar",
    "Loading cepat",
    "Keamanan SSL",
    "Tombol WhatsApp",
    "Integrasi media sosial",
    "Panel admin mudah",
    "Bantuan domain & hosting",
  ],
  checkColor: "#FF9A73",
  tags: ["Company Profile", "Landing Page", "Toko Online", "Portofolio"],
  specs: [
    { label: "ESTIMASI WAKTU", value: "7 – 21 hari kerja" },
    { label: "REVISI", value: "Hingga 3x revisi terstruktur" },
    { label: "PURNAJUAL", value: "Dukungan 30 hari setelah rilis" },
  ],
};

export const designServiceContent: ServiceDetail = {
  eyebrow: "LAYANAN 02",
  headingPrefix: "Identitas visual yang ",
  headingHighlight: "mudah diingat",
  headingSuffix: ".",
  highlightGradient:
    "linear-gradient(90deg, #EC3A8C 0%, #8A2BE2 60%, #1F6FE5 100%)",
  description:
    "Desain yang konsisten membuat brand terlihat serius dan dipercaya. Kami merancang dari fondasi identitas sampai materi promosi harian.",
  features: [
    "Logo & identitas brand",
    "Panduan brand (guideline)",
    "Konten media sosial",
    "Poster, banner, spanduk",
    "Brosur & katalog produk",
    "Kemasan & label",
    "Kartu nama & stationery",
    "Company profile & presentasi",
  ],
  checkColor: "#F77DB4",
  specs: [
    { label: "FILE SERAHAN", value: "PNG · JPG · PDF · file master" },
    { label: "ALTERNATIF KONSEP", value: "2 – 3 opsi konsep awal" },
    { label: "REVISI", value: "Hingga 3x revisi terarah" },
  ],
};

export const documentationServiceContent: ServiceDetail = {
  eyebrow: "LAYANAN 03",
  headingPrefix: "Momen yang ",
  headingHighlight: "terekam",
  headingSuffix: ", cerita yang tersampaikan.",
  highlightGradient:
    "linear-gradient(90deg, #8A2BE2 0%, #1F6FE5 50%, #1BC0E8 100%)",
  description:
    "Foto dan video berkualitas membuat brand lebih hidup dan meyakinkan. Kami merekam, mengolah, dan menyiapkannya untuk berbagai kanal.",
  features: [
    "Foto produk",
    "Foto kegiatan & acara",
    "Video profil perusahaan",
    "Konten reels & video pendek",
    "Liputan acara",
    "Editing & color grading",
    "Pengambilan gambar udara",
    "Subtitle & musik latar",
  ],
  checkColor: "#5FD6F2",
  specs: [
    { label: "FORMAT SERAHAN", value: "Foto HD · Video HD / Full HD" },
    { label: "DURASI KERJA", value: "3 – 10 hari kerja editing" },
    { label: "WILAYAH LAYANAN", value: "Jabodetabek & luar kota" },
  ],
};
