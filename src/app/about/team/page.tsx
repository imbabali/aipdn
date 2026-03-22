import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { User } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind the African Inter-Party Dialogue Network working to strengthen democracy across Africa.",
};

// Placeholder — will be replaced by Supabase data
const PLACEHOLDER_TEAM = [
  { name: "Team Member", role: "Executive Director", bio: "Leading AIPDN's strategic vision and operations across the continent." },
  { name: "Team Member", role: "Programme Director", bio: "Overseeing dialogue facilitation and training programmes." },
  { name: "Team Member", role: "Research Lead", bio: "Directing research initiatives and knowledge production." },
  { name: "Team Member", role: "Partnerships Manager", bio: "Managing relationships with partner organizations and stakeholders." },
  { name: "Team Member", role: "Communications Officer", bio: "Leading outreach, media engagement, and digital communications." },
  { name: "Team Member", role: "Programme Officer", bio: "Supporting programme implementation and monitoring across regions." },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        description="A dedicated team of professionals committed to advancing inter-party dialogue and democratic governance in Africa."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Our Team" },
        ]}
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_TEAM.map((member, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-background p-8 text-center transition-all hover:border-green-200 hover:shadow-lg"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-700">
                <User className="h-10 w-10" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-green-700">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
