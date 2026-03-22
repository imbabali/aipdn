import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import {
  SITE_FULL_NAME,
  CONTACT,
  SOCIAL_LINKS,
  NAV_ITEMS,
} from "@/lib/constants";

const footerLinks = [
  {
    title: "Organization",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Governance", href: "/about/governance" },
      { label: "Partners", href: "/network/partners" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Dialogue Facilitation", href: "/what-we-do/dialogue-facilitation" },
      { label: "Training", href: "/what-we-do/training" },
      { label: "Research", href: "/what-we-do/research" },
      { label: "Regional Convening", href: "/what-we-do/regional-convening" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Publications", href: "/resources/publications" },
      { label: "Media Gallery", href: "/resources/gallery" },
      { label: "Events", href: "/events" },
      { label: "News & Insights", href: "/news" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white" role="contentinfo">
      {/* Newsletter CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-bold">
                Stay Connected
              </h3>
              <p className="mt-2 text-white/70">
                Subscribe to our newsletter for updates on inter-party dialogue
                across Africa.
              </p>
            </div>
            <form
              action="/get-involved/newsletter"
              method="get"
              className="flex w-full max-w-md flex-col sm:flex-row gap-3 md:w-auto"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
                className="flex-1 rounded-full bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 border border-white/20 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo/logo-light.jpg"
                alt="AIPDN Logo"
                width={44}
                height={44}
                className="h-11 w-auto rounded-lg"
              />
              <span className="font-heading text-lg font-bold">AIPDN</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              The {SITE_FULL_NAME} facilitates structured, inclusive dialogue
              among African political parties to strengthen democracy, promote
              peace, and foster inclusive governance.
            </p>
            <p className="mt-4 text-xs text-white/50">
              The AIPDN Secretariat is housed by Prospect Peace Institute&mdash;Africa
              (PPI-A) in Nairobi, Kenya.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {CONTACT.phone}
              </a>
              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                {CONTACT.address}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>&copy; {currentYear} {SITE_FULL_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="capitalize hover:text-white transition-colors"
                aria-label={`Follow us on ${platform}`}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
