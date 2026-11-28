import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-20 text-center sm:px-12 sm:py-24">
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-20" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-background mb-6 text-balance">
              Siap Membawa Bisnis Anda ke Level Berikutnya?
            </h2>
            <p className="text-muted mb-10 text-lg">
              Mari berdiskusi tentang ide Anda. Kami siap membantu mewujudkannya menjadi karya visual yang berdampak.
            </p>
            <Button href="/kontak" variant="secondary" size="lg">
              Hubungi Kami Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}