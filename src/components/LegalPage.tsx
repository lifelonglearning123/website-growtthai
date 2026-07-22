import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { site } from "@/lib/site";
import { IconArrow } from "./Icons";

export type LegalSection = {
  /** Anchor id — also used by the contents list. */
  id: string;
  heading: string;
  content: ReactNode;
};

/**
 * Shared shell for the Privacy and Terms pages: dark editorial header, a
 * sticky contents rail on desktop, then the numbered sections.
 * Nav/Footer get linkBase="/" so their in-page anchors point back home.
 */
export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  const { legal, brand } = site;

  return (
    <>
      <Nav linkBase="/" />

      <main>
        {/* Header */}
        <header className="relative overflow-hidden bg-ink pb-16 pt-32 text-cream-light md:pb-24 md:pt-44">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />
          <div className="container-x relative">
            <span className="eyebrow text-gold">{eyebrow}</span>
            <h1 className="display mt-5 max-w-3xl text-4xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl leading-relaxed text-cream-light/70">
              {intro}
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-cream-light/45">
              Last updated {legal.updated}
            </p>
          </div>
        </header>

        {/* Body */}
        <div className="container-x py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
            {/* Contents */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Contents
              </h2>
              <ol className="mt-5 space-y-2.5">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-3 text-sm text-ink/65 transition-colors hover:text-gold-deep"
                    >
                      <span className="tabular-nums text-gold-deep/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            {/* Sections */}
            <div className="max-w-2xl">
              {sections.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-t border-line pt-10 first:border-0 first:pt-0 [&:not(:first-child)]:mt-14"
                >
                  <h2 className="font-serif text-2xl font-light leading-snug text-ink md:text-[1.75rem]">
                    <span className="mr-3 align-middle text-sm tabular-nums text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>
                  <div className="legal-prose mt-5">{section.content}</div>
                </section>
              ))}

              {/* Contact card */}
              <div className="mt-16 rounded-xl2 border border-line bg-cream/60 p-8">
                <h2 className="font-serif text-xl text-ink">
                  Questions about this policy?
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Write to us at{" "}
                  <a
                    href={`mailto:${legal.email}`}
                    className="text-ink underline decoration-gold decoration-1 underline-offset-4 transition-colors hover:text-gold-deep"
                  >
                    {legal.email}
                  </a>{" "}
                  and we&apos;ll come back to you.
                </p>
                <a href="/#contact" className="btn-primary mt-6">
                  Book a demo
                  <IconArrow className="h-4 w-4" />
                </a>
                <p className="mt-6 text-xs leading-relaxed text-muted/80">
                  {brand.name} is a trading name of {legal.company},{" "}
                  {legal.address}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer linkBase="/" />
    </>
  );
}
