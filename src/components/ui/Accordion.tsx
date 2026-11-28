export type AccordionItem = {
  question: string;
  answer: string;
};

type Props = {
  items: AccordionItem[];
  className?: string;
};

/**
 * Menggunakan elemen native <details>/<summary> agar accessible via keyboard & SEO-friendly,
 * disesuaikan 1:1 dengan garis pemisah halus border-white/10 pada template DEKA CREATIVELY.
 */
export function Accordion({ items, className }: Props) {
  return (
    <div
      className={[
        "divide-y divide-white/10 border-y border-white/10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item, i) => (
        <details key={i} className="group py-3.5" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md py-1 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-2 [&::-webkit-details-marker]:hidden">
            <span className="text-[15px] font-semibold text-foreground transition-colors group-hover:text-white">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-sm text-muted transition-transform duration-200 group-open:rotate-45 group-open:text-foreground"
            >
              +
            </span>
          </summary>
          <p className="mt-2 pr-8 text-[13px] leading-[1.6] text-muted text-pretty">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
