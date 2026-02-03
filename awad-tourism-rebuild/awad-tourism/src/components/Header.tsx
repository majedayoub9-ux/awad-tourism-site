"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/seo";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const nav = useMemo(
    () => [
      { href: "/", label: t("nav_home") },
      { href: "/programs", label: t("nav_programs") },
      { href: "/destinations", label: t("nav_destinations") },
      { href: "/about", label: t("nav_about") },
      { href: "/contact", label: t("nav_contact") },
    ],
    [t]
  );

  const activeHref = useMemo(() => {
    const hit = nav.find((n) => n.href !== "/" && pathname?.startsWith(n.href));
    return hit?.href ?? (pathname === "/" ? "/" : "");
  }, [pathname, nav]);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          className="font-semibold tracking-tight text-zinc-900"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-4 text-sm md:flex">
          {nav.map((n) => {
            const active = activeHref === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={
                  "relative rounded-full px-2 py-1 transition " +
                  (active ? "text-zinc-900" : "text-zinc-700 hover:text-zinc-900")
                }
              >
                {n.label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-zinc-100"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          <LanguageToggle />

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-emerald-100"
          >
            {t("nav_whatsapp")}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border bg-white p-2 text-zinc-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t bg-white md:hidden"
          >
            <div className="mx-auto max-w-6xl space-y-2 px-4 py-4">
              <div className="pb-2">
                <LanguageToggle />
              </div>

              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl border bg-white px-4 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  {n.label}
                </Link>
              ))}

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                {t("nav_book_whatsapp")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
