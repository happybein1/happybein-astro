import { en } from './en';
import { fr } from './fr';
import { es } from './es';
import { nl } from './nl';

export type Lang = 'en' | 'fr' | 'es' | 'nl';

export function getLang(url: URL): Lang {
  if (url.pathname.startsWith('/fr')) return 'fr';
  if (url.pathname.startsWith('/es')) return 'es';
  if (url.pathname.startsWith('/nl')) return 'nl';
  return 'en';
}

export function getT(lang: Lang) {
  if (lang === 'fr') return fr;
  if (lang === 'es') return es;
  if (lang === 'nl') return nl;
  return en;
}

export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'fr') return `/fr${clean === '/' ? '' : clean}`;
  if (lang === 'es') return `/es${clean === '/' ? '' : clean}`;
  if (lang === 'nl') return `/nl${clean === '/' ? '' : clean}`;
  return clean;
}

// Get initiative translations for a given language
// (defined after the translation objects below)
export function getInitiativeT(lang: Lang) {
  if (lang === 'fr') return frInitiatives;
  if (lang === 'es') return esInitiatives;
  if (lang === 'nl') return nlInitiatives;
  return null;
}

// ── French initiative translations ────────────────────────────────────────────
export const frInitiatives: Record<string, {
  badge: string; summary: string; tagline: string; details: any[]; ctaLabel: string;
}> = {
  happybein: {
    badge: "L\u2019Architecte",
    tagline: '',
    summary: "Une fondation engag\u00e9e \u00e0 simplifier la complexit\u00e9 soci\u00e9tale. Nous construisons les cadres qui aident les individus et les leaders \u00e0 naviguer dans un monde bruyant avec clart\u00e9.",
    details: [{ type: 'bullets', items: [
      "Studio de recherche \u00e9tudiant les d\u00e9fis soci\u00e9taux",
      "D\u00e9finit la vision et r\u00e9pond \u00e0 \u00ab\u00a0Pourquoi est-ce important\u00a0?\u00a0\u00bb",
      "\u00c0 but non lucratif, Eindhoven, Pays-Bas \u2014 fond\u00e9e en 2021",
      "Op\u00e8re sur deux flux\u00a0: Efficacit\u00e9 interne + Compr\u00e9hension externe",
    ]}],
    ctaLabel: 'Lire le Manifeste \u2197',
  },
  yeahvibe: {
    badge: 'Plateforme principale',
    tagline: "\u00ab\u00a0Arr\u00eatez de g\u00e9rer le temps. Commencez \u00e0 construire l\u2019effet de levier.\u00a0\u00bb",
    summary: "Le rem\u00e8de au chaos moderne. Un r\u00e9f\u00e9rentiel gratuit et modulaire de \u00ab\u00a0recettes de vie\u00a0\u00bb structur\u00e9 autour de 5 Piliers.",
    details: [
      { type: 'pillars', items: [
        { num: '1', title: "Direction & Priorit\u00e9s", desc: "D\u00e9finissez votre \u00e9toile polaire." },
        { num: '2', title: "\u00c9tat d\u2019esprit", desc: "Recadrage cognitif pour une croissance durable." },
        { num: '3', title: "Environnement & Processus", desc: "R\u00e9duisez les frictions." },
        { num: '4', title: "Collaboration & Leadership", desc: "Amplifiez votre impact." },
        { num: '5', title: "YeahSight", desc: "Comprenez le monde pour le naviguer avec confiance." },
      ]},
      { type: 'link', label: "\ud83c\udfaf Faire l\u2019auto-\u00e9valuation \u2192", href: 'https://form.jotform.com/222552689387066' },
    ],
    ctaLabel: 'Visiter YeahVibe \u2197',
  },
  yeahsight: {
    badge: 'Contexte mondial',
    tagline: "\u00ab\u00a0Pour gagner, vous devez voir le tableau.\u00a0\u00bb",
    summary: "Le Pilier 5 de YeahVibe. D\u00e9code les tendances mondiales en langage simple.",
    details: [
      { type: 'italic', text: "\u00ab\u00a0Pour gagner, vous devez voir le tableau.\u00a0\u00bb" },
      { type: 'bullets', items: [
        "Tendances mondiales en informations exploitables",
        "Montre l\u2019impact du monde sur les d\u00e9cisions quotidiennes",
        "Confus \u2192 \u00c9clair\u00e9 \u2192 Orient\u00e9",
      ]},
    ],
    ctaLabel: 'Visiter YeahSight \u2197',
  },
  yeahdev: {
    badge: "R\u00e9f\u00e9rentiel d\u2019articles",
    tagline: "\u00ab\u00a0Des connaissances pratiques pour d\u00e9velopper votre initiative.\u00a0\u00bb",
    summary: "Une biblioth\u00e8que d\u2019articles sans fioritures ni paywalls pour les fondateurs.",
    details: [
      { type: 'italic', text: "\u00ab\u00a0Des connaissances pratiques.\u00a0\u00bb" },
      { type: 'bullets', items: [
        "Cat\u00e9gories\u00a0: Outils IA, Automatisation, Marketing, Croissance",
        "Sans fioritures ni paywalls",
        "R\u00e9dig\u00e9 pour les fondateurs et b\u00e2tisseurs",
      ]},
    ],
    ctaLabel: 'Visiter YeahDev \u2197',
  },
  workout: {
    badge: 'Outil de micro-exercice',
    tagline: "\u00ab\u00a0Bougez un peu. Gagnez beaucoup.\u00a0\u00bb",
    summary: "S\u00e9lectionne al\u00e9atoirement de courts exercices pour la maison ou le bureau.",
    details: [
      { type: 'italic', text: "\u00ab\u00a0Bougez un peu. Gagnez beaucoup.\u00a0\u00bb" },
      { type: 'bullets', items: [
        "S\u00e9lection al\u00e9atoire \u2014 maison & bureau",
        "Vid\u00e9o YouTube pour chaque exercice",
        "Disponible en fran\u00e7ais \ud83c\uddeb\ud83c\uddf7 et anglais \ud83c\uddec\ud83c\udde7",
      ]},
    ],
    ctaLabel: "Ouvrir l\u2019outil Workout \u2197",
  },
  gametrack: {
    badge: 'Suivi de scores',
    tagline: "\u00ab\u00a0Suivez le score. Montez les enjeux.\u00a0\u00bb",
    summary: "Un suivi de scores simple pour n\u2019importe quel jeu.",
    details: [
      { type: 'italic', text: "\u00ab\u00a0Suivez le score. Montez les enjeux.\u00a0\u00bb" },
      { type: 'bullets', items: [
        "Suivi en temps r\u00e9el", "L\u00e9ger et sans distraction", "Multijoueur",
      ]},
    ],
    ctaLabel: 'Ouvrir GameTrack \u2197',
  },
  speaknote: {
    badge: 'Transcription vocale',
    tagline: "\u00ab\u00a0Parlez. Stockez. Utilisez.\u00a0\u00bb",
    summary: "Transcription instantan\u00e9e dans n\u2019importe quelle langue. 100% local.",
    details: [
      { type: 'italic', text: "\u00ab\u00a0Parlez. Stockez. Utilisez.\u00a0\u00bb" },
      { type: 'bullets', items: [
        "Transcription en temps r\u00e9el multilingue",
        "100% local \u2014 aucune donn\u00e9e envoy\u00e9e",
        "Export en un clic",
      ]},
    ],
    ctaLabel: 'Ouvrir SpeakNote \u2197',
  },
  dailytracker: {
    badge: "Suivi d\u2019habitudes",
    tagline: "\u00ab\u00a0Cochez. Construisez. Ma\u00eetrisez.\u00a0\u00bb",
    summary: "Suivez vos bonnes habitudes et soyez r\u00e9compens\u00e9 pour votre r\u00e9gularit\u00e9.",
    details: [
      { type: 'italic', text: "\u00ab\u00a0Cochez. Construisez. Ma\u00eetrisez.\u00a0\u00bb" },
      { type: 'bullets', items: [
        "Suivi simple sans friction",
        "Syst\u00e8me de r\u00e9compenses",
        "Progression visuelle",
      ]},
    ],
    ctaLabel: 'Ouvrir DailyTracker \u2197',
  },
};

// ── Spanish initiative translations ───────────────────────────────────────────
export const esInitiatives: Record<string, {
  badge: string; summary: string; tagline: string; details: any[]; ctaLabel: string;
}> = {
  happybein: {
    badge: 'El Arquitecto',
    tagline: '',
    summary: 'Una fundación comprometida con simplificar la complejidad social. Construimos los marcos que ayudan a los individuos y líderes a navegar un mundo complejo con claridad.',
    details: [{ type: 'bullets', items: [
      'Estudio de investigación sobre desafíos sociales y mejores prácticas',
      'Define la visión y responde a "¿Por qué importa esto?"',
      'Sin ánimo de lucro, Eindhoven, Países Bajos — fundada en 2021',
      'Opera en dos flujos: Eficiencia interna + Comprensión externa',
    ]}],
    ctaLabel: 'Leer el Manifiesto ↗',
  },
  yeahvibe: {
    badge: 'Plataforma principal',
    tagline: '"Deja de gestionar el tiempo. Empieza a construir influencia."',
    summary: 'El remedio al caos moderno. Un repositorio gratuito y modular de "recetas de vida" estructurado en torno a 5 Pilares.',
    details: [
      { type: 'pillars', items: [
        { num: '1', title: 'Dirección y Prioridades', desc: 'Define tu estrella polar.' },
        { num: '2', title: 'Mentalidad', desc: 'Reencuadre cognitivo para un crecimiento sostenible.' },
        { num: '3', title: 'Entorno y Procesos', desc: 'Reduce fricciones, recupera energía.' },
        { num: '4', title: 'Colaboración y Liderazgo', desc: 'Amplifica tu impacto.' },
        { num: '5', title: 'YeahSight', desc: 'Entiende el mundo para navegarlo con confianza.' },
      ]},
      { type: 'link', label: '🎯 Hacer la autoevaluación →', href: 'https://form.jotform.com/222552689387066' },
    ],
    ctaLabel: 'Visitar YeahVibe ↗',
  },
  yeahsight: {
    badge: 'Contexto mundial',
    tagline: '"Para ganar, debes ver el tablero."',
    summary: 'El Pilar 5 de YeahVibe. Decodifica las tendencias globales en lenguaje sencillo.',
    details: [
      { type: 'italic', text: '"Para ganar, debes ver el tablero."' },
      { type: 'bullets', items: [
        'Tendencias globales en información accionable',
        'Muestra cómo el mundo impacta las decisiones cotidianas',
        'Confundido → Informado → Orientado',
      ]},
    ],
    ctaLabel: 'Visitar YeahSight ↗',
  },
  yeahdev: {
    badge: 'Repositorio de artículos',
    tagline: '"Conocimiento práctico para desarrollar tu iniciativa."',
    summary: 'Una biblioteca de artículos sin relleno ni muros de pago para fundadores y creadores.',
    details: [
      { type: 'italic', text: '"Conocimiento práctico para desarrollar tu iniciativa."' },
      { type: 'bullets', items: [
        'Categorías: Herramientas IA, Automatización, Marketing, Crecimiento',
        'Sin relleno ni paywalls',
        'Escrito para fundadores y creadores',
      ]},
    ],
    ctaLabel: 'Visitar YeahDev ↗',
  },
  workout: {
    badge: 'Herramienta de micro-ejercicio',
    tagline: '"Muévete un poco. Gana mucho."',
    summary: 'Selecciona aleatoriamente ejercicios cortos para casa u oficina.',
    details: [
      { type: 'italic', text: '"Muévete un poco. Gana mucho."' },
      { type: 'bullets', items: [
        'Selección aleatoria — hogar y oficina',
        'Video instructivo para cada ejercicio',
        'Disponible en francés e inglés',
      ]},
    ],
    ctaLabel: 'Abrir Workout ↗',
  },
  gametrack: {
    badge: 'Marcador de puntuaciones',
    tagline: '"Lleva el marcador. Sube las apuestas."',
    summary: 'Un marcador simple para cualquier juego de mesa o multijugador.',
    details: [
      { type: 'italic', text: '"Lleva el marcador. Sube las apuestas."' },
      { type: 'bullets', items: [
        'Puntuaciones en tiempo real', 'Ligero y sin distracciones', 'Multijugador',
      ]},
    ],
    ctaLabel: 'Abrir GameTrack ↗',
  },
  speaknote: {
    badge: 'Transcripción de voz',
    tagline: '"Habla. Almacena. Usa."',
    summary: 'Transcripción instantánea en cualquier idioma. Datos 100% locales.',
    details: [
      { type: 'italic', text: '"Habla. Almacena. Usa."' },
      { type: 'bullets', items: [
        'Transcripción en tiempo real multilingüe',
        '100% local — sin datos enviados a servidores',
        'Exportación al portapapeles',
      ]},
    ],
    ctaLabel: 'Abrir SpeakNote ↗',
  },
  dailytracker: {
    badge: 'Seguimiento de hábitos',
    tagline: '"Marca. Construye. Domina."',
    summary: 'Marca tus buenos hábitos diarios y recibe recompensas por tu constancia.',
    details: [
      { type: 'italic', text: '"Marca. Construye. Domina."' },
      { type: 'bullets', items: [
        'Seguimiento simple sin fricción',
        'Sistema de recompensas por constancia',
        'Progreso visual motivador',
      ]},
    ],
    ctaLabel: 'Abrir DailyTracker ↗',
  },
};

// ── Dutch initiative translations ─────────────────────────────────────────────
export const nlInitiatives: Record<string, {
  badge: string; summary: string; tagline: string; details: any[]; ctaLabel: string;
}> = {
  happybein: {
    badge: 'De Architect',
    tagline: '',
    summary: 'Een doelgerichte stichting toegewijd aan het vereenvoudigen van maatschappelijke complexiteit. Wij bouwen de kaders die individuen en leiders helpen een complexe wereld met helderheid te navigeren.',
    details: [{ type: 'bullets', items: [
      'Onderzoeksstudio die maatschappelijke uitdagingen en beste praktijken bestudeert',
      'Definieert de visie en beantwoordt "Waarom is dit belangrijk?"',
      'Non-profit, Eindhoven, Nederland — opgericht in 2021',
      'Opereert via twee stromen: Interne efficiëntie + Externe begrip',
    ]}],
    ctaLabel: 'Lees het Manifest ↗',
  },
  yeahvibe: {
    badge: 'Kernplatform',
    tagline: '"Stop met tijd beheren. Begin met invloed opbouwen."',
    summary: 'Het tegengif voor moderne chaos. Een gratis, modulaire bibliotheek van "levensrecepten" gestructureerd rond 5 Hefbomen.',
    details: [
      { type: 'pillars', items: [
        { num: '1', title: 'Richting & Prioriteiten', desc: 'Definieer je poolster zodat elke inspanning telt.' },
        { num: '2', title: 'Mindset', desc: 'Cognitief herkaderen voor duurzame groei.' },
        { num: '3', title: 'Omgeving & Processen', desc: 'Verminder wrijving, herstel energie.' },
        { num: '4', title: 'Samenwerking & Leiderschap', desc: 'Vergroot je impact via anderen.' },
        { num: '5', title: 'YeahSight', desc: 'Begrijp de wereld om haar vol vertrouwen te navigeren.' },
      ]},
      { type: 'link', label: '🎯 Doe de zelfevaluatie →', href: 'https://form.jotform.com/222552689387066' },
    ],
    ctaLabel: 'Bezoek YeahVibe ↗',
  },
  yeahsight: {
    badge: 'Wereldcontext',
    tagline: '"Om te winnen, moet je het bord zien."',
    summary: 'Hefboom 5 van YeahVibe. Decodeert wereldwijde trends en maatschappelijke complexiteit in begrijpelijke taal voor een zekere langetermijnrichting.',
    details: [
      { type: 'italic', text: '"Om te winnen, moet je het bord zien."' },
      { type: 'bullets', items: [
        'Wereldwijde trends vertaald naar bruikbare inzichten',
        'Toont hoe de staat van de wereld dagelijkse beslissingen beïnvloedt',
        'Van Verward → Geïnformeerd → Gericht',
      ]},
    ],
    ctaLabel: 'Bezoek YeahSight ↗',
  },
  yeahdev: {
    badge: 'Artikelbibliotheek',
    tagline: '"Praktische kennis om jouw initiatief te ontwikkelen."',
    summary: 'Een bibliotheek van artikelen zonder opvulling of betaalmuren voor oprichters, bouwers en makers.',
    details: [
      { type: 'italic', text: '"Praktische kennis om jouw initiatief te ontwikkelen."' },
      { type: 'bullets', items: [
        'Categorieën: AI-tools, Automatisering, Marketing, Groei',
        'Geen opvulling, geen betaalmuren — direct nuttige artikelen',
        'Geschreven voor oprichters, bouwers en makers',
      ]},
    ],
    ctaLabel: 'Bezoek YeahDev ↗',
  },
  workout: {
    badge: 'Micro-oefening tool',
    tagline: '"Beweeg een beetje. Win veel."',
    summary: 'Selecteert willekeurig korte oefeningen voor thuis of op kantoor. Geen sportschool nodig — gewoon een korte bewegingspauze.',
    details: [
      { type: 'italic', text: '"Beweeg een beetje. Win veel."' },
      { type: 'bullets', items: [
        'Willekeurige oefeningen — thuis & kantoor',
        'Instructievideo bij elke oefening',
        'Beschikbaar in Frans en Engels',
        'Snel en zonder wrijving',
      ]},
    ],
    ctaLabel: 'Open Workout ↗',
  },
  gametrack: {
    badge: 'Scorebijhouder',
    tagline: '"Houd de score bij. Verhoog de inzet."',
    summary: 'Een eenvoudige, afleidingsvrije scorebijhouder voor elk spel — bordspellen, kaartspellen of andere multiplayer activiteiten.',
    details: [
      { type: 'italic', text: '"Houd de score bij. Verhoog de inzet."' },
      { type: 'bullets', items: [
        'Real-time score bijhouden voor elk spelformaat',
        'Licht en afleidingsvrij — gebouwd om te spelen',
        'Werkt voor meerdere spelers: familie, vrienden of teams',
      ]},
    ],
    ctaLabel: 'Open GameTrack ↗',
  },
  speaknote: {
    badge: 'Spraaktranscriptie',
    tagline: '"Spreek. Sla op. Gebruik."',
    summary: 'Luistert naar wat je zegt — in elke taal — en schrijft het direct neer. Jouw gegevens blijven privé en lokaal.',
    details: [
      { type: 'italic', text: '"Spreek. Sla op. Gebruik."' },
      { type: 'bullets', items: [
        'Real-time spraak-naar-tekst in meerdere talen',
        '100% lokaal — geen gegevens naar een server',
        'Exporteer met één tik naar klembord',
        'Geen account, geen aanmelding, geen tracking',
      ]},
    ],
    ctaLabel: 'Open SpeakNote ↗',
  },
  dailytracker: {
    badge: 'Gewoontetracker',
    tagline: '"Vink af. Bouw op. Beheers het."',
    summary: 'Een eenvoudige gewoontetracker waarmee je goede dagelijkse gewoonten afvinkt en beloond wordt voor consistentie.',
    details: [
      { type: 'italic', text: '"Vink af. Bouw op. Beheers het."' },
      { type: 'bullets', items: [
        'Eenvoudig gewoonten bijhouden — zonder wrijving',
        'Beloningssysteem dat consistentie viert',
        'Visuele voortgang om gemotiveerd te blijven',
        'Geen account vereist',
      ]},
    ],
    ctaLabel: 'Open DailyTracker ↗',
  },
};

// Keep backwards compatibility — must come after frInitiatives is declared
export const initiativeTranslations = frInitiatives;
