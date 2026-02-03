"use client";

import { useI18n } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang, setLang, t } = useI18n();

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-500">{t("language")}:</span>
      <button
        className={`rounded-full border px-3 py-1 ${
          lang === "en" ? "bg-black text-white" : "bg-white"
        }`}
        onClick={() => setLang("en")}
        type="button"
      >
        EN
      </button>
      <button
        className={`rounded-full border px-3 py-1 ${
          lang === "ar" ? "bg-black text-white" : "bg-white"
        }`}
        onClick={() => setLang("ar")}
        type="button"
      >
        AR
      </button>
    </div>
  );
}
