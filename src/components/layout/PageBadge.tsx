import { Pill } from "@/components/ui/Pill";

export function PageBadge({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <Pill className="mb-6">
      <span className="font-mono text-[10px] tracking-widest text-accent">
        {number}
      </span>
      <span className="text-foreground/70">{label}</span>
    </Pill>
  );
}