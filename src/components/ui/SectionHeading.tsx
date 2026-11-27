import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted leading-relaxed max-w-2xl text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}