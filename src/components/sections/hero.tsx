import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMotion } from "@/components/motion/hero-motion";
import { Magnetic } from "@/components/motion/magnetic";
import { Doodle } from "@/components/doodle";
import { Particles } from "@/components/particles";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <HeroMotion
      id="home"
      className="wrap relative grid min-h-dvh items-center gap-6 pb-16 pt-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0"
    >
      <Particles count={18} />
      <div className="relative z-10">
        <p data-hero="greeting" data-gsap="" className="font-script text-4xl text-foreground/80 sm:text-5xl">
          Hey there! <span aria-hidden className="wave">👋</span>
        </p>

        <h1
          data-hero="headline"
          data-gsap=""
          className="-ml-[0.04em] mt-3 font-display text-[clamp(2.3rem,4.9vw,4.3rem)] font-extrabold leading-[1.1] text-balance"
        >
          Hi, I&apos;m Ashin. I build digital{" "}
          <span className="text-accent">
            experiences{" "}
            <span className="relative inline-block whitespace-nowrap">
            people love.
            <Doodle
              shape="underline"
              delay={1.2}
              strokeWidth={4}
              className="absolute -bottom-2 left-0 h-3 w-full text-lamp"
            />
            </span>
          </span>
        </h1>

        <p data-hero="copy" data-gsap="" className="mt-6 max-w-sm text-lg leading-relaxed text-muted text-pretty">
          Whether it&apos;s a Shopify store, a WordPress site or something custom in Next.js, I&apos;ll help you get
          your shop online and looking its best. You&apos;ll always be talking to me directly.
        </p>

        <div data-hero="cta" data-gsap="" className="mt-9 flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button asChild size="lg" variant="primary">
              <Link href="/#contact">
                {site.action} <ArrowRight />
              </Link>
            </Button>
          </Magnetic>
          <Button asChild size="lg" variant="outline">
            <Link href="/#services">See what I can build</Link>
          </Button>
        </div>

        {site.availability && (
          <p
            data-hero="pill"
            data-gsap=""
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-muted"
          >
            <span aria-hidden className="size-2 rounded-full bg-accent" />
            {site.availability}
          </p>
        )}

      </div>

        <div data-hero="hint" data-gsap="" className="absolute bottom-8 left-5 z-10 hidden sm:left-8 sm:block">
          <Link
            href="/#about"
            className="group flex w-fit items-center gap-3 font-script text-2xl text-muted transition-colors hover:text-foreground"
          >
            <span className="ping-ring relative grid size-9 place-items-center rounded-full border border-line bg-paper">
              <ArrowDown className="bob size-4" aria-hidden />
            </span>
            Scroll down, there&apos;s more
          </Link>
        </div>

      <div className="relative lg:-mr-28">
        <div aria-hidden className="absolute inset-x-0 -inset-y-6 -z-10 rounded-full lg:-inset-x-6 bg-[radial-gradient(closest-side,rgba(255,196,140,0.55),transparent)] blur-2xl" />
        <div data-hero="desk" data-gsap="" className="relative aspect-[4/3] overflow-hidden">
          <div
            data-depth="10"
            data-cursor="Hi"
            className="blend-mask absolute inset-0"
          >
            <Image
              data-hero-img=""
              src="/images/desk-scene.jpg"
              alt="A cosy desk lit by a hanging lamp, with a monitor showing a mountain sunset, a pastel keyboard, plants and a small crochet octopus"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="scene-img origin-right scale-[1.12] object-cover object-right"
            />
            <div className="scene-lamp" aria-hidden />
          </div>
        </div>

        <div data-hero="portrait" data-gsap="" className="pointer-events-none absolute bottom-0 left-[-4%] h-[78%] w-[40%] sm:left-[-4%]">
          <div data-depth="22" className="relative h-full w-full">

          </div>
        </div>

        <div data-hero="note" data-gsap="" className="pointer-events-none absolute left-[4%] top-[3%] hidden sm:block">
          <div data-depth="30" className="font-script -rotate-6 text-2xl text-foreground/75">
            Build. Ship. Polish.
          </div>
        </div>
      </div>
    </HeroMotion>
  );
}
