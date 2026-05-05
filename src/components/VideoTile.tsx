"use client";

import { useRef } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { humanTitle, publicUrl } from "@/lib/media";

type Props = {
  file: string;
  className?: string;
};

export function VideoTile({ file, className = "" }: Props) {
  const { t } = useI18n();
  const ref = useRef<HTMLVideoElement>(null);
  const url = publicUrl(file);
  const title = humanTitle(file);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-2xl border border-white/10 bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
      onMouseEnter={() => {
        void ref.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      }}
      aria-label={`${t.video.playAriaPrefix}${title}`}
    >
      <div className="relative aspect-video w-full">
        <video
          ref={ref}
          src={url}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-90 transition group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition group-hover:border-accent/50 group-hover:bg-accent/20">
            <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
          <span className="inline-flex rounded-full border border-sky-500/25 bg-sky-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-200">
            {t.video.badge}
          </span>
          <p className="font-display mt-2 line-clamp-2 text-base font-semibold text-white sm:text-lg">
            {title}
          </p>
        </div>
      </div>
    </a>
  );
}
