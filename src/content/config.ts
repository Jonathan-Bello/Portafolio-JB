import { defineCollection, reference, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      cover: image(),
      techs: z.string().array(),
      category: z.string(),
      url: z.string().url(),
    }),
});

export const collections = {
  projects: projectCollection,
};
