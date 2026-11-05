"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, registerGsap, ScrollTrigger, MQ } from "@/lib/gsap";

/** Lenis smooth scrolling, driven by the GSAP ticker so ScrollTrigger stays in sync. Off for reduced motion. */
export function SmoothScroll() {
  useEffect(() => {
    registerGsap();
    // Tells the pre-paint failsafe in layout.tsx that scripts are alive.
    document.documentElement.dataset.hydrated = "";
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      const lenis = new Lenis({ lerp: 0.1, anchors: true });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });
    // Late-loading fonts and images move things; ask ScrollTrigger to re-measure once everything is in.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, []);
  return null;
}
