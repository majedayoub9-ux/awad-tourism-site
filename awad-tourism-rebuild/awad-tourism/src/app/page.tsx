"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/seo";

export default function Home() {
  const { lang, t } = useI18n();

  return (
    <main className="mx-auto max-w-6xl px-4">
      <div className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={lang === "ar" ? "text-right" : "text-left"}
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs text-zinc-700">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Under maintenance
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            {t("maintenance_title")}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 md:text-lg">
            {t("maintenance_body")}
          </p>

          <p className="mt-3 text-sm text-zinc-600">{t("maintenance_sub")}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black"
            >
              {t("contact_whatsapp")}
            </a>

            <a
              href="/programs"
              className="rounded-full border px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              {lang === "ar" ? "عرض البرامج" : "View programs"}
            </a>
          </div>

          <p className="mt-6 text-sm text-zinc-500">{t("back_soon")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="relative"
        >
          <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-zinc-100 via-white to-zinc-100" />
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-zinc-900">
              {lang === "ar" ? "عرض خاص" : "Featured program"}
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
              {lang === "ar" ? "٥ أيام — ٧ أشخاص" : "5 days — 7 persons"}
            </div>
            <div className="mt-2 text-zinc-600">
              {lang === "ar"
                ? "إقامة + برنامج سياحي بسعر مميز."
                : "Stay + tourism program with a great price."}
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="text-xs text-zinc-500">{lang === "ar" ? "السعر" : "Price"}</div>
                <div className="text-3xl font-semibold text-zinc-900">5999 SAR</div>
              </div>
              <div className="text-xs text-zinc-500">{lang === "ar" ? "لمجموعة" : "per group"}</div>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border bg-zinc-50 p-4 text-sm text-zinc-700">
                {lang === "ar" ? "وجهات مثل طرابزون، أوزنجول والمزيد." : "Destinations like Trabzon, Uzungöl, and more."}
              </div>
              <div className="rounded-2xl border bg-zinc-50 p-4 text-sm text-zinc-700">
                {lang === "ar" ? "حجز سريع عبر واتساب." : "Fast booking via WhatsApp."}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
