"use client";

import { useEffect } from "react";

/** Daylight washes in light mode; in dark mode a lamp pool that follows the pointer. */
export function AmbientLight() {
  useEffect(() => {
    const root = document.documentElement;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        root.style.setProperty("--lamp-x", `${x}px`);
        root.style.setProperty("--lamp-y", `${y}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="ambient-sun" aria-hidden />
      <div className="ambient-lamp" aria-hidden />
      <div className="ambient-grain" aria-hidden />
    </>
  );
}
