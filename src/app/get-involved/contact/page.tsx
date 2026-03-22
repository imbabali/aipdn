import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the African Inter-Party Dialogue Network. We'd love to hear from you.",
};

const contactInfo = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Address", value: CONTACT.address, href: null },
  { icon: Clock, label: "Hours", value: "Mon - Fri, 8:00 AM - 5:00 PM (EAT)", href: null },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have a question or want to discuss partnership opportunities? We'd love to hear from you."
        breadcrumbs={[
          { label: "Get Involved", href: "/get-involved" },
          { label: "Contact Us" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Send Us a Message
            </h2>
            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-green-700 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Contact Details
            </h2>
            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <item.icon className="h-5 w-5" />
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

            {/* Map placeholder */}
            <div className="mt-10 aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-100 to-teal-50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-green-300" />
                <p className="mt-2 text-sm text-green-400">
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
