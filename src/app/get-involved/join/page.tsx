import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Check } from "lucide-react";
import { JoinForm } from "./join-form";

export const metadata: Metadata = {
  title: "Join the Network",
  description:
    "Apply to become a member of the African Inter-Party Dialogue Network and join 100+ political parties across 30+ countries.",
};

const benefits = [
  "Access to continental dialogue platforms and forums",
  "Training and capacity building opportunities",
  "Network of 100+ political parties across 30+ countries",
  "Research publications and policy briefs",
  "Peer-learning exchanges with political actors across Africa",
  "Technical advisory support for national dialogue processes",
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        title="Join the Network"
        description="Become part of Africa's leading platform for inter-party dialogue and democratic engagement."
        backgroundImage="/images/gallery/Img-250.jpg"
        breadcrumbs={[
          { label: "Get Involved", href: "/get-involved" },
          { label: "Join the Network" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Membership Benefits
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              As an AIPDN member, your organization gains access to a
              continent-wide platform for dialogue, learning, and democratic
              engagement.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Expression of Interest
            </h2>
            <JoinForm />
          </div>
        </div>
      </Section>
    </>
  );
}
