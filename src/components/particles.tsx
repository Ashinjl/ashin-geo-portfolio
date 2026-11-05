import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

const COLORS = ["#f6a41f", "#c9b3ff", "#ff9fc0", "#ffd37a", "#a9bdff"];

/**
 * A few slow, tiny sparkles and dots drifting upward. Pure CSS, fixed positions (no randomness, so no
 * hydration mismatch), hidden from assistive tech, still under reduced motion. Every other one is
 * dropped on phones.
 */
export function Particles({ count = 16, className }: { count?: number; className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {Array.from({ length: count }, (_, i) => {
        const left = (i * 37 + 11) % 97;
        const top = (i * 53 + 7) % 92;
        const size = 4 + ((i * 5) % 9);
        const star = i % 3 === 0;
        return (
          <span
            key={i}
            className={cn("particle", star && "particle-star", i % 2 === 1 && "max-sm:hidden")}
            style={
              {
                left: `${left}%`,
                top: `${top}%`,
                width: star ? size + 6 : size,
                height: star ? size + 6 : size,
                background: COLORS[i % COLORS.length],
                animationDuration: `${9 + (i % 5) * 2.5}s`,
                animationDelay: `${-(i * 1.7)}s`,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
