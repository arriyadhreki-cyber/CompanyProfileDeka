import Image from "next/image";
import { Pill } from "@/components/ui/Pill";
import { GlassCard } from "@/components/ui/GlassCard";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24">
      {/* Background Gradient Mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Teks */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
              <span className="text-xs font-semibold tracking-widest text-muted uppercase">
                Studio Kreatif Digital
              </span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1] mb-6">
              Ide kreatif yang <span className="text-gradient italic font-display pr-2">tumbuh</span> <br />
              bersama bisnis Anda.
            </h1>
            
            <p className="text-lg text-muted leading-relaxed max-w-lg mb-8">
              Studio digital marketing yang dirintis anak muda untuk berkreasi dan bertumbuh. Kami membantu brand tampil meyakinkan lewat website, desain grafis, dan dokumentasi.
            </p>

            {/* Tombol Pills */}
            <div className="flex flex-wrap gap-3">
              {['Website', 'Desain Grafis', 'Dokumentasi'].map((item) => (
                <Pill key={item} className="px-5 py-2.5 text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                  {item}
                </Pill>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Glass Card (Full Logo) */}
          <div className="relative">
            {/* p-0 menghilangkan padding, overflow-hidden agar sudut gambar melengkung mengikuti kartu */}
            <GlassCard className="aspect-square sm:aspect-[4/3] lg:aspect-square p-0 overflow-hidden bg-white/5 border-white/10 relative">
              
              <Image
                src="/images/logo.png"
                alt="Logo DEKA CREATIVELY"
                fill
                className="object-cover"
                priority
              />
              
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}