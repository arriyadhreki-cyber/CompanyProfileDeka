export type AccordionItem = {
  question: string;
  answer: string;
};

type Props = {
  items: AccordionItem[];
  className?: string;
};

/**
 * Menggunakan elemen native <details>/<summary> agar:
 * - fully accessible (keyboard, screen reader) tanpa JS
 * - SEO-friendly (konten tetap ter-index)
 * - multiple item bisa dibuka sekaligus
 */
export function Accordion({ items, className }: Props) {
  return (
    <div
      className={["divide-y divide-line border-y border-line", className]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item, i) => (
        <details key={i} className="group py-5">
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-md"
          >
            <span className="text-base font-medium text-foreground">
              {item.question}
            </span>
            <span
              aria-hidden
              className="shrink-0 text-lg text-muted transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}