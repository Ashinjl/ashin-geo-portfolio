import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const goals = ["Build skills", "Grow my freelance work", "Enjoy the little things"];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <figure className="relative mx-auto w-full max-w-xs -rotate-3 rounded-[1.75rem] bg-white p-3 pb-14 shadow-[0_30px_60px_-24px_rgba(90,50,120,0.5)] transition-transform duration-500 hover:rotate-0 md:max-w-sm">
            <span aria-hidden className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 rounded-sm bg-[#ffc93c]/80" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-[#ffd7bf] via-[#ffe3ee] to-[#d9cfff]">
              <div aria-hidden className="absolute -right-8 -top-8 size-48 rounded-full bg-[#ffc46b]/60 blur-3xl" />
              <Image
                src="/images/ashin-about.png"
                alt="Ashin looking off to the side, in a brown sweater"
                fill
                sizes="(min-width: 768px) 28vw, 80vw"
                className="object-contain object-bottom"
              />
            </div>
            <figcaption className="font-script absolute inset-x-0 bottom-3 text-center text-3xl text-[#3a2a4a]">
              Hello from my desk ♡
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span className="grid size-8 place-items-center rounded-full bg-accent/30">
                <UserRound className="size-4" />
              </span>
              About me
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              A curious mind on a continuous journey.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">
              I&apos;m Ashin. I make websites for people who sell things online, and I&apos;m just starting out as
              a freelancer in ecommerce and creative web development. That means you get my full attention,
              plain-spoken updates and work I&apos;m proud of. Off the clock I tinker with my desk setup, turn a
              Rubik&apos;s cube, learn crochet and write.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-6">
              <Button asChild variant="outline">
                <Link href="/writing">
                  Read my writing <ArrowRight />
                </Link>
              </Button>
              <div className="w-56 rotate-2 rounded-lg bg-[#fff0b3] p-5 pt-6 text-[#3a2a1a] shadow-[0_18px_30px_-14px_rgba(120,80,20,0.5)]">
                <ul className="font-script space-y-1 text-2xl leading-tight">
                  {goals.map((g) => (
                    <li key={g} className="flex items-start gap-2">
                      <Check className="mt-1.5 size-4 shrink-0 text-[#c98a1b]" aria-hidden />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
