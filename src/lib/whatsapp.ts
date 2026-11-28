import { site } from "@/content/site";

export function buildWhatsAppUrl(customMessage?: string) {
  const defaultMsg =
    "Halo DEKA CREATIVELY, saya ingin konsultasi gratis mengenai layanan kreatif untuk brand saya.";
  const text = encodeURIComponent(customMessage?.trim() || defaultMsg);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
