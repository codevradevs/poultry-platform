import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import Marquee from 'react-fast-marquee'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { getProducts } from '../api/api'
import ProductCard from '../components/ProductCard'
import { Sparkles, TrendingUp, Shield, Zap } from 'lucide-react'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts()
        setFeaturedProducts(data.slice(0, 4))
        setAllProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Animated Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-emerald-700 dark:gradient-bg-dark">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-4">
              <Sparkles size={16} />
              <span>2025 Launch · Trusted by Kenyan chefs, farmers & households</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Farm-fresh poultry for<br />
              <span className="text-yellow-300">every Kenyan table.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Connect with trusted farmers, get reliable cold-chain delivery, and enjoy premium poultry products across Kenya.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/products" className="glass px-8 py-4 rounded-xl font-bold text-white hover:scale-105 transition-transform duration-300 shadow-2xl">
                Get Started →
              </Link>
              <a href="#demo" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl">
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Marquee Banner */}
      <section className="py-4 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-800 dark:to-emerald-800 text-white">
        <Marquee speed={60} gradient={false}>
          <span className="mx-8 flex items-center gap-2">
            <Zap size={20} className="text-yellow-300" />
            Farm-to-table logistics
          </span>
          <span className="mx-8">•</span>
          <span className="mx-8 flex items-center gap-2">
            <Shield size={20} className="text-yellow-300" />
            Always-on quality assurance
          </span>
          <span className="mx-8">•</span>
          <span className="mx-8 flex items-center gap-2">
            <TrendingUp size={20} className="text-yellow-300" />
            Predictive procurement tools
          </span>
          <span className="mx-8">•</span>
          <span className="mx-8">Sustainable packaging loops</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Partner profitability clinics</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Chef-tested recipes & cuts</span>
          <span className="mx-8">•</span>
        </Marquee>
      </section>

      {/* Trust Badges with Glass Effect */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '❄️', title: 'Cold-chain Dispatch', desc: 'Monitored temperature routes' },
              { icon: '✅', title: 'Veterinary Certified', desc: 'Real-time health documentation' },
              { icon: '🇰🇪', title: 'Nationwide Reach', desc: '18 fulfillment hubs' },
              { icon: '🌱', title: 'Sustainable', desc: 'Zero-emission fleet' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass dark:glass-dark p-6 text-center hover-lift"
              >
                <div className="text-5xl mb-3">{badge.icon}</div>
                <h3 className="font-bold text-lg mb-2 dark:text-white">{badge.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Status with Pulse Animation */}
      <section className="py-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 border-y dark:border-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-semibold dark:text-white">QA cleared 3 mins ago</span>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              "Batch FF-0825" sealed, scanned, and loading for Nairobi CBD
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Premium Poultry Selection</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Handpicked products from certified farms, delivered fresh to your doorstep.
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {allProducts.map(product => (
              <SwiperSlide key={product._id} className="max-w-sm">
                <ProductCard product={product} onAddToCart={() => {}} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary dark:text-secondary font-bold hover:underline text-lg">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-emerald-700 dark:gradient-bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Signals that matter</h2>
            <p className="text-xl opacity-90">Our impact in numbers.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { end: 450, suffix: 'K+', label: 'Orders Delivered', sublabel: '99.2% on-time' },
              { end: 620, suffix: '', label: 'Partner Farms', sublabel: 'Traceable & certified' },
              { end: 12, suffix: 'T', label: 'Daily Volume', sublabel: 'Fresh produce moved' },
              { end: 74, suffix: '', label: 'Customer NPS', sublabel: 'Industry-leading' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                className="glass p-8 hover-lift"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} enableScrollSpy />
                </div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid with Glassmorphism */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              Why partners choose Poultry Market Kenya
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to succeed in poultry. Tools designed to boost quality, protect margins, and grow your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🔗',
                title: 'Traceable Supply Chains',
                desc: 'Follow every flock from hatchery to doorstep with blockchain-backed certificates.',
                features: ['Digital health passports', 'QA snapshots at every hub', 'Transparent farm audits'],
                gradient: 'from-green-100 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30'
              },
              {
                icon: '🤖',
                title: 'Intelligent Fulfillment',
                desc: 'AI-assisted route planning and demand forecasting keep inventory lean.',
                features: ['Same-day dispatch windows', 'Cold-chain routing', 'Real-time tracking links'],
                gradient: 'from-blue-100 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30'
              },
              {
                icon: '🏪',
                title: 'Wholesale Meets Retail',
                desc: 'Dynamic pricing and curated storefronts for all customer types.',
                features: ['Bulk & bundle deals', 'Smart substitutions', 'Flexible payment terms'],
                gradient: 'from-purple-100 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30'
              },
              {
                icon: '📈',
                title: 'Partner Growth Studio',
                desc: 'Dedicated growth strategists help producers brand and scale.',
                features: ['Story-driven branding', 'Regional launch playbooks', 'Always-on analytics'],
                gradient: 'from-orange-100 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-2xl hover-lift backdrop-blur-sm`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-green-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial with Image Zoom */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Partner voices</h2>
            <p className="text-gray-600 dark:text-gray-300">Real stories from farmers, chefs, and businesses across Kenya.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass dark:glass-dark p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            <div className="text-6xl mb-6 text-primary dark:text-secondary">"</div>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
              The partner growth studio helped us launch a premium brand with packaging and storytelling that resonates. Weekly revenue is up 52%.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                DO
              </div>
              <div>
                <div className="font-bold text-lg dark:text-white">Daniel Otieno</div>
                <div className="text-gray-600 dark:text-gray-400">Second-generation Poultry Farmer</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-emerald-700 dark:gradient-bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Launch your next chapter with Poultry Market Kenya.
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
              Secure sourcing, smart delivery, and storytelling that moves Kenyan markets. Let's build a fresher food future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/products" className="glass px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl">
                Create your free hub
              </Link>
              <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl">
                Talk to our growth team
              </Link>
            </div>
            <p className="text-sm opacity-80">
              Early adopters enjoy complimentary packaging audits and launch campaign assets.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
