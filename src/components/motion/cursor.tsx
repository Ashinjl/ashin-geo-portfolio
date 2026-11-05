"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, MQ } from "@/lib/gsap";

/**
 * A small glowing spark, like a flicker of desk-lamp light, that follows the pointer on mouse and trackpad
 * devices and tilts as it moves. The native cursor stays visible. Links and buttons make it bigger; elements
 * with data-cursor="View" show a small label beside it.
 */
export function Cursor() {
  const root = useRef<HTMLDivElement>(null);
  const ball = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    const ballEl = ball.current;
    if (!el || !ballEl) return;
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add(MQ.finePointer, () => {
      const x = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
      const y = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });
      let shown = false;
      let lastX = 0;
      let angle = 0;

      const setMode = (target: Element | null) => {
        const tagged = target?.closest<HTMLElement>("[data-cursor]");
        const interactive = target?.closest("a, button, input, textarea, [role='switch']");
        const text = tagged?.dataset.cursor ?? "";
        if (label.current) label.current.textContent = text;
        el.dataset.state = text ? "label" : "";
        gsap.to(ballEl, { scale: text ? 1.5 : interactive ? 1.3 : 1, duration: 0.3, ease: "back.out(2)", overwrite: "auto" });
      };

      const move = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        if (!shown) {
          shown = true;
          gsap.set(el, { x: e.clientX, y: e.clientY });
          gsap.to(el, { opacity: 1, duration: 0.3 });
        }
        // The spark tilts with the direction of travel.
        angle += (e.clientX - lastX) * 0.9;
        lastX = e.clientX;
        gsap.to(ballEl.firstElementChild, { rotation: angle, duration: 0.5, ease: "power2.out", overwrite: "auto" });
        x(e.clientX);
        y(e.clientY);
        setMode(e.target as Element);
      };
      const hide = () => {
        shown = false;
        gsap.to(el, { opacity: 0, duration: 0.2 });
      };
      window.addEventListener("pointermove", move, { passive: true });
      document.documentElement.addEventListener("pointerleave", hide);
      return () => {
        window.removeEventListener("pointermove", move);
        document.documentElement.removeEventListener("pointerleave", hide);
        gsap.set(el, { opacity: 0 });
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={root} className="cursor-ring" aria-hidden>
      <div ref={ball} className="cursor-ball">
        <svg viewBox="0 0 40 40" width="34" height="34" overflow="visible" aria-hidden>
          <defs>
            <radialGradient id="spark-glow">
              <stop offset="0" stopColor="#ffd37a" stopOpacity=".9" />
              <stop offset="0.5" stopColor="#ffb347" stopOpacity=".35" />
              <stop offset="1" stopColor="#ff9fc0" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="spark-body" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffe08a" />
              <stop offset="1" stopColor="#f6a41f" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="20" fill="url(#spark-glow)" />
          <path
            className="cursor-spark"
            d="M20 4 C21.5 14 26 18.5 36 20 C26 21.5 21.5 26 20 36 C18.5 26 14 21.5 4 20 C14 18.5 18.5 14 20 4 Z"
            fill="url(#spark-body)"
            stroke="#fff7e0"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span ref={label} className="cursor-label" />
    </div>
  );
}
