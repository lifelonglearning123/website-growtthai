import { site } from "@/lib/site";
import Wordmark from "./Wordmark";

/** `linkBase` prefixes the in-page anchors so the footer also works from a
 *  sub-page — see the same prop on `Nav`. */
export default function Footer({ linkBase = "" }: { linkBase?: string }) {
  const { footer, brand, legal } = site;
  const year = 2026;
  const to = (href: string) =>
    href.startsWith("#") ? `${linkBase}${href}` : href;

  return (
    <footer className="border-t border-white/10 bg-ink text-cream-light">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Wordmark onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-light/60">
              {footer.blurb}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream-light/50">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={to(link.href)}
                      className="text-sm text-cream-light/70 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream-light/50">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-light/70">
              <li>
                <a href={`mailto:${brand.email}`} className="transition-colors hover:text-gold">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phone.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-gold">
                  {brand.phone}
                </a>
              </li>
              <li className="text-cream-light/50">{brand.location}</li>
            </ul>
            <a href={to("#contact")} className="btn-gold mt-6">
              Book a demo
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream-light/45 md:flex-row">
          <p className="text-center md:text-left">
            © {year} {brand.legalName}. All rights reserved. {brand.name} is a
            trading name of {legal.company}.
          </p>
          <div className="flex gap-6">
            {legal.pages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="transition-colors hover:text-cream-light/80"
              >
                {page.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
