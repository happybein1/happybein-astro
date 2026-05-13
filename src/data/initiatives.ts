export interface Initiative {
  id: string;
  name: string;
  url: string;
  externalUrl: string;
  icon: string;
  badge: string;
  bannerClass: string;
  iconBgClass: string;
  badgeColorClass: string;
  toggleColorClass: string;
  linkColorClass: string;
  dotColor: string;
  statusLabel: string;
  tagline: string;
  summary: string;
  details: DetailBlock[];
  ctaLabel: string;
}

export type DetailBlock =
  | { type: 'italic'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'pillars'; items: { num: string; title: string; desc: string }[] }
  | { type: 'link'; label: string; href: string };

export const initiatives: Initiative[] = [
  {
    id: 'happybein',
    name: 'HappyBein Foundation',
    url: '/initiatives#happybein',
    externalUrl: 'https://happybein.com',
    icon: '🏛',
    badge: 'The Architect',
    bannerClass: 'bg-gradient-to-r from-[#29ABE2] to-[#4CAF50]',
    iconBgClass: 'bg-[#29ABE2]/10',
    badgeColorClass: 'bg-[#29ABE2]/10 text-[#1A7FAA]',
    toggleColorClass: 'text-[#1A7FAA] border-[#29ABE2]/30',
    linkColorClass: 'text-[#1A7FAA]',
    dotColor: '#29ABE2',
    statusLabel: 'Active',
    tagline: '',
    summary: 'A purpose-driven foundation dedicated to simplifying societal complexity. We build the frameworks that help individuals and leaders navigate a noisy world with clarity.',
    details: [
      { type: 'bullets', items: [
        'Research studio studying societal challenges and curating best practices',
        'Defines the vision and answers "Why does this matter?"',
        'Non-profit, Eindhoven, Netherlands — founded 2021',
        'Operates across two streams: Internal Efficiency + External Understanding',
      ]},
    ],
    ctaLabel: 'Read the Manifesto ↗',
  },
  {
    id: 'yeahvibe',
    name: 'YeahVibe',
    url: 'https://yeahvibe.com',
    externalUrl: 'https://yeahvibe.com',
    icon: '⚡',
    badge: 'Core Platform',
    bannerClass: 'bg-gradient-to-r from-teal-DEFAULT to-teal-light',
    iconBgClass: 'bg-teal-DEFAULT/10',
    badgeColorClass: 'bg-teal-DEFAULT/10 text-teal-dark',
    toggleColorClass: 'text-teal-dark border-teal-DEFAULT/30',
    linkColorClass: 'text-teal-dark',
    dotColor: '#2ABFBF',
    statusLabel: 'Live',
    tagline: '"Stop managing time. Start building leverage."',
    summary: 'The remedy for modern chaos. A free, modular repository of "Life Recipes" structured around 5 Pillars of Leverage — turning abstract wisdom into clear, actionable steps.',
    details: [
      { type: 'pillars', items: [
        { num: '1', title: 'Direction & Priorities', desc: 'Define your North Star so every effort counts.' },
        { num: '2', title: 'Mindset', desc: 'Cognitive reframing for sustainable growth.' },
        { num: '3', title: 'Surroundings & Processes', desc: 'Reduce friction, reclaim energy.' },
        { num: '4', title: 'Collaboration & Leadership', desc: 'Scale your impact through others.' },
        { num: '5', title: 'YeahSight', desc: 'Understand the world to navigate it confidently.' },
      ]},
      { type: 'link', label: '🎯 Take the Self-Assessment →', href: 'https://form.jotform.com/222552689387066' },
    ],
    ctaLabel: 'Visit YeahVibe ↗',
  },
  {
    id: 'yeahsight',
    name: 'YeahSight',
    url: 'https://yeahsight.com',
    externalUrl: 'https://yeahsight.com',
    icon: '🔭',
    badge: 'World Context',
    bannerClass: 'bg-gradient-to-r from-teal-dark to-teal-DEFAULT',
    iconBgClass: 'bg-teal-dark/10',
    badgeColorClass: 'bg-teal-dark/10 text-teal-dark',
    toggleColorClass: 'text-teal-dark border-teal-dark/30',
    linkColorClass: 'text-teal-dark',
    dotColor: '#1A9A9A',
    statusLabel: 'Live',
    tagline: '"To win, you must see the board."',
    summary: 'Pillar 5 of YeahVibe. Decodes global trends and societal complexity into plain language so you can define a confident, long-term direction.',
    details: [
      { type: 'italic', text: '"To win, you must see the board."' },
      { type: 'bullets', items: [
        'Global trends translated into actionable insight',
        'Shows how the state of the world impacts daily decisions',
        'The remedy for feeling concerned about the world\'s future',
        'Moves you: Confused → Informed → Directed',
      ]},
    ],
    ctaLabel: 'Visit YeahSight ↗',
  },
  {
    id: 'yeahdev',
    name: 'YeahDev',
    url: 'https://yeahdev.com',
    externalUrl: 'https://yeahdev.com',
    icon: '📚',
    badge: 'Article Repository',
    bannerClass: 'bg-gradient-to-r from-[#C1390F] to-[#E64A19]',
    iconBgClass: 'bg-[#C1390F]/8',
    badgeColorClass: 'bg-[#C1390F]/8 text-[#C1390F]',
    toggleColorClass: 'text-[#C1390F] border-[#C1390F]/25',
    linkColorClass: 'text-[#C1390F]',
    dotColor: '#E64A19',
    statusLabel: 'Live',
    tagline: '"Practical knowledge to build your initiative."',
    summary: 'A curated library of no-fluff, no-paywall articles for founders, builders, and makers developing an initiative.',
    details: [
      { type: 'italic', text: '"Practical knowledge to build your initiative."' },
      { type: 'bullets', items: [
        'Categories: AI Tools, Automation, Marketing, Growth',
        'No fluff, no paywalls — straight-up useful articles',
        'Written for founders, builders, and makers',
        'New articles published continuously',
      ]},
    ],
    ctaLabel: 'Visit YeahDev ↗',
  },
  {
    id: 'workout',
    name: 'YeahVibe Workout',
    url: 'https://workout.yeahvibe.com',
    externalUrl: 'https://workout.yeahvibe.com',
    icon: '💪',
    badge: 'Micro-Exercise Tool',
    bannerClass: 'bg-gradient-to-r from-[#1565C0] to-[#1E88E5]',
    iconBgClass: 'bg-[#1565C0]/10',
    badgeColorClass: 'bg-[#1565C0]/10 text-[#1565C0]',
    toggleColorClass: 'text-[#1565C0] border-[#1565C0]/25',
    linkColorClass: 'text-[#1565C0]',
    dotColor: '#1E88E5',
    statusLabel: 'Live',
    tagline: '"Move a little. Gain a lot."',
    summary: 'Randomly selects short exercises suited for home or office use. No gym required — just a quick movement break to counter sedentary routines.',
    details: [
      { type: 'italic', text: '"Move a little. Gain a lot."' },
      { type: 'bullets', items: [
        'Random exercise selection — home & office friendly',
        'Instructional YouTube video for every exercise',
        'Available in French 🇫🇷 and English 🇬🇧',
        '"Next Exercise" flow — fast and frictionless',
      ]},
    ],
    ctaLabel: 'Open Workout Tool ↗',
  },
  {
    id: 'gametrack',
    name: 'YeahVibe GameTrack',
    url: 'https://gametrack.yeahvibe.com',
    externalUrl: 'https://gametrack.yeahvibe.com',
    icon: '🎮',
    badge: 'Score Tracker',
    bannerClass: 'bg-gradient-to-r from-[#5E35B1] to-[#7E57C2]',
    iconBgClass: 'bg-[#5E35B1]/10',
    badgeColorClass: 'bg-[#5E35B1]/10 text-[#4527A0]',
    toggleColorClass: 'text-[#4527A0] border-[#5E35B1]/25',
    linkColorClass: 'text-[#4527A0]',
    dotColor: '#7E57C2',
    statusLabel: 'Live',
    tagline: '"Track the score. Raise the stakes."',
    summary: 'A simple, distraction-free score tracker for any game — board games, card games, or any activity that needs a live scoreboard.',
    details: [
      { type: 'italic', text: '"Track the score. Raise the stakes."' },
      { type: 'bullets', items: [
        'Real-time score tracking for any game format',
        'Lightweight and distraction-free — built for play',
        'Works for multiplayer: family, friends, or teams',
        'Mindful leisure — rest intentionally, not reactively',
      ]},
    ],
    ctaLabel: 'Open GameTrack ↗',
  },
  {
    id: 'speaknote',
    name: 'SpeakNote',
    url: 'https://speaknote.happybein.com',
    externalUrl: 'https://speaknote.happybein.com',
    icon: '🎙️',
    badge: 'Voice Transcription',
    bannerClass: 'bg-gradient-to-r from-[#00695C] to-[#00897B]',
    iconBgClass: 'bg-[#00897B]/10',
    badgeColorClass: 'bg-[#00897B]/10 text-[#00695C]',
    toggleColorClass: 'text-[#00695C] border-[#00695C]/25',
    linkColorClass: 'text-[#00695C]',
    dotColor: '#00897B',
    statusLabel: 'Live',
    tagline: '"Speak it. Store it. Use it."',
    summary: 'Listens to what you say — in any language — and writes it down instantly. Your data stays private and local, ready to copy to clipboard whenever you need it.',
    details: [
      { type: 'italic', text: '"Speak it. Store it. Use it."' },
      { type: 'bullets', items: [
        'Real-time speech-to-text across multiple languages',
        '100% local — no data sent to any server, ever',
        'One-tap export to clipboard for use anywhere',
        'No account, no signup, no tracking',
      ]},
    ],
    ctaLabel: 'Open SpeakNote ↗',
  },
  {
    id: 'dailytracker',
    name: 'DailyTracker',
    url: 'https://dailytracker.yeahvibe.com',
    externalUrl: 'https://dailytracker.yeahvibe.com',
    icon: '✅',
    badge: 'Habit Tracker',
    bannerClass: 'bg-gradient-to-r from-[#2E7D32] to-[#43A047]',
    iconBgClass: 'bg-[#43A047]/10',
    badgeColorClass: 'bg-[#43A047]/10 text-[#2E7D32]',
    toggleColorClass: 'text-[#2E7D32] border-[#2E7D32]/25',
    linkColorClass: 'text-[#2E7D32]',
    dotColor: '#43A047',
    statusLabel: 'Live',
    tagline: '"Tick it. Build it. Own it."',
    summary: 'A simple habit tracker that lets you tick off good daily habits and rewards your consistency. Small wins, compounding results.',
    details: [
      { type: 'italic', text: '"Tick it. Build it. Own it."' },
      { type: 'bullets', items: [
        'Track daily habits with a simple tick — no friction',
        'Reward system that celebrates consistency streaks',
        'Visual progress to keep you motivated',
        'Lightweight and fast — no account needed',
      ]},
    ],
    ctaLabel: 'Open DailyTracker ↗',
  },
];
