import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes by Ashin Geo on building online shops and learning as he goes.",
};

export default function WritingPage() {
  return (
    <section className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8">
      <Reveal>
        <div className="grid size-14 place-items-center rounded-2xl bg-[#7ddfae] text-[#0f3d27]">
          <PenLine className="size-7" aria-hidden />
        </div>
        <p className="font-script mt-8 text-3xl text-muted">Pen and paper, soon.</p>
        <h1 className="mt-1 font-display text-5xl font-extrabold leading-[1.02] text-balance sm:text-7xl">
          The first pages are still blank.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
          I like turning thoughts into words. Notes on building shops and learning in public will land here.
          Nothing is published yet.
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft /> Back home
          </Link>
        </Button>
        <Button asChild variant="accent">
          <Link href="/#contact">Say hello</Link>
        </Button>
      </Reveal>
    </section>
  );
}
