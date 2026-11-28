import { Pill } from "@/components/ui/Pill";

export function PageBadge({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3.5">
        <div className="relative h-[34px] w-[36px] flex-none overflow-hidden">
          <img
            alt=""
            aria-hidden="true"
            className="absolute -left-[26px] -top-[23px] w-[90px] max-w-none mix-blend-screen"
            src="/images/logo-deka.png"
          />
        </div>
        <span className="text-[13px] font-semibold uppercase tracking-[0.28em] text-foreground">
          DEKA CREATIVELY
        </span>
      </div>

      <Pill>
        <span className="sr-only">{label} — </span>
        <span>COMPANY PROFILE 2026</span>
        <span aria-hidden="true">·</span>
        <span className="tabular-nums text-foreground">{number} / 10</span>
      </Pill>
    </div>
  );
}
