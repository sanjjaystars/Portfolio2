"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handler = () => {
      const current = navItems.findLast((item) => {
        const section = document.querySelector(item.href);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 140;
      });
      if (current) setActive(current.href);
    };

    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-panel/55 px-6 py-3 backdrop-blur-xl shadow-glass">
        <a href="#home" className="text-lg font-semibold tracking-tight text-text">
          Sanjjay
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === item.href ? "bg-white/10 text-text" : "text-muted hover:text-text"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10 bg-panel/95 p-5 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm text-muted hover:bg-white/5 hover:text-text" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
