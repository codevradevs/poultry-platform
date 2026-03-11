import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProducts, getOrders, updateOrderStatus, createProduct, updateProduct, deleteProduct } from '../api/api'
import toast, { Toaster } from 'react-hot-toast'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [showProductForm, setShowProductForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [productForm, setProductForm] = useState({
    name: '', price: '', category: '', description: '', stock: ''
  })
  const navigate = useNavigate()

  useEffect(() => {
    // Check if admin is logged in
    const token = localStorage.getItem('adminToken')
    if (!token) {
      navigate('/admin/login')
      return
    }
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [productsRes, ordersRes] = await Promise.all([getProducts(), getOrders()])
      setProducts(productsRes.data)
      setOrders(ordersRes.data)
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken')
        navigate('/admin/login')
      } else {
        toast.error('Error loading data')
      }
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminName')
    toast.success('Logged out successfully')
    navigate('/admin/login')
  }

  const handleProductSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingProduct) {
        await updateProduct(editingProduct._id, productForm)
        toast.success('Product updated')
      } else {
        await createProduct(productForm)
        toast.success('Product created')
      }
      setShowProductForm(false)
      setEditingProduct(null)
      setProductForm({ name: '', price: '', category: '', description: '', stock: '' })
      fetchData()
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error saving product')
    }
  }

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Delete this product?')) {
      try {
        await deleteProduct(id)
        toast.success('Product deleted')
        fetchData()
      } catch (error) {
        toast.error('Error deleting product')
      }
    }
  }

  const handleUpdateOrderStatus = async (id, status) => {
    try {
      await updateOrderStatus(id, status)
      toast.success('Order status updated')
      fetchData()
    } catch (error) {
      toast.error('Error updating order')
    }
  }

  const stats = {
    totalProducts: products.length,
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === 'Pending').length,
    totalRevenue: orders.reduce((sum, o) => sum + o.totalAmount, 0)
  }

  const adminName = localStorage.getItem('adminName') || 'Admin'

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header */}
      <div className="bg-primary text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-sm mt-1">Welcome, {adminName}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-lg font-semibold ${activeTab === 'overview' ? 'bg-primary text-white' : 'bg-white'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 rounded-lg font-semibold ${activeTab === 'products' ? 'bg-primary text-white' : 'bg-white'}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-3 rounded-lg font-semibold ${activeTab === 'orders' ? 'bg-primary text-white' : 'bg-white'}`}
          >
            Orders
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover-lift">
              <h3 className="text-gray-600 mb-2">Total Products</h3>
              <p className="text-3xl font-bold">{stats.totalProducts}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover-lift">
              <h3 className="text-gray-600 mb-2">Total Orders</h3>
              <p className="text-3xl font-bold">{stats.totalOrders}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover-lift">
              <h3 className="text-gray-600 mb-2">Pending Orders</h3>
              <p className="text-3xl font-bold text-orange-500">{stats.pendingOrders}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover-lift">
              <h3 className="text-gray-600 mb-2">Total Revenue</h3>
              <p className="text-3xl font-bold text-green-600">KSh {stats.totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <button
              onClick={() => {
                setShowProductForm(true)
                setEditingProduct(null)
                setProductForm({ name: '', price: '', category: '', description: '', stock: '' })
              }}
              className="mb-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary"
            >
              + Add Product
            </button>

            {showProductForm && (
              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-xl font-bold mb-4">{editingProduct ? 'Edit' : 'Add'} Product</h3>
                <form onSubmit={handleProductSubmit} className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Product Name"
                    required
                    className="border rounded px-4 py-2"
                    value={productForm.name}
                    onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    required
                    className="border rounded px-4 py-2"
                    value={productForm.price}
                    onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                  />
                  <select
                    required
                    className="border rounded px-4 py-2"
                    value={productForm.category}
                    onChange={(e) => setProductForm({...productForm, category: e.target.value})}
                  >
                    <option value="">Select Category</option>
                    <option value="live-chicken">Live Chicken</option>
                    <option value="eggs">Eggs</option>
                    <option value="chicks">Chicks</option>
                    <option value="processed">Processed</option>
                    <option value="feeds">Feeds</option>
                    <option value="manure">Manure</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Stock"
                    required
                    className="border rounded px-4 py-2"
                    value={productForm.stock}
                    onChange={(e) => setProductForm({...productForm, stock: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="border rounded px-4 py-2 md:col-span-2"
                    value={productForm.description}
                    onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                  />
                  <div className="md:col-span-2 flex gap-4">
                    <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary">
                      {editingProduct ? 'Update' : 'Create'}
                    </button>
                    <button type="button" onClick={() => setShowProductForm(false)} className="bg-gray-300 px-6 py-2 rounded">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Category</th>
                    <th className="px-4 py-3 text-left">Price</th>
                    <th className="px-4 py-3 text-left">Stock</th>
                    <th className="px-4 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product._id} className="border-b">
                      <td className="px-4 py-3">{product.name}</td>
                      <td className="px-4 py-3">{product.category}</td>
                      <td className="px-4 py-3">KSh {product.price}</td>
                      <td className="px-4 py-3">{product.stock}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => {
                            setEditingProduct(product)
                            setProductForm(product)
                            setShowProductForm(true)
                          }}
                          className="text-blue-600 mr-4 hover:underline"
                        >
                          Edit
                        </button>
                        <button onClick={() => handleDeleteProduct(product._id)} className="text-red-600 hover:underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Customer</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Items</th>
                  <th className="px-4 py-3 text-left">Total</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order._id} className="border-b">
                    <td className="px-4 py-3">{order.customerName}</td>
                    <td className="px-4 py-3">{order.phone}</td>
                    <td className="px-4 py-3">{order.items.length} items</td>
                    <td className="px-4 py-3">KSh {order.totalAmount.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={order.status}
                        onChange={(e) => handleUpdateOrderStatus(order._id, e.target.value)}
                        className="border rounded px-2 py-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Preparing">Preparing</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
