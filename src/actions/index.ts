import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { getCollection, getEntries } from "astro:content";

export const server = {
  loadMoreProjects: defineAction({
    input: z.object({
      lang: z.enum(["es", "en"]),
      offset: z.number().int().min(0).default(0),
      limit: z.number().int().min(1).max(24).default(12),
      category: z.string().optional(),
    }),
    handler: async ({ lang, offset, limit, category }) => {
      const projects = await getCollection("projects", ({ id, data }) => {
        const matchesCategory = category
          ? data.category.some((entry) => entry.id === category)
          : true;
        return id.startsWith(`${lang}/`) && data.isVisible !== false && matchesCategory;
      });
      const sorted = [...projects].sort(
        (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime(),
      );
      const page = sorted.slice(offset, offset + limit);
      const items = await Promise.all(page.map(async (project) => {
        const categories = await getEntries(project.data.category);
        return {
          slug: project.id.replace(`${lang}/`, ""),
          title: project.data.title,
          description: project.data.description,
          publishDate: project.data.publishDate.toISOString(),
          cover: project.data.cover.src,
          categories: categories.map((entry) => ({
            id: entry.data.id,
            name: lang === "es" ? entry.data.nameEs : entry.data.nameEn,
          })),
        };
      }));
      return { projects: items, hasMore: offset + page.length < sorted.length };
    },
  }),
};
