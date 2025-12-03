import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jinghao Technology Co., Ltd - Rapid Prototyping & CNC Machining",
  description:
    "ISO certified rapid prototyping and manufacturing company specializing in CNC machining, 3D printing, and precision manufacturing since 2016.",
  keywords: [
    "rapid prototyping",
    "CNC machining",
    "3D printing",
    "vacuum casting",
    "injection molding",
    "sheet metal",
    "ISO certified",
    "manufacturing",
    "Shenzhen",
    "precision parts",
    "automotive parts",
    "medical devices",
  ],
  authors: [{ name: "Jinghao Technology Co., Ltd" }],
  creator: "Jinghao Technology Co., Ltd",
  publisher: "Jinghao Technology Co., Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://www.hrtstooling.com/",
    siteName: "Jinghao Technology Co., Ltd",
    title: "Jinghao Technology Co., Ltd - Rapid Prototyping & CNC Machining",
    description:
      "ISO certified rapid prototyping and manufacturing company specializing in CNC machining, 3D printing, and precision manufacturing since 2016.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jinghao Technology - Modern CNC Machining Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jinghao Technology Co., Ltd - Rapid Prototyping & CNC Machining",
    description:
      "ISO certified rapid prototyping and manufacturing company specializing in CNC machining, 3D printing, and precision manufacturing since 2016.",
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "http://www.hrtstooling.com/",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jinghao Technology Co., Ltd",
              alternateName: "Jinghao Technology",
              url: "http://www.hrtstooling.com/",
              logo: "http://www.hrtstooling.com/images/logo.png",
              description:
                "ISO certified rapid prototyping and manufacturing company specializing in CNC machining, 3D printing, and precision manufacturing since 2016.",
              foundingDate: "2016",
              address: {
                "@type": "PostalAddress",
                streetAddress: "A101, No23 Nanling Road, Xiner Community, Xinqiao Street",
                addressLocality: "Baoan district",
                addressRegion: "Shenzhen City",
                addressCountry: "CN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hanliu210201@163.com",
                availableLanguage: ["English", "Chinese"],
              },
              sameAs: ["http://www.hrtstooling.com/"],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "ISO 9001",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "International Organization for Standardization",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "IATF 16949",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "International Automotive Task Force",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "ISO 13485",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "International Organization for Standardization",
                  },
                },
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "CNC Machining",
                    description: "Precision CNC machining services for metal and plastic parts",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "3D Printing",
                    description: "Rapid prototyping through advanced 3D printing technology",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Vacuum Casting",
                    description: "Low-volume production using vacuum casting techniques",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Injection Molding",
                    description: "High-volume production through injection molding",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Sheet Metal Fabrication",
                    description: "Custom sheet metal parts and fabrication services",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
