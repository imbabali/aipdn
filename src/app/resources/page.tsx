import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Camera, BookMarked, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Access AIPDN publications, media gallery, toolkits, and guides on inter-party dialogue in Africa.",
};

const resourceSections = [
  {
    icon: FileText,
    title: "Publications",
    description:
      "Research papers, policy briefs, and comparative studies on inter-party dialogue practice across Africa.",
    href: "/resources/publications",
    count: "10+ documents",
  },
  {
    icon: Camera,
    title: "Media Gallery",
    description:
      "Photos and media from our events, dialogues, training sessions, and activities across the continent.",
    href: "/resources/gallery",
    count: "80+ photos",
  },
  {
    icon: BookMarked,
    title: "Toolkits & Guides",
    description:
      "Practical resources for practitioners facilitating inter-party dialogue and democratic engagement.",
    href: "/resources/toolkits",
    count: "5+ guides",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        description="Access our library of publications, media, and practical tools for advancing inter-party dialogue in Africa."
        breadcrumbs={[{ label: "Resources" }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {resourceSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:border-green-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                <section.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">
                {section.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {section.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {section.count}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 group-hover:text-green-600">
                  Browse
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
