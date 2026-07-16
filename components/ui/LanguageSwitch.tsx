"use client";

import { useLocale } from "@/components/LocaleProvider";
import { locales } from "@/lib/i18n";

/** Switch FR/EN discret (coin haut droit). Persiste le choix via cookie. */
export default function LanguageSwitch() {
  const { locale, setLocale, dict } = useLocale();

  return (
    <div
      role="group"
      aria-label={dict.header.langSwitchLabel}
      className="flex items-center rounded-full border border-line p-0.5"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`min-w-10 cursor-pointer rounded-full px-3 py-2 text-xs font-medium uppercase tracking-wide transition-colors duration-300 ease-out-quart ${
            locale === l ? "bg-cream text-ink" : "text-cream/60 hover:text-cream"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
