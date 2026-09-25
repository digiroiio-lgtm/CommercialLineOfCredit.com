import type { MetadataRoute } from "next";
import { resourceSlugs } from "@/lib/content";
import { richPageSlugs } from "@/lib/pages";
import { guideSlugs } from "@/lib/guides";
import { stateSlugs } from "@/lib/states";
import { industrySlugs } from "@/lib/industries";

const BASE = "https://commerciallineofcredit.com";
const NOW = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: `${BASE}/`, priority: 1.0, lastModified: NOW },
    { url: `${BASE}/calculator/`, priority: 0.9, lastModified: NOW },
    { url: `${BASE}/check-options/`, priority: 0.9, lastModified: NOW },
    { url: `${BASE}/guides/`, priority: 0.8, lastModified: NOW },
    { url: `${BASE}/states/`, priority: 0.7, lastModified: NOW },
    { url: `${BASE}/industries/`, priority: 0.75, lastModified: NOW },
  ];

  const contentRoutes = resourceSlugs
    .filter((s) => !["privacy", "terms"].includes(s))
    .map((s) => ({ url: `${BASE}/${s}/`, priority: 0.8, lastModified: NOW }));

  const richRoutes = richPageSlugs.map((s) => ({
    url: `${BASE}/${s}/`,
    priority: 0.8,
    lastModified: NOW,
  }));

  const guideRoutes = guideSlugs.map((s) => ({
    url: `${BASE}/guides/${s}/`,
    priority: 0.75,
    lastModified: NOW,
  }));

  const stateRoutes = stateSlugs.map((s) => ({
    url: `${BASE}/states/${s}/`,
    priority: 0.7,
    lastModified: NOW,
  }));

  const industryRoutes = industrySlugs.map((s) => ({
    url: `${BASE}/industries/${s}/`,
    priority: 0.75,
    lastModified: NOW,
  }));

  return [...staticRoutes, ...contentRoutes, ...richRoutes, ...guideRoutes, ...stateRoutes, ...industryRoutes];
}
