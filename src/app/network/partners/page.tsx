import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Explore AIPDN's network of partners across civil society, international organizations, and academic institutions.",
};

const partnerCategories = [
  {
    title: "Civil Society, Governance & Peacekeeping",
    partners: [
      { name: "West Africa Network for Peacebuilding (WANEP) Senegal", logo: "/images/partners/wanep.jpg", website: null },
      { name: "African Youth Initiative Network (AYINET)", logo: "/images/partners/ayinet.jpg", website: "https://ayinet.org" },
      { name: "Horn Center for Democracy (HCD) – Ethiopia", logo: "/images/partners/horn-center.png", website: null },
      { name: "Gender Empowerment South Sudan Organisation (GESSO)", logo: "/images/partners/gesso.jpg", website: null },
      { name: "Trust Africa", logo: "/images/partners/trustafrica.jpg", website: "https://trustafrica.org" },
      { name: "Goree Institute", logo: "/images/partners/goree.jpg", website: null },
      { name: "Institute for Pan African Strategies (IPS)", logo: "/images/partners/ips.png", website: null },
      { name: "Centre for Multi-Party Democracy (CMD) Kenya", logo: "/images/partners/cmd-kenya.png", website: null },
    ],
  },
  {
    title: "International & Regional Democracy Organizations",
    partners: [
      { name: "Uganda Council on Foreign Relations (UCFR)", logo: "/images/partners/ucfr.jpg", website: "https://www.uga-cfr.org" },
      { name: "National Democratic Institute (NDI)", logo: "/images/partners/ndi.jpg", website: "https://ndi.org" },
      { name: "Oslo Center", logo: "/images/partners/oslo-center.jpg", website: "https://oslocenter.no" },
      { name: "E-HORN", logo: "/images/partners/ehorn.png", website: "https://ehorn.org" },
      { name: "Prospect Peace Institute Africa (PPI-A)", logo: "/images/partners/ppi-africa.png", website: "https://ppiafrica.org" },
    ],
  },
  {
    title: "Academic & Research Institutions",
    partners: [
      { name: "University of Nairobi – IDIS", logo: "/images/partners/uon.jpg", website: "https://idis.uonbi.ac.ke" },
      { name: "West Africa Research Center (WARC) – Senegal", logo: "/images/partners/warc.png", website: "https://warccroa.org" },
      { name: "Malawi University of Science and Technology (MUST)", logo: "/images/partners/must.png", website: "https://must.ac.mw" },
      { name: "Centre for Democratic Development (CDD–Ghana)", logo: "/images/partners/cdd-ghana.png", website: "https://cddgh.org" },
    ],
  },
  {
    title: "Inter-Party Dialogue & Political Platforms",
    partners: [
      { name: "Inter-Party Organization for Dialogue (IPOD) – Uganda", logo: "/images/partners/ipod-uganda.png", website: "https://www.ipoduganda.org" },
      { name: "Ethiopia Political Parties Joint Council (EPPJC)", logo: "/images/partners/eppjc.png", website: "https://nebe.org.et/en/pps-joint-council" },
    ],
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Our Partners"
        description="We collaborate with leading international and regional organizations committed to advancing democracy in Africa."
        backgroundImage="/images/gallery/AIPDN-PARTNERSHIP-4.jpg"
        imagePosition="center 35%"
        breadcrumbs={[
          { label: "Our Network", href: "/network" },
          { label: "Partners" },
        ]}
      />

      {partnerCategories.map((category) => (
        <Section key={category.title}>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            {category.title}
          </h2>
          <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {category.partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center rounded-2xl border border-border bg-background p-6 text-center transition-all hover:border-green-200 hover:shadow-lg"
              >
                <div className="relative flex h-24 w-full items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={80}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="mt-4 font-heading text-sm font-bold text-foreground">
                  {partner.name}
                </h3>
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-green-700 hover:text-green-600 transition-colors"
                  >
                    Visit website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
