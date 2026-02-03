"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/seo";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-2">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border bg-zinc-900 p-8 text-white md:p-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_35%)]" />
        <div className="relative">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to book?</h2>
          <p className="mt-2 max-w-2xl text-white/80">
            Send us your dates, city preference (Trabzon / Istanbul / Antalya) and group size — we’ll confirm fast.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              WhatsApp Booking
            </a>
            <a
              href="/programs"
              className="rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Programs
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
