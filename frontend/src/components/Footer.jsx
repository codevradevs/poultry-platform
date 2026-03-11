const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fresh Farm Poultry</h3>
            <p className="text-gray-400">Quality chickens, eggs and chicks delivered fresh daily.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Products</li>
              <li>Bulk Orders</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Phone: 0712 XXX XXX</p>
            <p className="text-gray-400">Location: Kiambu, Kenya</p>
            <p className="text-gray-400">Hours: 8am - 6pm</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2024 Fresh Farm Poultry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
