"use client";

import { motion } from "framer-motion";
import { SITE } from "@/config/site";
import { useI18n } from "@/i18n/LanguageContext";
import { HERO_PREVIEW_IMAGES, humanTitle } from "@/lib/media";
import { PublicImage } from "@/components/PublicImage";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid bg-[length:64px_64px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,320px)] lg:items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-transparent bg-clip-text bg-brand-ig"
            >
              {SITE.name} — {t.brandTagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {t.hero.headline1}
              <br />
              <span className="text-zinc-500">{t.hero.headline2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-6 max-w-2xl text-lg text-zinc-400"
            >
              {t.hero.lead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#travaux"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-surface transition hover:bg-zinc-200"
              >
                {t.hero.ctaWorks}
              </a>
              <a
                href="#showreel"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:text-accent"
              >
                {t.hero.ctaShowreel}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 grid gap-4 sm:grid-cols-3"
            >
              {t.hero.cards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/5 bg-surface-card/60 p-5 backdrop-blur"
                >
                  <p className="font-display text-sm font-semibold text-accent">{item.title}</p>
                  <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-3"
          >
            {HERO_PREVIEW_IMAGES.map((file, i) => (
              <div
                key={file}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-surface-muted shadow-lg lg:aspect-[4/5]"
              >
                <PublicImage
                  file={file}
                  alt={humanTitle(file)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 320px"
                  priority={i === 0}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
