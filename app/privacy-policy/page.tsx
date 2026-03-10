import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <div className="min-h-screen pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          <h1 className="text-4xl font-black uppercase mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>Retro Hoopin Co.</strong> values your trust and is committed to protecting your
            personal information. This policy explains how we collect, use, and safeguard your data.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Personal details (name, email, phone, address)</li>
            <li>Payment details processed securely through trusted partners</li>
            <li>Device and browser information to improve website performance</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To process and deliver orders</li>
            <li>To provide customer support</li>
            <li>To send updates (only if you opt-in)</li>
            <li>To improve user experience</li>
          </ul>

          <p className="text-gray-700 mt-8 leading-relaxed">
            We never sell or rent your information. Data is only shared with logistics and
            payment partners when necessary to complete your order.
          </p>

        </div>
      </div>

      <Footer />
    </>
  )
}