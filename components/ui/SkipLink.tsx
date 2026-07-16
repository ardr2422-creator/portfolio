"use client";

import { useLocale } from "@/components/LocaleProvider";

/** Lien d'évitement clavier : invisible jusqu'au focus (accessibilité). */
export default function SkipLink() {
  const { dict } = useLocale();
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink"
    >
      {dict.a11y.skipToContent}
    </a>
  );
}
