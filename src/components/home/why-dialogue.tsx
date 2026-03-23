"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/shared/section";

const reasons = [
  "Reduces political polarization and prevents election-related violence",
  "Builds institutional frameworks for sustained democratic engagement",
  "Creates channels for resolving disputes before they escalate into conflict",
  "Strengthens civil society participation in governance processes",
  "Promotes inclusive governance that reflects diverse political voices",
  "Fosters regional cooperation and shared democratic standards",
];

export function WhyDialogue() {
  return (
    <Section className="bg-muted">
      <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
            Why It Matters
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Inter-Party Dialogue Is the Foundation of African Democracy
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Inter-party dialogue strengthens democracy, promotes peace, and
            fosters inclusive governance in Africa. Beyond elections, it helps
            political parties engage constructively, build consensus, and reduce
            conflict. Despite its importance, dialogue is often ad hoc and
            underutilized. AIPDN supports structured, inclusive, and sustainable
            dialogue through research, policy guidance, facilitation, and
            capacity-building -helping political parties contribute to
            stronger institutions, national cohesion, and resilient societies
            across the continent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {reasons.map((reason, i) => (
            <div key={i} className="flex gap-4 rounded-xl bg-background p-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Check className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed text-foreground">
                {reason}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
