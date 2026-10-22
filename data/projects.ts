import type { Locale } from "@/lib/i18n";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  LISTE DES PROJETS — c'est ICI qu'on ajoute / modifie / réordonne un projet.
 *  L'ordre du tableau = l'ordre d'affichage sur la page.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  Champs :
 *  - slug     : identifiant unique (sert de clé React, pas d'espaces)
 *  - name     : nom affiché du projet
 *  - year     : année affichée telle quelle (ex: "'25") — à ajuster par projet
 *  - client   : contexte client, par langue (affiché avant l'année)
 *  - tagline  : une ligne de description, par langue
 *  - url      : lien vers le site live — OMETTRE le champ si pas encore en ligne
 *               (la carte affichera "Bientôt en ligne" et ne sera pas cliquable)
 *  - image    : chemin du screenshot dans /public — OMETTRE si pas encore fourni
 *               (un placeholder propre s'affiche, le build ne casse jamais)
 *  - techs    : technologies affichées sous la description
 */

export type LocalizedText = Record<Locale, string>;

export type Project = {
  slug: string;
  name: string;
  year: string;
  client: LocalizedText;
  tagline: LocalizedText;
  url?: string;
  image?: string;
  techs: string[];
};

export const projects: Project[] = [
  {
    slug: "wsi",
    name: "WSI",
    year: "'26",
    client: {
      fr: "Infogérance & IT pour PME, Gennevilliers",
      en: "Managed IT for SMBs, Gennevilliers (FR)",
    },
    tagline: {
      fr: "Refonte complète après audit : scène 3D signature, accessibilité, SEO et sécurité repensés de A à Z.",
      en: "Full redesign after an audit: signature 3D scene, with accessibility, SEO and security rebuilt from A to Z.",
    },
    url: "https://wsi-site-demo.vercel.app",
    image: "/images/projects/wsi.jpg",
    techs: ["Astro", "Three.js", "Playwright", "Vercel"],
  },
  {
    slug: "anaphys",
    name: "Anaphys",
    year: "'26",
    client: {
      fr: "Soins capillaires naturels, e-commerce",
      en: "Natural hair care, e-commerce",
    },
    tagline: {
      fr: "Thème Shopify sur mesure : diagnostic « Trouve ton rituel », packs de soins et étiquettes personnalisées.",
      en: "Custom Shopify theme: “find your ritual” quiz, care bundles and personalised labels.",
    },
    url: "https://anaphys.com",
    image: "/images/projects/anaphys.jpg",
    techs: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    slug: "ouine-distribution",
    name: "Ouine Distribution",
    year: "'26",
    client: {
      fr: "Distributeur alimentaire B2B, Argenteuil",
      en: "B2B food distributor, Argenteuil (FR)",
    },
    tagline: {
      fr: "Site bilingue orienté revendeurs : marques exclusives, formulaire partenaire et SEO soigné.",
      en: "Bilingual, reseller-focused site: exclusive brands, partner form and polished SEO.",
    },
    url: "https://ouine-distribution.vercel.app",
    image: "/images/projects/ouine-distribution.jpg",
    techs: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    slug: "kayani-kitchen",
    name: "Kayani Kitchen",
    year: "'25",
    client: {
      fr: "Restaurant indien & pakistanais, Sannois",
      en: "Indian & Pakistani restaurant, Sannois (FR)",
    },
    tagline: {
      fr: "Site vitrine immersif — menu, histoire et commande en ligne.",
      en: "Immersive showcase site — menu, story and online ordering.",
    },
    url: "https://kayani-kitchen.vercel.app",
    image: "/images/projects/kayani-kitchen.jpg",
    techs: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    slug: "dr-wings",
    name: "Dr Wings",
    year: "'25",
    client: {
      fr: "Delicious Group, fast-food",
      en: "Delicious Group, fast food",
    },
    tagline: {
      fr: "« La clinique du poulet » : une identité décalée poussée à fond, wings livrées via Uber Eats.",
      en: "“The chicken clinic”: a playful brand pushed all the way, wings delivered via Uber Eats.",
    },
    url: "https://dr-wings.vercel.app",
    image: "/images/projects/dr-wings.jpg",
    techs: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    slug: "saiyan-food",
    name: "Saiyan Food",
    year: "'25",
    client: {
      fr: "American & Asian food, Argenteuil",
      en: "American & Asian food, Argenteuil (FR)",
    },
    tagline: {
      fr: "Carte hybride américano-asiatique, design énergique d'inspiration manga.",
      en: "Hybrid American-Asian menu with a high-energy, manga-inspired design.",
    },
    url: "https://saiyan-food.vercel.app",
    image: "/images/projects/saiyan-food.jpg",
    techs: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    slug: "benti",
    name: "BENTI",
    year: "'25",
    client: {
      fr: "Cuisine tunisienne faite maison, Paris",
      en: "Homemade Tunisian cuisine, Paris",
    },
    tagline: {
      fr: "Le makloub de Sidi Bou Saïd, raconté avec une direction artistique chaleureuse.",
      en: "The makloub of Sidi Bou Saïd, told through a warm art direction.",
    },
    url: "https://benti-paris.vercel.app",
    image: "/images/projects/benti.jpg",
    techs: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    slug: "c-mon-dessert",
    name: "C'Mon Dessert",
    year: "'25",
    client: {
      fr: "Desserts & bubble tea, Île-de-France",
      en: "Desserts & bubble tea, Paris area",
    },
    tagline: {
      fr: "Desserts livrés jusqu'à 4h30 du matin — commande en ligne et carte gourmande.",
      en: "Desserts delivered until 4:30am — online ordering and an indulgent menu.",
    },
    image: "/images/projects/c-mon-dessert.jpg",
    techs: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    slug: "chicken-story",
    name: "Chicken Story",
    year: "'26",
    client: {
      fr: "Poulet frit, Argenteuil",
      en: "Fried chicken, Argenteuil (FR)",
    },
    tagline: {
      fr: "« L'obsession du poulet frit » : une street food premium, typographie XXL et carte qui donne faim.",
      en: "“Obsessed with fried chicken”: premium street food, XXL type and a menu that makes you hungry.",
    },
    url: "https://chicken-story-website.vercel.app",
    image: "/images/projects/chicken-story.jpg",
    techs: ["HTML", "CSS", "JavaScript", "Node.js"],
  },
];
