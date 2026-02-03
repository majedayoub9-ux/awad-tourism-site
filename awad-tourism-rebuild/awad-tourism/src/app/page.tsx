import Link from "next/link";
import { getPrograms } from "@/lib/programs";
import ProgramCard from "@/components/ProgramCard";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  const programs = getPrograms().slice(0, 6);

  return (
    <div className="space-y-14">
      <Hero />

      <FeatureGrid />

      <section className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">Popular programs</h2>
            <p className="mt-2 text-zinc-600">Transparent pricing in SAR — book fast via WhatsApp.</p>
          </div>
          <Link
            href="/programs"
            className="rounded-full border bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            View all programs
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </section>

      <Testimonials />

      <CTA />
    </div>
  );
}
