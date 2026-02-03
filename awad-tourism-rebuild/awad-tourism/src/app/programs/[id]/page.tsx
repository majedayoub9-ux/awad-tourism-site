import Link from "next/link";
import { getProgramById, getPrograms } from "@/lib/programs";
import { formatMoney } from "@/lib/utils";
import { site } from "@/lib/seo";

export function generateStaticParams() {
  return getPrograms().map((p) => ({ id: p.id }));
}

export default function ProgramDetails({ params }: { params: { id: string } }) {
  const program = getProgramById(params.id);

  if (!program) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Program not found</h1>
        <Link href="/programs" className="underline">
          Back to programs
        </Link>
      </div>
    );
  }

  const phone = site.whatsapp.replace(/[^\d+]/g, "");
  const wa = `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
    `Hello! I want to book: ${program.title} (${program.durationDays} days).`
  )}`;

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm text-gray-500">
            {program.region} • {program.city}
          </div>
          <h1 className="text-3xl font-semibold">{program.title}</h1>
          <p className="mt-2 text-gray-600">{program.shortDescription}</p>
        </div>
        <div className="rounded-2xl border bg-white p-5">
          <div className="text-sm text-gray-500">From</div>
          <div className="text-2xl font-semibold">{formatMoney(program.priceFrom, program.currency)}</div>
          <div className="text-sm text-gray-600">{program.durationDays} day(s)</div>
          <div className="mt-4 flex gap-2">
            <a
              className="rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-900"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              Book on WhatsApp
            </a>
            <Link className="rounded-full border px-4 py-2 text-sm hover:bg-gray-50" href="/contact">
              Contact form
            </Link>
          </div>
        </div>
      </div>

      <section className="grid gap-3 md:grid-cols-3">
        {program.images.slice(0, 3).map((src) => (
          <img key={src} src={src} alt={program.title} className="h-56 w-full rounded-2xl border object-cover" loading="lazy" />
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            {program.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Included / Excluded</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div>
              <div className="font-medium">Included</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {program.included.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-medium">Excluded</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {program.excluded.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Itinerary</h2>
        <div className="mt-4 space-y-3">
          {program.itinerary.map((d) => (
            <details key={d.day} className="rounded-xl border p-4">
              <summary className="cursor-pointer font-medium">
                Day {d.day}: {d.title}
              </summary>
              <p className="mt-2 text-sm text-gray-600">{d.details}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Meeting point / Map</h2>
        <p className="mt-2 text-sm text-gray-600">
          Add a Google Maps embed here later (or we can generate a simple map section per city).
        </p>
      </section>
    </div>
  );
}
