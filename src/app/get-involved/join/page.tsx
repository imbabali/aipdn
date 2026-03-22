import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Check } from "lucide-react";

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
                    <Check className="h-3.5 w-3.5" />
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
            <form className="mt-8 space-y-6">
              <div>
                <label htmlFor="org-name" className="block text-sm font-medium text-foreground">
                  Organization Name
                </label>
                <input
                  type="text"
                  id="org-name"
                  name="org-name"
                  required
                  className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  placeholder="Your organization"
                />
              </div>
              <div>
                <label htmlFor="org-type" className="block text-sm font-medium text-foreground">
                  Organization Type
                </label>
                <select
                  id="org-type"
                  name="org-type"
                  required
                  className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                >
                  <option value="">Select type</option>
                  <option value="political-party">Political Party</option>
                  <option value="civil-society">Civil Society Organization</option>
                  <option value="academic">Academic Institution</option>
                  <option value="government">Government Body</option>
                  <option value="international">International Organization</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="contact-name"
                    required
                    className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="join-email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="join-email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    placeholder="you@org.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-foreground">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  placeholder="Country"
                />
              </div>
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-foreground">
                  Why do you want to join AIPDN?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={4}
                  className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 resize-none"
                  placeholder="Tell us about your interest..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-green-700 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md"
              >
                Submit Expression of Interest
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
