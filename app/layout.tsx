import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Chatbot } from "@/components/ui/chatbot"
import { AdvancedSEO } from "@/components/seo/advanced-seo"
import { PerformanceOptimizer } from "@/components/seo/performance-optimizer"
import { Analytics } from "@/components/seo/analytics"
import { PageTransition } from "@/components/ui/page-transition"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TapNex - NFC Payment Solutions for Events",
  description:
    "Transform your events with TapNex's cutting-edge NFC payment technology. Contactless, secure, and lightning-fast transactions for modern events.",
  keywords: "NFC payments, event technology, cashless payments, contactless transactions, event management",
  authors: [{ name: "TapNex Team" }],
  creator: "TapNex",
  publisher: "TapNex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tapnex.tech"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/tapnex-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/tapnex-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/tapnex-logo.png",
    shortcut: "/tapnex-logo.png",
  },
  openGraph: {
    title: "TapNex - NFC Payment Solutions for Events",
    description:
      "Transform your events with TapNex's cutting-edge NFC payment technology. Contactless, secure, and lightning-fast transactions for modern events.",
    url: "https://tapnex.tech",
    siteName: "TapNex",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TapNex - NFC Payment Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TapNex - NFC Payment Solutions for Events",
    description:
      "Transform your events with TapNex's cutting-edge NFC payment technology. Contactless, secure, and lightning-fast transactions for modern events.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <AdvancedSEO />
        <PerformanceOptimizer />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
          <Chatbot />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
