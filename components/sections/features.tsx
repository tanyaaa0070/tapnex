"use client"

import { useEffect, useRef, useState } from "react"
import { CreditCard, DoorOpen, Ticket, Users, Megaphone, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: CreditCard,
    title: "NFC Payments",
    description: "Contactless, secure, and instant payments for any event size.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-indigo-100",
    hoverColor: "group-hover:from-blue-600 group-hover:to-indigo-700",
    delay: 0,
  },
  {
    icon: DoorOpen,
    title: "Entry Management",
    description: "Automated access control for attendees, staff, and VIPs.",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-indigo-100 hover:to-purple-100",
    hoverColor: "group-hover:from-indigo-600 group-hover:to-purple-700",
    delay: 100,
  },
  {
    icon: Ticket,
    title: "Digital Ticketing",
    description: "Digital ticketing and real-time validation at entry points.",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-violet-100",
    hoverColor: "group-hover:from-purple-600 group-hover:to-violet-700",
    delay: 200,
  },
  {
    icon: Users,
    title: "Volunteer System",
    description: "Assign, track, and manage volunteers with ease.",
    color: "from-violet-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-blue-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-violet-100 hover:to-blue-100",
    hoverColor: "group-hover:from-violet-600 group-hover:to-blue-700",
    delay: 300,
  },
  {
    icon: Megaphone,
    title: "Sponsor Branding",
    description: "Branded cards, booths, and digital touchpoints for sponsors.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-cyan-100",
    hoverColor: "group-hover:from-blue-600 group-hover:to-cyan-700",
    delay: 400,
  },
  {
    icon: RefreshCw,
    title: "Refund Handling",
    description: "Easy, transparent refund process for attendees and organizers.",
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-cyan-50 to-teal-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-cyan-100 hover:to-teal-100",
    hoverColor: "group-hover:from-cyan-600 group-hover:to-teal-700",
    delay: 500,
  },
]

export function Features() {
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
    <section ref={sectionRef} className="py-24 section-light pattern-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Powerful Features for Modern Events</h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed font-bold">
            Everything you need to run successful, cashless events with real-time insights and seamless management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group card-professional border-0 shadow-xl overflow-hidden ${feature.bgColor} ${feature.hoverBg} backdrop-blur-sm scroll-reveal ${
                isVisible ? "revealed" : ""
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <CardContent className="p-8 text-center relative">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} ${feature.hoverColor} text-white mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg pulse-elegant`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-700 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
