# abdee.dev — Portfolio

Portfolio personnel one-page (Next.js App Router + TypeScript + Tailwind CSS v4), bilingue FR/EN, déployable sur Vercel.

## Démarrer en local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
```

## Structure

```
app/
  layout.tsx          # polices, métadonnées, lecture du cookie de langue (SSR)
  page.tsx            # la home : Hero → Work → About → Contact
  globals.css         # design tokens (couleurs, polices, easing) + styles de base
components/
  sections/           # un composant par section (Header, Hero, Work, About, Contact, Footer)
  ui/                 # briques réutilisables (ProjectCard, Reveal, LanguageSwitch…)
  LocaleProvider.tsx  # contexte i18n côté client
data/
  projects.ts         # ⭐ LA liste des projets — ajouter/modifier/réordonner ici
  site.ts             # email, numéro WhatsApp, domaine
locales/
  fr.json / en.json   # tous les textes du site (aucun texte en dur dans les composants)
public/images/projects/  # screenshots des projets (1420×900)
```

## Éditer le contenu

### Ajouter / modifier un projet
Ouvrir `data/projects.ts` et suivre le modèle existant. Champs utiles :
- `url` : **omettre** le champ si le site n'est pas encore en ligne → la carte affiche « Bientôt en ligne » et n'est pas cliquable.
- `image` : **omettre** si le screenshot n'existe pas encore → un placeholder propre s'affiche, le build ne casse jamais.
- `year` : affiché tel quel (ex. `"'25"`) — pensez à l'ajuster projet par projet.

### Modifier les textes
Tout est dans `locales/fr.json` et `locales/en.json` (mêmes clés dans les deux fichiers).
Convention : dans un titre, les `*mots entre astérisques*` sont rendus en **italique serif** (accent typographique).

### Variantes d'accroche (hero)
L'accroche actuelle est la variante 2. Pour en changer, remplacer `hero.title` dans les deux locales :

| # | FR | EN |
|---|----|----|
| 1 | `Je construis des expériences web rapides, précises & *mémorables*.` | `I build fast, precise & *memorable* web experiences.` |
| 2 | `Des sites qui ne font pas que plaire. Ils *convertissent*.` *(actuelle)* | `Websites that don't just look good. They *convert*.` |
| 3 | `Développeur web. Du premier pixel au *dernier client*.` | `Web developer. From first pixel to *lasting customers*.` |

## Langue (FR/EN)

- Défaut : FR. Le switch en haut à droite pose un cookie `locale` (1 an).
- Le cookie est lu côté serveur (`app/layout.tsx`) → le SSR sert toujours la bonne langue, sans flash ni mismatch d'hydratation.

## Formulaire de contact

Fonctionnel dès le premier déploiement, sans backend :
- **Sans configuration** : le formulaire ouvre le client email du visiteur avec le message pré-rempli (fallback `mailto:` vers l'adresse de `data/site.ts`).
- **Recommandé en prod** : créer un formulaire sur [Formspree](https://formspree.io) ou [Web3Forms](https://web3forms.com) (gratuit), puis définir la variable d'environnement sur Vercel :

```
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Le bouton WhatsApp pointe vers `wa.me/33646858554` avec un message pré-rempli (modifiable dans les locales, clé `contact.whatsappPrefill`).

## Déployer sur Vercel + domaine abdee.dev

1. Pousser le repo sur GitHub puis « Import Project » sur Vercel (framework auto-détecté : Next.js). Aucune config particulière.
2. (Optionnel) Ajouter `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` dans *Settings → Environment Variables*.
3. *Settings → Domains* → ajouter `abdee.dev` et suivre les instructions DNS (A record `76.76.21.21` ou nameservers Vercel selon le registrar). `www.abdee.dev` en redirection vers l'apex.

## Notes techniques

- **Performance** : polices auto-hébergées via `next/font` (zéro requête externe), images via `next/image` (AVIF/WebP), aucune librairie d'animation — les reveals utilisent `IntersectionObserver` + `transform/opacity` uniquement.
- **Accessibilité** : labels visibles sur le formulaire, `aria-live` sur le statut d'envoi, lien d'évitement clavier, `prefers-reduced-motion` respecté (animations et smooth-scroll désactivés).
- **Screenshots projets** : régénérables en capturant les sites live en 1440×900 puis en plaçant les fichiers dans `public/images/projects/`.
