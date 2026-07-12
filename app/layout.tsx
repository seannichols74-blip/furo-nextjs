import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://www.furoenterprisesllc.com";

const title = "Furo Enterprises LLC | Northern Maine Excavation & Landscaping";
const description =
  "Furo Enterprises LLC — Fully insured, Maine DEP licensed excavation, landscaping, land clearing, driveways, drainage, septic systems & vehicle undercoating in Linneus, Maine.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Furo Enterprises LLC",
  },
  description,
  keywords: [
    "excavation Maine",
    "landscaping Linneus ME",
    "land clearing Northern Maine",
    "septic installation Maine",
    "driveway grading Maine",
    "vehicle undercoating Maine",
    "Furo Enterprises",
  ],
  authors: [{ name: "Furo Enterprises LLC" }],
  creator: "Furo Enterprises LLC",
  publisher: "Furo Enterprises LLC",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Furo Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${siteUrl}/#business`,
  name: "Furo Enterprises LLC",
  image: `${siteUrl}/logo.png`,
  logo: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: "+1-207-249-0162",
  priceRange: "$$",
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1172 Hodgdon Mills Rd",
    addressLocality: "Linneus",
    addressRegion: "ME",
    postalCode: "04730",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.0148,
    longitude: -67.9036,
  },
  areaServed: {
    "@type": "State",
    name: "Maine",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "17:00",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      "Excavation",
      "Landscaping",
      "Land Clearing",
      "Driveways",
      "Drainage",
      "Septic Systems",
      "Vehicle Undercoating",
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-neutral-950 text-white overflow-x-hidden grit-texture pb-20 md:pb-0">
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
