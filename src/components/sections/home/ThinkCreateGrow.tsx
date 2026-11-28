const steps = [
  {
    number: "01",
    title: "Think",
    color: "text-orange-500",
    desc: "Riset dan strategi: memahami audiens dan tujuan sebelum mulai mendesain.",
  },
  {
    number: "02",
    title: "Create",
    color: "text-pink-500",
    desc: "Eksekusi visual yang rapi dan modern, dari website sampai dokumentasi.",
  },
  {
    number: "03",
    title: "Grow",
    color: "text-blue-500",
    desc: "Brand yang konsisten, mudah dikenal, dan terus berkembang bersama Anda.",
  },
];

export function ThinkCreateGrow() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="flex items-baseline gap-3 mb-4">
                <span className={`text-sm font-mono ${step.color}`}>{step.number}</span>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}