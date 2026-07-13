import { defineCollection, z } from "astro:content";

const learn = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.string(),
  }),
});

const iso = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  learn,
  iso,
};