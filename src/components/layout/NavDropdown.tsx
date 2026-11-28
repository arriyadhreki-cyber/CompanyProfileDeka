import Link from "next/link";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/content";

/**
 * Dropdown desktop berbasis CSS-only (group-hover + focus-within)
 * agar tetap accessible via keyboard tanpa JS.
 */
export function NavDropdown({ item }: { item: NavItem }) {
  if (!item.children?.length) return null;

  return (
    <div className="group relative">
      <Link
        aria-haspopup="true"
        className="inline-flex items-center gap-1 text-sm text-foreground/75 transition-colors hover:text-foreground focus-visible:text-foreground"
        href={item.href}
      >
        {item.label}
        <svg
          aria-hidden="true"
          className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Link>

      <div
        className={cn(
          "invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150",
          "group-hover:visible group-hover:opacity-100",
          "group-focus-within:visible group-focus-within:opacity-100"
        )}
      >
        <ul className="min-w-[220px] rounded-2xl border border-white/20 bg-[#13222b]/95 p-2 shadow-[0_20px_44px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-white/[0.08] hover:text-foreground focus-visible:bg-white/[0.08] focus-visible:text-foreground"
                href={child.href}
              >
                <span>{child.label}</span>
                <span className="text-[11px] tabular-nums text-muted">
                  {child.number}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
