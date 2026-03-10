"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";
import { SectionTitle } from "@/components/SectionTitle";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 md:py-28">
      <SectionTitle
        eyebrow="About"
        title="Engineering polished products with depth and precision."
        description="I build full-stack platforms that combine elegant user interfaces, scalable backend logic, and thoughtful product strategy. My work spans web development, AI-powered tools, reliable systems, and impactful digital products."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-glass"
          >
            <p className="text-4xl font-semibold tracking-tight text-text">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
