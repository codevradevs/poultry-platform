import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐔</span>
              <div>
                <div className="text-xl font-bold text-white">Poultry Market Kenya</div>
                <div className="text-sm text-gray-400">Farm-fresh for every table</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting farmers, sellers, and buyers across Kenya with traceable, sustainable poultry products.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Stores</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Categories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Sell</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/bulk-orders" className="hover:text-white transition">Register</Link></li>
              <li><Link to="/bulk-orders" className="hover:text-white transition">Business</Link></li>
              <li><Link to="/admin/login" className="hover:text-white transition">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><a href="https://wa.me/254712345678" className="hover:text-white transition">AI Chat</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2025 Poultry Market Kenya. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="hover:text-white transition">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link to="/contact" className="hover:text-white transition">Help</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
