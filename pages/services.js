import Head from 'next/head'
import Header from '../components/Header'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'

export default function Services() {
  const services = [
    { 
      id: 1, 
      name: 'Home Cleaning', 
      price: 'KES 3,000-8,000', 
      duration: '2-4 hours', 
      icon: '🏠',
      description: 'Complete home cleaning including bedrooms, living rooms, kitchens and bathrooms'
    },
    { 
      id: 2, 
      name: 'Office Cleaning', 
      price: 'KES 5,000-15,000', 
      duration: '3-6 hours', 
      icon: '🏢',
      description: 'Professional office spaces, conference rooms and corporate environments'
    },
    { 
      id: 3, 
      name: 'Deep Cleaning', 
      price: 'KES 10,000-25,000', 
      duration: '6-8 hours', 
      icon: '✨',
      description: 'Thorough deep cleaning of all surfaces, corners and hard-to-reach areas'
    },
    { 
      id: 4, 
      name: 'Laundry & Dry Cleaning', 
      price: 'KES 500-2,000', 
      duration: '2-3 days', 
      icon: '👕',
      description: 'Professional washing, ironing and dry cleaning for all fabric types'
    },
    { 
      id: 5, 
      name: 'Laundry Drop & Pick', 
      price: 'KES 200 per delivery', 
      duration: 'Free delivery', 
      icon: '🚚',
      description: 'Convenient pickup and delivery service for your laundry'
    },
    { 
      id: 6, 
      name: 'Carpet Cleaning', 
      price: 'KES 4,000-10,000', 
      duration: '2-3 hours', 
      icon: '🧹',
      description: 'Deep carpet shampooing and stain removal for all carpet types'
    },
  ]

  return (
    <>
      <Head>
        <title>Services - Merciesz Cleaning</title>
      </Head>
      <Header />
      <div className="pt-24 min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center text-purple-600">Our Services</h1>
          <p className="text-xl text-center text-gray-600 mb-12">Quality cleaning and laundry services for your needs</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
