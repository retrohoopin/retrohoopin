"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Roshan",
    // role: "Street Baller",
    content:
      "These tees are fire! The quality is unmatched and the designs turn heads on and off the court. RetroHoopin gets it.",
    rating: 5,
    image: "/basketball-player-portrait-1.jpg",
  },
  {
    id: 2,
    name: "Santosh",
    // role: "Streetwear Enthusiast",
    content: "Finally, basketball apparel that doesn't look like everyone else's. Bold, authentic, and built to last.",
    rating: 5,
    image: "/basketball-player-portrait-2.png",
  },
  {
    id: 3,
    name: "Kunal",
    // role: "College Player",
    content: "The fit is perfect and the style is exactly what I was looking for. Can't wait for the hoodies to drop!",
    rating: 5,
    image: "/basketball-player-portrait-3.jpg",
  },
]

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 tracking-tighter text-black">What They Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-balance leading-relaxed">
            Real reviews from real hoopers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-2 border-gray-200 bg-white transition-all duration-500 hover:border-[#FF7518] hover:shadow-2xl hover:-translate-y-2 group"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 fill-[#FF7518] text-[#FF7518] transition-all duration-300 ${
                        hoveredId === testimonial.id ? "scale-110 rotate-12" : "scale-100 rotate-0"
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-black mb-6 leading-relaxed text-balance">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className={`w-12 h-12 rounded-full object-cover border-2 transition-all duration-300 ${
                      hoveredId === testimonial.id ? "border-[#FF7518] scale-110" : "border-gray-300 scale-100"
                    }`}
                  />
                  <div>
                    <div className="font-bold uppercase tracking-wide text-sm text-black">{testimonial.name}</div>
                    {/* <div className="text-xs text-gray-600 uppercase tracking-wider">{testimonial.role}</div> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
