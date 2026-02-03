"use client";

import { useState } from "react";
import { site } from "@/lib/seo";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static demo form (no backend). For production: connect to an email/API + add rate limiting.
    setStatus("sent");
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold">Contact / Booking</h1>
        <p className="mt-2 text-gray-600">
          Send your trip dates and preferred cities. We’ll reply with the best program and price.
        </p>

        <div className="mt-6 rounded-2xl border p-6 text-sm">
          <div className="font-semibold">Direct contact</div>
          <div className="mt-2 text-gray-700">Email: {site.email}</div>
          <div className="text-gray-700">WhatsApp: {site.whatsapp}</div>
          <div className="text-gray-700">Location: {site.location}</div>
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-xl font-semibold">Request a quote</h2>

        {status === "sent" ? (
          <div className="mt-4 rounded-xl border bg-green-50 p-4 text-sm">
            Sent! (Demo). For production, connect to an email/API and enable rate limiting + spam protection.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <label className="block text-sm">
              <div className="font-medium">Name</div>
              <input required className="mt-2 w-full rounded-xl border px-3 py-2" />
            </label>
            <label className="block text-sm">
              <div className="font-medium">Phone / WhatsApp</div>
              <input required className="mt-2 w-full rounded-xl border px-3 py-2" />
            </label>
            <label className="block text-sm">
              <div className="font-medium">Trip details</div>
              <textarea
                required
                className="mt-2 w-full rounded-xl border px-3 py-2"
                rows={5}
                placeholder="Dates, number of people, cities you want to visit, budget range..."
              />
            </label>
            <button className="w-full rounded-full bg-black px-4 py-3 text-sm text-white hover:bg-gray-900">
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
