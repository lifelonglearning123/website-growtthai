import { site } from "@/lib/site";

/**
 * The Growtth wordmark. Lowercase serif logotype with a gold ".ai" accent —
 * modern for an AI brand while keeping Blink's warm, editorial luxury feel.
 */
export default function Wordmark({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-baseline font-serif text-[1.6rem] font-normal lowercase tracking-[-0.01em] ${
        onDark ? "text-cream-light" : "text-ink"
      } ${className}`}
    >
      {site.brand.wordmark}
      <span className="text-gold">{site.brand.tld}</span>
    </span>
  );
}
