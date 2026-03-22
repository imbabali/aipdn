import type { Metadata } from "next";
import Link from "next/link";
import { UserPlus, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join the AIPDN network, subscribe to our newsletter, or contact us to get involved in advancing democracy in Africa.",
};

const ways = [
  {
    icon: UserPlus,
    title: "Join the Network",
    description:
      "Whether you represent a political party, civil society organization, or academic institution, there's a place for you in the AIPDN network.",
    href: "/get-involved/join",
    cta: "Apply Now",
    color: "green" as const,
  },
  {
    icon: Mail,
    title: "Subscribe to Our Newsletter",
    description:
      "Stay informed on the latest developments in inter-party dialogue, upcoming events, and new publications.",
    href: "/get-involved/newsletter",
    cta: "Subscribe",
    color: "teal" as const,
  },
  {
    icon: MessageSquare,
    title: "Contact Us",
    description:
      "Have a question or want to discuss partnership opportunities? We'd love to hear from you.",
    href: "/get-involved/contact",
    cta: "Send Message",
    color: "gold" as const,
  },
];

const colorMap = {
  green: {
    bg: "bg-green-100",
    text: "text-green-700",
    hoverBg: "group-hover:bg-green-700",
    btn: "bg-green-700 hover:bg-green-800",
  },
  teal: {
    bg: "bg-teal-100",
    text: "text-teal-700",
    hoverBg: "group-hover:bg-teal-600",
    btn: "bg-teal-600 hover:bg-teal-700",
  },
  gold: {
    bg: "bg-gold-100",
    text: "text-gold-600",
    hoverBg: "group-hover:bg-gold-500",
    btn: "bg-gold-500 hover:bg-gold-600",
  },
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved"
        description="Join the movement for structured political dialogue across Africa. There are many ways to engage."
        backgroundImage="/images/gallery/Img-260.jpg"
        imagePosition="center 25%"
        breadcrumbs={[{ label: "Get Involved" }]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {ways.map((way) => {
            const colors = colorMap[way.color];
            return (
              <Link
                key={way.title}
                href={way.href}
                className="group flex flex-col rounded-2xl border border-border bg-background p-5 sm:p-8 transition-all hover:border-green-200 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} ${colors.text} transition-colors ${colors.hoverBg} group-hover:text-white`}
                >
                  <way.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-heading text-xl font-bold text-foreground">
                  {way.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {way.description}
                </p>
                <span
                  className={`mt-6 inline-flex items-center gap-2 self-start rounded-full ${colors.btn} px-6 py-2.5 text-sm font-semibold text-white transition-colors`}
                >
                  {way.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
