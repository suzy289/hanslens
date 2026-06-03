"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/LanguageContext";
import { publicUrl, SHOWREEL_VIDEO } from "@/lib/media";

export function Showreel() {
  const { t } = useI18n();
  const src = publicUrl(SHOWREEL_VIDEO);

  return (
    <section id="showreel" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.showreel.kicker}</p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.showreel.title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-zinc-500">{t.showreel.intro}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_0_80px_-20px_rgba(232,165,75,0.25)]"
        >
          <div className="aspect-video w-full">
            <video
              key={src}
              className="h-full w-full object-cover"
              src={src}
              controls
              playsInline
              preload="metadata"
              aria-label={t.showreel.videoAria}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
