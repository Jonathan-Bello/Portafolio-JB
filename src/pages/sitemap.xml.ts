import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

const site = "https://www.jonathanbello.com";

function formatUrl(path: string) {
  const normalizedPath =
    path === "/" || path.endsWith("/") ? path : `${path}/`;
  return `${site}${normalizedPath}`;
}

export const GET: APIRoute = async () => {
  const [projects, blogs, projectCategories, blogCategories] =
    await Promise.all([
      getCollection("projects"),
      getCollection("blogs"),
      getCollection("categoriesProjects"),
      getCollection("categories"),
    ]);

  const urls = new Set<string>([
    formatUrl("/"),
    formatUrl("/about/"),
    formatUrl("/blog/"),
    formatUrl("/contact/"),
    formatUrl("/projects/"),
    formatUrl("/en/"),
    formatUrl("/en/about/"),
    formatUrl("/en/blog/"),
    formatUrl("/en/contact/"),
    formatUrl("/en/projects/"),
  ]);

  for (const category of projectCategories) {
    urls.add(formatUrl(`/projects/category/${category.data.id}/`));
    urls.add(formatUrl(`/en/projects/category/${category.data.id}/`));
  }

  for (const category of blogCategories) {
    urls.add(formatUrl(`/blogs/categories/${category.data.id}/`));
    urls.add(formatUrl(`/en/blogs/categories/${category.data.id}/`));
  }

  for (const project of projects.filter(
    (project) => project.data.isVisible !== false,
  )) {
    const [lang, slug] = project.id.split("/");
    const basePath = lang === "en" ? "/en/projects" : "/projects";
    urls.add(formatUrl(`${basePath}/${slug}/`));
  }

  for (const blog of blogs) {
    const [lang, slug] = blog.id.split("/");
    const basePath = lang === "en" ? "/en/blogs" : "/blogs";
    urls.add(formatUrl(`${basePath}/${slug}/`));
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(urls)
  .sort()
  .map((url) => `  <url><loc>${url}</loc></url>`)
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
