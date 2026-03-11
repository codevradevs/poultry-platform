import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            🐔 Fresh Farm Poultry
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-secondary transition">Home</Link>
            <Link to="/products" className="hover:text-secondary transition">Products</Link>
            <Link to="/bulk-orders" className="hover:text-secondary transition">Bulk Orders</Link>
            <Link to="/about" className="hover:text-secondary transition">About</Link>
            <Link to="/contact" className="hover:text-secondary transition">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/254712345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition"
            >
              WhatsApp Order
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link to="/" className="block hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/products" className="block hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link to="/bulk-orders" className="block hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>Bulk Orders</Link>
            <Link to="/about" className="block hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block hover:text-secondary transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <a 
              href="https://wa.me/254712345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition text-center"
            >
              WhatsApp Order
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
