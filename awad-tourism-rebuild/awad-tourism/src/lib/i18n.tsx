"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

const dict: Dict = {
  maintenance_title: {
    en: "We’re improving our website",
    ar: "نقوم بتطوير موقعنا",
  },
  maintenance_body: {
    en: "Awad Tourism is currently under maintenance. We’ll be back shortly with a better experience.",
    ar: "موقع عوض للسياحة قيد الصيانة حالياً. سنعود قريباً بتجربة أفضل.",
  },
  contact_whatsapp: {
    en: "Contact us on WhatsApp",
    ar: "تواصل معنا عبر واتساب",
  },
  back_soon: {
    en: "Thank you for your patience.",
    ar: "شكراً لتفهمكم.",
  },
  language: {
    en: "Language",
    ar: "اللغة",
  },
};

const I18nCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: () => "",
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const value = useMemo(() => {
    return {
      lang,
      setLang,
      t: (key: keyof typeof dict) => dict[key][lang],
    };
  }, [lang]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  return useContext(I18nCtx);
}
