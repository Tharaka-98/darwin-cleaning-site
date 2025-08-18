import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/services",
  "/services/airbnb",
  "/services/carpet-upholstery",
  "/services/commercial",
  "/services/end-of-lease",
  "/services/pressure-wash",
  "/services/strip-sealing",
  "/services/tile-grout",
  "/services/window-glass",
  "/about-us",
  "/cleaning-tips",
  "/quote-section",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
