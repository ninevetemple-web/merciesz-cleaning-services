import Head from 'next/head'

export default function Services() {
  const services = [
    { id: 1, name: 'Home Cleaning', price: 'KES 3,000-8,000', duration: '2-4 hours', icon: '🏠' },
    { id: 2, name: 'Office Cleaning', price: 'KES 5,000-15,000', duration: '3-6 hours', icon: '🏢' },
    { id: 3, name: 'Deep Cleaning', price: 'KES 10,000-25,000', duration: '6-8 hours', icon: '✨' },
    { id: 4, name: 'Laundry & Dry Cleaning', price: 'KES 500-2,000', duration: '2-3 days', icon: '👕' },
    { id: 5, name: 'Laundry Drop & Pick', price: 'KES 200 per delivery', duration: 'Free delivery', icon: '🚚' },
    { id: 6, name: 'Carpet Cleaning', price: 'KES 4,000-10,000', duration: '2-3 hours', icon: '🧹' },
  ]

  return (
    <>
      <Head>
        <title>Services - Merciesz Cleaning</title>
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12 text-center text-purple-600">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                <p className="text-gray-600 mb-4">Duration: {service.duration}</p>
                <p className="text-purple-600 font-bold text-lg mb-4">{service.price}</p>
                <a href="tel:+254758983329" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-block">
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
