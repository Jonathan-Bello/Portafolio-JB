import { defineCollection, reference, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      cover: image(),
      techs: z.string().array(),
      category: z.string(),
      url: z.string().url(),
      author: reference("authors"),
    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      id: z.string(),
      name: z.string(),
    }),
});

export const collections = {
  projects: projectCollection,
  authors: authorCollection,
};
