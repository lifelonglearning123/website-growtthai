"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { IconArrow, IconCheck, IconStar } from "./Icons";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { contact, brand } = site;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — bots fill hidden fields.
    if (data.company_website) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft md:grid md:grid-cols-2">
          {/* Left — pitch */}
          <div className="relative overflow-hidden bg-ink p-10 text-cream-light md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold/20 blur-[100px]" />
            <div className="relative">
              <span className="eyebrow text-gold">{contact.eyebrow}</span>
              <h2 className="display mt-5 text-4xl md:text-[2.75rem]">
                {contact.title}
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-cream-light/70">
                {contact.subtitle}
              </p>

              <ul className="mt-10 space-y-4">
                {[
                  "Free 15-minute personalised demo",
                  "See it working on your salon's services",
                  "Done-for-you setup — live in under a week",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <IconCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex items-center gap-3 border-t border-white/10 pt-8">
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="text-sm text-cream-light/70">
                  Rated 4.9/5 by beauty pros
                </span>
              </div>
            </div>
          </div>

          {/* Right — form / success */}
          <div className="p-8 md:p-14">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                  <IconCheck className="h-8 w-8" strokeWidth={2} />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-ink">
                  {contact.success.title}
                </h3>
                <p className="mt-3 max-w-sm text-muted">{contact.success.body}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First name" name="firstName" required autoComplete="given-name" />
                  <Field label="Last name" name="lastName" autoComplete="family-name" />
                </div>
                <Field label="Salon / business name" name="businessName" autoComplete="organization" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required autoComplete="email" />
                  <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
                </div>

                <div>
                  <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-ink">
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue={contact.interests[0]}
                    className="w-full rounded-xl border border-line bg-cream-light/50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold focus:bg-white"
                  >
                    {contact.interests.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Anything we should know? <span className="text-muted">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full resize-none rounded-xl border border-line bg-cream-light/50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold focus:bg-white"
                    placeholder="Tell us about your salon…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Sending…" : "Book my demo"}
                  {status !== "loading" && <IconArrow className="h-4 w-4" />}
                </button>

                {status === "error" && (
                  <p className="text-center text-sm text-red-600">{error}</p>
                )}

                <p className="text-center text-xs text-muted/80">
                  By submitting you agree to be contacted by {brand.name}. We&apos;ll
                  never share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-gold-deep">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-line bg-cream-light/50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-gold focus:bg-white"
      />
    </div>
  );
}
