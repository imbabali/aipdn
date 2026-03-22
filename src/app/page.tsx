import { Hero } from "@/components/home/hero";
import { Pillars } from "@/components/home/pillars";
import { WhyDialogue } from "@/components/home/why-dialogue";
import { LatestNews } from "@/components/home/latest-news";
import { PartnersStrip } from "@/components/home/partners-strip";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <WhyDialogue />
      <LatestNews />
      <PartnersStrip />
      <CTA />
    </>
  );
}
