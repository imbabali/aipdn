import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Member Organizations",
  description:
    "Political parties and organizations that are part of the African Inter-Party Dialogue Network.",
};

export default function MembersPage() {
  return (
    <>
      <PageHero
        title="Member Organizations"
        description="Political parties and civil society organizations that form the backbone of the AIPDN network."
        backgroundImage="/images/gallery/AIPDN-PARTNERSHIP-1.jpg"
        imagePosition="center 20%"
        breadcrumbs={[
          { label: "Our Network", href: "/network" },
          { label: "Members" },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
            <Users className="h-10 w-10" />
          </div>
          <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">
            100+ Political Parties Across 30+ Countries
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The AIPDN network spans the entire African continent, connecting
            political parties from diverse ideological backgrounds in a shared
            commitment to democratic dialogue. Our member directory is being
            updated — check back soon for the complete listing.
          </p>
          <a
            href="/get-involved/join"
            className="mt-8 inline-flex items-center rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white hover:bg-green-800 transition-colors"
          >
            Join the Network
          </a>
        </div>
      </Section>
    </>
  );
}
