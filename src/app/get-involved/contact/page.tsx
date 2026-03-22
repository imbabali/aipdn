import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the African Inter-Party Dialogue Network. We'd love to hear from you.",
};

const contactInfo = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Address", value: CONTACT.address, href: null },
  { icon: Clock, label: "Hours", value: "Mon \u2013 Fri, 8:00 AM \u2013 5:00 PM (EAT)", href: null },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question or want to discuss partnership opportunities? We'd love to hear from you."
        backgroundImage="/images/gallery/Img-234.jpg"
        imagePosition="center 20%"
        breadcrumbs={[
          { label: "Get Involved", href: "/get-involved" },
          { label: "Contact Us" },
        ]}
      />

      <Section>
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Contact Details
            </h2>
            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 text-sm text-muted-foreground hover:text-green-700 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
