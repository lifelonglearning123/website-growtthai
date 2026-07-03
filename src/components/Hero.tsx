import { site } from "@/lib/site";
import {
  IconArrow,
  IconCalendar,
  IconStar,
  IconVoice,
  IconLeads,
} from "./Icons";

export default function Hero() {
  const { hero } = site;
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-light via-white to-white" />
        <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-gold/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="container-x grid items-center gap-14 pb-20 pt-36 md:pb-28 md:pt-44 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="eyebrow animate-fade-up">{hero.eyebrow}</span>
          <h1
            className="display mt-6 text-5xl text-ink md:text-6xl lg:text-[4.5rem]"
            style={{ animation: "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both", animationDelay: "80ms" }}
          >
            {hero.title}
            <br />
            <span className="text-gradient-gold italic">{hero.titleAccent}</span>
          </h1>
          <p
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted"
            style={{ animation: "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both", animationDelay: "180ms" }}
          >
            {hero.subtitle}
          </p>
          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animation: "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both", animationDelay: "280ms" }}
          >
            <a href={hero.primaryCta.href} className="btn-gold">
              {hero.primaryCta.label}
              <IconArrow className="h-4 w-4" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>
          <p
            className="mt-6 text-xs uppercase tracking-[0.14em] text-muted/80"
            style={{ animation: "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both", animationDelay: "360ms" }}
          >
            {hero.note}
          </p>
        </div>

        {/* Product visual */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      className="relative"
      style={{ animation: "fade-up 1s cubic-bezier(0.16,1,0.3,1) both", animationDelay: "220ms" }}
    >
      {/* Main call card */}
      <div className="card relative z-10 overflow-hidden p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream-light">
              <IconVoice className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Growtth Voice</p>
              <p className="text-xs text-muted">Answering — new client</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        <div className="mt-5 space-y-3">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-cream px-4 py-2.5 text-sm text-ink/80">
            “Hi! I’d love to book a brow lamination this Friday.”
          </div>
          <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-ink px-4 py-2.5 text-sm text-cream-light">
            “Lovely — I have 2pm or 4:30pm on Friday. Which suits best?”
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/[0.07] px-4 py-3">
          <IconCalendar className="h-5 w-5 text-gold-deep" />
          <div className="text-sm">
            <p className="font-medium text-ink">Appointment booked</p>
            <p className="text-xs text-muted">Fri · 2:00pm · Brow Lamination</p>
          </div>
          <span className="ml-auto text-xs font-medium text-gold-deep">Auto</span>
        </div>
      </div>

      {/* Floating review toast */}
      <div className="absolute -left-6 -top-6 z-20 hidden animate-float-slow rounded-2xl border border-line bg-white px-4 py-3 shadow-lift sm:block">
        <div className="flex items-center gap-2">
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-3.5 w-3.5" />
            ))}
          </div>
          <span className="text-xs font-medium text-ink">New 5★ review</span>
        </div>
        <p className="mt-1 text-[11px] text-muted">Auto-requested by Growtth</p>
      </div>

      {/* Floating lead toast */}
      <div
        className="absolute -bottom-7 -right-4 z-20 hidden animate-float-slow rounded-2xl border border-line bg-white px-4 py-3 shadow-lift sm:block"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
            <IconLeads className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">New lead replied</p>
            <p className="text-[11px] text-muted">Called + texted in 42s</p>
          </div>
        </div>
      </div>

      {/* Soft shadow plate */}
      <div className="absolute inset-x-6 -bottom-6 -z-10 h-40 rounded-[2rem] bg-gold/10 blur-2xl" />
    </div>
  );
}
