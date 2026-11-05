import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Doodle } from "@/components/doodle";
import { Particles } from "@/components/particles";
import { SplitHeading } from "@/components/motion/split-heading";
import { offTheClock, toolkit } from "@/lib/site";

export function Toolkit() {
  return (
    <section id="toolkit" data-nav="services" className="pb-[var(--section-y)]">
      <div className="wrap">
        <div className="paper relative grid gap-10 rounded-lg p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr_auto] lg:items-center lg:p-14">
          <div>
            <Reveal>
              <p className="eyebrow">Toolkit</p>
            </Reveal>
            <SplitHeading as="h2" className="mt-4 font-display text-4xl font-extrabold leading-[1.08] text-balance sm:text-5xl">
              What&apos;s in my toolbox.
            </SplitHeading>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-sm text-muted text-pretty">
                The tools I reach for every day, plus a few things I do just for fun.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <dl className="grid gap-5">
              {toolkit.map((g) => (
                <div key={g.group}>
                  <dt className="eyebrow mb-2">{g.group}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {g.items.map((name) => (
                        <li key={name} className="rounded-full border border-line bg-background px-4 py-2 text-sm font-medium">
                          {name}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
              <div>
                <dt className="eyebrow mb-2">Off the clock</dt>
                <dd>
                  <ul className="font-script flex flex-wrap gap-x-5 gap-y-1 text-2xl text-muted">
                    {offTheClock.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative">
              <div className="float relative size-48 overflow-hidden rounded-md border-4 border-[#fffdf7] shadow-[0_22px_36px_-18px_rgba(52,44,24,0.55)] [--r:4deg]">
                <Image src="/images/cube.jpg" alt="A scrambled Rubik's cube floating on a pastel background" fill sizes="192px" className="object-cover" />
              </div>
              <Particles count={6} className="-inset-6" />
              <Doodle shape="star" className="absolute -right-4 -top-4 size-8 text-lamp" strokeWidth={2} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
