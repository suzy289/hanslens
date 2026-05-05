"use client";

import { motion } from "framer-motion";
import type { Messages } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/LanguageContext";
import { IMAGE_COLLECTIONS, humanTitle, splitMarqueeRows } from "@/lib/media";
import { MarqueeRow } from "@/components/MarqueeRow";
import { PublicImage } from "@/components/PublicImage";

function categoryMeta(id: string, t: Messages) {
  const key = id as keyof Messages["gallery"]["cats"];
  return (
    t.gallery.cats[key] ?? {
      title: id,
      desc: "",
    }
  );
}

export function PhotoGallery() {
  const { t } = useI18n();
  const [rowA, rowB] = splitMarqueeRows();

  return (
    <section id="galerie" className="scroll-mt-24 border-y border-white/5 bg-surface-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-brand-ig">
            {t.gallery.kicker}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl">{t.gallery.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">{t.gallery.intro}</p>
        </div>

        <div className="mb-12 space-y-4 overflow-hidden rounded-2xl border border-white/5 bg-surface-card/40 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow files={rowA} />
          <MarqueeRow files={rowB.length ? rowB : rowA} reverse />
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6">
        {IMAGE_COLLECTIONS.filter((c) => c.files.length > 0).map((col, idx) => {
          const meta = categoryMeta(col.id, t);
          return (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{meta.title}</h3>
                  <p className="text-sm text-zinc-500">{meta.desc}</p>
                </div>
                <span className="text-xs font-medium text-zinc-600">
                  {col.files.length} {t.gallery.visualsCount}
                </span>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2 pt-1 [scrollbar-width:thin] snap-x snap-mandatory">
                {col.files.map((file) => (
                  <div
                    key={file}
                    className="snap-center shrink-0 first:pl-1 last:pr-1"
                    style={{ width: "min(78vw, 380px)" }}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-surface-card shadow-lg">
                      <PublicImage
                        file={file}
                        alt={humanTitle(file)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 78vw, 380px"
                      />
                    </div>
                    <p className="mt-2 truncate text-center text-xs text-zinc-500">{humanTitle(file)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
