"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { site } from "@/lib/site";

const field =
  "w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-base text-[#fbeedd] outline-none transition-colors placeholder:text-[#fbeedd]/50 focus:border-lamp focus:ring-2 focus:ring-lamp/40";

/**
 * Opens the visitor's email app with the message filled in, so it works on any host with no server.
 * Swap for a route handler and an email service later if wanted.
 */
export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}, ${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">
        What are you working on?
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <Magnetic>
          <Button type="submit" size="lg" className="bg-lamp text-[#1e2620] hover:brightness-110">
            {site.action} <Send />
          </Button>
        </Magnetic>
        <p role="status" className="text-sm text-[#fbeedd]/75">
          {opened ? "Thanks! Your email app should open with the message ready to send." : "This opens your email app with everything filled in."}
        </p>
      </div>
    </form>
  );
}
