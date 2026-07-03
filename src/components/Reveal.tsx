"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms before the animation runs once in view. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Fades + slides its children into view the first time they enter the
 * viewport. Respects prefers-reduced-motion (handled in globals.css).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — ref type across union of tags is fine at runtime
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
