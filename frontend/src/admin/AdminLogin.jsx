import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/api'
import toast, { Toaster } from 'react-hot-toast'

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const { data } = await login(formData)
      localStorage.setItem('adminToken', data.token)
      localStorage.setItem('adminName', data.admin.name)
      toast.success('Login successful!')
      setTimeout(() => navigate('/admin/dashboard'), 1000)
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <Toaster position="top-right" />
      
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Admin Login</h1>
          <p className="text-gray-600">Fresh Farm Poultry Management</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="admin@freshfarm.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-secondary transition disabled:bg-gray-400"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Default credentials for testing:</p>
          <p className="font-mono text-xs mt-2">admin@freshfarm.com / admin123</p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
