"use client";

import { useI18n } from "@/i18n/LanguageContext";
import { PublicImage } from "@/components/PublicImage";

type Props = {
  files: string[];
  reverse?: boolean;
};

export function MarqueeRow({ files, reverse }: Props) {
  const { t } = useI18n();
  if (files.length === 0) return null;
  const loop = [...files, ...files];

  return (
    <div className="group/marquee relative overflow-hidden py-2">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-card via-surface-card/80 to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-card via-surface-card/80 to-transparent sm:w-16"
        aria-hidden
      />

      <div
        className={`flex w-max gap-4 ${
          reverse ? "animate-marquee-x-rev" : "animate-marquee-x"
        } group-hover/marquee:[animation-play-state:paused]`}
      >
        {loop.map((file, i) => (
          <div
            key={`${file}-${i}`}
            className="relative h-52 w-[11rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-surface-card shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)] sm:h-60 sm:w-[13rem]"
          >
            <div className="absolute inset-0 origin-center transition duration-500 group-hover/marquee:scale-[1.04]">
              <PublicImage
                file={file}
                alt={t.portfolioSections.photoAlt}
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
