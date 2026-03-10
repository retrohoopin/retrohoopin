import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfService() {
  return (
    <>
      <Header />

      <div className="min-h-screen pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          <h1 className="text-4xl font-black uppercase mb-8">
            Terms of Service
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            By purchasing from <strong>Retro Hoopin Co.</strong>, you agree to the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">1. General</h2>
          <p className="text-gray-700">
            By purchasing from Retro Hoopin Co., you agree to our terms and policies.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">2. Products</h2>
          <p className="text-gray-700">
            We strive to provide accurate product descriptions and images. However, slight variations in color or design may occur.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">3. Orders & Payments</h2>
          <p className="text-gray-700">
            Customers must provide accurate information while placing orders. Orders are confirmed only after payment is successfully completed.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">4. Shipping & Delivery</h2>
          <p className="text-gray-700">
            Delivery timelines depend on courier services and customer location. Retro Hoopin Co. is not responsible for delays caused by third-party logistics providers.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">5. Returns & Exchanges</h2>
          <p className="text-gray-700">
            Please refer to our Exchange Policy for detailed information about returns and exchanges.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">6. Intellectual Property</h2>
          <p className="text-gray-700">
            All designs, logos, graphics, and images are the property of Retro Hoopin Co. and may not be used or reproduced without permission.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">7. Liability</h2>
          <p className="text-gray-700">
            Retro Hoopin Co.'s maximum liability is limited to the value of the purchased product.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">8. Governing Law</h2>
          <p className="text-gray-700">
            All disputes will be governed under the jurisdiction of Indian law.
          </p>

          <p className="text-sm text-gray-500 mt-10">
            Last updated: March 2026
          </p>

        </div>
      </div>

      <Footer />
    </>
  )
}