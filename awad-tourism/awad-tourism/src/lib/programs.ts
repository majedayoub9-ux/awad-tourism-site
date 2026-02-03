import programs from "@/../data/programs.json";

export type Program = {
  id: string;
  title: string;
  city: string;
  region: string;
  durationDays: number;
  priceFrom: number;
  currency: string;
  shortDescription: string;
  highlights: string[];
  itinerary: { day: number; title: string; details: string }[];
  included: string[];
  excluded: string[];
  images: string[];
  destinationSlugs: string[];
};

export function getPrograms(): Program[] {
  return programs as Program[];
}

export function getProgramById(id: string): Program | undefined {
  return getPrograms().find((p) => p.id === id);
}

export function getCities(): string[] {
  return Array.from(new Set(getPrograms().map((p) => p.city))).sort();
}

export function getDestinations(): { slug: string; name: string; cover: string }[] {
  const map = new Map<string, { slug: string; name: string; cover: string }>();

  for (const p of getPrograms()) {
    for (const slug of p.destinationSlugs) {
      if (!map.has(slug)) {
        const pretty = slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");
        map.set(slug, { slug, name: pretty, cover: p.images[0] });
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}
