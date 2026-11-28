import type { PortfolioProject, PortfolioStat } from "@/types/content";

export const portfolioContent = {
  pageNumber: "09",
  eyebrow: "PORTOFOLIO & TESTIMONI",
  headingPrefix: "Bukti kerja, ",
  headingHighlight: "bukan sekadar janji",
  headingSuffix: ".",
  stats: [
    { target: 25, suffix: "+", label: "PROYEK SELESAI" },
    { target: 18, suffix: "+", label: "KLIEN" },
    { target: 90, suffix: "%", label: "KLIEN KEMBALI" },
  ] satisfies PortfolioStat[],
  projects: [
    {
      id: "proj-1",
      category: "WEBSITE",
      title: "Website Company Profile & Katalog",
      clientYear: "Klien Korporat · 2026",
      summary:
        "Perancangan ulang website responsif dengan struktur informasi ringkas dan integrasi WhatsApp langsung.",
      gradient:
        "radial-gradient(circle at 22% 22%, #FF6B3D 0%, rgba(255,107,61,0) 48%), radial-gradient(circle at 80% 78%, #EC3A8C 0%, rgba(236,58,140,0) 52%), rgba(255,255,255,0.06)",
    },
    {
      id: "proj-2",
      category: "DESAIN GRAFIS",
      title: "Sistem Identitas & Konten Sosial",
      clientYear: "Brand Kuliner Lokal · 2026",
      summary:
        "Logo, palet warna, template feed media sosial, serta materi cetak menu dan kemasan.",
      gradient:
        "radial-gradient(circle at 76% 24%, #1BC0E8 0%, rgba(27,192,232,0) 48%), radial-gradient(circle at 22% 80%, #8A2BE2 0%, rgba(138,43,226,0) 52%), rgba(255,255,255,0.06)",
    },
    {
      id: "proj-3",
      category: "DOKUMENTASI",
      title: "Video Profil & Foto Produk Studio",
      clientYear: "UMKM Fashion · 2025",
      summary:
        "Produksi video profil 90 detik, foto katalog studio, serta paket reels vertikal untuk kampanye peluncuran.",
      gradient:
        "radial-gradient(circle at 26% 30%, #FFB300 0%, rgba(255,179,0,0) 44%), radial-gradient(circle at 76% 76%, #1F6FE5 0%, rgba(31,111,229,0) 52%), rgba(255,255,255,0.06)",
    },
    {
      id: "proj-4",
      category: "BRANDING",
      title: "Rebranding & Panduan Visual",
      clientYear: "Jasa Profesional · 2025",
      summary:
        "Penyusunan brand guideline lengkap, kartu nama, presentasi penawaran, dan landing page terintegrasi.",
      gradient:
        "radial-gradient(circle at 70% 25%, #EC3A8C 0%, rgba(236,58,140,0) 48%), radial-gradient(circle at 25% 78%, #1BC0E8 0%, rgba(27,192,232,0) 50%), rgba(255,255,255,0.06)",
    },
  ] satisfies PortfolioProject[],
  clientsLabel: "DIPERCAYA OLEH",
  clients: [
    "Mitra Kuliner",
    "Studio Ruang",
    "Karya Lokal",
    "Nusa Retail",
    "Arsa Events",
  ],
};
