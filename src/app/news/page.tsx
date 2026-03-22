import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Latest news, articles, and insights from the African Inter-Party Dialogue Network.",
};

const ARTICLES = [
  {
    id: "1",
    title: "MOU Between IPS and AIPDN",
    excerpt:
      "A landmark memorandum of understanding was signed to advance inter-party dialogue frameworks across the continent, marking a new era of collaboration between the two institutions.",
    category: "News",
    author: "AIPDN Editor",
    published_at: "2026-02-18",
    slug: "mou-ips-aipdn",
    image: "/images/news/mou-ips.jpg",
  },
  {
    id: "2",
    title: "Rethinking Inter-Party Dialogue in Africa: Key Insights from the AIPDN Regional Roundtable",
    excerpt:
      "The African Inter-Party Dialogue Network (AIPDN) convened a major regional roundtable in Nairobi, assembling over 50 delegates from political organizations, civil society groups, academic institutions, and policy bodies across Eastern, Western, and Southern Africa.",
    category: "News",
    author: "AIPDN Editor",
    published_at: "2025-12-19",
    slug: "rethinking-inter-party-dialogue",
    image: "/images/news/roundtable-2025.jpg",
  },
  {
    id: "3",
    title: "PPI-Africa and AIPDN Strengthen Strategic Partnership With Institutional Agreement",
    excerpt:
      "Prospect Peace Institute-Africa and AIPDN formalize their collaborative framework for advancing democratic dialogue across the continent, with PPI-Africa officially designated as host of the AIPDN Secretariat.",
    category: "News",
    author: "AIPDN Editor",
    published_at: "2025-11-21",
    slug: "ppi-africa-partnership",
    image: "/images/news/ppi-partnership.png",
  },
];

export default function NewsPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <PageHero
        title="News & Insights"
        description="Stay informed on our latest initiatives, research, partnerships, and events."
        backgroundImage="/images/news/roundtable-2025.jpg"
        breadcrumbs={[{ label: "News & Insights" }]}
      />

      <Section>
        {/* Featured article */}
        <Link
          href={`/news/${featured.slug}`}
          className="group mb-16 flex flex-col gap-8 rounded-2xl border border-border bg-background overflow-hidden transition-all hover:border-green-200 hover:shadow-lg md:flex-row"
        >
          <div className="relative aspect-[16/10] md:aspect-auto md:w-1/2 overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-8">
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
        <div className="grid gap-8 sm:grid-cols-2">
          {rest.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-green-200 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
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
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
