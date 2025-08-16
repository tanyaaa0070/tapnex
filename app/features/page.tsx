import type { Metadata } from "next"
import { FeatureWheel3D } from "@/components/sections/feature-wheel-3d"

export const metadata: Metadata = {
  title: "Features - Advanced NFC Payment Solutions",
  description:
    "Explore TapNex's comprehensive features: NFC payments, entry management, digital ticketing, volunteer system, sponsor branding, and real-time analytics.",
  alternates: {
    canonical: "https://tapnex.tech/features",
  },
}

export default function FeaturesPage() {
  return <FeatureWheel3D />
}
