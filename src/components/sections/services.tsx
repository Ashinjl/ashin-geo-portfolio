import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { NamedIcon } from "@/components/icons";
import { SplitHeading } from "@/components/motion/split-heading";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" data-nav="services" className="section-y border-t border-line">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow">Services</p>
          </Reveal>
          <SplitHeading as="h2" className="mt-4 font-display text-4xl font-extrabold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
            What you can hire me to build.
          </SplitHeading>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-sm text-lg text-muted text-pretty">
              Online shops, sites you can edit yourself, and the odd creative one-off. Tell me what you sell and I&apos;ll tell
              you what fits.
            </p>
            <Button asChild variant="primary" size="lg" className="mt-7">
              <Link href="/#contact">
                Talk about your project <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <ol className="border-t border-line">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06} className="group border-b border-line">
              <div className="flex items-start gap-5 py-7 transition-transform duration-300 ease-out sm:gap-8 [@media(hover:hover)]:group-hover:translate-x-2">
                <span className="font-script w-8 pt-1 text-3xl text-muted" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">{s.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-muted text-pretty">{s.blurb}</p>
                </div>
                <span className={`grid size-12 shrink-0 place-items-center rounded-full ${s.tint} transition-transform duration-300 group-hover:rotate-6`}>
                  <NamedIcon name={s.icon} className="size-5" />
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
