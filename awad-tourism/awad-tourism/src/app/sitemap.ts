import { MetadataRoute } from "next";
import { site } from "@/lib/seo";
import { getPrograms, getDestinations } from "@/lib/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticRoutes = ["", "/programs", "/destinations", "/about", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const programRoutes = getPrograms().map((p) => ({
    url: `${base}/programs/${p.id}`,
    lastModified: new Date(),
  }));

  const destRoutes = getDestinations().map((d) => ({
    url: `${base}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...programRoutes, ...destRoutes];
}
