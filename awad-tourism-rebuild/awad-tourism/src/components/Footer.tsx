import Link from "next/link";
import { site } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="font-semibold">{site.name}</div>
          <p className="mt-2 text-sm text-gray-600">{site.description}</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Pages</div>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>
              <Link href="/programs">Programs</Link>
            </li>
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>Email: {site.email}</li>
            <li>WhatsApp: {site.whatsapp}</li>
            <li>Location: {site.location}</li>
          </ul>
        </div>
      </div>
      <div className="px-4 pb-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
