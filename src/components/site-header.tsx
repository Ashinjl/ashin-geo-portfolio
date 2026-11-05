"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const SECTION_IDS = nav.filter((n) => n.href.startsWith("/#")).map((n) => n.id);

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("home");

  // Scroll-spy: mark the section nearest the top of the viewport.
  useEffect(() => {
    if (pathname !== "/") return;
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setSection(e.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const activeId = pathname === "/writing" ? "writing" : section;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3">
      <div className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between gap-3 rounded-full px-3 py-2 sm:px-4">
        <Link href="/" className="font-display text-lg font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={activeId === item.id ? "page" : undefined}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                activeId === item.id ? "bg-accent/30 text-foreground" : "text-muted hover:bg-surface-2 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-line bg-surface md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="glass mx-1 mt-2 rounded-3xl p-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-2xl px-4 py-3 text-lg font-medium",
                activeId === item.id ? "bg-accent/30" : "hover:bg-surface-2",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
