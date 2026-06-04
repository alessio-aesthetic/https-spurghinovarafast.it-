"use client";

import { motion } from "framer-motion";

const numbers = [
  ["24H", "operativi ogni giorno"],
  ["30", "minuti stimati in zona"],
  ["3", "mezzi e squadre tecniche"]
];

export function Numbers() {
  return (
    <section className="border-y border-white/10 bg-panel px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {numbers.map(([value, label], index) => (
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-7xl font-black tracking-[-0.07em] text-accent">{value}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-muted">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
