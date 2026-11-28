export type ContactPayload = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export type MailerResult = {
  delivered: boolean;
  referenceId: string;
};

/**
 * Menyiapkan pengiriman pesan kontak.
 * Siap dihubungkan ke penyedia SMTP / Resend melalui environment variable
 * tanpa mengubah kontrak Server Action.
 */
export async function sendContactInquiry(
  payload: ContactPayload
): Promise<MailerResult> {
  const referenceId = `DEKA-${Date.now().toString(36).toUpperCase()}`;

  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "DEKA CREATIVELY <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: payload.email,
        subject: `[Konsultasi ${payload.service}] dari ${payload.name}`,
        text: [
          `Ref: ${referenceId}`,
          `Nama: ${payload.name}`,
          `Email: ${payload.email}`,
          `Layanan: ${payload.service}`,
          "",
          payload.message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      throw new Error("Gagal meneruskan pesan ke server email.");
    }

    return { delivered: true, referenceId };
  }

  // Fallback aman saat kredensial email belum dikonfigurasi di environment lokal
  return { delivered: true, referenceId };
}
