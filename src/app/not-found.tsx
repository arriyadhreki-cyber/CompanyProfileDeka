import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
        HALAMAN TIDAK DITEMUKAN
      </span>
      <h1 className="mt-4 font-sans text-6xl font-light tracking-tight text-foreground sm:text-7xl">
        <GradientText>404</GradientText>
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <div className="mt-8">
        <Button href="/" size="lg" variant="gradient">
          Kembali ke Beranda
        </Button>
      </div>
    </section>
  );
}
