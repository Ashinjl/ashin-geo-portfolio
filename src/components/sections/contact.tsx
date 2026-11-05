import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:px-8">
      <div className="glass relative overflow-hidden rounded-[2.25rem] p-6 sm:p-12">
        <div aria-hidden className="absolute -right-20 -top-20 size-64 rounded-full bg-accent/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -left-10 size-64 rounded-full bg-[#c9b3ff]/40 blur-3xl dark:bg-[#7a52c9]/25" />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-script text-3xl text-muted">Dream big.</p>
            <h2 className="mt-1 font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              Let&apos;s build something that sells.
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted">
              Have an idea, a shop or a project? Tell me about it and I&apos;ll reply with questions and a rough plan.
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashin on LinkedIn"
              className="glass mt-8 grid size-11 place-items-center rounded-full transition-transform hover:-translate-y-0.5"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
