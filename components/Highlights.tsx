"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { highlights } from "@/data/skills";
import { SectionTitle } from "@/components/SectionTitle";

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-28">
      <SectionTitle
        eyebrow="Highlights"
        title="Built to impress teams, clients, and recruiters."
        description="Snapshot achievements and strengths that define my development approach and execution quality."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {highlights.map((highlight, idx) => (
          <motion.div
            key={highlight}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <Sparkles className="mt-0.5 text-accent" size={18} />
            <p className="text-sm text-muted md:text-base">{highlight}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
