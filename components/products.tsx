"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products"

export default function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 tracking-tighter text-black">
            The Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Premium basketball apparel designed for the streets and the court
          </p>
        </div>

        {/* Centered products */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {products.map((product, index) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="block"
              >
                <Card
                  className={`group overflow-hidden border-2 border-gray-200 bg-white transition-all duration-500 hover:border-[#FF7518] hover:shadow-2xl hover:-translate-y-2 ${!product.available ? "opacity-75" : ""
                    }`}
                  onMouseEnter={() => setHoveredId(index)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-all duration-700 ${hoveredId === index
                            ? "scale-110 rotate-2"
                            : "scale-100 rotate-0"
                          }`}
                      />

                      {!product.available && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <Badge className="bg-white text-black font-bold uppercase">
                            Coming Soon
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardContent>

                  {/* Info */}
                  <CardFooter className="flex flex-col items-start p-6 gap-3">
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="outline"
                          className="uppercase text-xs tracking-wider border-black text-black"
                        >
                          {product.category}
                        </Badge>
                        <span
                          className={`text-xl font-black transition-colors ${hoveredId === index
                              ? "text-[#FF7518]"
                              : "text-black"
                            }`}
                        >
                          {product.price}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold uppercase tracking-tight text-black">
                        {product.name}
                      </h3>
                    </div>

                    <Button className="w-full uppercase tracking-wide bg-black hover:bg-[#FF7518] transition-all">
                      View Details →
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
