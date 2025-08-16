"use client"

import { useEffect } from "react"

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        "/tapnex-logo.png",
        "/nextgen-logo.png",
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      ]

      criticalResources.forEach((resource) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.href = resource
        link.as = resource.includes(".png") ? "image" : "style"
        if (resource.includes("font")) {
          link.crossOrigin = "anonymous"
        }
        document.head.appendChild(link)
      })
    }

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll("img[data-src]")
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ""
            img.classList.remove("lazy")
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src*="analytics"], script[src*="gtag"]')
      scripts.forEach((script) => {
        script.setAttribute("defer", "true")
      })
    }

    // Service Worker registration for caching
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          await navigator.serviceWorker.register("/sw.js")
          console.log("Service Worker registered successfully")
        } catch (error) {
          console.log("Service Worker registration failed:", error)
        }
      }
    }

    preloadCriticalResources()
    lazyLoadImages()
    optimizeThirdPartyScripts()
    registerServiceWorker()

    // Cleanup function
    return () => {
      // Remove any event listeners if needed
    }
  }, [])

  return null
}
