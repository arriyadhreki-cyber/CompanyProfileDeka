"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pages } from "@/content/pages";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { NavDropdown } from "./NavDropdown";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F1B22]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link
          aria-label={`${site.name} — Beranda`}
          className="flex items-center gap-3 text-[13px] font-semibold tracking-[0.26em] text-foreground"
          href="/"
        >
          <span className="relative h-[30px] w-[32px] flex-none overflow-hidden">
            <img
              alt=""
              aria-hidden="true"
              className="absolute -left-[23px] -top-[20px] w-[80px] max-w-none mix-blend-screen"
              src="/images/logo-deka.png"
            />
          </span>
          <span>{site.name}</span>
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-7 lg:flex"
        >
          {pages.map((item) =>
            item.children ? (
              <NavDropdown key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "text-sm text-foreground/75 transition-colors hover:text-foreground",
                  pathname === item.href && "font-semibold text-foreground"
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          aria-label="Navigasi seluler"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-[#0F1B22]/95 backdrop-blur-xl lg:hidden"
          id="mobile-menu"
        >
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
            {pages.map((item) => (
              <li key={item.href}>
                <Link
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-white/[0.06]",
                    pathname === item.href && "bg-white/[0.08] font-semibold"
                  )}
                  href={item.href}
                >
                  <span>{item.label}</span>
                  <span className="text-[11px] tabular-nums text-muted">
                    {item.number}
                  </span>
                </Link>
                {item.children && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          aria-current={
                            pathname === child.href ? "page" : undefined
                          }
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/[0.06] hover:text-foreground",
                            pathname === child.href &&
                              "bg-white/[0.08] text-foreground"
                          )}
                          href={child.href}
                        >
                          <span>{child.label}</span>
                          <span className="text-[11px] tabular-nums">
                            {child.number}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
