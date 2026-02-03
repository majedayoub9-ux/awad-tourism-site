import { notFound } from "next/navigation";
import Link from "next/link";
import { getPrograms, getDestinations } from "@/lib/programs";
import ProgramCard from "@/components/ProgramCard";

/**
 * Tell Next.js which destination pages to statically generate
 */
export function generateStaticParams() {
  return getDestinations().map((d) => ({ slug: d.slug }));
}

export default function DestinationPage({
  params,
}: {
  params?: { slug?: string };
}) {
  // SAFELY read slug
  const slug = params?.slug;

  // If slug is missing, return 404 instead of crashing build
  if (!slug) notFound();

  // Filter programs linked to this destination
  const programs = getPrograms().filter((p) =>
    p.destinationSlugs.includes(slug)
  );

  // Build a human-friendly name from the slug
  const name = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="space-y-8">
      <div>
        <div className="text-sm text-gray-500">Destination</div>
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="mt-2 text-gray-600">
          Beautiful places, good prices, and flexible itineraries. Book fast via
          WhatsApp.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {programs.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>

      {programs.length === 0 && (
        <div className="rounded-2xl border p-6 text-sm text-gray-600">
          No programs are linked to this destination yet. Add it in{" "}
          <code>data/programs.json</code>.
          <div className="mt-3">
            <Link href="/programs" className="underline">
              Browse all programs
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
