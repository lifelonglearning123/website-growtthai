import { site } from "@/lib/site";

export default function TrustBar() {
  const { trust } = site;
  return (
    <section className="border-y border-line bg-cream-light/60">
      <div className="container-x py-8">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted">
          {trust.line}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
          {trust.logos.map((logo) => (
            <span
              key={logo}
              className="font-serif text-lg text-ink/45 transition-colors hover:text-ink/70"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
