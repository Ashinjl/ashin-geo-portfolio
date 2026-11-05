import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { hasRealEmail, nav, site } from "@/lib/site";
import { LinkedinIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-extrabold">
            {site.name}
            <span className="text-lamp">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. {site.role}.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {nav.map((item) => (
            <Link key={item.id} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          {hasRealEmail && (
            <a href={`mailto:${site.email}`} className="text-sm text-muted transition-colors hover:text-foreground">
              {site.email}
            </a>
          )}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ashin on LinkedIn (opens in a new tab)"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <Link href="/#home" className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground">
            Back to top <ArrowUp className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </footer>
  );
}
