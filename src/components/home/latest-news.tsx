"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/shared/section";
import { formatDate } from "@/lib/utils";

// Placeholder data — will be replaced by Supabase queries
const PLACEHOLDER_NEWS = [
  {
    id: "1",
    title: "MOU Between IPS and AIPDN Strengthens Regional Cooperation",
    excerpt:
      "A landmark memorandum of understanding was signed to advance inter-party dialogue frameworks across the continent.",
    category: "Partnership",
    published_at: "2026-02-15",
    slug: "mou-ips-aipdn",
    image_url: null,
  },
  {
    id: "2",
    title: "Rethinking Inter-Party Dialogue: West Africa Regional Roundtable",
    excerpt:
      "Political leaders from across West Africa convened to discuss new approaches to cross-party engagement.",
    category: "Events",
    published_at: "2025-12-10",
    slug: "west-africa-roundtable",
    image_url: null,
  },
  {
    id: "3",
    title: "PPI-Africa Strategic Partnership Agreement Signed",
    excerpt:
      "Prospect Peace Institute-Africa and AIPDN formalize their collaborative framework for advancing democratic dialogue.",
    category: "News",
    published_at: "2025-11-20",
    slug: "ppi-africa-partnership",
    image_url: null,
  },
];

export function LatestNews() {
  return (
    <Section>
      <SectionHeader
        label="News & Insights"
        title="Latest From AIPDN"
        description="Stay updated on our latest initiatives, partnerships, and events shaping inter-party dialogue across Africa."
      />
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PLACEHOLDER_NEWS.map((article, i) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group"
          >
            <Link
              href={`/news/${article.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-green-200 hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-green-100 to-teal-50 flex items-center justify-center">
                <span className="text-4xl text-green-200 font-heading font-bold">
                  AIPDN
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {formatDate(article.published_at)}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-bold text-foreground group-hover:text-green-700 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-6 py-3 text-sm font-semibold text-green-700 transition-all hover:bg-green-100"
        >
          View All News
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
