import type { FaqItem, OnboardingStep } from "@/types/content";

export const faqContent = {
  pageNumber: "10",
  eyebrow: "PERTANYAAN UMUM",
  headingPrefix: "Yang sering ",
  headingHighlight: "ditanyakan",
  headingSuffix: ".",
  items: [
    {
      question: "Berapa lama pengerjaan sebuah proyek?",
      answer:
        "Bergantung pada layanan dan paket. Estimasi waktu kami sepakati tertulis sebelum proyek dimulai.",
    },
    {
      question: "Apakah ada revisi?",
      answer:
        "Ya. Jumlah revisi sudah termasuk di setiap paket dan dijelaskan di awal.",
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer:
        "DP 50% di awal pengerjaan, pelunasan setelah hasil final disetujui, lengkap dengan invoice resmi.",
    },
    {
      question: "Siapa pemilik hasil akhir karya?",
      answer:
        "Hasil akhir yang sudah dilunasi menjadi milik klien, sesuai kesepakatan tertulis.",
    },
  ] satisfies FaqItem[],
  onboardingLabel: "CARA MEMULAI",
  onboardingSteps: [
    { number: "01", label: "Hubungi kami", color: "#FF6B3D" },
    { number: "02", label: "Konsultasi gratis", color: "#EC3A8C" },
    { number: "03", label: "Penawaran & mulai", color: "#1BC0E8" },
  ] satisfies OnboardingStep[],
  contactCard: {
    eyebrow: "HUBUNGI KAMI",
    headingPrefix: "Mari ",
    headingHighlight: "tumbuh",
    headingSuffix: " bersama.",
    phoneDisplay: "+62 812-3456-7890",
    emailDisplay: "hello@dekacreatively.com",
    instagramDisplay: "@dekacreatively",
    websiteDisplay: "www.dekacreatively.com",
    addressDisplay: "Studio Kreatif DEKA, Indonesia",
    hoursDisplay: "Senin – Sabtu, 09.00 – 17.00 WIB",
    ctaLabel: "Konsultasi Gratis Sekarang",
  },
};
