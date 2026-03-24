import { Hero } from "@/components/home/hero";
import { PillarsCarousel } from "@/components/home/pillars-carousel";
import { WhyDialogue } from "@/components/home/why-dialogue";
import { LatestNews } from "@/components/home/latest-news";
import { PartnersStrip } from "@/components/home/partners-strip";
import { CTA } from "@/components/home/cta";
import { SITE_URL, SITE_FULL_NAME, SITE_DESCRIPTION, CONTACT } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_FULL_NAME,
  alternateName: "AIPDN",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/logo.png`,
  description: SITE_DESCRIPTION,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Woodlands Office Park, Hurlingham",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [
    "https://x.com/aipdn",
    "https://linkedin.com/company/aipdn",
    "https://facebook.com/aipdn",
    "https://youtube.com/@aipdn",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <PillarsCarousel />
      <WhyDialogue />
      <LatestNews />
      <PartnersStrip />
      <CTA />
    </>
  );
}
