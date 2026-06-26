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
    id: 'dailyapp',
    name: 'DailyApp',
    url: 'https://dailyapp.happybein.com',
    externalUrl: 'https://dailyapp.happybein.com',
    icon: '⚡',
    badge: 'Daily Tools',
    bannerClass: 'bg-gradient-to-r from-teal-DEFAULT to-teal-light',
    iconBgClass: 'bg-teal-DEFAULT/10',
    badgeColorClass: 'bg-teal-DEFAULT/10 text-teal-dark',
    toggleColorClass: 'text-teal-dark border-teal-DEFAULT/30',
    linkColorClass: 'text-teal-dark',
    dotColor: '#2ABFBF',
    statusLabel: 'Live',
    tagline: '"Simple tools for daily life."',
    summary: 'A collection of lightweight, focused tools — habit tracking, voice notes, quick timers, workouts, and score keeping. Each one does one thing well, with no accounts or subscriptions.',
    details: [
      { type: 'bullets', items: [
        'DailyTracker — build better habits with streaks and daily check-ins',
        'SpeakNote — instant voice-to-text, 100% local, no cloud required',
        'QuickTimer — one-tap preset timers, custom countdown, lap chronometer',
        'YeahVibe Workout — randomised exercise prompts for quick movement breaks',
        'YeahVibe GameTrack — score tracker for any game or activity',
      ]},
    ],
    ctaLabel: 'Explore DailyApp ↗',
  },
];
