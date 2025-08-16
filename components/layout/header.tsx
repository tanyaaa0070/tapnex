"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: "fas fa-home", color: "purple" },
  { name: "Features", href: "/features", icon: "fas fa-cog", color: "blue" },
  { name: "Solutions", href: "/solutions", icon: "fas fa-cog", color: "blue" },
  { name: "Blog", href: "/blog", icon: "fas fa-blog", color: "indigo" },
  { name: "About", href: "/about", icon: "fas fa-info-circle", color: "green" },
  { name: "Contact", href: "/contact", icon: "fas fa-envelope", color: "orange" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    if (href !== pathname) {
      router.push(href)
      setIsOpen(false)
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const sidebar = document.getElementById("mobile-sidebar")
      const menuButton = document.getElementById("mobile-menu-button")

      if (isOpen && sidebar && !sidebar.contains(target) && !menuButton?.contains(target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  const getActiveStyles = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-600 text-white shadow-lg"
      case "blue":
        return "bg-blue-600 text-white shadow-lg"
      case "green":
        return "bg-green-600 text-white shadow-lg"
      case "orange":
        return "bg-orange-600 text-white shadow-lg"
      case "indigo":
        return "bg-indigo-600 text-white shadow-lg"
      default:
        return "bg-gray-600 text-white shadow-lg"
    }
  }

  const getHoverStyles = (color: string) => {
    switch (color) {
      case "purple":
        return "text-slate-700 hover:bg-purple-100 hover:text-purple-700"
      case "blue":
        return "text-slate-700 hover:bg-blue-100 hover:text-blue-700"
      case "green":
        return "text-slate-700 hover:bg-green-100 hover:text-green-700"
      case "orange":
        return "text-slate-700 hover:bg-orange-100 hover:text-orange-700"
      case "indigo":
        return "text-slate-700 hover:bg-indigo-100 hover:text-indigo-700"
      default:
        return "text-slate-700 hover:bg-gray-100 hover:text-slate-900"
    }
  }

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />

      <header
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-300"
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-3 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="TapNex Home"
            >
              <Image
                src="/tapnex-logo.png"
                alt="TapNex Logo"
                width={80}
                height={80}
                className="hover:rotate-3 transition-transform duration-300"
                priority
                sizes="80px"
              />
              <span className="text-2xl font-bold text-slate-900 transition-colors duration-300">TapNex</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center gap-2",
                    pathname === item.href ? getActiveStyles(item.color) : getHoverStyles(item.color),
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <i className={`${item.icon} text-sm`}></i>
                  <span>{item.name}</span>
                </button>
              ))}
              <Button
                asChild
                className="ml-4 bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              id="mobile-menu-button"
              variant="ghost"
              size="sm"
              className="md:hidden text-slate-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-sidebar"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <aside
        id="mobile-sidebar"
        className={cn(
          "fixed inset-0 bg-white z-40 py-6 px-4 space-y-4 transition-transform duration-300 md:hidden overflow-y-auto",
          "rounded-t-[20px] shadow-2xl",
          isOpen ? "translate-y-0" : "translate-y-full",
        )}
        style={{ top: "25%", height: "75%" }}
        role="menu"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-purple-600">TapNex Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-purple-100 rounded-lg transition-colors duration-200"
            role="menuitem"
            aria-current={pathname === "/" ? "page" : undefined}
          >
            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 text-purple-700">
              <i className="fas fa-home text-sm"></i>
            </div>
            <span className="text-sm font-medium text-gray-700">Home</span>
          </button>

          <button
            onClick={() => handleNavigation("/features")}
            className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-blue-100 rounded-lg transition-colors duration-200"
            role="menuitem"
            aria-current={pathname === "/features" ? "page" : undefined}
          >
            <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 text-blue-700">
              <i className="fas fa-cog text-sm"></i>
            </div>
            <span className="text-sm font-medium text-gray-700">Features</span>
          </button>

          <button
            onClick={() => handleNavigation("/solutions")}
            className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-blue-100 rounded-lg transition-colors duration-200"
            role="menuitem"
            aria-current={pathname === "/solutions" ? "page" : undefined}
          >
            <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 text-blue-700">
              <i className="fas fa-cog text-sm"></i>
            </div>
            <span className="text-sm font-medium text-gray-700">Solutions</span>
          </button>

          <button
            onClick={() => handleNavigation("/about")}
            className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-green-100 rounded-lg transition-colors duration-200"
            role="menuitem"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 text-green-700">
              <i className="fas fa-info-circle text-sm"></i>
            </div>
            <span className="text-sm font-medium text-gray-700">About</span>
          </button>

          <button
            onClick={() => handleNavigation("/contact")}
            className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-orange-100 rounded-lg transition-colors duration-200"
            role="menuitem"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0 text-orange-700">
              <i className="fas fa-envelope text-sm"></i>
            </div>
            <span className="text-sm font-medium text-gray-700">Contact</span>
          </button>

          <button
            onClick={() => handleNavigation("/blog")}
            className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-indigo-100 rounded-lg transition-colors duration-200"
            role="menuitem"
            aria-current={pathname === "/blog" ? "page" : undefined}
          >
            <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-700">
              <i className="fas fa-blog text-sm"></i>
            </div>
            <span className="text-sm font-medium text-gray-700">Blog</span>
          </button>
        </div>

        <div className="pt-6 border-t border-gray-200 pb-4">
          <Button
            onClick={() => handleNavigation("/contact")}
            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors duration-200 mb-4"
          >
            Schedule Demo
          </Button>
        </div>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
