"use client";

import { motion } from "framer-motion";
import { Car, Hotel, Map, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Map,
    title: "Curated itineraries",
    desc: "Balanced days — highlights + hidden gems, optimized for families and groups.",
  },
  {
    icon: Hotel,
    title: "Hotels in the right areas",
    desc: "We pick locations that reduce commute and maximize your time.",
  },
  {
    icon: Car,
    title: "Comfort transport",
    desc: "VIP vans with experienced drivers and flexible pickup times.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & transparent",
    desc: "Clear inclusions, SAR pricing, and quick support before and during your trip.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            Built for smooth travel
          </h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            A modern, Saudi-friendly booking experience — fast WhatsApp confirmation and polished programs.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group rounded-3xl border bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border bg-zinc-50 p-3 text-zinc-900 transition group-hover:bg-zinc-100">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-base font-semibold text-zinc-900">{it.title}</div>
                <p className="mt-1 text-sm leading-6 text-zinc-600">{it.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
