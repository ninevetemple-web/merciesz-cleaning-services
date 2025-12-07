export default function Gallery() {
  const images = [
    { id: 1, title: 'Home Cleaning', emoji: '🏠' },
    { id: 2, title: 'Laundry Service', emoji: '👕' },
    { id: 3, title: 'Office Cleaning', emoji: '🏢' },
    { id: 4, title: 'Professional Team', emoji: '👥' },
    { id: 5, title: 'Quality Results', emoji: '✨' },
    { id: 6, title: 'Fast Service', emoji: '⚡' },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-6xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
