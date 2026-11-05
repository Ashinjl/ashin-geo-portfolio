import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AmbientLight } from "@/components/ambient-light";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const body = Plus_Jakarta_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const script = Caveat({ variable: "--font-script", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.role}`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title: `${site.name}: ${site.role}`, description: site.description, type: "website" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcf4f8" },
    { media: "(prefers-color-scheme: dark)", color: "#140e16" },
  ],
};

// Runs before first paint, so there is no flash of the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${body.variable} ${script.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        <AmbientLight />
        <SmoothScroll />
        <SiteHeader />
        <main id="top">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
