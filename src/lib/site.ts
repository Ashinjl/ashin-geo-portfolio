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
  action: "Let's talk",
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
    blurb: "Setting up a new store, tweaking a theme, or smoothing out checkout so customers actually finish buying.",
    icon: "store",
    tint: "bg-[#7ddfae] text-[#0f3d27]",
  },
  {
    title: "WordPress & WooCommerce",
    blurb: "A site you can edit yourself without calling me every time, with a shop attached if you need one.",
    icon: "globe",
    tint: "bg-[#a9bdff] text-[#14275f]",
  },
  {
    title: "Creative Next.js sites",
    blurb: "Hand-built sites with motion and personality, for brands that don't want to look like a template.",
    icon: "sparkles",
    tint: "bg-[#ffc98f] text-[#5a2e05]",
  },
  {
    title: "Speed and polish",
    blurb: "Faster pages, a better phone experience, and the little details that make a shop feel trustworthy.",
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
    text: "We chat about what you sell, who buys it, and what's getting in the way right now.",
  },
  {
    step: "Plan",
    text: "I send you a short written plan with pages, platform, timeline and price, before any work starts.",
  },
  {
    step: "Design",
    text: "I sketch the layout with phones in mind first, and you tell me what you think before I build.",
  },
  {
    step: "Develop",
    text: "I build it and keep you posted in plain language, so you're never left guessing.",
  },
  {
    step: "Launch",
    text: "We test everything together, go live, and I show you how to look after it.",
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
  /** Login for a password-protected demo site. Only add credentials for dummy or demo sites. */
  demoAccess?: { username: string; password: string };
  repoUrl?: string;
  /** Every field is optional: the case study page only shows what is filled in, so nothing has to be invented. */
  caseStudy?: {
    context?: string;
    challenge?: string;
    approach?: string;
    contribution?: string;
    outcome?: string;
    screenshots?: { src: string; alt: string; width: number; height: number }[];
  };
};

/**
 * TODO(Ashin): add real projects here. Each entry becomes a card on the home page and, when `caseStudy`
 * is filled in, a page at /work/<slug>. Only add verified information.
 */
export const projects: Project[] = [
  {
    slug: "best-price-mini-splits-miami",
    title: "Best Price Mini Splits Miami",
    category: "Business website · Online booking",
    summary:
      "A website for a Miami mini-split sales and HVAC service company, with service pages, product guidance, customer reviews, an FAQ and an online booking page for AC repair appointments.",
    // TODO(Ashin): add the year and confirm the tech.
    tech: ["WordPress", "Elementor"],
    liveUrl: "https://therapeutic-wall.localsite.io",
    demoAccess: { username: "perfume", password: "quickest" }, // dummy demo site
    image: {
      src: "/images/best-price-mini-splits/home.png",
      alt: "Home page of the Best Price Mini Splits Miami website: a blue hero reading Stay Comfortable, followed by customer reviews, services and a booking section",
      width: 1174,
      height: 6334,
    },
    caseStudy: {
      context:
        "Best Price Mini Splits Miami sells mini-split systems and provides HVAC services in Miami, Florida. The site helps visitors understand their options, read customer feedback and book a service.",
      // TODO(Ashin): add challenge, approach, your contribution and the outcome when you are ready to share them.
      screenshots: [
        {
          src: "/images/best-price-mini-splits/booking.png",
          alt: "The Book a Service page: a short explanation of how booking works, followed by an appointment calendar for AC repair",
          width: 1174,
          height: 3173,
        },
      ],
    },
  },
  {
    slug: "akash-marsalin-portfolio",
    title: "Akash Marsalin, research portfolio",
    category: "Personal portfolio",
    summary:
      "A portfolio website for a Ph.D. research scholar in nanomaterials, covering research focus, publications, news, a gallery, conferences and awards, skills and contact details.",
    // TODO(Ashin): add the year and the tech you actually used.
    tech: ["Vercel"],
    image: {
      src: "/images/akash/akash-portfolio-home.png",
      alt: "Home page of Akash Marsalin's research portfolio: a teal hero with his portrait, headline numbers, and research focus cards",
      width: 1304,
      height: 2380,
    },
    liveUrl: "https://akash-portfolio-pi-six.vercel.app/",
    caseStudy: {
      context:
        "Akash Marsalin is a Ph.D. research scholar in nanomaterials. This site presents his research, publications, news, gallery, conferences and awards, and skills in one place, with a way to get in touch.",
      screenshots: [
        {
          src: "/images/akash/akash-portfolio-research.png",
          alt: "The research section of the portfolio, describing his work on magnetic nanomaterials",
          width: 1304,
          height: 5641,
        },
        {
          src: "/images/akash/akash-portfolio_gallery.png",
          alt: "The gallery section of the portfolio, showing photos from his research and events",
          width: 1304,
          height: 3864,
        },
      ],
    },
  },
];

export type Testimonial = { quote: string; name: string; role: string };

/** TODO(Ashin): only real feedback from real people. While empty, the section does not render. */
export const testimonials: Testimonial[] = [];
