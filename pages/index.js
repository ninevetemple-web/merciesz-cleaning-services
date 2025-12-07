import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Merciesz Cleaning Services - Nairobi, Kenya</title>
        <meta name="description" content="Professional cleaning and laundry services in Riruta, Nairobi" />
      </Head>
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Merciesz Cleaning Services</h1>
            <p className="text-xl mb-8">Professional Cleaning & Laundry Services in Riruta, Nairobi</p>
            <a href="#contact" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg inline-block">
              Contact Us Now
            </a>
          </div>
        </div>

        {/* Services Preview */}
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold mb-2">Home Cleaning</h3>
                <p className="text-gray-700">Comprehensive home cleaning services</p>
                <p className="text-purple-600 font-bold mt-2">KES 3,000-8,000</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-4xl mb-4">👕</div>
                <h3 className="text-2xl font-bold mb-2">Laundry & Dry Cleaning</h3>
                <p className="text-gray-700">Professional laundry and dry cleaning services</p>
                <p className="text-purple-600 font-bold mt-2">KES 500-2,000</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold mb-2">Office Cleaning</h3>
                <p className="text-gray-700">Corporate and office cleaning solutions</p>
                <p className="text-purple-600 font-bold mt-2">KES 5,000-15,000</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-2xl font-bold mb-2">Laundry Drop & Pick</h3>
                <p className="text-gray-700">Free delivery service for laundry</p>
                <p className="text-purple-600 font-bold mt-2">KES 200 per delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-gray-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">📞 Phone</h3>
                <p className="mb-2"><a href="tel:+254758983329" className="hover:text-purple-400">+254 758 983 329</a></p>
                <p className="mb-6"><a href="tel:+254769621946" className="hover:text-purple-400">+254 769 621 946</a></p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">📍 Location</h3>
                <p className="text-lg">Riruta Satellite</p>
                <p className="text-lg">Nairobi, Kenya</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">🕐 Hours</h3>
              <p className="mb-2">Monday - Saturday: 7:00 AM - 7:00 PM</p>
              <p>Sunday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
