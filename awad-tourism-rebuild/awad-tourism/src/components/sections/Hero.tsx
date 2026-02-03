"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/seo";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-zinc-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(0,0,0,0.05),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.04),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-12 md:px-10 md:py-16">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs text-zinc-700 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Fast booking • Clear prices • Saudi-friendly packages
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl"
          >
            Explore Turkey with <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">{site.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="mt-4 max-w-xl text-pretty text-base text-zinc-600 md:text-lg"
          >
            Hand-picked programs, transparent pricing in SAR, and instant WhatsApp booking.
            From Trabzon&apos;s Black Sea views to Istanbul&apos;s iconic sights — we handle the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.18 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Link
              href="/programs"
              className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-black"
            >
              Browse Programs
            </Link>
            <Link
              href="/destinations"
              className="rounded-full border bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
            >
              View Destinations
            </Link>
            <a
              href={site.whatsapp}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-900 transition hover:bg-emerald-100"
              target="_blank"
              rel="noreferrer"
            >
              Book on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              ["SAR pricing", "No hidden fees"],
              ["VIP transport", "Comfort vans"],
              ["Hotels", "Best locations"],
              ["Support", "Before & during trip"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border bg-white/70 p-4 backdrop-blur">
                <div className="text-sm font-semibold text-zinc-900">{k}</div>
                <div className="mt-1 text-xs text-zinc-600">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
            className="relative h-full min-h-[360px] overflow-hidden rounded-3xl border bg-zinc-900"
          >
            {/* If you upload images later, replace this gradient panel with a real hero image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(244,63,94,0.20),transparent_40%)]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:34px_34px]" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/10 p-5 text-white backdrop-blur"
            >
              <div className="text-sm font-semibold">Popular now</div>
              <div className="mt-1 text-2xl font-semibold tracking-tight">Trabzon • 5 days</div>
              <div className="mt-2 flex items-center justify-between text-sm text-white/80">
                <span>7 persons</span>
                <span className="rounded-full bg-white/15 px-3 py-1">5999 SAR</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
