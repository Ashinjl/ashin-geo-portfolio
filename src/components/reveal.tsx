"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { animate, inView } from "motion";

type RevealProps = { children: ReactNode; className?: string; delay?: number; y?: number };

/**
 * Fade-and-rise on first view. The server renders content fully visible; only once JavaScript runs
 * is it hidden (before paint) and animated in, so a failed script never leaves the page blank.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px)`;

    let controls: ReturnType<typeof animate> | undefined;
    const stop = inView(
      el,
      () => {
        controls = animate(
          el,
          { opacity: 1, transform: "translateY(0px)" },
          { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        );
        controls.finished.then(() => el.style.removeProperty("transform"));
      },
      { margin: "0px 0px -80px 0px" },
    );

    return () => {
      stop();
      controls?.stop();
      el.style.removeProperty("opacity");
      el.style.removeProperty("transform");
    };
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
