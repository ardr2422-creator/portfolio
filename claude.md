CLAUDE.md — Portfolio Abdee



Règles à respecter sur tout ce projet. Lis ce fichier avant toute modification.



Contexte du projet



Portfolio personnel de dev (Abdee), one-page scroll, style épuré inspiré de perryw-2023.webflow.io.

Objectif : montrer une polyvalence technique et un niveau de finition élevé. Ce n'est pas un site vitrine de restaurant, c'est ma carte de visite pro.



Stack





Next.js (App Router), TypeScript strict

Tailwind CSS — pas de CSS-in-JS, pas de librairie UI lourde (pas de MUI/Chakra)

Déploiement : Vercel

Contenu : fichiers de data statiques (/data), pas de CMS, pas de base de données

i18n : fichiers de traduction JSON séparés, aucun texte en dur dans les composants (FR/EN)





Structure de fichiers attendue



/app

&#x20; /page.tsx          → la home (one-page)

&#x20; /layout.tsx

/components

&#x20; /sections           → Hero, Work, About, Contact (un composant par section)

&#x20; /ui                  → boutons, cards, éléments réutilisables

/data

&#x20; /projects.ts         → liste des projets (nom, tagline, lien, image, techs, année)

/locales

&#x20; /fr.json

&#x20; /en.json

/public

&#x20; /images



Règles de design





Whitespace généreux, jamais de sections surchargées

Typographie = élément central du design (grands titres, hiérarchie claire)

Palette sobre (2-3 couleurs max + noir/blanc), pas de dégradés criards

Animations discrètes au scroll (fade/slide léger), jamais gadget ou lent

Mobile-first : toutes les sections doivent être testées et validées en mobile avant desktop





Règles de contenu





Section About : rester volontairement vague sur l'âge/statut. Ton confiant, pas de justification.

Section Contact : pas de tarifs affichés. Ton "discovery call" — inviter à discuter du projet, pas à acheter directement.

Les 9 projets à afficher (dans cet ordre par défaut, modifiable) : WSI, Anaphys, Ouine Distribution, Kayani Kitchen, Dr Wings, Saiyan Food, BENTI, C'Mon Dessert, Chicken Story.

Chaque projet doit avoir un placeholder clair si l'image/lien n'est pas encore fourni (ne jamais casser le build à cause d'un asset manquant).





Règles techniques





Toutes les images passent par next/image

Pas de dépendance ajoutée sans raison claire (vérifier avant npm install)

Le switch de langue doit persister la préférence (localStorage ou cookie) et ne jamais casser le SSR

Le formulaire de contact et le lien WhatsApp doivent être fonctionnels dès le premier déploiement (pas de "TODO" en prod)

Lighthouse : viser 90+ sur Performance et Accessibilité avant de considérer une section "terminée"





Ce qu'il ne faut jamais faire





Ne jamais dupliquer un composant de section pour créer une variante — factoriser avec des props

Ne jamais coder les textes affichés en dur dans les .tsx, toujours passer par les fichiers de locale

Ne jamais ajouter de section "Tarifs/Pricing" sans demande explicite

Ne jamais introduire d'animation qui ralentit le scroll ou capture le scroll natif (pas de scroll-jacking)





Workflow





Avant tout gros changement structurel : proposer un plan court, attendre validation

Après chaque section terminée : vérifier le rendu mobile + build (npm run build) sans erreur avant de passer à la suivante

