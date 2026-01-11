import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "致以科技 - 专业高效 · 专注CNC加工领域",
  description:
    "深圳市致以科技有限公司是一家ISO9001认证的专业CNC加工制造商，提供精密零件加工、快速原型制作和小批量生产服务。24小时快速报价，品质保证，价格透明。",
  keywords: [
    "致以科技",
    "CNC加工",
    "精密零件加工",
    "快速原型",
    "数控加工",
    "铝合金加工",
    "不锈钢加工",
    "五轴加工",
    "ISO9001认证",
    "深圳CNC加工",
    "机械加工",
    "零件制造",
    "汽车零部件",
    "医疗器械零件",
  ],
  authors: [{ name: "深圳市致以科技有限公司" }],
  creator: "深圳市致以科技有限公司",
  publisher: "深圳市致以科技有限公司",
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
    locale: "zh_CN",
    url: "http://www.hrtstooling.com/",
    siteName: "致以科技",
    title: "致以科技 - 专业高效 · 专注CNC加工领域",
    description:
      "深圳市致以科技有限公司是一家ISO9001认证的专业CNC加工制造商，提供精密零件加工、快速原型制作和小批量生产服务。",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "致以科技 - 专业CNC加工服务",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "致以科技 - 专业高效 · 专注CNC加工领域",
    description:
      "深圳市致以科技有限公司是一家ISO9001认证的专业CNC加工制造商，提供精密零件加工、快速原型制作和小批量生产服务。",
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
    <html lang="zh-CN">
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
              name: "深圳市致以科技有限公司",
              alternateName: "致以科技",
              url: "http://www.hrtstooling.com/",
              logo: "http://www.hrtstooling.com/images/logo.png",
              description:
                "深圳市致以科技有限公司是一家ISO9001认证的专业CNC加工制造商，提供精密零件加工、快速原型制作和小批量生产服务。快速响应，品质保证，价格透明，按需生产。",
              foundingDate: "2016",
              address: {
                "@type": "PostalAddress",
                streetAddress: "南岭路23号A101",
                addressLocality: "宝安区",
                addressRegion: "深圳市",
                addressCountry: "CN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                name: "石华凤",
                telephone: "+86-177-2756-1686",
                email: "hanliu210201@163.com",
                availableLanguage: ["Chinese", "English"],
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
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "CNC加工服务",
                    description: "专业CNC精密加工服务，适用于金属和塑料零件",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "五轴加工",
                    description: "先进五轴加工服务，适用于复杂几何形状零件",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "快速原型制作",
                    description: "快速响应的原型制作服务，24小时内报价",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "小批量生产",
                    description: "灵活的小批量生产服务，满足个性化需求",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
