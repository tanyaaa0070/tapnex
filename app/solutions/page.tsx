import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { SolutionsGrid } from "@/components/sections/solutions-grid"
import { ProcessFlow } from "@/components/sections/process-flow"
import { Benefits } from "@/components/sections/benefits"

export const metadata: Metadata = {
  title: "Solutions - Complete Event Technology Platform",
  description:
    "Discover TapNex's end-to-end solutions: NFC payments, access control, ticketing, analytics, and volunteer management for events of all sizes.",
  alternates: {
    canonical: "https://tapnex.tech/solutions",
  },
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Complete Event Solutions"
        description="From payments to analytics, we provide everything you need to run successful events."
      />
      <ProcessFlow />
      <div className="section-neutral pattern-grid py-16">
        <SolutionsGrid />
      </div>
      <div className="section-light pattern-grid py-16">
        <Benefits />
      </div>
    </div>
  )
}
