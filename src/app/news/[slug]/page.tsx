import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";

const ARTICLES: Record<
  string,
  {
    title: string;
    excerpt: string;
    content: string[];
    category: string;
    author: string;
    published_at: string;
    image: string;
    imagePosition: string;
  }
> = {
  "mou-ips-aipdn": {
    title: "MOU Between IPS and AIPDN",
    excerpt:
      "A landmark memorandum of understanding was signed to advance inter-party dialogue frameworks across the continent.",
    content: [
      "A landmark memorandum of understanding was signed to advance inter-party dialogue frameworks across the continent, marking a new era of collaboration between the two institutions.",
      "The MOU establishes a formal framework for cooperation between the Institute for Peace and Security and the African Inter-Party Dialogue Network, covering joint research initiatives, capacity-building programmes, and shared advocacy on democratic governance.",
      "This partnership reflects the growing recognition that inter-party dialogue requires institutional backing and cross-organizational collaboration to achieve lasting impact across the African continent.",
    ],
    category: "News",
    author: "AIPDN Editor",
    published_at: "2026-02-18",
    image: "/images/news/mou-ips.jpg",
    imagePosition: "center 35%",
  },
  "rethinking-inter-party-dialogue": {
    title:
      "Rethinking Inter-Party Dialogue in Africa: Key Insights from the AIPDN Regional Roundtable",
    excerpt:
      "The AIPDN convened a major regional roundtable in Nairobi, assembling over 50 delegates from political organizations, civil society groups, and academic institutions.",
    content: [
      "The African Inter-Party Dialogue Network (AIPDN) organized a substantial regional gathering in Nairobi, assembling over 50 delegates from political organizations, civil society groups, academic institutions, and policy bodies across Eastern, Western, and Southern Africa. The convening centred on the theme \"Rethinking Inter-Party Dialogue and Consensus Building,\" examining pathways for political parties to advance democratic governance amid widespread citizen discontent with exclusionary political processes.",
      "Presenters emphasized that political organizations form democracy's foundation, yet many across the continent suffer from weak institutional structures, inadequate funding, and citizen disconnection, particularly among youth populations. The assembly investigated how organized dialogue, institutional improvements, and regional cooperation can restore confidence and reinforce political structures.",
      "Initial remarks and keynote presentations highlighted the imperative for political organizations to transcend winner-takes-all competitive models. Leaders identified escalating youth frustration as evidence that organizations require expanded, more responsive membership opportunities.",
      "Contributors observed that despite electoral prominence, organizations themselves encounter limited transformation, financial irregularities, and insufficient internal participation frameworks. Young individuals face particular exclusion because of economic constraints, prohibitive participation expenses, and scarce meaningful involvement pathways.",
      "Presentations examined programmes in Ghana (IPAC), Uganda (IPOD), and Kenya (PPLC) as examples for formalizing deliberation. These structures facilitate agreement-building, increase responsibility, and manage transformation processes.",
      "Case examples from South Sudan, Somaliland, and Ethiopia illustrated obstacles in cultivating deliberation where administrative systems are fragmented and competitive factions predominate. Participants advocated for incorporating customary authority frameworks, confirming substantial representation of female members and disabled individuals, and emphasizing collective national objectives.",
      "The gathering produced an extensive fifteen-point renewal programme encompassing: establishing enduring dialogue mechanisms with explicit statutory authorization and sufficient financial backing; transforming political organizations and promoting comprehensive, multigenerational engagement; narrowing confidence deficiencies via continuous deliberation connecting organizations, populations, and electoral bodies; resisting legal manipulation and preserving electoral reliability via judicial proceedings and joint political mobilization; apportioning funds to underrepresented populations, guaranteeing their comprehensive governmental involvement; and bolstering media partnerships, civic initiatives, post-election reconciliation, and expanded population involvement throughout the region.",
    ],
    category: "News",
    author: "AIPDN Editor",
    published_at: "2025-12-19",
    image: "/images/news/roundtable-2025.jpg",
    imagePosition: "center 70%",
  },
  "ppi-africa-partnership": {
    title:
      "PPI-Africa and AIPDN Strengthen Strategic Partnership With Institutional Agreement",
    excerpt:
      "Prospect Peace Institute-Africa and AIPDN formalize their collaborative framework for advancing democratic dialogue across the continent.",
    content: [
      "On February 5th, 2025, PPI-Africa hosted Kenneth Albert Mpyisi, Regional Director of the African Institute for Peace and Development Network (AIPDN), alongside PPI-Africa's Executive Chairman Lt. Gen. (Rtd.) Adan K. Mulata.",
      "The meeting resulted in signing a Memorandum of Understanding focused on advancing peace, security, and development across the continent. Collaboration areas include engagement with the African Union, joint training initiatives, electoral capacity-building, and magazine contributions.",
      "Both organizations jointly implemented the Diplomacy, Negotiation, and Mediation Course to strengthen emerging and established leaders' conflict-resolution capabilities. They also engaged with the Parliament of South Sudan to support institutional development and legislative effectiveness.",
      "In October 2025, the organizations formalized their relationship with an Institutional Agreement officially designating PPI-Africa as host of the AIPDN Secretariat, expected to enhance coordination, expand programming, and deepen the impact of continental peace efforts.",
    ],
    category: "News",
    author: "AIPDN Editor",
    published_at: "2025-11-21",
    image: "/images/news/ppi-partnership.png",
    imagePosition: "center",
  },
};

const slugs = Object.keys(ARTICLES);

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  return (
    <>
      <PageHero
        title={article.title}
        backgroundImage={article.image}
        imagePosition={article.imagePosition}
        breadcrumbs={[
          { label: "News & Insights", href: "/news" },
          { label: article.title },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {formatDate(article.published_at)}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" aria-hidden="true" />
              {article.author}
            </span>
          </div>

          {/* Featured image */}
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              style={{ objectPosition: article.imagePosition }}
              priority
            />
          </div>

          {/* Content */}
          <div className="mt-10 space-y-6">
            {article.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News & Insights
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
