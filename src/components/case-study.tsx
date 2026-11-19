import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/site";

const blocks = [
  ["context", "Context"],
  ["challenge", "The challenge"],
  ["approach", "My approach"],
  ["contribution", "What I did"],
  ["outcome", "Outcome"],
] as const;

/** Reusable case study layout. Renders only the sections that have real content. */
export function CaseStudy({ project }: { project: Project }) {
  const cs = project.caseStudy;
  if (!cs) return null;
  return (
    <article className="wrap pb-24 pt-32">
      <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground">
        <ArrowLeft className="size-4" aria-hidden /> All work
      </Link>
      <p className="eyebrow mt-8">
        {project.category}
        {project.year ? ` · ${project.year}` : ""}
      </p>
      <h1 className="mt-2 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] text-balance sm:text-6xl">{project.title}</h1>
      <p className="mt-5 max-w-2xl text-xl text-muted text-pretty">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
            {t}
          </span>
        ))}
      </div>
      {project.liveUrl && (
        <Button asChild className="mt-8" variant="primary" size="lg">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Visit the site <ArrowUpRight />
          </a>
        </Button>
      )}
      {project.demoAccess && (
        <div className="mt-4 max-w-md rounded-md border border-line bg-paper p-4 text-sm">
          <p className="font-semibold">Demo site login</p>
          <p className="mt-1 text-muted">This is a demo site. If your browser asks for a login, use:</p>
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            <dt className="text-muted">Username</dt>
            <dd className="font-mono">{project.demoAccess.username}</dd>
            <dt className="text-muted">Password</dt>
            <dd className="font-mono">{project.demoAccess.password}</dd>
          </dl>
        </div>
      )}

      <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-md bg-surface-2">
        <Image src={project.image.src} alt={project.image.alt} fill priority sizes="(min-width: 1152px) 1100px, 100vw" className="object-cover object-top" />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[14rem_1fr]">
        {blocks.filter(([key]) => cs[key]).map(([key, title]) => (
          <section key={key} className="contents">
            <h2 className="eyebrow pt-2">{title}</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-pretty">{cs[key]}</p>
          </section>
        ))}
      </div>

      {cs.screenshots && cs.screenshots.length > 0 && (
        <div className="mt-16">
          <h2 className="eyebrow">More screens</h2>
          <p className="mt-2 text-sm text-muted">Scroll inside each frame to see the full page.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {cs.screenshots.map((s) => (
              <div
                key={s.src}
                role="region"
                aria-label={s.alt}
                tabIndex={0}
                className="max-h-[36rem] overflow-y-auto rounded-md border border-line bg-surface-2"
              >
                <Image src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(min-width: 768px) 45vw, 100vw" className="h-auto w-full" />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
