import type { Metadata } from "next";
import Link from "next/link";
import { Users, Handshake, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Our Network",
  description:
    "Explore the AIPDN network of partners and member organizations working to strengthen democracy across Africa.",
};

export default function NetworkPage() {
  return (
    <>
      <PageHero
        title="Our Network"
        description="A continent-wide network of partners, political parties, and civil society organizations committed to democratic dialogue."
        backgroundImage="/images/gallery/AIPDN-PARTNERSHIP-1.jpg"
        imagePosition="center 20%"
        breadcrumbs={[{ label: "Our Network" }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <Link
            href="/network/partners"
            className="group flex flex-col rounded-2xl border border-border bg-background p-6 sm:p-8 md:p-10 transition-all hover:border-green-200 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
              <Handshake className="h-8 w-8" />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">
              Our Partners
            </h2>
            <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
              International organizations, regional bodies, and civil society
              organizations that collaborate with AIPDN to advance democratic
              dialogue.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-700">
              View Partners
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/network/members"
            className="group flex flex-col rounded-2xl border border-border bg-background p-6 sm:p-8 md:p-10 transition-all hover:border-green-200 hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-colors group-hover:bg-teal-600 group-hover:text-white">
              <Users className="h-8 w-8" />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">
              Member Organizations
            </h2>
            <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
              Political parties and organizations from across Africa
              that form the backbone of the AIPDN network.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
              View Members
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
}
