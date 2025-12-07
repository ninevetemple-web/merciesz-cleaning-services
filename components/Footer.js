export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Merciesz Cleaning</h3>
          <p className="text-gray-400">Professional cleaning and laundry services in Nairobi</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="tel:+254758983329" className="hover:text-white transition">📞 +254 758 983 329</a></li>
            <li><a href="tel:+254769621946" className="hover:text-white transition">📞 +254 769 621 946</a></li>
            <li className="text-gray-400">📍 Riruta Satellite, Nairobi</li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-700 mb-6" />
      <div className="text-center text-gray-400">
        <p>&copy; {currentYear} Merciesz Cleaning Services. All rights reserved.</p>
        <p className="mt-2">Riruta Satellite • Nairobi, Kenya</p>
      </div>
    </footer>
  )
}
