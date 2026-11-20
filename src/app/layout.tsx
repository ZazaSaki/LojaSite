import type { Metadata, Viewport } from "next";
import "@fontsource-variable/cormorant-garamond/wght.css";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "@fontsource-variable/jost/wght.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { brand, location } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the real domain when deploying.
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} · ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description: `${brand.name}, ${brand.descriptor.toLowerCase()} em ${location.city}. ${brand.slogan}.`,
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: brand.name,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: brand.name }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: brand.name,
  slogan: brand.slogan,
  address: {
    "@type": "PostalAddress",
    streetAddress: location.street,
    postalCode: location.postalCode,
    addressLocality: location.city,
    addressCountry: "PT",
  },
  geo: { "@type": "GeoCoordinates", latitude: location.lat, longitude: location.lng },
  hasMap: location.mapsUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll>
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
        </SmoothScroll>
        <div aria-hidden className="grain" />
      </body>
    </html>
  );
}
