"use client";

import { useEffect } from "react";
import Home from "@/app/page";
import { useI18n } from "@/lib/i18n";

export default function ArabicLanding() {
  const { setLang } = useI18n();

  useEffect(() => {
    setLang("ar");
  }, [setLang]);

  return <Home />;
}
