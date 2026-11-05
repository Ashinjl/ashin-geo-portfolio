"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, MQ } from "@/lib/gsap";

/**
 * A soft ring that trails the pointer on mouse and trackpad devices. The native cursor stays visible.
 * Elements opt in to a label with data-cursor="View"; links and buttons enlarge the ring.
 */
export function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ring.current;
    if (!el) return;
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add(MQ.finePointer, () => {
      const x = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
      const y = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });
      let shown = false;

      const setMode = (target: Element | null) => {
        const tagged = target?.closest<HTMLElement>("[data-cursor]");
        const interactive = target?.closest("a, button, input, textarea, [role='switch']");
        if (tagged?.dataset.cursor) {
          if (label.current) label.current.textContent = tagged.dataset.cursor;
          el.dataset.state = "label";
          gsap.to(el, { scale: 2.2, duration: 0.3, ease: "power3.out", overwrite: "auto" });
        } else {
          if (label.current) label.current.textContent = "";
          el.dataset.state = "";
          gsap.to(el, { scale: interactive ? 1.6 : 1, duration: 0.3, ease: "power3.out", overwrite: "auto" });
        }
      };

      const move = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        if (!shown) {
          shown = true;
          gsap.set(el, { x: e.clientX, y: e.clientY });
          gsap.to(el, { opacity: 1, duration: 0.3 });
        }
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
    <div ref={ring} className="cursor-ring" aria-hidden>
      <span ref={label} className="text-[0.5rem] leading-none" />
    </div>
  );
}
