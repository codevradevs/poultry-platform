const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const productRoutes = require("./routes/productRoutes")
const orderRoutes = require("./routes/orderRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.log("❌ MongoDB connection error:", err))

app.get("/", (req, res) => {
    res.json({ message: "Poultry Farm API Running" })
})

app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
})
