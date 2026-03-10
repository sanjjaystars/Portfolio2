"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionTitle } from "@/components/SectionTitle";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 md:py-28">
      <SectionTitle
        eyebrow="Featured Projects"
        title="Product-grade builds with premium execution."
        description="Selected work spanning modern interfaces, high-performance APIs, and end-to-end engineering."
      />

      <div className="space-y-6">
        {featured.map((project) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 shadow-soft"
          >
            <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-text md:text-3xl">{project.title}</h3>
                <p className="mt-3 max-w-2xl text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-accent/15 to-transparent p-6">
                <p className="mb-6 text-sm text-muted">Preview Area</p>
                <div className="h-28 rounded-xl bg-white/[0.07] transition group-hover:scale-[1.02]" />
                <div className="mt-6 flex gap-3">
                  <a className="inline-flex items-center gap-1 text-sm text-text" href={project.github}>
                    <Github size={16} /> GitHub
                  </a>
                  <a className="inline-flex items-center gap-1 text-sm text-text" href={project.live}>
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {others.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.05]"
          >
            <h4 className="text-xl font-medium text-text">{project.title}</h4>
            <p className="mt-3 text-sm text-muted">{project.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
