import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { BookMarked, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Toolkits & Guides",
  description:
    "Practical toolkits and guides for practitioners facilitating inter-party dialogue across Africa.",
};

const PLACEHOLDER_TOOLKITS = [
  {
    id: "1",
    title: "Inter-Party Dialogue Facilitator's Handbook",
    description:
      "A step-by-step guide for designing and facilitating effective inter-party dialogue processes.",
  },
  {
    id: "2",
    title: "Inclusive Dialogue: Gender & Youth Mainstreaming Guide",
    description:
      "Practical strategies for ensuring dialogue processes are inclusive of women and youth perspectives.",
  },
  {
    id: "3",
    title: "Pre-Election Dialogue Framework Template",
    description:
      "A ready-to-use framework for organizing pre-election inter-party dialogue at the national level.",
  },
];

export default function ToolkitsPage() {
  return (
    <>
      <PageHero
        title="Toolkits & Guides"
        description="Practical resources for practitioners working to advance inter-party dialogue and democratic governance."
        backgroundImage="/images/gallery/Img-116.jpg"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Toolkits & Guides" },
        ]}
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_TOOLKITS.map((toolkit) => (
            <div
              key={toolkit.id}
              className="flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:border-green-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                <BookMarked className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {toolkit.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {toolkit.description}
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-5 py-2.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-100 self-start">
                <Download className="h-4 w-4" />
                Download Guide
              </button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
