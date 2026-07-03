import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0C",
          soft: "#16161A",
          80: "#2A2A2E",
        },
        cream: {
          DEFAULT: "#F7F3EC",
          light: "#FBF9F4",
        },
        gold: {
          DEFAULT: "#C4A574",
          deep: "#A8865A",
          light: "#D9C29B",
        },
        muted: "#6E6A63",
        line: "rgba(11,11,12,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        xl2: "1.375rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,11,12,0.04), 0 12px 40px -12px rgba(11,11,12,0.12)",
        lift: "0 24px 70px -28px rgba(11,11,12,0.35)",
        gold: "0 20px 60px -24px rgba(196,165,116,0.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
