const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">About Our Farm</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fresh Farm Poultry has been raising healthy chickens for over 10 years. We specialize in broilers, 
            layers and kienyeji breeds raised under high hygiene standards.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our commitment to quality and customer satisfaction has made us a trusted supplier to households, 
            restaurants, and hotels across Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">🐔 Quality Chickens</h3>
            <p className="text-gray-700">
              All our chickens are raised in spacious, clean environments with proper nutrition and veterinary care.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">🥚 Fresh Eggs</h3>
            <p className="text-gray-700">
              Eggs collected daily from healthy layer chickens, ensuring maximum freshness and quality.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">🐣 Day Old Chicks</h3>
            <p className="text-gray-700">
              Vaccinated chicks from quality parent stock, perfect for starting your own poultry farm.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">🚚 Reliable Delivery</h3>
            <p className="text-gray-700">
              Fast and reliable delivery service to ensure products reach you fresh and in perfect condition.
            </p>
          </div>
        </div>

        <div className="bg-primary text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Visit Our Farm</h2>
          <p className="mb-4">Location: Kiambu, Kenya</p>
          <p className="mb-4">Business Hours: Monday - Saturday, 8:00 AM - 6:00 PM</p>
          <a 
            href="https://wa.me/254712345678" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
