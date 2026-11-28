"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";
import {
  ConvergingPair,
  GradientLineReveal,
  ScrollReveal,
} from "@/components/motion";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqContent } from "@/content/FAQ";
import { site } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const initialState: ContactFormState = { status: "idle" };

export function ContactSection({ defaultPackage }: { defaultPackage?: string }) {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const [touchedErrors, setTouchedErrors] = useState<
    Record<string, string | undefined>
  >({});

  const formRef = useRef<HTMLFormElement>(null);
  const formHeadingId = useId();
  const nameId = useId();
  const emailId = useId();
  const serviceId = useId();
  const messageId = useId();

  useEffect(() => {
    if (state.status !== "error" || !state.fieldErrors || !formRef.current) {
      return;
    }
    const order: Array<"name" | "email" | "service" | "message"> = [
      "name",
      "email",
      "service",
      "message",
    ];
    const firstKey = order.find((k) => state.fieldErrors?.[k]);
    if (!firstKey) return;
    const target = formRef.current.elements.namedItem(firstKey);
    if (target instanceof HTMLElement) {
      target.focus();
    }
  }, [state]);

  const validateField = (
    field: "name" | "email" | "service" | "message",
    value: string
  ) => {
    let err: string | undefined;
    if (field === "name" && value.trim().length < 2) {
      err = "Error: Masukkan nama minimal 2 karakter.";
    } else if (
      field === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    ) {
      err = "Error: Masukkan email dengan format nama@domain.com.";
    } else if (field === "service" && !value.trim()) {
      err = "Error: Pilih salah satu layanan atau paket.";
    } else if (field === "message" && value.trim().length < 10) {
      err = "Error: Tuliskan ringkasan kebutuhan minimal 10 karakter.";
    }
    setTouchedErrors((prev) => ({ ...prev, [field]: err }));
  };

  const { contactCard } = faqContent;

  return (
    <div className="flex flex-1 flex-col justify-between gap-8">
      <ConvergingPair
        className="flex flex-1 flex-col gap-10 lg:flex-row"
        leftClassName="flex min-w-0 flex-1 flex-col gap-5"
        rightClassName="w-full flex-none lg:w-[400px]"
        left={
          <>
            <SectionHeading
              eyebrow={faqContent.eyebrow}
              title={
                <>
                  {faqContent.headingPrefix}
                  <GradientText gradient="linear-gradient(90deg, #FFB300 0%, #FF6B3D 50%, #EC3A8C 100%)">
                    {faqContent.headingHighlight}
                  </GradientText>
                  {faqContent.headingSuffix}
                </>
              }
            />

            <Accordion items={faqContent.items} />

            <ScrollReveal delay={160} className="mt-auto pt-2">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                  {faqContent.onboardingLabel}
                </span>
                <div className="flex flex-wrap items-center gap-3 text-[13.5px] text-foreground">
                  {faqContent.onboardingSteps.map((step, idx) => (
                    <div key={step.number} className="flex items-center gap-3">
                      <span className="flex items-center gap-2">
                        <span
                          className="font-bold tabular-nums"
                          style={{ color: step.color }}
                        >
                          {step.number}
                        </span>
                        <span>{step.label}</span>
                      </span>
                      {idx < faqContent.onboardingSteps.length - 1 && (
                        <span aria-hidden="true" className="text-muted">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </>
        }
        right={
          <GlassCard
            className="flex h-full flex-col gap-4 rounded-[28px] p-[30px]"
            style={{
              background:
                "radial-gradient(circle at 15% 0%, rgba(236,58,140,0.22) 0%, rgba(15,27,34,0) 50%), radial-gradient(circle at 95% 100%, rgba(31,111,229,0.28) 0%, rgba(15,27,34,0) 55%), rgba(255,255,255,0.07)",
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              {contactCard.eyebrow}
            </span>
            <h2 className="font-sans text-[34px] font-light leading-[1.1] tracking-[-0.02em] text-foreground">
              {contactCard.headingPrefix}
              <GradientText gradient="linear-gradient(90deg, #EC3A8C 0%, #8A2BE2 50%, #1BC0E8 100%)">
                {contactCard.headingHighlight}
              </GradientText>
              {contactCard.headingSuffix}
            </h2>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3.5 text-sm text-foreground">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/[0.07]">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="17"
                    stroke="#F4F6F8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="17"
                  >
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                </span>
                <a
                  className="hover:text-accent-2 transition-colors"
                  href={buildWhatsAppUrl()}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {contactCard.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-3.5 text-sm text-foreground">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/[0.07]">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="17"
                    stroke="#F4F6F8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="17"
                  >
                    <rect height="14" rx="2" width="18" x="3" y="5" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <a
                  className="hover:text-accent-2 transition-colors"
                  href={`mailto:${site.email}`}
                >
                  {contactCard.emailDisplay}
                </a>
              </li>

              <li className="flex items-center gap-3.5 text-sm text-foreground">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/[0.07]">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="17"
                    stroke="#F4F6F8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="17"
                  >
                    <rect height="18" rx="5" width="18" x="3" y="3" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.6" />
                  </svg>
                </span>
                <a
                  className="hover:text-accent-2 transition-colors"
                  href={site.socials.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {contactCard.instagramDisplay}
                </a>
              </li>

              <li className="flex items-center gap-3.5 text-sm text-foreground">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/[0.07]">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="17"
                    stroke="#F4F6F8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="17"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                  </svg>
                </span>
                <span>{contactCard.websiteDisplay}</span>
              </li>

              <li className="flex items-center gap-3.5 text-sm text-foreground">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/[0.07]">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="17"
                    stroke="#F4F6F8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="17"
                  >
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>{contactCard.addressDisplay}</span>
              </li>

              <li className="flex items-center gap-3.5 text-sm text-foreground">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/[0.07]">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="17"
                    stroke="#F4F6F8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="17"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <span>{contactCard.hoursDisplay}</span>
              </li>
            </ul>

            <Button
              className="mt-auto w-full"
              external
              href={buildWhatsAppUrl(
                defaultPackage
                  ? `Halo DEKA CREATIVELY, saya tertarik konsultasi paket ${defaultPackage.toUpperCase()}.`
                  : undefined
              )}
              size="lg"
              variant="gradient"
            >
              {contactCard.ctaLabel}
            </Button>
          </GlassCard>
        }
      />

      <ScrollReveal delay={140}>
        <GlassCard className="rounded-[24px] p-6 sm:p-8" interactive={false}>
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                FORMULIR KONSULTASI
              </span>
              <h2
                className="mt-1 font-sans text-2xl font-light tracking-[-0.02em] text-foreground"
                id={formHeadingId}
              >
                Ceritakan kebutuhan brand Anda
              </h2>
            </div>
            <p className="text-xs text-muted">
              Gratis konsultasi awal · Balasan maksimal 1×24 jam kerja
            </p>
          </div>

          <form
            ref={formRef}
            action={formAction}
            aria-labelledby={formHeadingId}
            className="grid grid-cols-1 gap-5 md:grid-cols-2"
            method="POST"
          >
            {/* Honeypot tersembunyi dari pengguna & screen reader */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor="company-website-hp">Website</label>
              <input
                autoComplete="off"
                id="company-website-hp"
                name="company_website"
                tabIndex={-1}
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
                htmlFor={nameId}
              >
                Nama Lengkap <span aria-hidden="true">*</span>
              </label>
              <input
                aria-describedby={
                  (touchedErrors.name || state.fieldErrors?.name)
                    ? `${nameId}-error`
                    : undefined
                }
                aria-invalid={Boolean(
                  touchedErrors.name || state.fieldErrors?.name
                )}
                autoComplete="name"
                className="deka-field-input min-h-[48px] rounded-xl border border-white/20 bg-white/[0.06] px-4 py-3 text-base text-foreground placeholder:text-muted/60 focus-visible:border-accent-2"
                enterKeyHint="next"
                id={nameId}
                minLength={2}
                name="name"
                onBlur={(e) => validateField("name", e.target.value)}
                onChange={(e) => {
                  if (touchedErrors.name) validateField("name", e.target.value);
                }}
                placeholder="Nama Anda atau nama usaha"
                required
                type="text"
              />
              {(touchedErrors.name || state.fieldErrors?.name) && (
                <p className="text-xs text-[#F77DB4]" id={`${nameId}-error`}>
                  {touchedErrors.name ?? state.fieldErrors?.name}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
                htmlFor={emailId}
              >
                Email <span aria-hidden="true">*</span>
              </label>
              <span className="text-xs text-muted" id={`${emailId}-hint`}>
                Format: nama@domain.com
              </span>
              <input
                aria-describedby={
                  (touchedErrors.email || state.fieldErrors?.email)
                    ? `${emailId}-hint ${emailId}-error`
                    : `${emailId}-hint`
                }
                aria-invalid={Boolean(
                  touchedErrors.email || state.fieldErrors?.email
                )}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                className="deka-field-input min-h-[48px] rounded-xl border border-white/20 bg-white/[0.06] px-4 py-3 text-base text-foreground placeholder:text-muted/60 focus-visible:border-accent-2"
                enterKeyHint="next"
                id={emailId}
                name="email"
                onBlur={(e) => validateField("email", e.target.value)}
                onChange={(e) => {
                  if (touchedErrors.email)
                    validateField("email", e.target.value);
                }}
                placeholder="email@perusahaan.com"
                required
                spellCheck={false}
                type="email"
              />
              {(touchedErrors.email || state.fieldErrors?.email) && (
                <p className="text-xs text-[#F77DB4]" id={`${emailId}-error`}>
                  {touchedErrors.email ?? state.fieldErrors?.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label
                className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
                htmlFor={serviceId}
              >
                Layanan / Paket yang Diminati <span aria-hidden="true">*</span>
              </label>
              <select
                aria-describedby={
                  (touchedErrors.service || state.fieldErrors?.service)
                    ? `${serviceId}-error`
                    : undefined
                }
                aria-invalid={Boolean(
                  touchedErrors.service || state.fieldErrors?.service
                )}
                className="deka-field-input min-h-[48px] rounded-xl border border-white/20 bg-[#13222B] px-4 py-3 text-base text-foreground focus-visible:border-accent-2"
                defaultValue={defaultPackage || ""}
                id={serviceId}
                name="service"
                onBlur={(e) => validateField("service", e.target.value)}
                onChange={(e) => validateField("service", e.target.value)}
                required
              >
                <option value="" disabled>
                  Pilih layanan atau paket...
                </option>
                <option value="Pembuatan Website">Pembuatan Website</option>
                <option value="Desain Grafis">Desain Grafis</option>
                <option value="Dokumentasi (Foto & Video)">
                  Dokumentasi (Foto & Video)
                </option>
                <option value="starter">Paket STARTER</option>
                <option value="growth">Paket GROWTH (Paling Populer)</option>
                <option value="premium">Paket PREMIUM</option>
              </select>
              {(touchedErrors.service || state.fieldErrors?.service) && (
                <p className="text-xs text-[#F77DB4]" id={`${serviceId}-error`}>
                  {touchedErrors.service ?? state.fieldErrors?.service}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label
                className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
                htmlFor={messageId}
              >
                Ringkasan Kebutuhan <span aria-hidden="true">*</span>
              </label>
              <textarea
                aria-describedby={
                  (touchedErrors.message || state.fieldErrors?.message)
                    ? `${messageId}-error`
                    : undefined
                }
                aria-invalid={Boolean(
                  touchedErrors.message || state.fieldErrors?.message
                )}
                className="deka-field-input min-h-[112px] rounded-xl border border-white/20 bg-white/[0.06] px-4 py-3 text-base text-foreground placeholder:text-muted/60 focus-visible:border-accent-2"
                id={messageId}
                minLength={10}
                name="message"
                onBlur={(e) => validateField("message", e.target.value)}
                onChange={(e) => {
                  if (touchedErrors.message)
                    validateField("message", e.target.value);
                }}
                placeholder="Ceritakan singkat tentang bisnis Anda, target waktu, dan hasil yang ingin dicapai..."
                required
                rows={4}
              />
              {(touchedErrors.message || state.fieldErrors?.message) && (
                <p className="text-xs text-[#F77DB4]" id={`${messageId}-error`}>
                  {touchedErrors.message ?? state.fieldErrors?.message}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-2">
              <div
                aria-live="polite"
                className="text-sm"
                role="status"
              >
                {state.status === "success" && (
                  <p className="text-[#5FD6F2]">
                    {state.message}{" "}
                    {state.referenceId ? `(${state.referenceId})` : ""}
                  </p>
                )}
                {state.status === "error" && (
                  <p className="text-[#F77DB4]">{state.message}</p>
                )}
              </div>

              <Button disabled={isPending} size="lg" type="submit" variant="gradient">
                {isPending ? "Mengirim..." : "Kirim Pesan Konsultasi"}
              </Button>
            </div>
          </form>
        </GlassCard>
      </ScrollReveal>

      <div>
        <GradientLineReveal className="mb-3.5 h-px w-full opacity-35" />
        <div className="flex flex-col items-start justify-between gap-2 text-xs text-muted sm:flex-row sm:items-center">
          <span>DEKA CREATIVELY &nbsp;·&nbsp; © 2026 DEKA CREATIVELY</span>
          <span className="text-[11px] font-medium uppercase tracking-[0.22em]">
            THINK &nbsp;·&nbsp; CREATE &nbsp;·&nbsp; GROW
          </span>
        </div>
      </div>
    </div>
  );
}
