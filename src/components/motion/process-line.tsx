"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsap, ScrollTrigger, MQ } from "@/lib/gsap";

/**
 * Draws the process spine as you scroll through it and lights each step as it is reached.
 * Children: one [data-progress] element (the line) and several [data-step] items.
 * Works on every screen size; the reduced-motion version shows the finished line.
 */
export function ProcessLine({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      const line = el.querySelector<HTMLElement>("[data-progress]");
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]", el);
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          { scaleY: 1, ease: "none", transformOrigin: "top", scrollTrigger: { trigger: el, start: "top 60%", end: "bottom 60%", scrub: 0.4 } },
        );
      }
      el.classList.add("process-live");
      steps.forEach((step) => {
        const dot = step.querySelector("[data-dot]");
        if (!dot) return;
        ScrollTrigger.create({ trigger: step, start: "top 60%", toggleClass: { targets: dot, className: "is-on" } });
      });
      return () => el.classList.remove("process-live");
    }, el);
    return () => {
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <ol ref={ref} className={className}>
      {children}
    </ol>
  );
}
