"use client";

import type { Locale } from "@/i18n/types";
import { useI18n } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();

  function select(l: Locale) {
    setLocale(l);
  }

  return (
    <div
      role="group"
      aria-label={t.nav.languageAria}
      className="flex shrink-0 items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5"
    >
      {(["fr", "en"] as const).map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            type="button"
            aria-pressed={active}
            onClick={() => select(l)}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition ${
              active
                ? "bg-white text-surface shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {l === "fr" ? "FR" : "EN"}
          </button>
        );
      })}
    </div>
  );
}
