"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import Wordmark from "./Wordmark";
import { IconArrow } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" aria-label={site.brand.name} className="shrink-0">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#contact" className="btn-primary">
            Book a demo
            <IconArrow className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-5 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-5 bg-ink transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line bg-white md:hidden ${
          open ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-500 ease-in-out`}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base text-ink/80 transition-colors hover:bg-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Book a demo
            <IconArrow className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
