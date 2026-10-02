import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // Lets the journal separate day-to-day build notes from the more
    // reflective/strategic entries about HappyBein itself, plus a
    // catch-all "misc" bucket for things that aren't either (e.g. the
    // PWA install how-to) — required so a new entry can't silently land
    // uncategorized in the listing filter.
    category: z.enum(['dev-update', 'history-strategy', 'misc']),
    description: z.string().optional(),
  }),
});

export const collections = { journal };
