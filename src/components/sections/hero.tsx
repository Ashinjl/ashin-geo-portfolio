import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Parallax } from "@/components/parallax";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-dvh max-w-6xl items-center gap-6 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0"
    >
      <div className="relative z-10">
        <Reveal>
          <p className="font-script text-4xl text-foreground/80 sm:text-5xl">
            Hey there! <span aria-hidden>👋</span>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-2 font-display text-[clamp(2.5rem,6.2vw,4.9rem)] font-extrabold leading-[1.02] text-balance">
            I&apos;m Ashin,
            <br />a web developer &amp; <span className="text-accent">freelancer.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted text-pretty">
            I build Shopify stores, WordPress sites and custom Next.js websites for small online shops, with
            a curious mind and an eye for the details.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" variant="primary">
            <Link href="/#contact">
              {site.action} <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#skills">See what I build</Link>
          </Button>
        </Reveal>

        <Reveal delay={0.32} className="mt-14 hidden sm:block">
          <Link
            href="/#about"
            className="group flex w-fit items-center gap-3 font-script text-2xl text-muted transition-colors hover:text-foreground"
          >
            <span className="grid size-9 place-items-center rounded-full border border-line bg-surface transition-transform group-hover:translate-y-0.5">
              <ArrowDown className="size-4" />
            </span>
            Scroll down
          </Link>
        </Reveal>
      </div>

      <Reveal delay={0.1} y={30} className="relative lg:-mr-28">
        <Parallax amount={-5}>
          <div className="relative">
            {/* The wall fades into the page, so the desk looks like part of it; Ashin stands in front */}
            <div className="relative aspect-[4/3] overflow-hidden sm:rounded-[2.5rem]">
              <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_26%)] sm:[mask-image:linear-gradient(to_right,transparent,black_20%)]">
                <Image
                  src="/images/desk-scene.jpg"
                  alt="A cosy desk lit by a hanging lamp, with a monitor showing a mountain sunset, a pastel keyboard, plants and a small crochet octopus"
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="scene-img origin-right scale-[1.12] object-cover object-right"
                />
                <div className="scene-lamp" aria-hidden />
              </div>
              {/* <Image
                src="/images/ashin-hero.webp"
                alt="Ashin Geo, smiling slightly, in a brown sweater"
                width={900}
                height={1175}
                priority
                sizes="(min-width: 1024px) 26vw, 44vw"
                className="portrait-img absolute bottom-0 left-[-9%] h-[76%] w-auto"
                style={{
                  // an oval fade, so the shoulders fall away softly instead of ending in a hard edge
                  maskImage: "radial-gradient(ellipse 52% 64% at 50% 38%, black 56%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 52% 64% at 50% 38%, black 56%, transparent 100%)",
                }}
              /> */}
            </div>
            <span className="font-script pointer-events-none absolute left-[4%] top-[3%] hidden -rotate-6 text-2xl text-foreground/70 sm:block">
              Build. Ship. Polish.
            </span>
          </div>
        </Parallax>
      </Reveal>
    </section>
  );
}
