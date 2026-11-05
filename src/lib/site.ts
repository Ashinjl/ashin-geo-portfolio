/**
 * Editable facts. Anything marked TODO still needs the real value.
 */
export const site = {
  name: "Ashin Geo",
  role: "Freelance web developer",
  url: "https://ashingeo.dev", // TODO: the real domain
  // TODO: the address enquiries should go to
  email: "hello@example.com",
  description:
    "Ashin Geo builds Shopify stores, WordPress sites and custom Next.js websites for small online shops.",
  linkedin: "https://in.linkedin.com/in/ashin-geo",
  action: "Start a project",
} as const;

export const nav = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Writing", href: "/writing", id: "writing" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const;

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

export const skills = [
  "Shopify",
  "WordPress",
  "WooCommerce",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Motion",
  "Rubik's Cube",
  "Crochet",
] as const;
