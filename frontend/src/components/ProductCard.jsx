const ProductCard = ({ product, onAddToCart }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      'live-chicken': '🐔',
      'eggs': '🥚',
      'chicks': '🐣',
      'processed': '🍗',
      'feeds': '🌾',
      'manure': '🌱'
    }
    return icons[category] || '🐔'
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
      <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative">
        <span className="text-7xl">{getCategoryIcon(product.category)}</span>
        {product.stock < 10 && product.stock > 0 && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            Low Stock
          </span>
        )}
        {product.stock === 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Out of Stock
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-2xl font-bold text-primary">KSh {product.price.toLocaleString()}</span>
          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
        </div>
        
        <button 
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
          className={`w-full py-2 rounded-lg transition transform hover:scale-105 ${
            product.stock === 0 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-primary hover:bg-secondary text-white'
          }`}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Order'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
