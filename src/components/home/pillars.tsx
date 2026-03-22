"use client";

import Link from "next/link";
import {
  MessageCircle,
  GraduationCap,
  BookOpen,
  Handshake,
  Globe,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/shared/section";
import { PILLARS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageCircle,
  GraduationCap,
  BookOpen,
  Handshake,
  Globe,
};

export function Pillars() {
  return (
    <Section>
      <SectionHeader
        label="What We Do"
        title="Our Five Pillars of Impact"
        description="We work across five interconnected areas to strengthen inter-party dialogue and democratic governance across the African continent."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((pillar, i) => {
          const Icon = iconMap[pillar.icon];
          return (
            <motion.div
              key={pillar.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/what-we-do/${pillar.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 transition-colors group-hover:text-green-600">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
