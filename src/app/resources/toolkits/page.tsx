import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { BookMarked } from "lucide-react";

export const metadata: Metadata = {
  title: "Toolkits & Guides",
  description:
    "Practical toolkits and guides for practitioners facilitating inter-party dialogue across Africa.",
};

const TOOLKITS = [
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
        backgroundImage="/images/gallery/Img-168.jpg"
        imagePosition="center 25%"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Toolkits & Guides" },
        ]}
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLKITS.map((toolkit) => (
            <div
              key={toolkit.id}
              className="flex flex-col rounded-2xl border border-border bg-background p-5 sm:p-8 transition-all hover:border-green-200 hover:shadow-lg"
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
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-medium text-muted-foreground self-start">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
