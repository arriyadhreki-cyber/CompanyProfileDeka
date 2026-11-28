import type { PackageTier } from "@/types/content";

export const packagesContent = {
  pageNumber: "08",
  eyebrow: "PAKET LAYANAN",
  headingPrefix: "Pilih paket yang ",
  headingHighlight: "sesuai tahap",
  headingSuffix: " bisnis Anda.",
  tiers: [
    {
      id: "starter",
      name: "STARTER",
      subtitle: "Untuk bisnis yang baru memulai.",
      price: "Mulai Rp 1,5 jt",
      accentColor: "#FF9A73",
      features: [
        "Landing page 1 halaman",
        "Logo sederhana + palet warna",
        "6 desain konten sosmed",
        "Revisi sesuai paket",
      ],
    },
    {
      id: "growth",
      name: "GROWTH",
      subtitle: "Untuk brand yang siap berkembang.",
      price: "Mulai Rp 3,5 jt",
      featured: true,
      badge: "PALING POPULER",
      accentColor: "#F77DB4",
      features: [
        "Website company profile multi-halaman",
        "Identitas brand + panduan singkat",
        "12 konten sosmed + 1 sesi foto",
        "Domain & hosting dibantu setup",
      ],
    },
    {
      id: "premium",
      name: "PREMIUM",
      subtitle: "Solusi lengkap untuk brand serius.",
      price: "Mulai Rp 7,5 jt",
      accentColor: "#5FD6F2",
      features: [
        "Website kustom + fitur tambahan",
        "Brand identity menyeluruh",
        "Video profil + dokumentasi acara",
        "Dukungan prioritas",
      ],
    },
  ] satisfies PackageTier[],
};
