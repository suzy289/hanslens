"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/LanguageContext";
import { PUBLIC_VIDEOS } from "@/lib/media";
import { VideoTile } from "@/components/VideoTile";

export function PortfolioGrid() {
  const { t } = useI18n();
  const intro = t.portfolio.intro.replace("{{count}}", String(PUBLIC_VIDEOS.length));

  return (
    <section id="travaux" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.portfolio.kicker}</p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.portfolio.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-500">{intro}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PUBLIC_VIDEOS.map((file, i) => (
            <motion.div
              key={file}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: (i % 6) * 0.03 }}
            >
              <VideoTile file={file} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
