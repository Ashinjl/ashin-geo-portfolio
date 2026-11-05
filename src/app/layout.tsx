import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AmbientLight } from "@/components/ambient-light";
import { Cursor } from "@/components/motion/cursor";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const body = Plus_Jakarta_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const script = Caveat({ variable: "--font-script", subsets: ["latin"], display: "swap" });

const title = `${site.name}: ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: site.description,
    type: "website",
    siteName: site.name,
    url: "/",
    images: [{ url: "/images/desk-scene.jpg", width: 1280, height: 960, alt: "A cosy desk with a monitor, plants and a hanging lamp" }],
  },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["/images/desk-scene.jpg"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcf4f8" },
    { media: "(prefers-color-scheme: dark)", color: "#140e16" },
  ],
};

/**
 * Runs before first paint: sets the theme without a flash, and marks the page as scripted ("js") so the
 * hidden-until-revealed styles only apply when JavaScript can reveal them. If the app has not hydrated
 * after 5s the failsafe class shows everything.
 */
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t}catch(e){}d.classList.add("js");setTimeout(function(){if(!("hydrated" in d.dataset))d.classList.add("reveal-failsafe")},5000)})()`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description: site.description,
  url: site.url,
  sameAs: [site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${body.variable} ${script.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[80] -translate-y-24 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-background focus:translate-y-0"
        >
          Skip to content
        </a>
        <AmbientLight />
        <SmoothScroll />
        <Cursor />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
