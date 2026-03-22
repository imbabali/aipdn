import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Shield, Users, FileText, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Learn about AIPDN's governance structure, steering committee, and organizational framework.",
};

const governanceAreas = [
  {
    icon: Users,
    title: "Steering Committee",
    description:
      "The AIPDN Steering Committee provides strategic direction and oversight, comprising representatives from political parties, partner organizations, and regional bodies across the continent.",
  },
  {
    icon: Target,
    title: "Strategic Framework",
    description:
      "Our strategic framework guides all programme activities, ensuring alignment with our mission to strengthen inter-party dialogue and democratic governance in Africa.",
  },
  {
    icon: FileText,
    title: "Charter & Principles",
    description:
      "The AIPDN Charter establishes the principles of impartiality, inclusivity, African ownership, and consensus-building that underpin all network activities.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description:
      "We maintain rigorous standards of transparency and accountability to our partners, funders, and the political actors we serve across the continent.",
  },
];

export default function GovernancePage() {
  return (
    <>
      <PageHero
        title="Governance"
        description="The structures and principles that guide our work across the continent."
        backgroundImage="/images/gallery/Img-116.jpg"
        imagePosition="center 30%"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Governance" },
        ]}
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          {governanceAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-border bg-background p-5 sm:p-8 transition-all hover:border-green-200 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
