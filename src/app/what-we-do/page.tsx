import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  GraduationCap,
  BookOpen,
  Handshake,
  Globe,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { PILLARS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Discover AIPDN's five pillars of impact: dialogue facilitation, training, research, partnerships, and regional convening.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  GraduationCap,
  BookOpen,
  Handshake,
  Globe,
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        title="What We Do"
        description="We work across five interconnected pillars to strengthen inter-party dialogue and democratic governance across Africa."
        breadcrumbs={[{ label: "What We Do" }]}
      />

      <Section>
        <div className="space-y-16">
          {PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            const isEven = i % 2 === 0;
            return (
              <div
                key={pillar.slug}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                    {Icon && <Icon className="h-7 w-7" />}
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
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
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-100 to-teal-50 flex items-center justify-center">
                    {Icon && <Icon className="h-20 w-20 text-green-200" />}
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
