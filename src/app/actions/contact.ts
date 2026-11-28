"use server";

import { sendContactInquiry } from "@/lib/mailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  referenceId?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "service" | "message", string>>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot anti-spam check
  const trap = String(formData.get("company_website") ?? "").trim();
  if (trap) {
    return {
      status: "success",
      message: "Terima kasih, pesan Anda telah kami terima.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (name.length < 2) {
    fieldErrors.name = "Masukkan nama lengkap minimal 2 karakter.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email =
      "Masukkan alamat email dengan format seperti nama@domain.com.";
  }
  if (!service) {
    fieldErrors.service = "Pilih salah satu layanan yang Anda butuhkan.";
  }
  if (message.length < 10) {
    fieldErrors.message =
      "Jelaskan kebutuhan proyek Anda minimal 10 karakter.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Mohon periksa kembali data yang Anda isi.",
      fieldErrors,
    };
  }

  try {
    const result = await sendContactInquiry({ name, email, service, message });
    return {
      status: "success",
      referenceId: result.referenceId,
      message:
        "Pesan konsultasi Anda berhasil dikirim. Tim kami akan membalas maksimal 1x24 jam kerja.",
    };
  } catch {
    return {
      status: "error",
      message:
        "Terjadi kendala saat mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.",
    };
  }
}
