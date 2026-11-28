import type { ReactNode } from "react";
import { GradientLineReveal, TextLineReveal } from "@/components/motion";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  eyebrowPrefix?: string;
  eyebrowPrefixColor?: string;
  eyebrowLineGradient?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  eyebrowPrefix,
  eyebrowPrefixColor = "#FF6B3D",
  eyebrowLineGradient,
  title,
  description,
  align = "left",
  as = "h1",
  className,
}: Props) {
  const HeadingTag = as;

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {(eyebrow || eyebrowPrefix) && (
        <div className="flex items-center gap-3.5">
          {eyebrowPrefix ? (
            <>
              <span
                className="text-xs font-bold tracking-[0.14em]"
                style={{ color: eyebrowPrefixColor }}
              >
                {eyebrowPrefix}
              </span>
              <div
                aria-hidden="true"
                className="h-[2px] w-11"
                style={{
                  background:
                    eyebrowLineGradient ??
                    "linear-gradient(90deg, #FFB300, #FF6B3D)",
                }}
              />
            </>
          ) : (
            <>
              <GradientLineReveal className="h-[2px] w-11 shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                {eyebrow}
              </span>
            </>
          )}
        </div>
      )}

      <TextLineReveal>
        <HeadingTag className="font-sans text-3xl font-light leading-[1.12] tracking-[-0.02em] text-foreground text-balance sm:text-4xl lg:text-[42px]">
          {title}
        </HeadingTag>
      </TextLineReveal>

      {description && (
        <p className="mt-1 max-w-2xl text-[15px] leading-[1.7] text-muted text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
