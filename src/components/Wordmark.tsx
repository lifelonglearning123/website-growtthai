import Image from "next/image";
import { site } from "@/lib/site";

/**
 * The Growtth logo — the lowercase serif "growtth.ai" logotype with the gold
 * sprout mark and gold ".ai" accent. Rendered from the brand PNG so the mark
 * matches everywhere. `onDark` swaps in the cream variant for dark backgrounds
 * (e.g. the footer); the gold sprout and ".ai" stay gold in both.
 */
export default function Wordmark({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Image
      src={onDark ? "/growtth-logo-light.png" : "/growtth-logo.png"}
      alt={`${site.brand.wordmark}${site.brand.tld}`}
      width={650}
      height={145}
      priority={!onDark}
      className={`h-9 w-auto ${className}`}
    />
  );
}
