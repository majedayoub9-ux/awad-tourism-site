"use client";

import { useMemo, useState } from "react";
import ProgramCard from "@/components/ProgramCard";
import { getCities, getPrograms } from "@/lib/programs";

export default function ProgramsPage() {
  const allPrograms = getPrograms();
  const cities = ["All", ...getCities()];

  const [city, setCity] = useState("All");
  const [maxPrice, setMaxPrice] = useState<number>(7000);
  const [maxDays, setMaxDays] = useState<number>(10);

  const filtered = useMemo(() => {
    return allPrograms.filter((p) => {
      const cityOk = city === "All" ? true : p.city === city;
      const priceOk = p.priceFrom <= maxPrice;
      const daysOk = p.durationDays <= maxDays;
      return cityOk && priceOk && daysOk;
    });
  }, [allPrograms, city, maxPrice, maxDays]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Programs</h1>
        <p className="mt-2 text-gray-600">Browse programs and book quickly via WhatsApp.</p>
      </div>

      <div className="grid gap-4 rounded-2xl border bg-white p-5 md:grid-cols-3">
        <label className="space-y-2 text-sm">
          <div className="font-medium">City</div>
          <select className="w-full rounded-xl border px-3 py-2" value={city} onChange={(e) => setCity(e.target.value)}>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm">
          <div className="font-medium">Max price</div>
          <input type="range" min={50} max={10000} step={50} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
          <div className="text-gray-600">{maxPrice}</div>
        </label>

        <label className="space-y-2 text-sm">
          <div className="font-medium">Max duration (days)</div>
          <input type="range" min={1} max={14} step={1} value={maxDays} onChange={(e) => setMaxDays(Number(e.target.value))} />
          <div className="text-gray-600">{maxDays}</div>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border p-6 text-sm text-gray-600">No programs match your filters. Try increasing price or days.</div>
      )}
    </div>
  );
}
