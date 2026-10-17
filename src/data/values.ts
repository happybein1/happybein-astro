// HappyBein's values: one source for the home page (HomeValues) and the Manifesto,
// so the two never drift apart. Chosen by the owner on 2026-10-17.
export type ValuesCopy = {
  label: string;
  quote: string;
  items: { title: string; desc: string }[];
};

export const values: Partial<Record<'en' | 'fr' | 'es' | 'nl', ValuesCopy>> = {
  en: {
    label: 'Our values',
    quote: 'Individual well-being and collective progress are not accidental. They are the result of conscious choices.',
    items: [
      { title: 'Understanding before action', desc: 'We take the time to understand how people and society work before proposing solutions.' },
      { title: 'The best chance of well-being, for all', desc: 'We look for what gives everyone the best chance to live well: people today, future generations and other living beings.' },
      { title: 'Change starts with individuals', desc: 'Every improvement in society begins with people who choose to act. Our guides and tools help each person take that step.' },
    ],
  },
  fr: {
    label: 'Nos valeurs',
    quote: 'Le bien-être individuel et le progrès collectif ne sont pas accidentels. Ils sont le résultat de choix conscients.',
    items: [
      { title: 'Comprendre avant d’agir', desc: 'Nous prenons le temps de comprendre comment fonctionnent les personnes et la société avant de proposer des solutions.' },
      { title: 'Les meilleures chances de bien-être, pour tous', desc: 'Nous cherchons ce qui donne à chacun les meilleures chances de bien vivre : les personnes d’aujourd’hui, les générations futures et les autres êtres vivants.' },
      { title: 'Le changement commence par chacun', desc: 'Toute amélioration de la société commence par des personnes qui choisissent d’agir. Nos guides et nos outils aident chacun à franchir ce pas.' },
    ],
  },
  es: {
    label: 'Nuestros valores',
    quote: 'El bienestar individual y el progreso colectivo no son casuales. Son el resultado de decisiones conscientes.',
    items: [
      { title: 'Comprender antes de actuar', desc: 'Nos tomamos el tiempo de entender cómo funcionan las personas y la sociedad antes de proponer soluciones.' },
      { title: 'La mejor oportunidad de bienestar, para todos', desc: 'Buscamos lo que da a todos la mejor oportunidad de vivir bien: las personas de hoy, las generaciones futuras y los demás seres vivos.' },
      { title: 'El cambio empieza por cada persona', desc: 'Toda mejora en la sociedad empieza por personas que deciden actuar. Nuestras guías y herramientas ayudan a cada persona a dar ese paso.' },
    ],
  },
  nl: {
    label: 'Onze waarden',
    quote: 'Individueel welzijn en collectieve vooruitgang zijn geen toeval. Ze zijn het resultaat van bewuste keuzes.',
    items: [
      { title: 'Begrijpen vóór handelen', desc: 'We nemen de tijd om te begrijpen hoe mensen en de samenleving werken, voordat we oplossingen voorstellen.' },
      { title: 'De beste kans op welzijn, voor iedereen', desc: 'We zoeken naar wat iedereen de beste kans geeft om goed te leven: mensen van nu, toekomstige generaties en andere levende wezens.' },
      { title: 'Verandering begint bij ieder mens', desc: 'Elke verbetering in de samenleving begint bij mensen die besluiten in actie te komen. Onze gidsen en tools helpen ieder mens die stap te zetten.' },
    ],
  },
};
