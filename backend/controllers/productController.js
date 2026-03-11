const Product = require("../models/Product")

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 })
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get products by category
exports.getProductsByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category })
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get single product
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) return res.status(404).json({ message: "Product not found" })
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Create product (Admin only)
exports.createProduct = async (req, res) => {
    try {
        const { name, price, category, description, stock, image } = req.body

        // Validation
        if (!name || !price || !category) {
            return res.status(400).json({ message: "Name, price and category are required" })
        }

        if (price <= 0) {
            return res.status(400).json({ message: "Price must be greater than 0" })
        }

        const product = new Product(req.body)
        const saved = await product.save()
        res.status(201).json(saved)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Update product (Admin only)
exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
        if (!updated) return res.status(404).json({ message: "Product not found" })
        res.json(updated)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Delete product (Admin only)
exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id)
        if (!deleted) return res.status(404).json({ message: "Product not found" })
        res.json({ message: "Product deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
