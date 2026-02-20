import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="relative w-36 h-12 mb-4">
              <Image src="/images/resized-logo.png" alt="RetroHoopin Co." fill className="object-contain" priority />
            </div>
            <p className="text-gray-600 text-sm mb-4 max-w-md leading-relaxed">
              Premium basketball streetwear for those who live the game. Born on the courts, made for the streets.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/retrohoopin.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF7518] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF7518] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF7518] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4 text-sm text-black">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/#products"
                  className="hover:text-[#FF7518] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-[#FF7518] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Hoodies (Soon)
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-[#FF7518] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Sweatshirts (Soon)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold uppercase tracking-wide mb-4 text-sm text-black">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/#testimonials"
                  className="hover:text-[#FF7518] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FF7518] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FF7518] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Order
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; 2025 RetroHoopin Co. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#FF7518] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#FF7518] transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
