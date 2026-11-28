import Link from "next/link";
import { allPages } from "@/content/pages";

type Props = { current: string };

export function PageNav({ current }: Props) {
  const index = allPages.findIndex((p) => p.href === current);
  const prev = index > 0 ? allPages[index - 1] : null;
  const next =
    index >= 0 && index < allPages.length - 1 ? allPages[index + 1] : null;

  return (
    <nav
      aria-label="Navigasi halaman"
      className="mx-auto mt-14 flex w-full max-w-[1280px] items-center justify-between gap-4 border-t border-white/10 pt-6"
    >
      {prev ? (
        <Link className="group max-w-[45%]" href={prev.href}>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            ← Sebelumnya
          </span>
          <p className="mt-1 text-sm font-medium text-foreground transition-colors group-hover:text-accent-2">
            <span className="tabular-nums">{prev.number}</span> / {prev.label}
          </p>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next ? (
        <Link className="group max-w-[45%] text-right" href={next.href}>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            Selanjutnya →
          </span>
          <p className="mt-1 text-sm font-medium text-foreground transition-colors group-hover:text-accent-2">
            <span className="tabular-nums">{next.number}</span> / {next.label}
          </p>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}
