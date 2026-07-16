import fr from "@/locales/fr.json";
import en from "@/locales/en.json";

/**
 * i18n minimaliste, sans dépendance externe.
 *
 * - Les textes vivent dans /locales/fr.json et /locales/en.json (mêmes clés).
 * - La langue est persistée dans un cookie `locale`, lu côté serveur (SSR)
 *   par app/layout.tsx et côté client par le LocaleProvider.
 * - Convention : dans un texte, les *mots entre astérisques* sont rendus
 *   en italique serif par le composant <Accent /> (accent typographique).
 */

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";
export const LOCALE_COOKIE = "locale";

/** Le français fait référence : le shape de en.json doit suivre celui de fr.json. */
export type Dictionary = typeof fr;

export const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Remplace les jetons `{clé}` d'un texte de locale par leurs valeurs. */
export function interpolate(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in values ? String(values[key]) : `{${key}}`
  );
}
