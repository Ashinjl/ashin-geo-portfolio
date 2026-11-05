import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Services } from "@/components/sections/services";
import { Toolkit } from "@/components/sections/toolkit";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Services />
      <Toolkit />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
