import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🐔</span>
            <div>
              <div className="text-xl font-bold text-primary">Poultry Market Kenya</div>
              <div className="text-xs text-gray-500">Farm-fresh for every table</div>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition font-medium">Products</Link>
            <Link to="/bulk-orders" className="text-gray-700 hover:text-primary transition font-medium">Bulk Orders</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition font-medium">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/254712345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition font-semibold"
            >
              <span>💬</span>
              WhatsApp
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl text-gray-700"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <Link to="/" className="block text-gray-700 hover:text-primary transition font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/products" className="block text-gray-700 hover:text-primary transition font-medium" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link to="/bulk-orders" className="block text-gray-700 hover:text-primary transition font-medium" onClick={() => setMobileMenuOpen(false)}>Bulk Orders</Link>
            <Link to="/about" className="block text-gray-700 hover:text-primary transition font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-primary transition font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <a 
              href="https://wa.me/254712345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition text-center font-semibold"
            >
              💬 WhatsApp Order
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
