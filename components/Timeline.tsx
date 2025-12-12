"use client";

import { motion, useReducedMotion } from "framer-motion";

type Phase = {
  title: string;
  description: string;
};

export function Timeline({ phases }: { phases: Phase[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {phases.map((phase, index) => (
        <motion.div
          key={phase.title}
          className="space-y-3 rounded-3xl border soft-border-lake bg-white/60 p-6 shadow-[0_15px_30px_rgba(25,40,34,0.15)]"
          initial={reduce ? {} : { opacity: 0, y: 30 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: index * 0.15 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-lake opacity-80">{index + 1}</p>
          <h3 className="text-2xl font-semibold text-forest">{phase.title}</h3>
          <p className="text-sm text-lake opacity-90">{phase.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
