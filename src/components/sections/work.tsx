import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Doodle } from "@/components/doodle";
import { SplitHeading } from "@/components/motion/split-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site";

export function Work() {
  return (
    <section id="work" data-nav="work" className="py-10 sm:py-14">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Selected work</p>
        </Reveal>
        <SplitHeading as="h2" className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
          {projects.length ? "Things I've built." : "My first projects are on their way."}
        </SplitHeading>

        {projects.length > 0 ? (
          <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.1}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-8">
            {/* Honest empty state: no invented clients or screenshots. Replace once real projects are in lib/site.ts. */}
            <div className="relative grid gap-8 rounded-md border-2 border-dashed border-line p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="font-script text-3xl text-muted">Pencil sketches for now ✎</p>
                <p className="mt-3 max-w-lg text-lg leading-relaxed text-pretty">
                  I&apos;m new to freelancing, so there&apos;s no long client list here yet, and I won&apos;t pad it with
                  made-up work. Real projects will show up as they ship, each with the story behind it.
                </p>
                <p className="mt-3 max-w-lg text-lg leading-relaxed text-muted text-pretty">
                  Want yours to be one of the first? I&apos;d love to hear what you&apos;re selling.
                </p>
                <Button asChild variant="accent" size="lg" className="mt-7">
                  <Link href="/#contact">
                    Tell me about your shop <ArrowRight />
                  </Link>
                </Button>
              </div>
              <div aria-hidden className="relative hidden aspect-[4/3] rounded-sm bg-surface-2 lg:block">
                <Doodle shape="circle" className="absolute inset-6 text-accent" strokeWidth={2} />
                <span className="font-script absolute inset-0 grid place-items-center text-3xl text-muted">your project here?</span>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
