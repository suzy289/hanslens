"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/config/site";
import { useI18n } from "@/i18n/LanguageContext";
import { whatsappContactUrl } from "@/lib/whatsapp";
import { LOGO_IMAGE } from "@/lib/media";
import { PublicImage } from "@/components/PublicImage";
import { SocialLinks } from "@/components/SocialLinks";
import { LanguageToggle } from "@/components/LanguageToggle";

const routes = [
  { href: "#travaux", key: "works" as const },
  { href: "#showreel", key: "showreel" as const },
  { href: "#galerie", key: "gallery" as const },
  { href: "#services", key: "services" as const },
  { href: "#apropos", key: "about" as const },
  { href: "#contact", key: "contact" as const },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const whatsappHref = whatsappContactUrl(t.whatsapp.prefillMessage);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6">
        <Link href="#" className="flex min-w-0 items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-surface-muted">
            <PublicImage
              file={LOGO_IMAGE}
              alt={`Logo ${SITE.name}`}
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate font-display text-sm font-semibold tracking-tight text-white sm:text-base">
              {SITE.name}
            </p>
            <p className="truncate text-[11px] text-zinc-500">{t.brandTagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          {routes.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-zinc-400 transition hover:text-white">
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 sm:gap-3 lg:flex">
          <LanguageToggle />
          <SocialLinks variant="icons" />
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-ig px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
          >
            {t.nav.contactMe}
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label={t.nav.menu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{t.nav.menu}</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-surface px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {routes.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-zinc-300"
                onClick={() => setOpen(false)}
              >
                {t.nav[l.key]}
              </Link>
            ))}
            <div className="flex items-center justify-between gap-3 pt-2">
              <SocialLinks variant="icons" />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-ig px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {t.nav.contactMe}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
