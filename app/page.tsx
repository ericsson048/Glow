import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Platforms } from "@/components/platforms";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Platforms />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}