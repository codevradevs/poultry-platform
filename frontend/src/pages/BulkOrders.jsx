import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const BulkOrders = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    product: '',
    quantity: '',
    location: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Bulk Order Request:\n\nName: ${formData.name}\nBusiness: ${formData.businessName}\nPhone: ${formData.phone}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nLocation: ${formData.location}`
    window.open(`https://wa.me/254712345678?text=${encodeURIComponent(message)}`, '_blank')
    toast.success('Redirecting to WhatsApp...')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-4">Bulk Orders</h1>
        <p className="text-center text-gray-600 mb-12">For hotels, restaurants, and catering services</p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">🏨</div>
              <h3 className="font-bold">Hotels</h3>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">🍽️</div>
              <h3 className="font-bold">Restaurants</h3>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-3xl mb-2">🎉</div>
              <h3 className="font-bold">Catering</h3>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">Contact Name</label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-4 py-2"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Business Name</label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-4 py-2"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full border rounded-lg px-4 py-2"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Product Needed</label>
              <select
                required
                className="w-full border rounded-lg px-4 py-2"
                value={formData.product}
                onChange={(e) => setFormData({...formData, product: e.target.value})}
              >
                <option value="">Select Product</option>
                <option value="Live Broiler Chicken">Live Broiler Chicken</option>
                <option value="Dressed Chicken">Dressed Chicken</option>
                <option value="Kienyeji Chicken">Kienyeji Chicken</option>
                <option value="Eggs">Eggs</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Quantity (Minimum 50)</label>
              <input
                type="number"
                required
                min="50"
                className="w-full border rounded-lg px-4 py-2"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Delivery Location</label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-4 py-2"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
            >
              Request Quote on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BulkOrders
