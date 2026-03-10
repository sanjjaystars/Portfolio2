"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionTitle } from "@/components/SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 md:py-28">
      <SectionTitle
        eyebrow="Skills"
        title="A modern, versatile technical toolkit."
        description="Focused on building fast, scalable, and visually polished digital products across the stack."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category, idx) => (
          <motion.article
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-lg font-semibold text-text">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-muted transition hover:bg-white/[0.12] hover:text-text">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
