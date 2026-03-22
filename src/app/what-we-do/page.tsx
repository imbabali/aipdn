import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { PILLARS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Discover AIPDN's five pillars of impact: dialogue facilitation, training, research, partnerships, and regional convening.",
};

const pillarImages: Record<string, { src: string; position: string }> = {
  "dialogue-facilitation": {
    src: "/images/gallery/Img-229.jpg",
    position: "center 35%",
  },
  training: {
    src: "/images/gallery/Img-185.jpg",
    position: "center 25%",
  },
  research: {
    src: "/images/gallery/Img-134.jpg",
    position: "center 30%",
  },
  partnerships: {
    src: "/images/gallery/AIPDN-PARTNERSHIP-4.jpg",
    position: "center 40%",
  },
  "regional-convening": {
    src: "/images/gallery/Img-250.jpg",
    position: "center 35%",
  },
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        title="What We Do"
        description="We work across five interconnected pillars to strengthen inter-party dialogue and democratic governance across Africa."
        backgroundImage="/images/gallery/Img-250.jpg"
        imagePosition="center 35%"
        breadcrumbs={[{ label: "What We Do" }]}
      />

      <Section>
        <div className="space-y-16 sm:space-y-20">
          {PILLARS.map((pillar, i) => {
            const isEven = i % 2 === 0;
            const image = pillarImages[pillar.slug];
            return (
              <div
                key={pillar.slug}
                className={`flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-12 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                  <Link
                    href={`/what-we-do/${pillar.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-600 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    {image && (
                      <Image
                        src={image.src}
                        alt={pillar.title}
                        fill
                        className="object-cover"
                        style={{ objectPosition: image.position }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
