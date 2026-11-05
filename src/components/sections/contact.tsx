import Link from "next/link";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Doodle } from "@/components/doodle";
import { ContactForm } from "@/components/contact-form";
import { ContactScene } from "@/components/motion/contact-scene";
import { SplitHeading } from "@/components/motion/split-heading";
import { LinkedinIcon } from "@/components/icons";
import { Particles } from "@/components/particles";
import { hasRealEmail, site } from "@/lib/site";

/** The closing scene is always the dark room, in both themes: it is the "lamp on" moment. */
export function Contact() {
  return (
    <ContactScene id="contact" className="relative overflow-hidden bg-[#1b1222] text-[#fbeedd]">
      <div
        data-lamp=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-18rem] size-[46rem] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,184,100,0.55), rgba(255,170,70,0.18) 55%, transparent 100%)" }}
      />
      <span data-drift="" aria-hidden className="absolute left-[8%] top-[22%] hidden text-lamp sm:block">
        <Doodle shape="star" className="size-8" strokeWidth={2} />
      </span>
      <span data-drift="" aria-hidden className="absolute right-[4%] top-[10%] hidden text-[#c9b3ff] sm:block">
        <Doodle shape="squiggle" className="h-5 w-24" strokeWidth={2} />
      </span>

      <Particles count={14} />
      <div className="wrap relative py-[var(--section-y)]">
        <Reveal>
          <p className="font-script text-3xl text-[#fbeedd]/70">Dream big.</p>
        </Reveal>
        <SplitHeading as="h2" className="mt-2 max-w-4xl font-display text-5xl font-extrabold leading-[1.04] text-balance sm:text-6xl lg:text-8xl">
          Got an idea? Let&apos;s make it real.
        </SplitHeading>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-[#fbeedd]/80 text-pretty">
              Tell me a little about your shop or project and I&apos;ll write back with a few questions and a rough plan.
              No pressure, no jargon.
            </p>
            <ul className="mt-8 grid gap-3">
              {hasRealEmail && (
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-lg underline-offset-4 hover:underline">
                    <Mail className="size-5 text-lamp" aria-hidden /> {site.email}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg underline-offset-4 hover:underline"
                >
                  <LinkedinIcon className="size-5 text-lamp" /> Message me on LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
            <p className="font-script mt-10 hidden items-center gap-2 text-2xl text-[#fbeedd]/70 lg:flex">
              say hi here
              <Doodle shape="arrow" className="h-12 w-16 -rotate-[20deg] text-lamp" strokeWidth={2.5} />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>

        <p className="mt-16 text-sm text-[#fbeedd]/60">
          <Link href="/writing" className="underline underline-offset-4 hover:text-[#fbeedd]">
            Not ready yet? Read my writing first
          </Link>
        </p>
      </div>
    </ContactScene>
  );
}
