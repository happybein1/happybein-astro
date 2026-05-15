import { en } from './en';
import { fr } from './fr';

export type Lang = 'en' | 'fr';

export function getLang(url: URL): Lang {
  return url.pathname.startsWith('/fr') ? 'fr' : 'en';
}

export function getT(lang: Lang) {
  return lang === 'fr' ? fr : en;
}

export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'fr') return `/fr${clean === '/' ? '' : clean}`;
  return clean;
}

// French translations for initiative content
export const initiativeTranslations: Record<string, {
  badge: string;
  summary: string;
  tagline: string;
  details: any[];
  ctaLabel: string;
}> = {
  happybein: {
    badge: 'L\'Architecte',
    tagline: '',
    summary: 'Une fondation engagée à simplifier la complexité sociétale. Nous construisons les cadres qui aident les individus et les leaders à naviguer dans un monde bruyant avec clarté.',
    details: [{ type: 'bullets', items: [
      'Studio de recherche étudiant les défis sociétaux et les meilleures pratiques',
      'Définit la vision et répond à « Pourquoi est-ce important ? »',
      'À but non lucratif, Eindhoven, Pays-Bas — fondée en 2021',
      'Opère sur deux flux : Efficacité interne + Compréhension externe',
    ]}],
    ctaLabel: 'Lire le Manifeste ↗',
  },
  yeahvibe: {
    badge: 'Plateforme principale',
    tagline: '« Arrêtez de gérer le temps. Commencez à construire l\'effet de levier. »',
    summary: 'Le remède au chaos moderne. Un référentiel gratuit et modulaire de « recettes de vie » structuré autour de 5 Piliers — transformant la sagesse abstraite en étapes concrètes.',
    details: [
      { type: 'pillars', items: [
        { num: '1', title: 'Direction & Priorités', desc: 'Définissez votre étoile polaire pour que chaque effort compte.' },
        { num: '2', title: 'État d\'esprit', desc: 'Recadrage cognitif pour une croissance durable.' },
        { num: '3', title: 'Environnement & Processus', desc: 'Réduisez les frictions, récupérez de l\'énergie.' },
        { num: '4', title: 'Collaboration & Leadership', desc: 'Amplifiez votre impact à travers les autres.' },
        { num: '5', title: 'YeahSight', desc: 'Comprenez le monde pour le naviguer avec confiance.' },
      ]},
      { type: 'link', label: '🎯 Faire l\'auto-évaluation →', href: 'https://form.jotform.com/222552689387066' },
    ],
    ctaLabel: 'Visiter YeahVibe ↗',
  },
  yeahsight: {
    badge: 'Contexte mondial',
    tagline: '« Pour gagner, vous devez voir le tableau. »',
    summary: 'Le Pilier 5 de YeahVibe. Décode les tendances mondiales et la complexité sociétale en langage simple pour définir une direction à long terme confiante.',
    details: [
      { type: 'italic', text: '« Pour gagner, vous devez voir le tableau. »' },
      { type: 'bullets', items: [
        'Tendances mondiales traduites en informations exploitables',
        'Montre comment l\'état du monde impacte les décisions quotidiennes',
        'Le remède à l\'inquiétude sur l\'avenir du monde',
        'Vous fait passer : Confus → Éclairé → Orienté',
      ]},
    ],
    ctaLabel: 'Visiter YeahSight ↗',
  },
  yeahdev: {
    badge: 'Référentiel d\'articles',
    tagline: '« Des connaissances pratiques pour développer votre initiative. »',
    summary: 'Une bibliothèque d\'articles sans fioritures ni paywalls pour les fondateurs, bâtisseurs et créateurs développant une initiative.',
    details: [
      { type: 'italic', text: '« Des connaissances pratiques pour développer votre initiative. »' },
      { type: 'bullets', items: [
        'Catégories : Outils IA, Automatisation, Marketing, Croissance',
        'Sans fioritures ni paywalls — des articles directement utiles',
        'Rédigé pour les fondateurs, bâtisseurs et créateurs',
        'Nouveaux articles publiés en continu',
      ]},
    ],
    ctaLabel: 'Visiter YeahDev ↗',
  },
  workout: {
    badge: 'Outil de micro-exercice',
    tagline: '« Bougez un peu. Gagnez beaucoup. »',
    summary: 'Sélectionne aléatoirement de courts exercices adaptés à la maison ou au bureau. Pas de salle de sport nécessaire — juste une courte pause pour lutter contre la sédentarité.',
    details: [
      { type: 'italic', text: '« Bougez un peu. Gagnez beaucoup. »' },
      { type: 'bullets', items: [
        'Sélection aléatoire d\'exercices — maison & bureau',
        'Vidéo YouTube explicative pour chaque exercice',
        'Disponible en français 🇫🇷 et en anglais 🇬🇧',
        'Flux « Exercice suivant » — rapide et sans friction',
      ]},
    ],
    ctaLabel: 'Ouvrir l\'outil Workout ↗',
  },
  gametrack: {
    badge: 'Suivi de scores',
    tagline: '« Suivez le score. Montez les enjeux. »',
    summary: 'Un suivi de scores simple et sans distraction pour n\'importe quel jeu — jeux de société, jeux de cartes, ou toute activité nécessitant un tableau de scores.',
    details: [
      { type: 'italic', text: '« Suivez le score. Montez les enjeux. »' },
      { type: 'bullets', items: [
        'Suivi de scores en temps réel pour tout format de jeu',
        'Léger et sans distraction — conçu pour jouer',
        'Fonctionne en multijoueur : famille, amis ou équipes',
        'Loisir conscient — reposez-vous intentionnellement',
      ]},
    ],
    ctaLabel: 'Ouvrir GameTrack ↗',
  },
  speaknote: {
    badge: 'Transcription vocale',
    tagline: '« Parlez. Stockez. Utilisez. »',
    summary: 'Écoute ce que vous dites — dans n\'importe quelle langue — et le transcrit instantanément. Vos données restent privées et locales, prêtes à être copiées dans le presse-papiers.',
    details: [
      { type: 'italic', text: '« Parlez. Stockez. Utilisez. »' },
      { type: 'bullets', items: [
        'Transcription vocale en temps réel dans plusieurs langues',
        '100% local — aucune donnée envoyée à un serveur',
        'Export en un clic vers le presse-papiers',
        'Sans compte, sans inscription, sans tracking',
      ]},
    ],
    ctaLabel: 'Ouvrir SpeakNote ↗',
  },
  dailytracker: {
    badge: 'Suivi d\'habitudes',
    tagline: '« Cochez. Construisez. Maîtrisez. »',
    summary: 'Un suivi d\'habitudes simple qui vous permet de cocher vos bonnes habitudes quotidiennes et récompense votre régularité. De petites victoires, des résultats cumulés.',
    details: [
      { type: 'italic', text: '« Cochez. Construisez. Maîtrisez. »' },
      { type: 'bullets', items: [
        'Suivez vos habitudes avec une simple coche — sans friction',
        'Système de récompenses qui célèbre la régularité',
        'Progression visuelle pour rester motivé',
        'Léger et rapide — sans compte requis',
      ]},
    ],
    ctaLabel: 'Ouvrir DailyTracker ↗',
  },
};
