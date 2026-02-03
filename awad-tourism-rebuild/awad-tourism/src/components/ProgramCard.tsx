import Link from "next/link";
import { Program } from "@/lib/programs";
import { formatMoney } from "@/lib/utils";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.id}`}
      className="group block rounded-3xl border bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-zinc-500">
          {program.region} • {program.city}
        </div>
        <div className="flex gap-2">
          <span className="rounded-full border bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700">
            {program.durationDays} days
          </span>
          <span className="rounded-full border bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700">
            from {formatMoney(program.priceFrom, program.currency)}
          </span>
        </div>
      </div>

      <div className="mt-3 text-lg font-semibold tracking-tight text-zinc-900 group-hover:underline">
        {program.title}
      </div>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{program.shortDescription}</p>

      <div className="mt-5 flex items-center justify-between">
        <div className="text-sm text-zinc-600">View details</div>
        <div className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-black">
          Book
        </div>
      </div>
    </Link>
  );
}
