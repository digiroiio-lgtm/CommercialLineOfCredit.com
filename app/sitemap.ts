import type { MetadataRoute } from "next";
import { resourceSlugs } from "@/lib/content";
import { richPageSlugs } from "@/lib/pages";
import { guideSlugs } from "@/lib/guides";
import { stateSlugs } from "@/lib/states";
import { industrySlugs } from "@/lib/industries";

const BASE = "https://commerciallineofcredit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: `${BASE}/`, priority: 1.0 },
    { url: `${BASE}/calculator/`, priority: 0.9 },
    { url: `${BASE}/check-options/`, priority: 0.9 },
    { url: `${BASE}/guides/`, priority: 0.8 },
    { url: `${BASE}/states/`, priority: 0.7 },
    { url: `${BASE}/industries/`, priority: 0.75 },
  ];

  const contentRoutes = resourceSlugs
    .filter((s) => !["privacy", "terms"].includes(s))
    .map((s) => ({ url: `${BASE}/${s}/`, priority: 0.8 }));

  const richRoutes = richPageSlugs.map((s) => ({
    url: `${BASE}/${s}/`,
    priority: 0.8,
  }));

  const guideRoutes = guideSlugs.map((s) => ({
    url: `${BASE}/guides/${s}/`,
    priority: 0.75,
  }));

  const stateRoutes = stateSlugs.map((s) => ({
    url: `${BASE}/states/${s}/`,
    priority: 0.7,
  }));

  const industryRoutes = industrySlugs.map((s) => ({
    url: `${BASE}/industries/${s}/`,
    priority: 0.75,
  }));

  return [...staticRoutes, ...contentRoutes, ...richRoutes, ...guideRoutes, ...stateRoutes, ...industryRoutes];
}
