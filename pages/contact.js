import Head from 'next/head'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Head>
        <title>Contact - Merciesz Cleaning</title>
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center text-purple-600">Contact Us</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">📞 Phone</h3>
              <p className="mb-2"><a href="tel:+254758983329" className="text-purple-600 hover:underline font-semibold">+254 758 983 329</a></p>
              <p><a href="tel:+254769621946" className="text-purple-600 hover:underline font-semibold">+254 769 621 946</a></p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">📍 Location</h3>
              <p className="text-lg font-semibold">Riruta Satellite</p>
              <p className="text-lg font-semibold">Nairobi, Kenya</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">🕐 Working Hours</h3>
              <p className="mb-2">Monday - Saturday: <strong>7:00 AM - 7:00 PM</strong></p>
              <p>Sunday: <strong>8:00 AM - 5:00 PM</strong></p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea 
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 font-bold mt-4">Thank you! We'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
