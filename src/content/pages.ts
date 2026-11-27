type PageMeta = {
  number: string;
  label: string;
  href: string;
};

type NavItem = PageMeta & {
  children?: NavItem[];
};

export const pages: NavItem[] = [
  { number: "01", label: "Beranda", href: "/" },
  { number: "02", label: "Tentang", href: "/tentang" },
  { number: "03", label: "Tim", href: "/tim" },
  {
    number: "04",
    label: "Layanan",
    href: "/layanan",
    children: [
      { number: "05", label: "Website", href: "/layanan/website" },
      { number: "06", label: "Desain Grafis", href: "/layanan/desain-grafis" },
      { number: "07", label: "Dokumentasi", href: "/layanan/dokumentasi" },
    ],
  },
  { number: "08", label: "Paket", href: "/paket" },
  { number: "09", label: "Portofolio", href: "/portofolio" },
  { number: "10", label: "Kontak", href: "/kontak" },
];

/** Urutan flat 01→10 untuk prev/next PageNav & breadcrumb. */
export const allPages: PageMeta[] = pages.flatMap((p) => [
  { number: p.number, label: p.label, href: p.href },
  ...(p.children ?? []),
]);