"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, registerGsap, ScrollTrigger, SplitText, MQ, EASE } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** ScrollTrigger start position. */
  start?: string;
};

/**
 * A heading whose lines rise out of a mask as it scrolls into view.
 * Server-rendered text is the real content; SplitText works on that DOM, re-splits on resize and
 * reverts on cleanup. With reduced motion the heading simply shows.
 */
export function SplitHeading({ children, as: Tag = "h2", className, start = "top 85%" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      const split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        linesClass: "split-line",
        onSplit(self) {
          gsap.set(self.masks, { paddingBottom: "0.16em", marginBottom: "-0.16em" });
          gsap.set(el, { autoAlpha: 1 });
          return gsap.from(self.lines, {
            yPercent: 110,
            duration: 1,
            stagger: 0.09,
            ease: EASE.expo,
            scrollTrigger: { trigger: el, start, once: true },
          });
        },
      });
      return () => split.revert();
    }, el);
    return () => {
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, [start]);

  return (
    <Tag ref={ref} data-gsap="" className={className}>
      {children}
    </Tag>
  );
}
