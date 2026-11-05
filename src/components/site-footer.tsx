import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { site } from "@/lib/site";
import { LinkedinIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ashin on LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <Link href="/writing" className="text-sm text-muted transition-colors hover:text-foreground">
            Writing
          </Link>
        </div>
        <Link href="/#home" className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground">
          Back to top <ArrowUp className="size-4" />
        </Link>
      </div>
    </footer>
  );
}
