import { Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/site";

/** Renders nothing until real feedback is added to `testimonials` in lib/site.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section id="kind-words" data-nav="services" className="section-y border-t border-line">
      <div className="wrap">
        <p className="eyebrow">Kind words</p>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <figure>
                <blockquote className="font-display text-2xl leading-snug text-pretty">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-muted">
                  {t.name}, {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
