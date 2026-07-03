import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Results() {
  const { results } = site;
  return (
    <section id="results" className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{results.eyebrow}</span>
          <h2 className="display mt-5 text-4xl text-ink md:text-5xl">
            {results.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line md:mt-16 md:grid-cols-4">
          {results.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="flex h-full flex-col bg-white p-8 text-center md:p-10">
                <span className="text-gradient-gold font-serif text-5xl font-light md:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-4 text-sm leading-relaxed text-muted">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted/70">
          {results.subtitle}
        </p>
      </div>
    </section>
  );
}
