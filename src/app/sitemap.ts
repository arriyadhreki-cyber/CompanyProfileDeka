import type { MetadataRoute } from "next";
import { allPages } from "@/content/pages";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return allPages.map((p) => ({
    url: `${site.url}${p.href === "/" ? "" : p.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.href === "/" ? 1 : 0.8,
  }));
}
