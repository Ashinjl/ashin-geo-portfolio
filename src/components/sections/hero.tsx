import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMotion } from "@/components/motion/hero-motion";
import { Magnetic } from "@/components/motion/magnetic";
import { Doodle } from "@/components/doodle";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <HeroMotion
      id="home"
      className="wrap relative grid min-h-dvh items-center gap-6 pb-16 pt-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0"
    >
      <div className="relative z-10">
        <p data-hero="greeting" data-gsap="" className="font-script text-4xl text-foreground/80 sm:text-5xl">
          Hey there! <span aria-hidden>👋</span>
        </p>

        <h1
          data-hero="headline"
          data-gsap=""
          className="mt-2 font-display text-[clamp(2.3rem,4.9vw,4.3rem)] font-extrabold leading-[1.02] text-balance"
        >
          I&apos;m Ashin, a web developer &amp;{" "}
          <span className="relative inline-block text-accent">
            freelancer.
            <Doodle
              shape="underline"
              delay={1.2}
              strokeWidth={4}
              className="absolute -bottom-2 left-0 h-3 w-full text-lamp"
            />
          </span>
        </h1>

        <p data-hero="copy" data-gsap="" className="mt-6 max-w-sm text-lg leading-relaxed text-muted text-pretty">
          I build Shopify stores, WordPress sites and custom Next.js websites for small online shops, with
          a curious mind and an eye for the details.
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
            <Link href="/#services">What I build</Link>
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

        <div data-hero="hint" data-gsap="" className="mt-14 hidden sm:block">
          <Link
            href="/#about"
            className="group flex w-fit items-center gap-3 font-script text-2xl text-muted transition-colors hover:text-foreground"
          >
            <span className="grid size-9 place-items-center rounded-full border border-line bg-paper transition-transform group-hover:translate-y-0.5">
              <ArrowDown className="size-4" aria-hidden />
            </span>
            Scroll down
          </Link>
        </div>
      </div>

      <div className="relative lg:-mr-28">
        <div data-hero="desk" data-gsap="" className="relative aspect-[4/3] overflow-hidden sm:rounded-lg">
          <div
            data-depth="10"
            data-cursor="Hi"
            className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_26%)] sm:[mask-image:linear-gradient(to_right,transparent,black_20%)]"
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
