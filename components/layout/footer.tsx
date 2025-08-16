import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

const footerLinks = {
  solutions: [
    { name: "NFC Payments", href: "/solutions" },
    { name: "Entry Management", href: "/solutions" },
    { name: "Volunteer System", href: "/solutions" },
    { name: "Analytics", href: "/solutions" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/tapnex-logo-purple.png" alt="TapNex Logo" width={60} height={60} className="pulse-elegant" />
              <h3 className="text-2xl font-bold gradient-text-elegant">TapNex</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              <span className="text-white font-semibold">Tap into Simplicity</span> with TapNex - The future of event
              technology. Making every event{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold">
                cashless, seamless, and data-driven
              </span>
              .
            </p>
            <div className="flex space-x-4">{/* Social media links would go here */}</div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-slate-300">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline flex items-center gap-1 group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-slate-300">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-lg text-slate-300">Contact</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-slate-400" />
                <div>
                  <a href="mailto:info@tapnex.tech" className="hover:text-white transition-colors">
                    info@tapnex.tech
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-slate-400" />
                <div>
                  <div className="font-semibold text-white">+91 88230 04349</div>
                  {/* Removed the second phone number as per previous instructions to consolidate */}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-slate-400" />
                <div className="text-sm">
                  <div className="mb-2">
                    <strong className="text-white">Registered:</strong>
                    <br />
                    770/2 Ankur Colony, Makroniya
                    <br />
                    Sagar (M.P) 470004
                  </div>
                  <div>
                    <strong className="text-white">Operations:</strong>
                    <br />
                    Harohalli, Bengaluru
                    <br />
                    Karnataka 562112
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image src="/nextgen-logo.png" alt="NextGen FC Logo" width={32} height={32} className="mr-4" />
              <p className="text-gray-300 text-sm">
                © 2025 <span className="text-white font-semibold">NextGen FC</span>. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
