const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">0712 XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-600">Kiambu, Kenya</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">🕐</span>
                <div>
                  <h3 className="font-bold">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday</p>
                  <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">✉️</span>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">info@freshfarmpoultry.co.ke</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/254712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-8 bg-green-500 text-white text-center py-3 rounded-lg font-bold hover:bg-green-600 transition"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Name</label>
                <input type="text" className="w-full border rounded-lg px-4 py-2" />
              </div>

              <div>
                <label className="block font-semibold mb-2">Phone</label>
                <input type="tel" className="w-full border rounded-lg px-4 py-2" />
              </div>

              <div>
                <label className="block font-semibold mb-2">Message</label>
                <textarea className="w-full border rounded-lg px-4 py-2 h-32"></textarea>
              </div>

              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-secondary transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
