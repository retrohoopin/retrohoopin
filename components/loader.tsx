"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Loader() {
  const [ballAnimated, setBallAnimated] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const ballTimer = setTimeout(() => setBallAnimated(true), 500)
    const logoTimer = setTimeout(() => setShowLogo(true), 2200)

    return () => {
      clearTimeout(ballTimer)
      clearTimeout(logoTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-md mx-auto px-4">

        {/* Hoop + Ball Layer */}
        <div
          className={`relative z-10 transition-opacity duration-700 ${
            showLogo ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Hoop */}
          <svg viewBox="0 0 200 150" className="w-full">
            <rect x="50" y="20" width="100" height="60" fill="none" stroke="black" strokeWidth="3" />
            <ellipse cx="100" cy="80" rx="30" ry="8" fill="none" stroke="#FF7518" strokeWidth="4" />
            <path
              d="M 70 80 L 75 100 M 80 80 L 82 100 M 90 80 L 90 100
                 M 100 80 L 100 100 M 110 80 L 110 100
                 M 120 80 L 118 100 M 130 80 L 125 100"
              stroke="black"
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>

          {/* Ball */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-1500 ease-in ${
              ballAnimated
                ? "translate-y-[160px] scale-75 opacity-0"
                : "translate-y-[-50px]"
            }`}
          >
            <svg width="60" height="60" viewBox="0 0 100 100">
              <defs>
                <radialGradient id="ballGradient" cx="40%" cy="40%">
                  <stop offset="0%" stopColor="#FF8C55" />
                  <stop offset="100%" stopColor="#FF7518" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="48" fill="url(#ballGradient)" />
              <path d="M50 2 Q50 50 50 98" stroke="#000" strokeWidth="2" opacity="0.3" />
              <path d="M2 50 Q50 50 98 50" stroke="#000" strokeWidth="2" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Logo Layer */}
        <div
          className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-1000 ${
            showLogo ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="bg-white/90 px-6 py-4 ">
            <Image
              src="/images/logo-20png.png"
              alt="RetroHoopin Co."
              width={400}
              height={260}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Loading text */}
        <p
          className={`mt-8 text-center text-gray-500 text-sm tracking-widest uppercase transition-opacity duration-500 ${
            showLogo ? "opacity-0" : "opacity-100"
          }`}
        >
          Loading...
        </p>
      </div>
    </div>
  )
}
