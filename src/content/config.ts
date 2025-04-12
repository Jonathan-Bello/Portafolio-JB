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

const categoryCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      id: z.string(),
      name: z.string(),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      cover: image(),
      techs: z.string().array(),
      category: reference("categories"),
      url: z.string().url(),
      author: reference("authors"),
    }),
});

export const collections = {
  projects: projectCollection,
  authors: authorCollection,
  categories: categoryCollection,
  blogs: blogCollection,
};
