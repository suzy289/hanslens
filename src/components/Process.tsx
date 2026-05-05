"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/LanguageContext";

const nums = ["01", "02", "03", "04", "05", "06"] as const;

export function Process() {
  const { t } = useI18n();

  return (
    <section className="border-t border-white/5 bg-surface-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.process.kicker}</p>
        <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t.process.headline}
        </h2>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.process.steps.map((s, i) => (
            <motion.li
              key={nums[i]}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-surface-card p-5"
            >
              <span className="font-display text-3xl font-bold text-white/10">{nums[i]}</span>
              <h3 className="font-display mt-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{s.desc}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-white">{t.process.commitmentTitle}</h3>
          <ul className="mt-4 grid gap-3 text-sm text-zinc-400 sm:grid-cols-2">
            {t.process.commitments.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-accent">✓</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
