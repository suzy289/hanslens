"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SITE } from "@/config/site";
import { useI18n } from "@/i18n/LanguageContext";
import { INSTAGRAM_QR_IMAGE, PRESENTATION_IMAGE, publicUrl } from "@/lib/media";
import { PublicImage } from "@/components/PublicImage";
import { SocialLinks } from "@/components/SocialLinks";

export function About() {
  const { t } = useI18n();
  const [qrOk, setQrOk] = useState(true);

  return (
    <section id="apropos" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-brand-ig">
              {t.about.kicker}
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {SITE.name}
              <br />
              <span className="text-zinc-500">{t.about.titleLine}</span>
            </h2>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-400">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {t.about.socialBox}
              </p>
              <div className="mt-4">
                <SocialLinks variant="buttons" />
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-500">
                <li>
                  <span className="text-zinc-600">{t.about.instagramLbl}</span>
                  <a
                    href={SITE.instagramUrl}
                    className="text-zinc-300 underline decoration-white/20 underline-offset-4 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE.instagramHandle}
                  </a>
                </li>
                <li>
                  <span className="text-zinc-600">{t.about.youtubeLbl}</span>
                  <a
                    href={SITE.youtubeUrl}
                    className="text-zinc-300 underline decoration-white/20 underline-offset-4 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE.youtubeHandle}
                  </a>
                </li>
              </ul>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  {t.about.languagesLabel}
                </dt>
                <dd className="mt-1 font-medium text-white">{t.about.languagesValue}</dd>
              </div>
              <div className="rounded-xl border border-white/5 bg-surface-card p-4">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  {t.about.focusLabel}
                </dt>
                <dd className="mt-1 font-medium text-white">{t.about.focusValue}</dd>
              </div>
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-muted shadow-[0_0_60px_-15px_rgba(255,0,105,0.2)]">
              <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
                <PublicImage
                  file={PRESENTATION_IMAGE}
                  alt={`${SITE.name} — ${t.about.presentationAlt}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-display text-lg font-semibold text-white drop-shadow">
                  {t.brandTagline}
                </p>
              </div>
            </div>

            {qrOk ? (
              <div className="rounded-3xl border border-white/10 bg-white p-5 shadow-2xl shadow-black/40">
                <p className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {t.about.qrHeading}
                </p>
                <div className="relative mx-auto mt-3 h-[220px] w-[220px] shrink-0">
                  <Image
                    src={publicUrl(INSTAGRAM_QR_IMAGE)}
                    alt={`QR code ${SITE.instagramHandle}`}
                    fill
                    className="object-contain"
                    sizes="220px"
                    unoptimized
                    onError={() => setQrOk(false)}
                  />
                </div>
                <p className="mt-3 text-center font-display text-sm font-bold text-zinc-900">
                  {SITE.instagramHandle}
                </p>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
