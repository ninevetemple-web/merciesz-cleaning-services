export default function ServiceCard({ icon, name, price, duration, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-8 text-center">
        <div className="text-6xl">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4 min-h-12">{description}</p>
        <div className="mb-4">
          <p className="text-purple-600 font-bold text-lg">{price}</p>
          <p className="text-sm text-gray-500">Duration: {duration}</p>
        </div>
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition">
          <a href="tel:+254758983329">Book Now</a>
        </button>
      </div>
    </div>
  )
}
