import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProducts } from '../api/api'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts()
        setFeaturedProducts(data.slice(0, 4))
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Fresh Farm Chicken Delivered Daily</h1>
          <p className="text-xl mb-8">Healthy chickens, fresh eggs and day-old chicks</p>
          <div className="space-x-4">
            <Link to="/products" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block">
              View Products
            </Link>
            <a href="https://wa.me/254712345678" className="bg-green-500 px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition inline-block">
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product._id} product={product} onAddToCart={() => {}} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="text-primary font-bold hover:underline">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Farm</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-bold mb-2">Healthy Farm Raised</h3>
              <p className="text-gray-600">All chickens raised with care</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🥚</div>
              <h3 className="font-bold mb-2">Fresh Eggs Daily</h3>
              <p className="text-gray-600">Collected fresh every morning</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="font-bold mb-2">Bulk Orders</h3>
              <p className="text-gray-600">Supply to hotels & restaurants</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="font-bold mb-2">Reliable Delivery</h3>
              <p className="text-gray-600">Fast delivery to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bulk Orders for Hotels & Restaurants</h2>
          <p className="text-xl mb-8">We supply fresh chickens weekly to restaurants, hotels and catering services</p>
          <p className="mb-8">Minimum order: 50 chickens</p>
          <Link to="/bulk-orders" className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block">
            Request Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
