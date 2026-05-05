"use client";

import Link from "next/link";
import { SITE } from "@/config/site";
import { useI18n } from "@/i18n/LanguageContext";
import { whatsappContactUrl } from "@/lib/whatsapp";
import { LOGO_IMAGE } from "@/lib/media";
import { PublicImage } from "@/components/PublicImage";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const { t } = useI18n();
  const whatsappHref = whatsappContactUrl(t.whatsapp.prefillMessage);

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/5 bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-surface-muted">
                <PublicImage
                  file={LOGO_IMAGE}
                  alt={`Logo ${SITE.name}`}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-white">{SITE.name}</p>
                <p className="text-sm text-zinc-500">{t.brandTagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-500">{t.footer.blurb}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SocialLinks variant="buttons" />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
              >
                {t.footer.whatsappLbl}
                {SITE.whatsappDisplay}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {t.footer.navHeading}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="#travaux" className="hover:text-white">
                    {t.footer.navWorks}
                  </Link>
                </li>
                <li>
                  <Link href="#galerie" className="hover:text-white">
                    {t.footer.navGallery}
                  </Link>
                </li>
                <li>
                  <Link href="#showreel" className="hover:text-white">
                    {t.footer.navShowreel}
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    {t.footer.navServices}
                  </Link>
                </li>
                <li>
                  <Link href="#apropos" className="hover:text-white">
                    {t.footer.navAbout}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {t.footer.contactHeading}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="text-zinc-600">{t.footer.emailLbl}</span>
                  <span className="text-zinc-300">vous@exemple.com</span>
                </li>
                <li>
                  <span className="text-zinc-600">{t.footer.whatsappLbl}</span>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 underline decoration-white/15 underline-offset-4 hover:text-white"
                  >
                    {SITE.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 underline decoration-white/15 underline-offset-4 hover:text-white"
                  >
                    {t.footer.instagramLbl}
                    {SITE.instagramHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 underline decoration-white/15 underline-offset-4 hover:text-white"
                  >
                    {t.footer.youtubeLbl}
                    {SITE.youtubeHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-zinc-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {t.footer.rights}
          </p>
          <p>{t.footer.legalHint}</p>
        </div>
      </div>
    </footer>
  );
}
