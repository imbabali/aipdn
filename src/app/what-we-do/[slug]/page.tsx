import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  MessageCircle,
  GraduationCap,
  BookOpen,
  Handshake,
  Globe,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { PILLARS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  GraduationCap,
  BookOpen,
  Handshake,
  Globe,
};

// Extended content for each pillar
const pillarContent: Record<string, { detail: string; activities: string[] }> = {
  "dialogue-facilitation": {
    detail:
      "AIPDN designs and supports inter-party dialogue processes at national and regional levels. Our approach is rooted in impartiality, inclusivity, and African ownership — ensuring that dialogue processes reflect local political realities while drawing on international best practice.",
    activities: [
      "National inter-party dialogue platforms",
      "Regional multi-party consultations",
      "Pre-election dialogue frameworks",
      "Post-election consensus-building processes",
      "Cross-border political party exchanges",
    ],
  },
  training: {
    detail:
      "Our training programmes equip political party officials, mediators, and civil society actors with the skills needed for effective dialogue and negotiation. We offer both foundational and advanced modules, tailored to the specific contexts and needs of participants.",
    activities: [
      "Dialogue facilitation skills workshops",
      "Negotiation and mediation training",
      "Political party leadership development",
      "Youth political engagement programmes",
      "Women in political dialogue initiatives",
    ],
  },
  research: {
    detail:
      "AIPDN produces comparative studies, toolkits, and policy briefs that inform and strengthen inter-party dialogue practice. Our research draws on experiences from across the continent to generate actionable knowledge for practitioners and policymakers.",
    activities: [
      "Comparative studies on dialogue practice",
      "Country-specific political assessments",
      "Toolkit development for practitioners",
      "Policy briefs for decision-makers",
      "Documentation of best practices",
    ],
  },
  partnerships: {
    detail:
      "We provide strategic advisory support to the African Union, regional economic communities, national governments, and international organizations on designing and implementing inter-party dialogue frameworks.",
    activities: [
      "African Union advisory mandates",
      "Regional body technical support",
      "Government consultancy services",
      "International organization partnerships",
      "Multi-stakeholder platform facilitation",
    ],
  },
  "regional-convening": {
    detail:
      "AIPDN hosts peer-learning conferences and regional forums that connect political actors across borders. These convenings create spaces for shared learning, cross-pollination of ideas, and the development of regional dialogue standards.",
    activities: [
      "Annual continental dialogue forum",
      "Regional roundtable discussions",
      "Peer-learning exchange visits",
      "Thematic conferences on governance",
      "Political party leaders summit",
    ],
  },
};

export async function generateStaticParams() {
  return PILLARS.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pillar = PILLARS.find((p) => p.slug === slug);
  if (!pillar) return {};
  return {
    title: pillar.title,
    description: pillar.description,
  };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillar = PILLARS.find((p) => p.slug === slug);
  if (!pillar) notFound();

  const content = pillarContent[slug];
  const Icon = iconMap[pillar.icon];

  return (
    <>
      <PageHero
        title={pillar.title}
        description={pillar.description}
        breadcrumbs={[
          { label: "What We Do", href: "/what-we-do" },
          { label: pillar.title },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
            {Icon && <Icon className="h-8 w-8" />}
          </div>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            {content?.detail}
          </p>

          {content?.activities && (
            <div className="mt-12">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Key Activities
              </h2>
              <ul className="mt-6 space-y-4">
                {content.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 text-xs font-bold">
                      &bull;
                    </div>
                    <span className="text-foreground">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
