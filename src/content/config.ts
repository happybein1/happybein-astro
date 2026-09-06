import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // Lets the journal separate day-to-day build notes from the more
    // reflective/strategic entries about HappyBein itself — required so a
    // new entry can't silently land uncategorized in the listing filter.
    category: z.enum(['dev-update', 'history-strategy']),
    description: z.string().optional(),
  }),
});

export const collections = { journal };
