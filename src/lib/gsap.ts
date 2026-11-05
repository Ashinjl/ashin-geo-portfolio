"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

let registered = false;

/** Register GSAP plugins once, on the client only. */
export function registerGsap() {
  if (registered || typeof window === "undefined") return gsap;
  gsap.registerPlugin(ScrollTrigger, SplitText);
  registered = true;
  return gsap;
}

/** matchMedia conditions shared by every motion component. */
export const MQ = {
  /** Full motion allowed. */
  motion: "(prefers-reduced-motion: no-preference)",
  /** Desktop layouts that can afford pinning and parallax. */
  desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
  /** Anything wider than a phone, with motion allowed. */
  tablet: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
  /** Mouse or trackpad with real hover. */
  finePointer: "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
} as const;

export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  expo: "expo.out",
} as const;

export { gsap, ScrollTrigger, SplitText };
