import { site } from "@/lib/site";
import Reveal from "./Reveal";
import { IconStar } from "./Icons";

export default function Testimonials() {
  const { testimonials } = site;
  return (
    <section className="bg-cream-light/70 py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{testimonials.eyebrow}</span>
          <h2 className="display mt-5 text-4xl text-ink md:text-5xl">
            {testimonials.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="card flex h-full flex-col p-8">
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <IconStar key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-lg font-light leading-relaxed text-ink/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
