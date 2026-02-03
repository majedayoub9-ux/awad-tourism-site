"use client";

import { useI18n } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="hidden text-gray-500 sm:inline">{t("language")}:</span>

      <button
        type="button"
        className={
          "rounded-full border px-3 py-1 transition " +
          (lang === "en" ? "bg-zinc-900 text-white" : "bg-white hover:bg-zinc-50")
        }
        onClick={() => setLang("en")}
        aria-label="Switch to English"
      >
        EN
      </button>

      <button
        type="button"
        className={
          "rounded-full border px-3 py-1 transition " +
          (lang === "ar" ? "bg-zinc-900 text-white" : "bg-white hover:bg-zinc-50")
        }
        onClick={() => setLang("ar")}
        aria-label="Switch to Arabic"
      >
        AR
      </button>
    </div>
  );
}
