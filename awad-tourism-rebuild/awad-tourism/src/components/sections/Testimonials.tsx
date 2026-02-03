"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    name: "Majed",
    text: "Fast booking and clear pricing. Everything was arranged smoothly from airport pickup to hotel.",
  },
  {
    name: "Ahmed",
    text: "Trabzon program was perfect for our family. Great driver and excellent hotel location.",
  },
  {
    name: "Sara",
    text: "We booked on WhatsApp in minutes. The itinerary was flexible and the support was responsive.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border bg-gradient-to-b from-white to-zinc-50 p-8 md:p-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">Trusted by travelers</h2>
          <p className="text-zinc-600">Real feedback — quick booking, comfortable transport, and clear programs.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="rounded-3xl border bg-white p-6"
            >
              <div className="text-sm text-zinc-500">“</div>
              <p className="mt-2 text-sm leading-6 text-zinc-700">{q.text}</p>
              <div className="mt-4 text-sm font-semibold text-zinc-900">{q.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
