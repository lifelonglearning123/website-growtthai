import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconVoice(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3Z" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </svg>
  );
}

export function IconCrm(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconReviews(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l2.5 5.06 5.58.81-4.04 3.94.95 5.56L12 16.25l-4.99 2.62.95-5.56-4.04-3.94 5.58-.81L12 3.5Z" />
    </svg>
  );
}

export function IconLeads(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h4l2 5 4-13 2 8h6" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5Z" />
    </svg>
  );
}

export function IconPhoneMissed(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      <path d="m16 2 5 5M21 2l-5 5" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8.5a3.5 3.5 0 0 0 3.5 3.5A3.5 3.5 0 0 0 12 15.5 3.5 3.5 0 0 0 8.5 12 3.5 3.5 0 0 0 12 8.5Z" />
    </svg>
  );
}
