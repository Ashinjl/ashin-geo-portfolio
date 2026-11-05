import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Doodle } from "@/components/doodle";
import { AboutStory } from "@/components/motion/about-story";
import { SplitHeading } from "@/components/motion/split-heading";
import { Parallax } from "@/components/parallax";
import { Particles } from "@/components/particles";

const goals = ["Build skills", "Grow my freelance work", "Enjoy the little things"];

export function About() {
  return (
    <section id="about" data-nav="about" className="pb-10 pt-[var(--section-y)]">
      <div className="wrap">
        <AboutStory className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative">
            <Particles count={8} className="inset-0 lg:-inset-8" />
            <Parallax amount={-3}>
              <div className="sway">
              <figure
                data-photo=""
                className="relative mx-auto w-full max-w-xs -rotate-3 rounded-md bg-white p-3 pb-14 shadow-[0_28px_50px_-24px_rgba(90,50,120,0.55)] md:max-w-sm"
              >
                <span aria-hidden className="tape absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rounded-sm bg-lamp/70" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-2">
                  <Image
                    src="/images/ashin-about.png"
                    alt="Ashin looking at the camera in a brown sweater, in front of his desk with shelves, plants and a monitor"
                    fill
                    sizes="(min-width: 768px) 28vw, 80vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="font-script absolute inset-x-0 bottom-3 text-center text-3xl text-[#3a3224]">
                  Hello from my desk <span className="heartbeat text-[#e0527a]">♡</span>
                </figcaption>
              </figure>
              </div>
            </Parallax>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow">About me</p>
            </Reveal>
            <SplitHeading as="h2" className="mt-4 font-display text-4xl font-extrabold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
              Nice to meet you, I&apos;m Ashin.
            </SplitHeading>

            <div data-beats="" className="mt-8 grid gap-6 md:gap-0">
              <p data-beat="" className="max-w-xl text-lg leading-relaxed text-pretty sm:text-xl">
                I make websites for people who sell things online. Shopify stores, WordPress sites, and custom
                Next.js builds when a brand wants something a bit more special.
              </p>
              <p data-beat="" className="max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
                I&apos;m just starting out as a freelancer, and I&apos;ll be upfront about that. It means you
                get{" "}
                <span className="relative inline-block whitespace-nowrap text-foreground">
                  my full attention
                  <Doodle shape="underline" strokeWidth={3} className="absolute -bottom-1.5 left-0 h-2 w-full text-lamp" />
                </span>
                , plain-spoken updates, and work I&apos;m proud to put my name on.
              </p>
              <div data-beat="">
                <p className="max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
                  When I&apos;m not building, you&apos;ll find me fiddling with my desk setup, solving a Rubik&apos;s cube, learning crochet or writing.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-6">
                  <Button asChild variant="outline">
                    <Link href="/writing">
                      Come and read my writing <ArrowRight />
                    </Link>
                  </Button>
                  <div className="w-56 rotate-2 rounded-sm bg-[#f6e8a8] p-5 pt-6 text-[#3a2a1a] shadow-[0_16px_28px_-14px_rgba(120,80,20,0.5)]">
                    <ul className="font-script space-y-1 text-2xl leading-tight">
                      {goals.map((g) => (
                        <li key={g} className="flex items-start gap-2">
                          <Check className="mt-1.5 size-4 shrink-0 text-[#8a6410]" aria-hidden />
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div aria-hidden className="mt-8 hidden gap-2 lg:flex">
              {[0, 1, 2].map((i) => (
                <span key={i} data-dot="" className="size-2 rounded-full bg-foreground" />
              ))}
            </div>
          </div>
        </AboutStory>
      </div>
    </section>
  );
}
