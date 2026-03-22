import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section, SectionHeader } from "@/components/shared/section";
import { SITE_FULL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about the ${SITE_FULL_NAME}, our mission, history, and approach to strengthening democracy through inter-party dialogue in Africa.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        description="Building a culture of dialogue and democratic engagement across Africa since the early 2000s."
        breadcrumbs={[{ label: "About" }]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Who We Are
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The African Inter-Party Dialogue Network (AIPDN) is a
              continent-wide platform that brings together political parties,
              civil society organizations, and governance actors to foster
              structured, inclusive dialogue. We believe that sustainable
              democracy in Africa requires ongoing engagement between political
              actors&mdash;not just during elections, but as a permanent feature
              of governance.
            </p>

            <h2 className="mt-12 font-heading text-3xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To facilitate structured, inclusive dialogue among African
              political parties to strengthen democracy, promote peace, and
              foster inclusive governance across the continent.
            </p>

            <h2 className="mt-12 font-heading text-3xl font-bold text-foreground">
              Our Vision
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              An Africa where inter-party dialogue is a permanent, institutional
              feature of democratic governance&mdash;not a crisis response, but a
              proactive mechanism for building consensus, preventing conflict,
              and ensuring inclusive representation.
            </p>

            <h2 className="mt-12 font-heading text-3xl font-bold text-foreground">
              Our Approach
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We work at multiple levels&mdash;national, regional, and
              continental&mdash;to create platforms for dialogue, build capacity
              among political actors, and generate knowledge that informs better
              practice. Our approach is rooted in African ownership, impartiality,
              and a commitment to inclusive processes that reflect the diversity
              of the continent&apos;s political landscape.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <SectionHeader
          label="The Secretariat"
          title="Housed by Prospect Peace Institute&mdash;Africa"
          description="The AIPDN Secretariat is hosted by Prospect Peace Institute&mdash;Africa (PPI-A) in Nairobi, Kenya, providing the institutional home and operational capacity for the network's activities across the continent."
        />
      </Section>
    </>
  );
}
