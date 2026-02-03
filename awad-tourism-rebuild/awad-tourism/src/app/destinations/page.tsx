import Link from "next/link";
import { getDestinations } from "@/lib/programs";

export default function DestinationsPage() {
  const destinations = getDestinations();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Destinations</h1>
        <p className="mt-2 text-gray-600">Explore Turkey’s most loved cities and regions.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {destinations.map((d) => (
          <Link key={d.slug} href={`/destinations/${d.slug}`} className="group rounded-2xl border bg-white p-4 shadow-sm">
            <img src={d.cover} alt={d.name} className="h-40 w-full rounded-xl border object-cover" loading="lazy" />
            <div className="mt-3 font-semibold group-hover:underline">{d.name}</div>
            <div className="text-sm text-gray-600">View programs</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
