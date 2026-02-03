import { site } from "@/lib/seo";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">About {site.name}</h1>
        <p className="mt-2 text-gray-600">We offer tour programs across Turkey with clear pricing and fast booking.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Reliable planning", text: "We keep itineraries simple, realistic, and enjoyable." },
          { title: "Support", text: "Quick answers on WhatsApp before and during the trip." },
          { title: "Flexible options", text: "Adjust hotels, transport, and program pace based on your needs." },
        ].map((x) => (
          <div key={x.title} className="rounded-2xl border p-6">
            <div className="font-semibold">{x.title}</div>
            <p className="mt-2 text-sm text-gray-600">{x.text}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Licenses / Trust</h2>
        <p className="mt-2 text-sm text-gray-600">
          Add your agency license number, certificates, and official registration info here.
        </p>
      </div>
    </div>
  );
}
