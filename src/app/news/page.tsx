import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Latest news, articles, and insights from the African Inter-Party Dialogue Network.",
};

const PLACEHOLDER_ARTICLES = [
  {
    id: "1",
    title: "MOU Between IPS and AIPDN Strengthens Regional Cooperation",
    excerpt:
      "A landmark memorandum of understanding was signed to advance inter-party dialogue frameworks across the continent, marking a new era of collaboration.",
    category: "Partnership",
    author: "AIPDN Communications",
    published_at: "2026-02-15",
    slug: "mou-ips-aipdn",
  },
  {
    id: "2",
    title: "Rethinking Inter-Party Dialogue: West Africa Regional Roundtable",
    excerpt:
      "Political leaders from across West Africa convened to discuss new approaches to cross-party engagement and consensus building.",
    category: "Events",
    author: "AIPDN Communications",
    published_at: "2025-12-10",
    slug: "west-africa-roundtable",
  },
  {
    id: "3",
    title: "PPI-Africa Strategic Partnership Agreement Signed",
    excerpt:
      "Prospect Peace Institute-Africa and AIPDN formalize their collaborative framework for advancing democratic dialogue across the continent.",
    category: "News",
    author: "AIPDN Communications",
    published_at: "2025-11-20",
    slug: "ppi-africa-partnership",
  },
  {
    id: "4",
    title: "Youth Engagement in Political Dialogue: Lessons from East Africa",
    excerpt:
      "A new report examines successful models for integrating young political leaders into inter-party dialogue processes.",
    category: "Research",
    author: "AIPDN Research Team",
    published_at: "2025-09-15",
    slug: "youth-engagement-east-africa",
  },
  {
    id: "5",
    title: "AIPDN Launches Women in Dialogue Initiative",
    excerpt:
      "A dedicated programme to increase the participation and leadership of women in inter-party dialogue processes across Africa.",
    category: "Programmes",
    author: "AIPDN Communications",
    published_at: "2025-07-20",
    slug: "women-in-dialogue-initiative",
  },
  {
    id: "6",
    title: "Continental Dialogue Forum 2025: Key Takeaways",
    excerpt:
      "Highlights and key outcomes from the annual continental forum that brought together political leaders from 30+ African countries.",
    category: "Events",
    author: "AIPDN Communications",
    published_at: "2025-05-30",
    slug: "continental-forum-2025",
  },
];

export default function NewsPage() {
  const [featured, ...rest] = PLACEHOLDER_ARTICLES;

  return (
    <>
      <PageHero
        title="News & Insights"
        description="Stay informed on our latest initiatives, research, partnerships, and events."
        breadcrumbs={[{ label: "News & Insights" }]}
      />

      <Section>
        {/* Featured article */}
        <Link
          href={`/news/${featured.slug}`}
          className="group mb-16 flex flex-col gap-8 rounded-2xl border border-border bg-background p-8 transition-all hover:border-green-200 hover:shadow-lg md:flex-row"
        >
          <div className="aspect-[16/10] flex-1 rounded-xl bg-gradient-to-br from-green-100 to-teal-50 flex items-center justify-center">
            <span className="text-5xl text-green-200 font-heading font-bold">
              AIPDN
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {featured.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {formatDate(featured.published_at)}
              </span>
            </div>
            <h2 className="mt-4 font-heading text-2xl font-bold text-foreground group-hover:text-green-700 transition-colors sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-700">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {/* Article grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-green-200 hover:shadow-lg"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-green-100 to-teal-50 flex items-center justify-center">
                <span className="text-3xl text-green-200 font-heading font-bold">
                  AIPDN
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(article.published_at)}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-bold text-foreground group-hover:text-green-700 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
