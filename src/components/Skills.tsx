"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/LanguageContext";

export function Skills() {
  const { t } = useI18n();

  return (
    <section className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.skills.kicker}</p>
        <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t.skills.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">{t.skills.subtitle}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.skills.cols.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl border border-white/5 bg-surface-card p-6"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
