import Link from "next/link";
import { site } from "@/lib/seo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden gap-5 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-gray-700 hover:text-black">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-900">
          Book / Contact
        </Link>
      </div>
    </header>
  );
}
