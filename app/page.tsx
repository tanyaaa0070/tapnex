import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { BlogSection } from "@/components/sections/blog-section"
import { UseCases } from "@/components/sections/use-cases"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "TapNex - NFC Payments for Events | Cashless Event Solutions",
  description:
    "Tap into Simplicity with TapNex. Smart NFC-based cashless payment system for college fests, tech expos, and events. Instant transactions, real-time analytics.",
  alternates: {
    canonical: "https://tapnex.tech",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <UseCases />
      <BlogSection />
      <CTA />
    </>
  )
}
