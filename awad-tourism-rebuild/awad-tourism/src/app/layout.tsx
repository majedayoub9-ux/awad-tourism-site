import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/seo";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <I18nProvider>
          <Header />
          <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
          <Footer />
          <WhatsAppButton />
        </I18nProvider>
      </body>
    </html>
  );
}
