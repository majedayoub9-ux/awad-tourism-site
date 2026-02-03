"use client";

import { motion } from "framer-motion";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { lang, t } = useI18n();

  // Optional: put your real WhatsApp number with country code
  const whatsapp = "https://wa.me/966000000000";

  return (
    <main className={`min-h-[80vh] ${lang === "ar" ? "text-right" : "text-left"}`}>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex items-center justify-between gap-4">
          <div className="text-lg font-semibold">Awad Tourism</div>
          <LanguageToggle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border bg-white p-10 shadow-sm"
        >
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-semibold leading-tight"
          >
            {t("maintenance_title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-600"
          >
            {t("maintenance_body")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="mt-2 text-gray-600"
          >
            {t("back_soon")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={whatsapp}
              className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact_whatsapp")}
            </a>

            <div className="text-xs text-gray-500">
              (You can replace the WhatsApp number later)
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
