import Link from "next/link";
import { homeContent } from "@/content/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-surface/50 border-y border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Portofolio"
            title="Karya Terbaru Kami"
            description="Beberapa proyek yang telah kami kerjakan untuk klien dari berbagai industri."
          />
          <Link 
            href="/portofolio" 
            className="text-sm font-medium text-accent hover:underline underline-offset-4 shrink-0 pb-1"
          >
            Lihat Semua Karya &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeContent.portfolio.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl bg-line overflow-hidden mb-4 relative flex items-center justify-center">
                 <span className="text-muted/50 text-sm font-medium">Gambar {i + 1}</span>
                 <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
              </div>
              <p className="text-xs font-medium text-accent mb-1">{item.category}</p>
              <h3 className="font-display text-xl group-hover:text-accent transition-colors">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}