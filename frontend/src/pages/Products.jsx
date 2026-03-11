import { useEffect, useState } from 'react'
import { getProducts } from '../api/api'
import ProductCard from '../components/ProductCard'
import ProductSkeleton from '../components/ProductSkeleton'
import toast, { Toaster } from 'react-hot-toast'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [loading, setLoading] = useState(true)

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛒' },
    { id: 'live-chicken', name: 'Live Chickens', icon: '🐔' },
    { id: 'eggs', name: 'Eggs', icon: '🥚' },
    { id: 'chicks', name: 'Chicks', icon: '🐣' },
    { id: 'processed', name: 'Processed', icon: '🍗' },
    { id: 'feeds', name: 'Feeds', icon: '🌾' },
    { id: 'manure', name: 'Manure', icon: '🌱' }
  ]

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [selectedCategory, searchQuery, products])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const { data } = await getProducts()
      setProducts(data)
      setFilteredProducts(data)
    } catch (error) {
      toast.error('Error loading products')
    } finally {
      setLoading(false)
    }
  }

  const filterProducts = () => {
    let filtered = products

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }

  const filterByCategory = (category) => {
    setSelectedCategory(category)
  }

  const addToCart = (product) => {
    const existing = cart.find(item => item._id === product._id)
    if (existing) {
      setCart(cart.map(item => 
        item._id === product._id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
    toast.success(`${product.name} added to cart`)
  }

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item._id === id) {
        const newQty = item.quantity + change
        return newQty > 0 ? { ...item, quantity: newQty } : item
      }
      return item
    }).filter(item => item.quantity > 0))
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item._id !== id))
    toast.success('Item removed')
  }

  const getTotalAmount = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  const generateWhatsAppMessage = () => {
    let message = "Hello, I want to order:\n\n"
    cart.forEach(item => {
      message += `${item.quantity}x ${item.name} - KSh ${item.price * item.quantity}\n`
    })
    message += `\nTotal: KSh ${getTotalAmount()}`
    return encodeURIComponent(message)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <input
            type="text"
            placeholder="🔍 Search products..."
            className="w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => filterByCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[...Array(8)].map((_, i) => <ProductSkeleton key={i} />)}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500">No products found</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product._id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}

        {/* Floating Cart Button */}
        {cart.length > 0 && (
          <button
            onClick={() => setShowCart(!showCart)}
            className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 animate-bounce"
          >
            🛒 Cart ({cart.length})
          </button>
        )}

        {/* Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Order</h2>
                <button onClick={() => setShowCart(false)} className="text-3xl hover:text-red-500">&times;</button>
              </div>

              {cart.map(item => (
                <div key={item._id} className="flex justify-between items-center border-b py-4">
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-600">KSh {item.price}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button onClick={() => updateQuantity(item._id, -1)} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">-</button>
                    <span className="font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, 1)} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">+</button>
                    <button onClick={() => removeFromCart(item._id)} className="text-red-500 ml-4 hover:text-red-700">Remove</button>
                  </div>
                </div>
              ))}

              <div className="mt-6">
                <div className="text-2xl font-bold mb-4">Total: KSh {getTotalAmount().toLocaleString()}</div>
                <a
                  href={`https://wa.me/254712345678?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-bold hover:bg-green-600 transition"
                >
                  Complete Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
