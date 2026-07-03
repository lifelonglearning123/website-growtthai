import { site } from "@/lib/site";
import Reveal from "./Reveal";
import { IconCheck, IconArrow } from "./Icons";

export default function Pricing() {
  const { pricing } = site;
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{pricing.eyebrow}</span>
          <h2 className="display mt-5 text-4xl text-ink md:text-5xl">
            {pricing.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {pricing.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3 md:gap-6">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-xl2 p-8 transition-transform duration-300 md:p-9 ${
                  tier.featured
                    ? "bg-ink text-cream-light shadow-lift md:-translate-y-3"
                    : "card"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
                    Most popular
                  </span>
                )}

                <div>
                  <h3
                    className={`font-serif text-2xl ${
                      tier.featured ? "text-cream-light" : "text-ink"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      tier.featured ? "text-cream-light/60" : "text-muted"
                    }`}
                  >
                    {tier.tagline}
                  </p>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-serif text-5xl font-light ${
                      tier.featured ? "text-cream-light" : "text-ink"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.featured ? "text-cream-light/60" : "text-muted"
                    }`}
                  >
                    {tier.cadence}
                  </span>
                </div>

                <a
                  href={tier.cta.href}
                  className={`mt-7 ${tier.featured ? "btn-gold" : "btn-primary"}`}
                >
                  {tier.cta.label}
                  <IconArrow className="h-4 w-4" />
                </a>

                <ul className="mt-8 space-y-3.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tier.featured
                            ? "bg-gold/20 text-gold"
                            : "bg-gold/15 text-gold-deep"
                        }`}
                      >
                        <IconCheck className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span
                        className={
                          tier.featured ? "text-cream-light/85" : "text-ink/80"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted/70">{pricing.note}</p>
      </div>
    </section>
  );
}
