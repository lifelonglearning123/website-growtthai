"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { IconPlus } from "./Icons";

export default function FAQ() {
  const { faq } = site;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream-light/70 py-24 md:py-32">
      <div className="container-x grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="display mt-5 text-4xl text-ink md:text-5xl">
            {faq.title}
          </h2>
          <p className="mt-5 text-muted">
            Still have a question?{" "}
            <a
              href="#contact"
              className="font-medium text-gold-deep underline-offset-4 hover:underline"
            >
              Talk to us
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-line border-t border-line">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-ink">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-ink text-cream-light" : ""
                    }`}
                  >
                    <IconPlus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pr-10 leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
