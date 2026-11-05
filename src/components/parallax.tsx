"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsap, MQ } from "@/lib/gsap";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Vertical drift in percent of the element's height across its pass through the viewport. */
  amount?: number;
  scrub?: number | boolean;
};

/** A gentle scroll-linked drift for one block. Tablet and up only, and at rest under reduced motion. */
export function Parallax({ children, className, amount = -6, scrub = 0.8 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add(MQ.tablet, () => {
      gsap.to(element, {
        yPercent: amount,
        ease: "none",
        scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub, invalidateOnRefresh: true },
      });
    }, element);
    return () => mm.revert();
  }, [amount, scrub]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
