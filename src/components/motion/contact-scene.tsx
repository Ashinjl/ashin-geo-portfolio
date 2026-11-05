"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsap, ScrollTrigger, MQ } from "@/lib/gsap";

/**
 * The closing scene: a dark room where the desk lamp warms up as you arrive.
 * A glow layer ([data-lamp]) scrubs from dim to bright over the approach; two floating stars drift.
 * Reduced motion: the lamp is simply on.
 */
export function ContactScene({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      const lamp = el.querySelector("[data-lamp]");
      if (lamp) {
        gsap.fromTo(
          lamp,
          { opacity: 0.15, scale: 0.7 },
          { opacity: 1, scale: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 85%", end: "top 15%", scrub: 0.6 } },
        );
      }
      gsap.utils.toArray<HTMLElement>("[data-drift]", el).forEach((star, i) => {
        gsap.to(star, {
          yPercent: i % 2 ? 30 : -30,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, el);
    return () => {
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section ref={ref} id={id} data-nav="contact" className={className}>
      {children}
    </section>
  );
}
