"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const primaryBtn =
    "text-base uppercase tracking-wide group bg-black text-white hover:bg-[#FF7518] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <Header />

      {/* Halftone pattern background - subtle retro effect */}
      <div className="absolute inset-0 opacity-[0.03] halftone-pattern" />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with animation and micro-interactions */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 text-balance uppercase text-black">
              Hoops First
              <span className="block mt-2 text-[#FF7518] animate-pulse-subtle">Street Always</span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
              This isn't merch. It's hoops culture. <br />
              Cut, Stitched and worn beyond the court.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <Link href="/contact">
              {/* <Button
                size="lg"
                className={primaryBtn}
              >
                Shop Collection
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button> */}
            </Link>
            <Link href="/#products">
              <Button
                size="lg"
                className={primaryBtn}
              >
                View Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* Decorative elements with stagger animation */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { label: "Premium Quality", value: "100%" },
              { label: "Bold Designs", value: "Unique" },
              { label: "Street Approved", value: "Authentic" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 group cursor-default ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-black uppercase mb-2 group-hover:text-[#FF7518] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
