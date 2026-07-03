import { site } from "@/lib/site";
import Reveal from "./Reveal";
import {
  IconVoice,
  IconCrm,
  IconReviews,
  IconLeads,
  IconCheck,
  IconPhoneMissed,
  IconCalendar,
  IconStar,
  IconSparkle,
} from "./Icons";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  voice: <IconVoice className="h-6 w-6" />,
  crm: <IconCrm className="h-6 w-6" />,
  reviews: <IconReviews className="h-6 w-6" />,
  leads: <IconLeads className="h-6 w-6" />,
};

export default function Products() {
  const { products } = site;
  return (
    <section id="product" className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{products.eyebrow}</span>
          <h2 className="display mt-5 text-4xl text-ink md:text-5xl">
            {products.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {products.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6 md:mt-20 md:gap-8">
          {products.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <ProductRow item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductRow({
  item,
  index,
}: {
  item: (typeof site.products.items)[number];
  index: number;
}) {
  const reversed = index % 2 === 1;
  return (
    <article className="card grid items-center gap-8 overflow-hidden p-8 md:grid-cols-2 md:gap-12 md:p-12">
      {/* Copy */}
      <div className={reversed ? "md:order-2" : ""}>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-cream-light">
            {iconMap[item.id]}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-gold-deep">
            {item.tag}
          </span>
        </div>
        <h3 className="mt-6 font-serif text-2xl font-normal text-ink md:text-3xl">
          {item.headline}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
        <ul className="mt-6 space-y-3">
          {item.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-ink/80">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                <IconCheck className="h-3 w-3" strokeWidth={2.5} />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual */}
      <div className={reversed ? "md:order-1" : ""}>
        <ProductVisual id={item.id} />
      </div>
    </article>
  );
}

function ProductVisual({ id }: { id: string }) {
  if (id === "voice") return <VoiceVisual />;
  if (id === "crm") return <CrmVisual />;
  if (id === "reviews") return <ReviewsVisual />;
  return <LeadsVisual />;
}

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-cream-light to-white p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
      <div className="relative">{children}</div>
    </div>
  );
}

function VoiceVisual() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-ink">
          <IconPhoneMissed className="h-4 w-4 text-gold-deep" />
          Incoming call · 7:42pm
        </span>
        <span className="rounded-full bg-ink px-2.5 py-1 text-[11px] text-cream-light">
          After hours
        </span>
      </div>
      <div className="mt-5 flex items-end gap-1.5">
        {[10, 20, 34, 18, 42, 28, 48, 30, 22, 38, 16, 44, 24].map((h, i) => (
          <span
            key={i}
            className="w-1.5 rounded-full bg-gradient-to-t from-gold to-gold-deep"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
      <div className="mt-5 rounded-xl bg-white px-4 py-3 shadow-soft">
        <p className="text-sm text-ink/80">
          “No problem — you’re booked for Friday at 2pm. See you then! 💛”
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-muted">
        <IconCalendar className="h-4 w-4 text-gold-deep" />
        Added to calendar automatically
      </div>
    </Panel>
  );
}

function CrmVisual() {
  const rows = [
    { name: "Ava Thompson", note: "Reminder sent · Fri 2pm", tone: "reminder" },
    { name: "Priya Shah", note: "Rebooking nudge · 6 wks", tone: "rebook" },
    { name: "Georgia Lee", note: "Birthday offer sent 🎉", tone: "offer" },
  ];
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-ink">Client inbox</span>
        <span className="text-xs text-muted">Automated today · 24</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-soft"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-xs font-semibold text-gold-deep">
              {r.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{r.name}</p>
              <p className="truncate text-xs text-muted">{r.note}</p>
            </div>
            <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
              Sent
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ReviewsVisual() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink">Google rating</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-serif text-3xl text-ink">4.9</span>
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-4 w-4" />
              ))}
            </div>
          </div>
        </div>
        <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold-deep">
          +38% this quarter
        </span>
      </div>
      <div className="mt-5 rounded-xl bg-white px-4 py-3 shadow-soft">
        <div className="flex text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <IconStar key={i} className="h-3.5 w-3.5" />
          ))}
        </div>
        <p className="mt-2 text-sm text-ink/80">
          “Absolutely gorgeous results and so easy to book.”
        </p>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-cream px-3 py-2 text-xs text-muted">
          <IconSparkle className="h-3.5 w-3.5 text-gold-deep" />
          AI reply posted in your voice
        </div>
      </div>
    </Panel>
  );
}

function LeadsVisual() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-ink">New lead · Instagram</span>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
          Replied in 42s
        </span>
      </div>
      <div className="mt-4 space-y-2.5">
        <div className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-soft">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream-light">
            <IconPhoneMissed className="h-4 w-4" />
          </span>
          <p className="text-sm text-ink/80">AI called — left a warm voicemail</p>
        </div>
        <div className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-soft">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink">
            <IconStar className="h-4 w-4" />
          </span>
          <p className="text-sm text-ink/80">Texted a booking link instantly</p>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/[0.07] px-3.5 py-3">
          <IconCalendar className="h-5 w-5 text-gold-deep" />
          <p className="text-sm font-medium text-ink">Booked in — 4 minutes later</p>
        </div>
      </div>
    </Panel>
  );
}
