const Order = require("../models/Order")
const Product = require("../models/Product")

// Create order
exports.createOrder = async (req, res) => {
    try {
        const { customerName, phone, location, items } = req.body

        // Validation
        if (!customerName || !phone || !location || !items || items.length === 0) {
            return res.status(400).json({ 
                message: "Customer name, phone, location and items are required" 
            })
        }

        // Validate phone format (basic)
        if (!/^[0-9]{10,13}$/.test(phone.replace(/\s/g, ''))) {
            return res.status(400).json({ message: "Invalid phone number format" })
        }

        // Validate stock availability
        for (let item of items) {
            if (item.quantity <= 0) {
                return res.status(400).json({ 
                    message: `Quantity must be greater than 0 for ${item.productName}` 
                })
            }

            const product = await Product.findById(item.productId)
            if (!product) {
                return res.status(404).json({ 
                    message: `Product ${item.productName} not found` 
                })
            }
            if (product.stock < item.quantity) {
                return res.status(400).json({ 
                    message: `Insufficient stock for ${product.name}. Available: ${product.stock}` 
                })
            }
        }

        // Calculate total
        let totalAmount = 0
        for (let item of items) {
            totalAmount += item.price * item.quantity
        }

        // Create order
        const order = new Order({
            customerName,
            phone,
            location,
            items,
            totalAmount
        })

        const saved = await order.save()

        // Update stock
        for (let item of items) {
            await Product.findByIdAndUpdate(item.productId, {
                $inc: { stock: -item.quantity }
            })
        }

        res.status(201).json(saved)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Get all orders (Admin only)
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 })
        res.json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get single order
exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        if (!order) return res.status(404).json({ message: "Order not found" })
        res.json(order)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Update order status (Admin only)
exports.updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body

        const validStatuses = ["Pending", "Confirmed", "Preparing", "Delivered", "Cancelled"]
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ 
                message: `Invalid status. Must be one of: ${validStatuses.join(", ")}` 
            })
        }

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        )
        if (!order) return res.status(404).json({ message: "Order not found" })
        res.json(order)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Delete order (Admin only)
exports.deleteOrder = async (req, res) => {
    try {
        const deleted = await Order.findByIdAndDelete(req.params.id)
        if (!deleted) return res.status(404).json({ message: "Order not found" })
        res.json({ message: "Order deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
