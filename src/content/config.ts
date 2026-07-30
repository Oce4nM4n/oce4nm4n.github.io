import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    category: z.string().optional(),
    theme: z.enum(['ai', 'physics', 'math', 'programming', 'general']).default('general'),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    technologies: z.array(z.string()),
    status: z.enum(['active', 'archived', 'planned']).default('active'),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
