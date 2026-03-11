const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Admin = require("../models/Admin")

// Register admin
exports.register = async (req, res) => {
    try {
        const { email, password, name } = req.body

        // Validation
        if (!email || !password || !name) {
            return res.status(400).json({ 
                message: "Email, password and name are required" 
            })
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" })
        }

        // Password strength
        if (password.length < 6) {
            return res.status(400).json({ 
                message: "Password must be at least 6 characters long" 
            })
        }

        const existingAdmin = await Admin.findOne({ email })
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const admin = new Admin({
            email,
            password: hashedPassword,
            name
        })

        await admin.save()

        res.status(201).json({ message: "Admin registered successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Login admin
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        // Validation
        if (!email || !password) {
            return res.status(400).json({ 
                message: "Email and password are required" 
            })
        }

        const admin = await Admin.findOne({ email })
        if (!admin) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.json({
            token,
            admin: {
                id: admin._id,
                email: admin.email,
                name: admin.name
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
