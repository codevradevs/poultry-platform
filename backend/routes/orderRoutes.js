const express = require("express")
const router = express.Router()
const orderController = require("../controllers/orderController")
const authMiddleware = require("../middleware/authMiddleware")

// Public route
router.post("/", orderController.createOrder)

// Protected admin routes
router.get("/", authMiddleware, orderController.getAllOrders)
router.get("/:id", authMiddleware, orderController.getOrder)
router.put("/:id", authMiddleware, orderController.updateOrderStatus)
router.delete("/:id", authMiddleware, orderController.deleteOrder)

module.exports = router
