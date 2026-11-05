"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const getSnapshot = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
const getServerSnapshot = (): Theme => "light";

/** Sun/moon pill switch. Dark mode is the "room dims, lamp on" look. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage can be blocked; the choice still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Dark theme"
      title={next === "dark" ? "Dim the room, turn the lamp on" : "Back to daylight"}
      onClick={toggle}
      className="relative flex h-9 w-[4.25rem] shrink-0 items-center justify-between rounded-full border border-line bg-surface px-2.5 text-muted backdrop-blur"
    >
      <Sun className="size-4" aria-hidden />
      <Moon className="size-4" aria-hidden />
      <span
        aria-hidden
        className={`absolute left-1 top-1 grid size-7 place-items-center rounded-full bg-accent text-accent-ink shadow-md transition-transform duration-300 ease-out ${
          theme === "dark" ? "translate-x-[2rem]" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
      </span>
    </button>
  );
}
