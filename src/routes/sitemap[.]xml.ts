import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { BLOG_POSTS } from "@/lib/content";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface Entry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths: Entry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/shop", changefreq: "daily", priority: "0.9" },
          { path: "/new-collection", changefreq: "weekly", priority: "0.8" },
          { path: "/new-arrivals", changefreq: "weekly", priority: "0.8" },
          { path: "/best-sellers", changefreq: "weekly", priority: "0.8" },
          { path: "/offers", changefreq: "weekly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/gallery", changefreq: "monthly", priority: "0.6" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/reviews", changefreq: "weekly", priority: "0.6" },
          { path: "/faq", changefreq: "monthly", priority: "0.5" },
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/return-policy", changefreq: "yearly", priority: "0.3" },
          { path: "/delivery-policy", changefreq: "yearly", priority: "0.3" },
        ];

        const dynamic: Entry[] = [
          ...(CATEGORIES ?? []).map((c) => ({
            path: `/collections/${c.slug}`,
            changefreq: "weekly" as const,
            priority: "0.7",
          })),
          ...(PRODUCTS ?? []).map((p: { slug: string }) => ({
            path: `/product/${p.slug}`,
            changefreq: "weekly" as const,
            priority: "0.8",
          })),
          ...(BLOG_POSTS ?? []).map((b: { slug: string }) => ({
            path: `/blog/${b.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const entries = [...staticPaths, ...dynamic];
        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
