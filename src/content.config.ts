import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      cover: image(),
      techs: z.string().array(),
      category: z.array(reference("categoriesProjects")),
      url: z.url(),
      author: reference("authors"),
      isRelevant: z.boolean(),
    }),
});

const authorCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/authors" }),
  schema: () =>
    z.object({
      id: z.string(),
      name: z.string(),
    }),
});

const categoryCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/categories" }),
  schema: () =>
    z.object({
      id: z.string(),
      name: z.string(),
    }),
});

const categoryProjectCollection = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/categoriesProjects",
  }),
  schema: () =>
    z.object({
      id: z.string(),
      name: z.string(),
      color: z.string(),
    }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      cover: image(),
      techs: z.string().array(),
      category: reference("categories"),
      url: z.url(),
      author: reference("authors"),
    }),
});

export const collections = {
  projects: projectCollection,
  authors: authorCollection,
  categories: categoryCollection,
  blogs: blogCollection,
  categoriesProjects: categoryProjectCollection,
};
