import Link from "next/link";
import { pages } from "@/content/pages";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F1B22]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold tracking-[0.26em] text-foreground">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {site.description}
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Navigasi
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {pages.map((p) => (
              <li key={p.href}>
                <Link
                  className="text-sm text-muted transition-colors hover:text-foreground"
                  href={p.href}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Kontak
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a
                className="transition-colors hover:text-foreground"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-foreground"
                href={`https://wa.me/${site.whatsapp}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-foreground"
                href={site.socials.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em]">
            THINK &nbsp;·&nbsp; CREATE &nbsp;·&nbsp; GROW
          </p>
        </div>
      </div>
    </footer>
  );
}
