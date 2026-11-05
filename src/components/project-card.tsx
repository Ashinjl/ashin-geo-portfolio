import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site";

/** One real project: image, title, category, summary, tech and links. Hover labels the thumbnail. */
export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const href = project.caseStudy ? `/work/${project.slug}` : project.liveUrl;
  const external = !project.caseStudy;
  const label = project.caseStudy ? "Case study" : "Visit";

  const media = (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-surface-2" data-cursor={href ? label : undefined}>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        priority={priority}
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="size-full object-cover transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-[1.04]"
      />
    </div>
  );

  return (
    <article className="group">
      {href ? (
        <Link
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          aria-label={`${project.title}: ${label.toLowerCase()}${external ? " (opens in a new tab)" : ""}`}
          className="block"
        >
          {media}
        </Link>
      ) : (
        media
      )}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">
            {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold">{project.title}</h3>
        </div>
        {href && <ArrowUpRight className="mt-1 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />}
      </div>
      <p className="mt-2 max-w-md text-muted text-pretty">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
            {t}
          </li>
        ))}
      </ul>
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium underline underline-offset-4">
          Source code
        </a>
      )}
    </article>
  );
}
