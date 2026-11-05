"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

const shapes = {
  /** A loose hand-drawn underline. */
  underline: { viewBox: "0 0 200 20", d: "M3 12 C 40 4, 80 16, 120 8 S 180 6, 197 11" },
  /** A looping circle, drawn like a pen that overshoots. */
  circle: { viewBox: "0 0 200 80", d: "M110 6 C 40 2, 6 30, 18 52 C 32 76, 150 78, 186 50 C 204 30, 150 4, 70 14" },
  /** A curved arrow with a head. */
  arrow: { viewBox: "0 0 120 100", d: "M6 8 C 20 70, 70 90, 108 80 M92 62 L 110 80 L 88 92" },
  squiggle: { viewBox: "0 0 120 24", d: "M3 12 q 10 -14 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 14 0" },
  star: { viewBox: "0 0 40 40", d: "M20 3 L 23 17 L 37 20 L 23 23 L 20 37 L 17 23 L 3 20 L 17 17 Z" },
} as const;

type DoodleProps = {
  shape: keyof typeof shapes;
  className?: string;
  /** Seconds to wait once in view before drawing. */
  delay?: number;
  strokeWidth?: number;
};

/**
 * A decorative SVG stroke that draws itself when it scrolls into view.
 * The pen movement is a CSS transition on stroke-dashoffset; this component only flips a data attribute.
 */
export function Doodle({ shape, className, delay = 0, strokeWidth = 3 }: DoodleProps) {
  const ref = useRef<SVGSVGElement>(null);
  const { viewBox, d } = shapes[shape];

  useEffect(() => {
    const el = ref.current?.querySelector("path");
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-drawn", "");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.setAttribute("data-drawn", "");
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      aria-hidden
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="none"
      className={cn("pointer-events-none overflow-visible", className)}
      style={{ "--draw-delay": `${delay}s` } as CSSProperties}
    >
      <path d={d} pathLength={1} data-draw="" />
    </svg>
  );
}
