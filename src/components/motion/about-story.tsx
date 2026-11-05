"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsap, ScrollTrigger, MQ } from "@/lib/gsap";

/**
 * About, told in three beats. On desktop the stage is pinned briefly while the beats cross-fade as you
 * scroll (about 1.5 screens of scroll, scrubbed, never hijacked). Everywhere else, and without JS,
 * the beats are simply stacked paragraphs.
 * Children: elements with [data-beat], optionally [data-photo] (tilts level as the story moves) and [data-dot].
 */
export function AboutStory({ children, className }: { children: ReactNode; className?: string }) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    registerGsap();
    const mm = gsap.matchMedia();

    mm.add(MQ.desktop, () => {
      const beats = gsap.utils.toArray<HTMLElement>("[data-beat]", el);
      const dots = gsap.utils.toArray<HTMLElement>("[data-dot]", el);
      const photo = el.querySelector("[data-photo]");
      const holder = el.querySelector<HTMLElement>("[data-beats]");
      if (beats.length < 2 || !holder) return;

      holder.classList.add("is-stacked");
      gsap.set(beats.slice(1), { autoAlpha: 0, y: 28 });
      gsap.set(dots, { opacity: 0.3, scale: 1 });
      gsap.set(dots[0], { opacity: 1, scale: 1.4 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: el,
          start: "center center",
          end: `+=${beats.length * 70}%`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      beats.forEach((beat, i) => {
        if (i === 0) return;
        const at = i - 0.35;
        tl.to(beats[i - 1], { autoAlpha: 0, y: -28, duration: 0.35 }, at)
          .to(beat, { autoAlpha: 1, y: 0, duration: 0.35 }, at + 0.2)
          .to(dots[i - 1], { opacity: 0.3, scale: 1, duration: 0.2 }, at)
          .to(dots[i], { opacity: 1, scale: 1.4, duration: 0.2 }, at + 0.2);
      });
      if (photo) tl.to(photo, { rotate: 0, duration: beats.length - 1 }, 0);
      tl.to({}, { duration: 0.3 }); // a short rest on the last beat

      return () => {
        holder.classList.remove("is-stacked");
      };
    }, el);

    return () => {
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={stage} className={className}>
      {children}
    </div>
  );
}
