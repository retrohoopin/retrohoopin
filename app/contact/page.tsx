"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"

function ContactForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    size: "",
    quantity: "1",
    message: "",
  })

  useEffect(() => {
    const productParam = searchParams.get("product")
    if (productParam) {
      setFormData((prev) => ({ ...prev, product: productParam }))
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // WhatsApp message
    const whatsappMessage = `New Order Request:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AProduct: ${formData.product}%0ASize: ${formData.size}%0AQuantity: ${formData.quantity}%0A%0AMessage: ${formData.message}`
    const whatsappNumber = "919405001238" // Replace with your WhatsApp number

    // Email subject and body
    const emailSubject = `Order Request: ${formData.product}`
    const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AProduct: ${formData.product}%0ASize: ${formData.size}%0AQuantity: ${formData.quantity}%0A%0AMessage: ${formData.message}`
    const emailAddress = "retrohoopin@gmail.com" // Replace with your email

    // Open WhatsApp in new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")

    // Open email client
    window.location.href = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`

    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-2 border-gray-200 bg-white shadow-xl">
            <CardContent className="pt-12 pb-12">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-6 text-[#FF7518] animate-bounce-slow" />
              <h2 className="text-3xl font-black uppercase mb-4 text-black">Order Submitted!</h2>
              <p className="text-gray-600 mb-8 text-balance leading-relaxed">
                We've opened WhatsApp and your email client for you. Please send the message to complete your order
                request. We'll get back to you within 24 hours.
              </p>
              <Link href="/">
                <Button
                  size="lg"
                  className="uppercase tracking-wide bg-black hover:bg-[#FF7518] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-[#FF7518] mb-8 transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-2 transition-transform duration-300" />
          Back to Shop
        </Link>

        <Card className="max-w-3xl mx-auto border-2 border-gray-200 bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-4xl font-black uppercase tracking-tighter text-black">
              Place Your Order
            </CardTitle>
            <CardDescription className="text-base leading-relaxed text-gray-600">
              Fill out the form below and we'll contact you via WhatsApp or email to confirm your order.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="uppercase text-xs tracking-wider font-bold text-black">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Doe"
                    className="mt-2 border-gray-300 focus:border-[#FF7518] focus:ring-[#FF7518] transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="uppercase text-xs tracking-wider font-bold text-black">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className="mt-2 border-gray-300 focus:border-[#FF7518] focus:ring-[#FF7518] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="uppercase text-xs tracking-wider font-bold text-black">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="mt-2 border-gray-300 focus:border-[#FF7518] focus:ring-[#FF7518] transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div>
                  <Label htmlFor="product" className="uppercase text-xs tracking-wider font-bold text-black">
                    Product *
                  </Label>
                  <Select value={formData.product} onValueChange={(value) => handleChange("product", value)} required>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-[#FF7518] focus:ring-[#FF7518]">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Retro Stripe Tee">GUNS AND ROSES – Boxy Fit Tee</SelectItem>
                      <SelectItem value="Retro Stripe Tee">REBOUND KING – Boxy Fit Tee</SelectItem>
                      {/* <SelectItem value="Court Legend Tee">LE KING WHITE</SelectItem> */}
                      {/* <SelectItem value="Court Legend Tee">LE KING BLACK</SelectItem> */}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="size" className="uppercase text-xs tracking-wider font-bold text-black">
                      Size *
                    </Label>
                    <Select value={formData.size} onValueChange={(value) => handleChange("size", value)} required>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-[#FF7518] focus:ring-[#FF7518]">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="S">Small</SelectItem>
                        <SelectItem value="M">Medium</SelectItem>
                        <SelectItem value="L">Large</SelectItem>
                        <SelectItem value="XL">X-Large</SelectItem>
                        <SelectItem value="XXL">XX-Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="quantity" className="uppercase text-xs tracking-wider font-bold text-black">
                      Quantity *
                    </Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max="10"
                      required
                      value={formData.quantity}
                      onChange={(e) => handleChange("quantity", e.target.value)}
                      className="mt-2 border-gray-300 focus:border-[#FF7518] focus:ring-[#FF7518] transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="pt-4 border-t border-gray-200">
                <Label htmlFor="message" className="uppercase text-xs tracking-wider font-bold text-black">
                  Additional Notes
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Any special requests or questions?"
                  rows={4}
                  className="mt-2 border-gray-300 focus:border-[#FF7518] focus:ring-[#FF7518] transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full uppercase tracking-wide group bg-black hover:bg-[#FF7518] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />
                Submit Order Request
              </Button>

              <p className="text-xs text-gray-600 text-center text-balance leading-relaxed">
                By submitting this form, you'll be directed to WhatsApp and email to complete your order request.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="min-h-screen pt-32 pb-20 bg-white">
            <div className="container mx-auto px-4 text-center">Loading...</div>
          </div>
        }
      >
        <ContactForm />
      </Suspense>
      <Footer />
    </>
  )
}
