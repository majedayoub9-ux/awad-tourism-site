"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

const dict: Dict = {
  // Header / nav
  nav_home: { en: "Home", ar: "الرئيسية" },
  nav_programs: { en: "Programs", ar: "البرامج" },
  nav_destinations: { en: "Destinations", ar: "الوجهات" },
  nav_about: { en: "About", ar: "من نحن" },
  nav_contact: { en: "Contact", ar: "تواصل معنا" },
  nav_whatsapp: { en: "WhatsApp", ar: "واتساب" },
  nav_book_whatsapp: { en: "Book on WhatsApp", ar: "احجز عبر واتساب" },

  // Maintenance
  maintenance_title: { en: "We’re improving our website", ar: "نقوم بتطوير موقعنا" },
  maintenance_body: {
    en: "Awad Tourism is currently under maintenance. We’ll be back shortly with a better experience.",
    ar: "موقع عوض للسياحة قيد الصيانة حالياً. سنعود قريباً بتجربة أفضل.",
  },
  maintenance_sub: { en: "Meanwhile, you can contact us to book your trip.", ar: "وفي هذه الأثناء يمكنك التواصل معنا للحجز." },
  contact_whatsapp: { en: "Contact us on WhatsApp", ar: "تواصل معنا عبر واتساب" },
  back_soon: { en: "Thank you for your patience.", ar: "شكراً لتفهمكم." },
  language: { en: "Language", ar: "اللغة" },
};

const STORAGE_KEY = "awad_lang";

const I18nCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: () => "",
});

function normalizeLang(input: string | null | undefined): Lang | null {
  if (!input) return null;
  const v = input.toLowerCase();
  if (v === "ar") return "ar";
  if (v === "en") return "en";
  return null;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // English-first default
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    // 1) URL hint: /ar -> Arabic
    const path = window.location.pathname || "/";
    const byPath: Lang | null = path === "/ar" || path.startsWith("/ar/") ? "ar" : null;

    // 2) Saved choice
    const saved = normalizeLang(window.localStorage.getItem(STORAGE_KEY));

    // Priority: saved > path > default
    const next = saved ?? byPath ?? "en";
    setLang(next);
  }, []);

  useEffect(() => {
    // Persist + set document direction
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo(() => {
    return {
      lang,
      setLang,
      t: (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key),
    };
  }, [lang]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  return useContext(I18nCtx);
}
