import Link from "next/link";
import { pages } from "@/content/pages";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {site.description}
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <h3 className="text-sm font-medium text-foreground">Navigasi</h3>
          <ul className="mt-4 space-y-2">
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
          <h3 className="text-sm font-medium text-foreground">Kontak</h3>
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

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}