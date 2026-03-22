import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Mail, Bell, FileText, Calendar } from "lucide-react";
import { NewsletterForm } from "./newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to the AIPDN newsletter for updates on inter-party dialogue, events, and publications.",
};

const whatYouGet = [
  { icon: Bell, title: "Event Announcements", description: "Be the first to know about upcoming dialogues, forums, and training opportunities." },
  { icon: FileText, title: "New Publications", description: "Get notified when we release new research papers, policy briefs, and toolkits." },
  { icon: Calendar, title: "Monthly Digest", description: "A curated summary of inter-party dialogue developments across Africa." },
  { icon: Mail, title: "Exclusive Insights", description: "Analysis and commentary from AIPDN experts on democracy and governance." },
];

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        title="Newsletter"
        description="Stay connected with the latest developments in inter-party dialogue across Africa."
        backgroundImage="/images/gallery/Img-220.jpg"
        breadcrumbs={[
          { label: "Get Involved", href: "/get-involved" },
          { label: "Newsletter" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              What You&apos;ll Receive
            </h2>
            <div className="mt-8 space-y-6">
              {whatYouGet.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8 lg:p-10">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Subscribe Now
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Join our growing community of democracy advocates. No spam, unsubscribe anytime.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </Section>
    </>
  );
}
