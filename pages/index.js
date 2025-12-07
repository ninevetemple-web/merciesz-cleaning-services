import Head from 'next/head'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Merciesz Cleaning Services - Nairobi, Kenya</title>
        <meta name="description" content="Professional cleaning and laundry services in Riruta, Nairobi" />
      </Head>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-4">Merciesz Cleaning Services</h1>
            <p className="text-2xl mb-8 text-purple-100">Professional Cleaning & Laundry Services</p>
            <p className="text-xl mb-12 text-purple-200">Quality Service in Riruta, Nairobi Kenya</p>
            <div className="space-x-4">
              <a href="#contact" className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg inline-block transition transform hover:scale-105">
                📞 Call Now: +254 758 983 329
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <Gallery />

        {/* Services Preview */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Popular Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold mb-2">Home Cleaning</h3>
                <p className="text-gray-600 mb-4">Comprehensive home cleaning for all room types</p>
                <p className="text-purple-600 font-bold text-lg">KES 3,000-8,000</p>
                <p className="text-sm text-gray-500">2-4 hours</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">👕</div>
                <h3 className="text-2xl font-bold mb-2">Laundry Service</h3>
                <p className="text-gray-600 mb-4">Professional laundry & dry cleaning</p>
                <p className="text-purple-600 font-bold text-lg">KES 500-2,000</p>
                <p className="text-sm text-gray-500">2-3 days</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="text-2xl font-bold mb-2">Drop & Pick</h3>
                <p className="text-gray-600 mb-4">Free laundry delivery service</p>
                <p className="text-purple-600 font-bold text-lg">KES 200/delivery</p>
                <p className="text-sm text-gray-500">Free delivery</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/services" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition">
                View All Services →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
