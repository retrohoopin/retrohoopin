"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - using actual user logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-42 h-14 transition-all duration-300 group-hover:scale-105">
              <Image src="/images/resized-logo.png" alt="RetroHoopin Co." fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#products"
              className="text-sm font-semibold tracking-wide text-gray-700 hover:text-[#FF7518] transition-all duration-300 uppercase relative group"
            >
              Shop
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF7518] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-semibold tracking-wide text-gray-700 hover:text-[#FF7518] transition-all duration-300 uppercase relative group"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF7518] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/contact">
              <Button className="uppercase tracking-wide bg-black hover:bg-[#FF7518] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4 animate-in slide-in-from-top">
            <Link
              href="/#products"
              className="block text-sm font-semibold tracking-wide text-gray-700 hover:text-[#FF7518] transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/#testimonials"
              className="block text-sm font-semibold tracking-wide text-gray-700 hover:text-[#FF7518] transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full uppercase tracking-wide bg-black hover:bg-[#FF7518] transition-all duration-300">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
