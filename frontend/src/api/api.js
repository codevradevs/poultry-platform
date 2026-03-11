import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
})

// Add token to requests if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const getProducts = () => API.get('/products')
export const getProductsByCategory = (category) => API.get(`/products/category/${category}`)
export const createProduct = (data) => API.post('/products', data)
export const updateProduct = (id, data) => API.put(`/products/${id}`, data)
export const deleteProduct = (id) => API.delete(`/products/${id}`)

export const createOrder = (data) => API.post('/orders', data)
export const getOrders = () => API.get('/orders')
export const updateOrderStatus = (id, status) => API.put(`/orders/${id}`, { status })

export const login = (data) => API.post('/auth/login', data)
export const register = (data) => API.post('/auth/register', data)

export default API
