"use client"

import { useEffect, useRef, useState } from "react"
import { CreditCard, DoorOpen, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const solutions = [
  {
    category: "Payments",
    icon: CreditCard,
    color: "from-indigo-400 to-blue-400",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
    borderColor: "border-indigo-200",
    hoverBorder: "hover:border-indigo-300",
    solutions: [
      {
        title: "NFC Card & Band Payments",
        description: "Contactless, secure, and lightning-fast payments for all event sizes.",
        bgColor: "bg-indigo-100/70",
        hoverBg: "hover:bg-indigo-200/80",
      },
      {
        title: "Recharge & Issuance System",
        description: "Easy top-up via cash/UPI, instant card/band issuance, and refund control.",
        bgColor: "bg-blue-100/70",
        hoverBg: "hover:bg-blue-200/80",
      },
    ],
  },
  {
    category: "Access & Ticketing",
    icon: DoorOpen,
    color: "from-purple-400 to-violet-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-300",
    solutions: [
      {
        title: "Entry-Exit Control",
        description: "Automated access for attendees, staff, and VIPs with real-time tracking.",
        bgColor: "bg-purple-100/70",
        hoverBg: "hover:bg-purple-200/80",
      },
      {
        title: "Ticketing System",
        description: "Digital ticketing, QR/NFC entry, and seamless attendee management.",
        bgColor: "bg-violet-100/70",
        hoverBg: "hover:bg-violet-200/80",
      },
    ],
  },
  {
    category: "Management & Analytics",
    icon: BarChart3,
    color: "from-emerald-400 to-teal-400",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    hoverBorder: "hover:border-emerald-300",
    solutions: [
      {
        title: "Volunteer & Stall Management",
        description: "Assign roles, monitor performance, and manage stalls with StepNex tools.",
        bgColor: "bg-emerald-100/70",
        hoverBg: "hover:bg-emerald-200/80",
      },
      {
        title: "Real-Time Analytics Dashboard",
        description: "Live stats for sales, attendance, and engagement. Make data-driven decisions instantly.",
        bgColor: "bg-teal-100/70",
        hoverBg: "hover:bg-teal-200/80",
      },
    ],
  },
]

export function SolutionsGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {solutions.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`border-2 ${category.borderColor} ${category.hoverBorder} shadow-xl hover:shadow-2xl transition-all duration-500 ${category.bgColor} backdrop-blur-sm group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-slate-900">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.solutions.map((solution, solutionIndex) => (
                    <div
                      key={solutionIndex}
                      className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${solution.bgColor} ${solution.hoverBg} border border-white/50 backdrop-blur-sm`}
                    >
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">{solution.title}</h4>
                      <p className="text-slate-700 leading-relaxed">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
