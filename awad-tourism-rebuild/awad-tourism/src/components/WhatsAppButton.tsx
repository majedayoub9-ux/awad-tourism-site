import { site } from "@/lib/seo";

export default function WhatsAppButton() {
  const phone = site.whatsapp.replace(/[^\d+]/g, "");
  const url = `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
    "Hello! I want to book a Turkey tour program."
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-600 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-green-700"
    >
      WhatsApp
    </a>
  );
}
