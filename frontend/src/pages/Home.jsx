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
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-sm font-semibold mb-4 opacity-90">2025 Launch · Trusted by Kenyan chefs, farmers & households</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Farm-fresh poultry for<br />every Kenyan table.</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">Connect with trusted farmers, get reliable cold-chain delivery, and enjoy premium poultry products across Kenya.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-block shadow-lg">
              Get Started
            </Link>
            <a href="#demo" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition inline-block">
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">❄️</div>
              <h3 className="font-bold mb-1">Cold-chain Dispatch</h3>
              <p className="text-sm text-gray-600">Guaranteed freshness with monitored temperature routes.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-bold mb-1">Veterinary Certified</h3>
              <p className="text-sm text-gray-600">Audited farms and real-time health documentation.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🇰🇪</div>
              <h3 className="font-bold mb-1">Nationwide Reach</h3>
              <p className="text-sm text-gray-600">18 fulfillment hubs serving chefs, homes, and retailers.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-bold mb-1">Sustainable</h3>
              <p className="text-sm text-gray-600">Zero-emission fleet and eco-friendly packaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Status Banner */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-semibold">QA cleared 3 mins ago</span>
            </div>
            <div className="text-gray-600">
              "Batch FF-0825" is sealed, scanned, and loading for Nairobi CBD in a zero-emission fleet.
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Premium Poultry Selection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Handpicked products from certified farms, delivered fresh to your doorstep.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product._id} product={product} onAddToCart={() => {}} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="text-primary font-bold hover:underline text-lg">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why partners choose Poultry Market Kenya</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to succeed in poultry. Tools designed to boost quality, protect margins, and grow your business.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl hover-lift">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-3">Traceable Supply Chains</h3>
              <p className="text-gray-600 mb-4">Follow every flock from hatchery to doorstep with blockchain-backed certificates and live health records.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Digital health passports</li>
                <li>✓ QA snapshots at every hub</li>
                <li>✓ Transparent farm audits</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl hover-lift">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-3">Intelligent Fulfillment</h3>
              <p className="text-gray-600 mb-4">AI-assisted route planning and demand forecasting keep inventory lean while guaranteeing freshness.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Same-day dispatch windows</li>
                <li>✓ Cold-chain routing</li>
                <li>✓ Real-time tracking links</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl hover-lift">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-2xl font-bold mb-3">Wholesale Meets Retail</h3>
              <p className="text-gray-600 mb-4">Dynamic pricing and curated storefronts let chefs, households, and resellers shop their way.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Bulk & bundle deals</li>
                <li>✓ Smart substitutions</li>
                <li>✓ Flexible payment terms</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl hover-lift">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-3">Partner Growth Studio</h3>
              <p className="text-gray-600 mb-4">Dedicated growth strategists help producers brand, package, and scale to new regions.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Story-driven branding</li>
                <li>✓ Regional launch playbooks</li>
                <li>✓ Always-on analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Signals that matter</h2>
            <p className="text-lg opacity-90">Our impact in numbers.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">450K+</div>
              <div className="text-xl font-semibold mb-1">Orders Delivered</div>
              <div className="text-sm opacity-80">99.2% on-time fulfillment</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">620</div>
              <div className="text-xl font-semibold mb-1">Partner Farms</div>
              <div className="text-sm opacity-80">Traceable and certified</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">12T</div>
              <div className="text-xl font-semibold mb-1">Daily Volume</div>
              <div className="text-sm opacity-80">Fresh produce moved daily</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">74</div>
              <div className="text-xl font-semibold mb-1">Customer NPS</div>
              <div className="text-sm opacity-80">Industry-leading loyalty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Partner voices</h2>
            <p className="text-gray-600">Real stories from farmers, chefs, and businesses across Kenya.</p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="text-6xl mb-6 text-primary">"</div>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              The partner growth studio helped us launch a premium brand with packaging and storytelling that resonates. Weekly revenue is up 52%.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                DO
              </div>
              <div>
                <div className="font-bold text-lg">Daniel Otieno</div>
                <div className="text-gray-600">Second-generation Poultry Farmer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Launch your next chapter with Poultry Market Kenya.</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
            Secure sourcing, smart delivery, and storytelling that moves Kenyan markets. Let's build a fresher food future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/products" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-block shadow-lg">
              Create your free hub
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition inline-block">
              Talk to our growth team
            </Link>
          </div>
          <p className="text-sm opacity-80">Early adopters enjoy complimentary packaging audits and launch campaign assets.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
