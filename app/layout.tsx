import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@fontsource/outfit/500.css"
import "@fontsource/outfit/600.css"
import "@fontsource/outfit/700.css"
import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { JsonLd } from "@/components/json-ld"
import { GOOGLE_ADS_CONVERSION_ID } from "@/lib/analytics"
import { SITE } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { BRANDS } from "@/lib/brands"

export const viewport: Viewport = { themeColor: "#0b1b34" }

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Profix Electronics & Appliances | Appliance, TV and Gate Repairs in Gauteng",
    template: "%s | Profix",
  },
  description:
    "Profix repairs washing machines, fridges, ovens, microwaves, air conditioners, TVs and gate motors across Gauteng and its outskirts. Call Now or send a WhatsApp job card for a quote.",
  keywords: ["appliance repairs Gauteng", "washing machine repairs", "fridge repairs", "oven repairs", "microwave repairs", "aircon installation", "TV repairs", "gate motor repairs", "Profix"],
  applicationName: "Profix",
  authors: [{ name: "Profix Electronics & Appliances", url: SITE.url }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#ff7a1a" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE.url,
    siteName: "Profix Electronics & Appliances",
    title: "Profix Electronics & Appliances | Repairs in Gauteng",
    description: "Washing machines, fridges, ovens, microwaves, air conditioners, TVs and gates repaired across Gauteng.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Profix Electronics and Appliances repairs in Gauteng" }],
  },
  twitter: { card: "summary_large_image", title: "Profix Electronics & Appliances | Repairs in Gauteng", description: "Appliance, electronics and gate repairs across Gauteng.", images: ["/og-image.png"] },
  category: "Appliance repairs",
  other: { "geo.region": "ZA-GP", "geo.placename": "Gauteng, South Africa" },
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/og-image.png`,
  logo: `${SITE.url}/logo-square.png`,
  telephone: SITE.phoneTel,
  email: SITE.email,
  description: "Appliance, electronics and gate repairs across Gauteng and its outskirts.",
  priceRange: "$$",
  knowsAbout: SERVICES.map((s) => s.name),
  brand: BRANDS.map((b) => ({ "@type": "Brand", name: b.name, logo: `${SITE.url}${b.logo}` })),
  areaServed: [{ "@type": "AdministrativeArea", name: "Gauteng" }, ...AREAS.map((a) => ({ "@type": "City", name: a.name }))],
  makesOffer: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: `${SITE.url}/services/${s.slug}` } })),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <head>
        <meta name="format-detection" content="telephone=yes" />
        {GOOGLE_ADS_CONVERSION_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONVERSION_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ADS_CONVERSION_ID}');` }} />
          </>
        )}
        <JsonLd data={businessSchema} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, inLanguage: "en-ZA", publisher: { "@id": `${SITE.url}/#business` } }} />
      </head>
      <body>
        <Header />
        <main className="pb-[72px] md:pb-0">{children}</main>
        <Footer />
        <FloatingActions />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
