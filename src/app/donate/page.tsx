import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { CONTACT } from "@/lib/constants";
import { DonateForm } from "./donate-form";
import {
  Heart,
  Shield,
  BookOpen,
  Users,
  Phone,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support AIPDN's mission to strengthen democracy through inter-party dialogue across Africa. Donate via M-Pesa.",
};

const impactAreas = [
  {
    icon: Users,
    title: "Dialogue Facilitation",
    description:
      "Fund inter-party dialogue sessions that bring political leaders together to build consensus.",
  },
  {
    icon: BookOpen,
    title: "Training & Research",
    description:
      "Support capacity building for political actors and research that informs better dialogue practice.",
  },
  {
    icon: Shield,
    title: "Peace Building",
    description:
      "Help prevent election-related conflict through proactive dialogue and mediation frameworks.",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Support Our Mission"
        description="Your contribution helps strengthen democracy and promote peace through inter-party dialogue across Africa."
        backgroundImage="/images/gallery/Img-224.jpg"
        imagePosition="center 30%"
        breadcrumbs={[{ label: "Donate" }]}
      />

      <Section>
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-5">
          {/* Donate form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-background p-5 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Heart className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                    Donate via M-Pesa
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Till/Paybill: {CONTACT.mpesa}
                  </p>
                </div>
              </div>

              <DonateForm />

              {/* Trust signals */}
              <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
                {[
                  "100% of donations go towards programme activities",
                  "You will receive an M-Pesa confirmation SMS",
                  "Tax-deductible for eligible organizations",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 shrink-0 text-green-600 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact sidebar */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
              Your Impact
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every contribution, no matter the size, directly supports
              AIPDN&apos;s work across the continent.
            </p>

            <div className="mt-8 space-y-6">
              {impactAreas.map((area) => (
                <div key={area.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <area.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground">
                      {area.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct M-Pesa instructions */}
            <div className="mt-8 rounded-xl bg-green-50 border border-green-100 p-5">
              <h3 className="font-heading text-sm font-bold text-green-800 flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Send Directly via M-Pesa
              </h3>
              <ol className="mt-3 space-y-2 text-sm text-green-700">
                <li className="flex gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-800">
                    1
                  </span>
                  Go to M-Pesa on your phone
                </li>
                <li className="flex gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-800">
                    2
                  </span>
                  Select &quot;Send Money&quot;
                </li>
                <li className="flex gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-800">
                    3
                  </span>
                  Enter number: <strong>{CONTACT.mpesa}</strong>
                </li>
                <li className="flex gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-800">
                    4
                  </span>
                  Enter amount and confirm
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
