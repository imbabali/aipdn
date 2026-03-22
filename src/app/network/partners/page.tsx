import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section, SectionHeader } from "@/components/shared/section";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Explore AIPDN's network of partners across civil society, international organizations, and academic institutions.",
};

const partnerCategories = [
  {
    title: "International & Regional Democracy Organizations",
    partners: [
      { name: "International IDEA", website: "https://www.idea.int" },
      { name: "Netherlands Institute for Multiparty Democracy (NIMD)", website: "https://nimd.org" },
      { name: "National Democratic Institute (NDI)", website: "https://www.ndi.org" },
      { name: "Westminster Foundation for Democracy (WFD)", website: "https://www.wfd.org" },
    ],
  },
  {
    title: "Civil Society & Governance",
    partners: [
      { name: "African Union", website: "https://au.int" },
      { name: "UNDP", website: "https://www.undp.org" },
      { name: "European Centre for Electoral Support (ECES)", website: "https://www.eces.eu" },
      { name: "Prospect Peace Institute-Africa", website: null },
    ],
  },
  {
    title: "Academic Institutions",
    partners: [
      { name: "Institute for Peace and Security Studies", website: null },
      { name: "University of Nairobi", website: null },
    ],
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Our Partners"
        description="We collaborate with leading international and regional organizations committed to advancing democracy in Africa."
        breadcrumbs={[
          { label: "Our Network", href: "/network" },
          { label: "Partners" },
        ]}
      />

      {partnerCategories.map((category) => (
        <Section key={category.title}>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            {category.title}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {category.partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center rounded-2xl border border-border bg-background p-6 text-center transition-all hover:border-green-200 hover:shadow-lg"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700 font-heading font-bold text-2xl">
                  {partner.name.charAt(0)}
                </div>
                <h3 className="mt-4 font-heading text-sm font-bold text-foreground">
                  {partner.name}
                </h3>
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:text-green-600 transition-colors"
                  >
                    Visit website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
