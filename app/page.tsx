"use client"

import { useState, useEffect } from "react"
import Loader from "@/components/loader"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}
