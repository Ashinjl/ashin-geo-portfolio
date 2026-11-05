import { Reveal } from "@/components/reveal";
import { SplitHeading } from "@/components/motion/split-heading";
import { ProcessLine } from "@/components/motion/process-line";
import { process } from "@/lib/site";

export function Process() {
  return (
    <section id="process" data-nav="services" className="section-y border-t border-line">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow">Process</p>
          </Reveal>
          <SplitHeading as="h2" className="mt-4 font-display text-4xl font-extrabold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
            Five steps, no surprises.
          </SplitHeading>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-sm text-lg text-muted text-pretty">
              You always know what happens next, what it costs and where things stand.
            </p>
          </Reveal>
        </div>

        <ProcessLine className="relative">
          <span aria-hidden className="absolute bottom-3 left-[0.95rem] top-3 w-px bg-line" />
          <span aria-hidden data-progress="" className="absolute bottom-3 left-[0.95rem] top-3 w-px origin-top bg-accent" />
          {process.map((p, i) => (
            <li key={p.step} data-step="" className="relative pb-12 pl-14 last:pb-0">
              <span
                data-dot=""
                aria-hidden
                className="absolute left-0 top-1 grid size-8 place-items-center rounded-full border-2 border-accent bg-accent text-xs font-bold text-accent-ink transition-[background-color,color,transform] duration-300"
              >
                {i + 1}
              </span>
              <Reveal>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{p.step}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted text-pretty">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ProcessLine>
      </div>
    </section>
  );
}
