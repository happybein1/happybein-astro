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
    summary: 'HappyBein exists to make complexity easier to live with. We build simple tools and share clear insights to help people understand the world around them and make better choices.',
    details: [
      { type: 'bullets', items: [
        'Non-profit foundation based in Eindhoven, Netherlands — founded 2021',
        'Research studio studying societal challenges and curating best practices',
        'Builds and maintains the Yeah ecosystem of tools and insights',
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
    tagline: '"Make better decisions and act with clarity."',
    summary: 'Make better decisions and act with clarity using a practical framework built around 5 levers of change.',
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
    tagline: '"Understand the forces shaping the world."',
    summary: 'Understand the forces shaping the world — energy, economy, technology, society — so your decisions are aligned with where things are heading.',
    details: [
      { type: 'bullets', items: [
        'Covers the big forces shaping the world: energy, economy, technology, society',
        'Translates global complexity into clear, actionable insight',
        'Helps you make decisions aligned with where things are actually heading',
        'Moves you from Confused → Informed → Directed',
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
    badge: 'Builder Guides',
    bannerClass: 'bg-gradient-to-r from-[#C1390F] to-[#E64A19]',
    iconBgClass: 'bg-[#C1390F]/8',
    badgeColorClass: 'bg-[#C1390F]/8 text-[#C1390F]',
    toggleColorClass: 'text-[#C1390F] border-[#C1390F]/25',
    linkColorClass: 'text-[#C1390F]',
    dotColor: '#E64A19',
    statusLabel: 'Live',
    tagline: '"Practical guides to help you build and grow."',
    summary: 'Practical, no-fluff guides on the tools and tactics that help you build and grow — AI, marketing, SEO, and getting your first customers.',
    details: [
      { type: 'bullets', items: [
        'Covers AI tools, marketing, SEO, and getting your first customers',
        'No fluff, no paywalls — straight-up useful guides',
        'Written for early-stage founders and makers',
        'New content published continuously',
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
    tagline: '"A quick exercise prompt for when you only have a few minutes."',
    summary: 'A quick randomised exercise prompt for when you only have a few minutes to move.',
    details: [
      { type: 'bullets', items: [
        'Random exercise each time — no planning needed',
        'Designed for home, office, or anywhere with a few minutes spare',
        'Instructional YouTube video for every exercise',
        'Available in French 🇫🇷 and English 🇬🇧',
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
    tagline: '"Track scores across the games and activities that matter to you."',
    summary: 'Track scores and progress across the games and activities that matter to you.',
    details: [
      { type: 'bullets', items: [
        'Works for any game — board games, card games, sports, custom activities',
        'Simple and distraction-free — just track and play',
        'Supports multiple players: family, friends, or teams',
        'Lightweight and fast — no account needed',
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
    tagline: '"Turn your voice into text — privately, no cloud required."',
    summary: 'Turn your voice into text instantly — privately, no cloud required.',
    details: [
      { type: 'bullets', items: [
        'Instant speech-to-text across multiple languages',
        '100% local — no data ever sent to a server',
        'One-tap export to clipboard',
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
    tagline: '"Build better habits and stay consistent."',
    summary: 'Build better habits and stay consistent with a simple daily tracker that rewards your progress.',
    details: [
      { type: 'bullets', items: [
        'Tick off your daily habits — simple, fast, no friction',
        'Rewards system that recognises your consistency streaks',
        'Visual progress to keep you motivated day to day',
        'Lightweight — no account needed',
      ]},
    ],
    ctaLabel: 'Open DailyTracker ↗',
  },
];
