import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spurghinovarafast.it"),
  title: "Spurghi Novara 24H | Pronto Intervento 30 Min",
  description:
    "Spurghi Novara Fast: autospurgo, disotturazione tubi, videoispezione e pronto intervento fognature a Novara 24H.",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Spurghi Novara 24H | Pronto Intervento 30 Min",
    description:
      "Autospurgo e spurghi a Novara con intervento rapido 24H. Chiama o scrivi su WhatsApp.",
    url: "https://spurghinovarafast.it",
    siteName: "Spurghi Novara Fast",
    images: [{ url: "/images/hero-bw.webp", width: 1200, height: 630 }],
    locale: "it_IT",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Spurghi Novara Fast",
    url: "https://spurghinovarafast.it",
    telephone: "+393291234567",
    email: "info@spurghinovarafast.it",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Esempio 1",
      postalCode: "28100",
      addressLocality: "Novara",
      addressRegion: "NO",
      addressCountry: "IT"
    },
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: "Novara",
    priceRange: "$$",
    description:
      "Servizio di spurghi, autospurgo e pronto intervento fognature a Novara attivo 24 ore."
  };

  return (
    <html lang="it" className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
