import { motion } from "framer-motion";

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-3xl"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-accent/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-text md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
    </motion.div>
  );
}
