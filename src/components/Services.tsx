"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/LanguageContext";

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="scroll-mt-24 border-t border-white/5 bg-surface-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.services.kicker}</p>
        <h2 className="font-display mt-2 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t.services.headline}
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className="group flex flex-col rounded-2xl border border-white/5 bg-surface-card p-6 transition hover:border-accent/25 hover:shadow-[0_0_0_1px_rgba(232,165,75,0.08)]"
            >
              <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
