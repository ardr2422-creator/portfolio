/**
 * Coordonnées et infos globales du site.
 * Tout ce qui est susceptible de changer (numéro, email, domaine) se modifie ici.
 */
export const site = {
  name: "Abdallah",
  /** URL canonique de production (utilisée pour les métadonnées / Open Graph). */
  url: "https://abdee.dev",
  /** Email de contact (utilisé par le lien email et le fallback du formulaire). */
  email: "abdallahters.pro@gmail.com",
  /** Numéro WhatsApp au format international sans "+" ni espaces (format wa.me). */
  whatsapp: "33646858554",
} as const;

/** Lien WhatsApp direct, avec message pré-rempli optionnel. */
export function whatsappUrl(prefill?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return prefill ? `${base}?text=${encodeURIComponent(prefill)}` : base;
}
