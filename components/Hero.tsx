"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-glow pb-24 pt-40 md:pt-48">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-accent/90">{siteConfig.role}</p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-text md:text-7xl">{siteConfig.headline}</h1>
          <p className="mt-5 text-xl text-text">I&apos;m {siteConfig.name}.</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{siteConfig.intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:translate-y-[-1px]">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-sm text-text transition hover:bg-white/10">
              Contact Me
            </a>
            <a href={siteConfig.resumeUrl} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-muted transition hover:text-text">
              <Download size={14} /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/15 bg-white/[0.06] p-4 shadow-soft backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
              <Image
                src="https://avatars.githubusercontent.com/u/176570751?v=4"
                alt="Sanjjay profile"
                width={520}
                height={520}
                className="h-[360px] w-full rounded-[1.2rem] object-cover"
                priority
              />
              <div className="mt-5 flex items-center justify-between text-sm text-muted">
                <p>{siteConfig.location}</p>
                <p>Open to collaborate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
