import Image from "next/image";
import { CodeXml } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { NamedIcon } from "@/components/icons";
import { services, skills } from "@/lib/site";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="glass relative overflow-hidden rounded-[2.25rem] p-6 sm:p-10 lg:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1fr_auto]">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span className="grid size-8 place-items-center rounded-full bg-accent/30">
                <CodeXml className="size-4" />
              </span>
              My skills
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              Turning ideas into reality.
            </h2>
            <p className="mt-4 max-w-sm text-muted">
              A blend of technical skills and creative hobbies that keep me learning and growing.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="flex flex-wrap content-start gap-3">
              {skills.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="float relative size-52 overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_24px_40px_-20px_rgba(90,50,120,0.5)] [--r:4deg]">
              <Image src="/images/cube.jpg" alt="A scrambled Rubik's cube floating on a pastel background" fill sizes="208px" className="object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <article className="group h-full rounded-3xl border border-line bg-surface p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className={`mb-4 grid size-11 place-items-center rounded-2xl ${s.tint} transition-transform duration-300 group-hover:rotate-6`}>
                  <NamedIcon name={s.icon} className="size-5" />
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
