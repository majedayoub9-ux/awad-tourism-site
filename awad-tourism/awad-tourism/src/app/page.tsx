import Link from "next/link";
import { getPrograms } from "@/lib/programs";
import ProgramCard from "@/components/ProgramCard";
import { site } from "@/lib/seo";

export default function HomePage() {
  const programs = getPrograms().slice(0, 4);

  return (
    <div className="space-y-12">
      <section className="rounded-3xl border bg-gradient-to-b from-gray-50 to-white p-8 md:p-12">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Discover Turkey with affordable, well-planned tour programs
          </h1>
          <p className="mt-4 text-gray-600 md:text-lg">
            City breaks, nature escapes, and iconic destinations—fast booking via WhatsApp and flexible options.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/programs" className="rounded-full bg-black px-5 py-3 text-sm text-white hover:bg-gray-900">
              View Programs
            </Link>
            <Link href="/contact" className="rounded-full border px-5 py-3 text-sm hover:bg-gray-50">
              Contact / Booking
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            WhatsApp: <span className="font-medium text-gray-700">{site.whatsapp}</span>
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Featured programs</h2>
          <Link href="/programs" className="text-sm text-gray-700 underline hover:text-black">
            See all
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Clear pricing", text: "Simple packages with clear inclusions and flexible add-ons." },
          { title: "Fast booking", text: "WhatsApp support and quick confirmations." },
          { title: "Support", text: "We help with planning and options for your group." },
        ].map((b) => (
          <div key={b.title} className="rounded-2xl border p-6">
            <div className="font-semibold">{b.title}</div>
            <p className="mt-2 text-sm text-gray-600">{b.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border p-8">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
          <div>
            <div className="font-medium">How do I book?</div>
            <p className="text-sm text-gray-600">
              Open WhatsApp or use the contact form. We’ll confirm availability and details.
            </p>
          </div>
          <div>
            <div className="font-medium">Can you customize programs?</div>
            <p className="text-sm text-gray-600">
              Yes. We can adjust duration, destinations, hotel level, and transport options.
            </p>
          </div>
          <div>
            <div className="font-medium">Do you offer airport pickup?</div>
            <p className="text-sm text-gray-600">Available for selected programs or as an add-on.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
