import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <nav className="bg-purple-600 text-white p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">Merciesz Cleaning</a>
          <div className="space-x-6">
            <a href="/" className="hover:text-purple-200">Home</a>
            <a href="/services" className="hover:text-purple-200">Services</a>
            <a href="/contact" className="hover:text-purple-200">Contact</a>
            <a href="tel:+254758983329" className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">Book Now</a>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer className="bg-gray-800 text-white py-8 px-4 text-center">
        <p>&copy; 2025 Merciesz Cleaning Services. All rights reserved.</p>
        <p className="mt-2">Riruta Satellite, Nairobi, Kenya</p>
      </footer>
    </div>
  )
}
