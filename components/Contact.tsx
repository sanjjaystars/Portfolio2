"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 md:py-28">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-10">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something exceptional together."
          description="Whether you have a product idea, a collaboration opportunity, or a role in mind, I’d love to connect."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <form className="space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none ring-accent/40 placeholder:text-muted focus:ring-2" placeholder="Your Name" />
            <input type="email" className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none ring-accent/40 placeholder:text-muted focus:ring-2" placeholder="Email Address" />
            <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm outline-none ring-accent/40 placeholder:text-muted focus:ring-2" placeholder="Your Message" />
            <button type="submit" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5">
              Send Message
            </button>
          </form>
          <div className="space-y-4 text-sm text-muted">
            <a className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 hover:bg-white/[0.05]" href={siteConfig.github}>
              <Github size={16} /> GitHub
            </a>
            <a className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 hover:bg-white/[0.05]" href={siteConfig.linkedin}>
              <Linkedin size={16} /> LinkedIn
            </a>
            <a className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 hover:bg-white/[0.05]" href={`mailto:${siteConfig.email}`}>
              <Mail size={16} /> {siteConfig.email}
            </a>
            <p className="pt-2">Phone: {siteConfig.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
