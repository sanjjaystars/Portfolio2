"use client";

import { motion } from "framer-motion";
import { journey } from "@/data/journey";
import { SectionTitle } from "@/components/SectionTitle";

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-4 py-24 md:py-28">
      <SectionTitle
        eyebrow="Journey"
        title="A timeline of growth and meaningful milestones."
        description="From foundational engineering to premium product development, each chapter has sharpened my craft."
      />
      <div className="relative ml-2 border-l border-white/10 pl-8">
        {journey.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative mb-9"
          >
            <span className="absolute -left-[2.12rem] top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_30px_rgba(116,168,255,0.7)]" />
            <p className="text-sm text-accent">{item.year}</p>
            <h3 className="mt-1 text-xl font-medium text-text">{item.title}</h3>
            <p className="mt-2 text-muted">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
