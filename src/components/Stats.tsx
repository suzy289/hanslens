"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/LanguageContext";
import { countPortfolioMedia, PORTFOLIO_SECTIONS } from "@/lib/hans-portfolio";

export function Stats() {
  const { t } = useI18n();
  const { photos, videos } = countPortfolioMedia();

  const items = [
    {
      value: `${videos}+`,
      label: t.stats.videosTitle,
      hint: t.stats.videosHint,
    },
    {
      value: `${photos}+`,
      label: t.stats.photosTitle,
      hint: t.stats.photosHint,
    },
    {
      value: `${PORTFOLIO_SECTIONS.length}`,
      label: t.stats.categoriesTitle,
      hint: t.stats.categoriesHint,
    },
  ];

  return (
    <section className="border-y border-white/5 bg-surface-muted/50 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-3 sm:px-6">
        {items.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08 }}
            className="text-center sm:text-left"
          >
            <p className="font-display text-4xl font-bold text-white sm:text-5xl">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-zinc-300">{s.label}</p>
            <p className="mt-0.5 text-xs text-zinc-600">{s.hint}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
