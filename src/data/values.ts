// HappyBein's values: one source for the home page (HomeValues) and the Manifesto,
// so the two never drift apart. Chosen by the owner on 2026-10-17.
export type ValuesCopy = {
  label: string;
  quote: string;
  quoteAuthor: string;
  items: { title: string; desc: string }[];
};

export const values: Partial<Record<'en' | 'fr' | 'es' | 'nl', ValuesCopy>> = {
  en: {
    label: 'Our values',
    quote: 'Individual well-being and collective progress are not accidental. They are the result of conscious choices.',
    quoteAuthor: 'The HappyBein Manifesto',
    items: [
      { title: 'Understanding before action', desc: 'We take the time to understand how people and society work before proposing solutions.' },
      { title: 'The best chance of well-being, for all', desc: 'We look for what gives everyone the best chance to live well: people today, future generations and other living beings.' },
      { title: 'Change starts with individuals', desc: 'Every improvement in society begins with people who choose to act. Our guides and tools help each person take that step.' },
    ],
  },
};
