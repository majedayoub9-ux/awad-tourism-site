import Link from "next/link";
import { Program } from "@/lib/programs";
import { formatMoney } from "@/lib/utils";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-xs text-gray-500">
        {program.region} • {program.city}
      </div>
      <div className="mt-1 text-lg font-semibold">{program.title}</div>
      <p className="mt-2 text-sm text-gray-600">{program.shortDescription}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm">
          <div className="text-gray-500">From</div>
          <div className="font-semibold">
            {formatMoney(program.priceFrom, program.currency)}{" "}
            <span className="font-normal text-gray-500">/ {program.durationDays} day(s)</span>
          </div>
        </div>
        <Link href={`/programs/${program.id}`} className="rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-900">
          View
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {program.highlights.slice(0, 3).map((h) => (
          <span key={h} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}
