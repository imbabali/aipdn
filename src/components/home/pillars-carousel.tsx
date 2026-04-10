"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { PILLARS } from "@/lib/constants";

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
    position: "center 25%",
  },
  "regional-convening": {
    src: "/images/gallery/Img-250.jpg",
    position: "center 35%",
  },
};

// Duplicate items for seamless infinite loop
const items = [...PILLARS, ...PILLARS];

export function PillarsCarousel() {
  return (
    <Section>
      <SectionHeader
        label="What We Do"
        title="Our Five Pillars of Impact"
        description="We work across five interconnected areas to strengthen inter-party dialogue and democratic governance across the African continent."
      />

      <div className="mt-12 sm:mt-16 overflow-hidden">
        <div className="flex animate-scroll gap-5 sm:gap-6 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {items.map((pillar, i) => {
            const image = pillarImages[pillar.slug];
            const isDuplicate = i >= PILLARS.length;
            return (
              <Link
                key={`${pillar.slug}-${i}`}
                href={`/what-we-do/${pillar.slug}`}
                aria-hidden={isDuplicate || undefined}
                tabIndex={isDuplicate ? -1 : undefined}
                className="group flex w-[280px] sm:w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-green-200 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {image && (
                    <Image
                      src={image.src}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: image.position }}
                      sizes="320px"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-green-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {pillar.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
