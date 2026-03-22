"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/shared/section";

const PARTNERS = [
  { name: "Prospect Peace Institute Africa", logo: "/images/partners/ppi-africa.png" },
  { name: "National Democratic Institute", logo: "/images/partners/ndi.jpg" },
  { name: "Oslo Center", logo: "/images/partners/oslo-center.jpg" },
  { name: "E-HORN", logo: "/images/partners/ehorn.png" },
  { name: "Trust Africa", logo: "/images/partners/trustafrica.jpg" },
  { name: "University of Nairobi - IDIS", logo: "/images/partners/uon.jpg" },
  { name: "CDD Ghana", logo: "/images/partners/cdd-ghana.png" },
  { name: "IPOD Uganda", logo: "/images/partners/ipod-uganda.png" },
];

export function PartnersStrip() {
  return (
    <Section className="bg-muted">
      <SectionHeader
        label="Our Network"
        title="Trusted Partners"
        description="We collaborate with leading international and regional organizations committed to advancing democracy in Africa."
      />
      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {PARTNERS.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex h-28 items-center justify-center rounded-xl border border-border bg-background px-6 transition-all hover:border-green-200 hover:shadow-sm"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
