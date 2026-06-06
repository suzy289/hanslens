"use client";

import { motion } from "framer-motion";
import type { Messages } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/LanguageContext";
import {
  PORTFOLIO_SECTIONS,
  sectionAnchor,
  countPortfolioMedia,
} from "@/lib/hans-portfolio";
import { PublicImage } from "@/components/PublicImage";
import { VideoTile } from "@/components/VideoTile";

function sectionMeta(id: string, t: Messages) {
  const key = id as keyof Messages["portfolioSections"]["categories"];
  return (
    t.portfolioSections.categories[key] ?? {
      title: id,
      desc: "",
    }
  );
}

export function PortfolioSections() {
  const { t } = useI18n();
  const { photos, videos } = countPortfolioMedia();
  const intro = t.portfolioSections.intro
    .replace("{{sections}}", String(PORTFOLIO_SECTIONS.length))
    .replace("{{photos}}", String(photos))
    .replace("{{videos}}", String(videos));

  return (
    <section id="realisations" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t.portfolioSections.kicker}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.portfolioSections.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">{intro}</p>
        </div>

        <nav
          aria-label={t.portfolioSections.navAria}
          className="sticky top-16 z-40 -mx-4 mt-10 border-y border-white/5 bg-surface/95 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6"
        >
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
            <a
              href="#realisations"
              className="shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:border-accent/40"
            >
              {t.portfolioSections.navAll}
            </a>
            {PORTFOLIO_SECTIONS.map((sec) => {
              const meta = sectionMeta(sec.id, t);
              return (
                <a
                  key={sec.id}
                  href={`#${sectionAnchor(sec.id)}`}
                  className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:border-accent/30 hover:text-white"
                >
                  {meta.title}
                </a>
              );
            })}
          </div>
        </nav>

        <div className="mt-14 space-y-20 sm:space-y-24">
          {PORTFOLIO_SECTIONS.map((sec, idx) => {
            const meta = sectionMeta(sec.id, t);
            const hasPhotos = sec.photos.length > 0;
            const hasVideos = sec.videos.length > 0;
            if (!hasPhotos && !hasVideos) return null;

            return (
              <motion.article
                key={sec.id}
                id={sectionAnchor(sec.id)}
                className="scroll-mt-36"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.03 }}
              >
                <div className="mb-6 flex flex-col gap-2 border-b border-white/5 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{meta.title}</h3>
                    <p className="mt-1 max-w-xl text-sm text-zinc-500">{meta.desc}</p>
                  </div>
                  <p className="text-xs text-zinc-600">
                    {hasPhotos ? `${sec.photos.length} ${t.portfolioSections.photosLabel}` : ""}
                    {hasPhotos && hasVideos ? " · " : ""}
                    {hasVideos ? `${sec.videos.length} ${t.portfolioSections.videosLabel}` : ""}
                  </p>
                </div>

                {hasPhotos ? (
                  <div className="mb-8">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                      {t.portfolioSections.photosLabel}
                    </p>
                    <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin] snap-x snap-mandatory">
                      {sec.photos.map((file, i) => (
                        <div
                          key={`${sec.id}-photo-${i}`}
                          className="snap-center shrink-0"
                          style={{ width: "min(78vw, 360px)" }}
                        >
                          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-surface-card shadow-lg">
                            <PublicImage
                              file={file}
                              alt={t.portfolioSections.photoAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 78vw, 360px"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {hasVideos ? (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                      {t.portfolioSections.videosLabel}
                    </p>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {sec.videos.map((file, i) => (
                        <motion.div
                          key={`${sec.id}-video-${i}`}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-30px" }}
                          transition={{ delay: (i % 3) * 0.04 }}
                        >
                          <VideoTile file={file} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
