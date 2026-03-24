import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { FileText, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Access AIPDN research papers, policy briefs, toolkits, and comparative studies on inter-party dialogue in Africa.",
};

// Current publications (static data)
const PUBLICATIONS = [
  {
    id: "1",
    title: "Rethinking Inter-Party Dialogue and Consensus Building",
    category: "Research Paper",
    author: "AIPDN Research Team",
    published_date: "2025-10-15",
    description:
      "A comprehensive analysis of inter-party dialogue frameworks across the African continent, with recommendations for strengthening consensus-building mechanisms.",
  },
  {
    id: "2",
    title: "Toolkit for National Dialogue Facilitators",
    category: "Toolkit",
    author: "AIPDN",
    published_date: "2025-06-20",
    description:
      "A practical guide for facilitators designing and implementing national inter-party dialogue processes.",
  },
  {
    id: "3",
    title: "Women in Inter-Party Dialogue: Barriers and Opportunities",
    category: "Policy Brief",
    author: "AIPDN Research Team",
    published_date: "2025-03-08",
    description:
      "Examining the role of women in inter-party dialogue processes and recommendations for more inclusive practices.",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        title="Publications"
        description="Research papers, policy briefs, toolkits, and comparative studies advancing the practice of inter-party dialogue."
        backgroundImage="/images/gallery/Img-126.jpg"
        imagePosition="center 30%"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Publications" },
        ]}
      />

      <Section>
        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-5 sm:p-8 transition-all hover:border-green-200 hover:shadow-lg md:flex-row"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <FileText className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                    {pub.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {formatDate(pub.published_date)}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-xl font-bold text-foreground">
                  {pub.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  By {pub.author}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pub.description}
                </p>
              </div>
              <div className="flex shrink-0 items-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-medium text-muted-foreground">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
