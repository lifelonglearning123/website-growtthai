import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function HowItWorks() {
  const { how } = site;
  return (
    <section id="how" className="relative overflow-hidden bg-ink py-24 text-cream-light md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold">{how.eyebrow}</span>
          <h2 className="display mt-5 text-4xl md:text-5xl">{how.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-cream-light/70">
            {how.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {how.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <div className="group relative h-full rounded-xl2 border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-gold/40 hover:bg-white/[0.05]">
                <span className="font-serif text-5xl text-gold/40 transition-colors group-hover:text-gold/70">
                  {step.n}
                </span>
                <h3 className="mt-5 text-xl font-medium text-cream-light">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-cream-light/60">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center" delay={120}>
          <a href="#contact" className="btn-gold">
            Book your setup call
          </a>
        </Reveal>
      </div>
    </section>
  );
}
