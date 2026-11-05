/**
 * Editable facts. Anything marked TODO still needs the real value.
 * Nothing here is invented: empty arrays render honest empty states or nothing at all.
 */
export const site = {
  name: "Ashin Geo",
  role: "Freelance web developer",
  url: "https://ashingeo.dev", // TODO: the real domain
  // TODO: the address enquiries should go to. While it ends in @example.com it is treated as unset.
  email: "hello@example.com",
  description:
    "Ashin Geo builds Shopify stores, WordPress sites and custom Next.js websites for small online shops.",
  linkedin: "https://in.linkedin.com/in/ashin-geo",
  action: "Start a project",
  /**
   * Optional, shown as a small status pill in the hero when set. Leave null unless it is true today.
   * e.g. "Taking on new projects"
   */
  availability: null as string | null,
} as const;

export const hasRealEmail = !site.email.endsWith("@example.com");

/** Primary navigation. `id` is matched against `data-nav` on page sections by the scroll-spy. */
export const nav = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "Services", href: "/#services", id: "services" },
  { label: "Writing", href: "/writing", id: "writing" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const;

/** The strip under the hero. */
export const marqueeItems = ["Shopify", "WordPress", "Next.js", "Digital experiences"] as const;

export const services = [
  {
    title: "Shopify stores",
    blurb: "Setup, theme changes and a checkout that is easy to finish.",
    icon: "store",
    tint: "bg-[#7ddfae] text-[#0f3d27]",
  },
  {
    title: "WordPress & WooCommerce",
    blurb: "Sites you can edit yourself, with a shop attached if you need one.",
    icon: "globe",
    tint: "bg-[#a9bdff] text-[#14275f]",
  },
  {
    title: "Creative Next.js sites",
    blurb: "Built by hand, with motion and personality, for brands that skip templates.",
    icon: "sparkles",
    tint: "bg-[#ffc98f] text-[#5a2e05]",
  },
  {
    title: "Speed and polish",
    blurb: "Mobile-first fixes and the small details that make a shop feel trustworthy.",
    icon: "gauge",
    tint: "bg-[#ffb4ae] text-[#5e1510]",
  },
] as const;

export const toolkit = [
  { group: "Platforms", items: ["Shopify", "WordPress", "WooCommerce"] },
  { group: "Build", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { group: "Motion", items: ["GSAP", "Motion"] },
] as const;

/** Off-the-clock interests. Kept apart from the toolkit so the professional list stays honest. */
export const offTheClock = ["Rubik's Cube", "Crochet", "Writing", "Desk setups"] as const;

/** Describes how Ashin plans to work with a client. Edit if the real process differs. */
export const process = [
  {
    step: "Discover",
    text: "We talk about what you sell, who buys it and what is getting in the way today.",
  },
  {
    step: "Plan",
    text: "You get a short written plan: pages, platform, timeline and price, before any work starts.",
  },
  {
    step: "Design",
    text: "I sketch the layout and the details that matter on mobile, and you react before I build.",
  },
  {
    step: "Develop",
    text: "I build it in the open, with plain-spoken updates so you always know where things stand.",
  },
  {
    step: "Launch",
    text: "We test it together, go live, and I hand over what you need to look after it.",
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  year?: string;
  tech: string[];
  image: { src: string; alt: string; width: number; height: number };
  liveUrl?: string;
  repoUrl?: string;
  caseStudy?: {
    context: string;
    challenge: string;
    approach: string;
    contribution: string;
    outcome: string;
    screenshots?: { src: string; alt: string; width: number; height: number }[];
  };
};

/**
 * TODO(Ashin): add real projects here. Each entry becomes a card on the home page and, when `caseStudy`
 * is filled in, a page at /work/<slug>. Only add verified information.
 */
export const projects: Project[] = [];

export type Testimonial = { quote: string; name: string; role: string };

/** TODO(Ashin): only real feedback from real people. While empty, the section does not render. */
export const testimonials: Testimonial[] = [];
