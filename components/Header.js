export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Merciesz Cleaning</h1>
          <p className="text-sm text-purple-200">Professional Services</p>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-purple-200 transition">Home</a>
          <a href="/services" className="hover:text-purple-200 transition">Services</a>
          <a href="/contact" className="hover:text-purple-200 transition">Contact</a>
        </div>
        <a href="tel:+254758983329" className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-bold transition">
          📞 +254 758 983 329
        </a>
      </nav>
    </header>
  )
}
