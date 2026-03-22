"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/shared/section";

// Placeholder — will be replaced by Supabase data
const PLACEHOLDER_PARTNERS = [
  "African Union",
  "UNDP",
  "International IDEA",
  "NIMD",
  "WFD",
  "NDI",
  "Prospect Peace Institute",
  "ECES",
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
        {PLACEHOLDER_PARTNERS.map((partner, i) => (
          <motion.div
            key={partner}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex h-24 items-center justify-center rounded-xl border border-border bg-background px-6 text-center text-sm font-medium text-muted-foreground transition-all hover:border-green-200 hover:text-foreground hover:shadow-sm"
          >
            {partner}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
