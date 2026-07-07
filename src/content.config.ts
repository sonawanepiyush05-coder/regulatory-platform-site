import { defineCollection, z } from "astro:content";

const learnCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.string(),
  }),
});

const isoCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  learn: learnCollection,
  iso: isoCollection,
};