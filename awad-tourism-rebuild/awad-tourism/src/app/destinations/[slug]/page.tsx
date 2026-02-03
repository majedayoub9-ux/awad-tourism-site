import { notFound } from "next/navigation";
import Link from "next/link";
import { getPrograms, getDestinations } from "@/lib/programs";
import ProgramCard from "@/components/ProgramCard";

export function generateStaticParams() {
  return getDestinations().map((d: any) => ({ slug: String(d.slug) }));
}

export default function DestinationPage({
  params,
}: {
  params: { slug?: string };
}) {
  const slug = params?.slug;

  if (!slug) notFound();

  const destinations: any[] = getDestinations() ?? [];
  const destination = destinations.find((d) => String(d.slug) === String(slug));

  // ✅ Safe display name fallback (prevents ".split of undefined")
  const displayBase = String(
    destination?.title ?? destination?.name ?? destination?.label ?? slug
  );

  const name = displayBase
    .split("-")
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(" ");

  const programs = (getPrograms() ?? []).filter((p: any) =>
    Array.isArray(p.destinationSlugs)
      ? p.destinationSlugs.includes(slug)
      : false
  );

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
        {programs.map((p: any) => (
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
