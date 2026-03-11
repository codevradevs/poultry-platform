const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            productName: String,
            quantity: Number,
            price: Number
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Preparing", "Delivered", "Cancelled"],
        default: "Pending"
    }
}, { timestamps: true })

module.exports = mongoose.model("Order", orderSchema)
