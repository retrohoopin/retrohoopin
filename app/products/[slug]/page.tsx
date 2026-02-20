"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductPage() {
    const { slug } = useParams()
    const router = useRouter()
    const product = products.find(p => p.slug === slug)
    const [size, setSize] = useState("")
    const [mainImage, setMainImage] = useState(product?.images[0] || "")

    if (!product) return <div className="p-20">Product not found</div>

    return (
        <>
            <Header />

            <section className="pt-32 pb-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-12">

                    {/* Main Image + Thumbnails */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-xl shadow-xl">
                            <img
                                src={mainImage}
                                alt={product.name}
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-3">
                            {product.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setMainImage(img)}
                                    className={`border rounded-lg overflow-hidden ${mainImage === img ? "border-[#FF7518]" : "border-gray-300"
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-20 h-20 object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-black uppercase">{product.name}</h1>

                        <p className="text-2xl font-bold text-[#FF7518]">{product.price}</p>

                        <p className="text-gray-600">{product.description}</p>

                        {/* Sizes */}
                        <div>
                            <p className="font-bold mb-2">Select Size</p>
                            <div className="flex gap-3">
                                {product.sizes.map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setSize(s)}
                                        className={`px-4 py-2 border font-bold transition ${size === s ? "bg-black text-white" : "bg-white"
                                            }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button
                            size="lg"
                            disabled={!size}
                            className="w-full bg-black hover:bg-[#FF7518]"
                            onClick={() =>
                                router.push(
                                    `/contact?product=${encodeURIComponent(product.name)}&size=${size}`
                                )
                            }
                        >
                            Order Now
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
