"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsap, SplitText, MQ, EASE } from "@/lib/gsap";

/**
 * Owns every hero animation. Children mark what they want with data-hero="<name>":
 *   greeting, headline, copy, cta, hint, pill  → fade/rise in sequence
 *   desk                                        → clip-path curtain with a slow settle (inner [data-hero-img] scales)
 *   portrait, note                              → fade in after the desk
 * and data-depth="<px>" on inner layers → pointer parallax on fine-pointer devices.
 * Entrance and parallax always sit on different elements, so they never fight over a property.
 */
export function HeroMotion({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const scope = root.current;
    if (!scope) return;
    registerGsap();
    const q = <T extends Element = HTMLElement>(name: string) => scope.querySelector<T>(`[data-hero="${name}"]`);
    const mm = gsap.matchMedia();

    mm.add(MQ.motion, () => {
      const tl = gsap.timeline({ defaults: { ease: EASE.out } });
      const rise = (name: string, at: number, y = 22) => {
        const el = q(name);
        if (el) tl.fromTo(el, { autoAlpha: 0, y }, { autoAlpha: 1, y: 0, duration: 0.8 }, at);
      };

      rise("greeting", 0.05, 16);

      const headline = q("headline");
      let split: SplitText | undefined;
      if (headline) {
        split = SplitText.create(headline, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            gsap.set(self.masks, { paddingBottom: "0.16em", marginBottom: "-0.16em" });
            gsap.set(headline, { autoAlpha: 1 });
            return gsap.from(self.lines, { yPercent: 115, duration: 1.1, stagger: 0.12, ease: EASE.expo, delay: 0.15 });
          },
        });
      }

      rise("copy", 0.6);
      rise("cta", 0.75);
      rise("pill", 0.9, 10);
      rise("hint", 1.2, 10);

      const desk = q("desk");
      if (desk) {
        tl.fromTo(desk, { autoAlpha: 1, clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: EASE.inOut }, 0.1);
        const img = desk.querySelector("[data-hero-img]");
        if (img) tl.from(img, { scale: 1.12, duration: 2, ease: EASE.out }, 0.1);
      }
      const portrait = q("portrait");
      if (portrait) tl.fromTo(portrait, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1.1 }, 0.7);
      const note = q("note");
      if (note) tl.fromTo(note, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 1.3);

      return () => {
        tl.revert();
        split?.revert();
      };
    }, scope);

    // Subtle pointer parallax: desktop mouse only.
    mm.add(MQ.finePointer, () => {
      const layers = Array.from(scope.querySelectorAll<HTMLElement>("[data-depth]")).map((el) => {
        const depth = Number(el.dataset.depth) || 0;
        return {
          depth,
          x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
        };
      });
      const move = (e: PointerEvent) => {
        const r = scope.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        layers.forEach((l) => {
          l.x(-nx * l.depth);
          l.y(-ny * l.depth);
        });
      };
      const leave = () => layers.forEach((l) => (l.x(0), l.y(0)));
      scope.addEventListener("pointermove", move);
      scope.addEventListener("pointerleave", leave);
      return () => {
        scope.removeEventListener("pointermove", move);
        scope.removeEventListener("pointerleave", leave);
      };
    }, scope);

    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id={id} data-nav="home" className={className}>
      {children}
    </section>
  );
}
