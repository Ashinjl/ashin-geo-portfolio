import { Asterisk } from "lucide-react";
import { marqueeItems } from "@/lib/site";

/** A slow, quiet strip under the hero. Pauses on hover; static and scrollable under reduced motion. */
export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 font-display text-3xl font-bold italic sm:px-8 sm:text-5xl">{item}</span>
          <Asterisk className="size-6 text-lamp sm:size-8" aria-hidden />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee overflow-hidden border-y border-line bg-paper/60 py-5 sm:py-7" role="region" aria-label="What I work with">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}
