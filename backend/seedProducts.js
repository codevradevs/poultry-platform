const mongoose = require("mongoose")
const Product = require("./models/Product")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI)

const products = [
    // Live Chickens
    {
        name: "Live Broiler Chicken",
        price: 500,
        category: "live-chicken",
        stock: 120,
        description: "Healthy farm raised broiler chicken weighing 1.8kg – 2.2kg",
        image: ""
    },
    {
        name: "Kienyeji Chicken",
        price: 1000,
        category: "live-chicken",
        stock: 40,
        description: "Free range indigenous chicken with rich flavor",
        image: ""
    },
    {
        name: "Layer Chicken",
        price: 700,
        category: "live-chicken",
        stock: 30,
        description: "Egg producing layer chicken",
        image: ""
    },
    {
        name: "Cockerel Chicken",
        price: 600,
        category: "live-chicken",
        stock: 25,
        description: "Young male chicken suitable for breeding or meat",
        image: ""
    },
    {
        name: "Spent Layer Chicken",
        price: 450,
        category: "live-chicken",
        stock: 50,
        description: "Older layer chicken sold for meat",
        image: ""
    },

    // Eggs
    {
        name: "Tray of Layer Eggs (30)",
        price: 380,
        category: "eggs",
        stock: 200,
        description: "Fresh farm eggs from healthy layer chickens",
        image: ""
    },
    {
        name: "Kienyeji Eggs Tray",
        price: 650,
        category: "eggs",
        stock: 80,
        description: "Organic indigenous chicken eggs",
        image: ""
    },
    {
        name: "Fertilized Eggs for Hatching",
        price: 900,
        category: "eggs",
        stock: 60,
        description: "Fertilized eggs suitable for incubation",
        image: ""
    },

    // Chicks
    {
        name: "Day Old Broiler Chicks",
        price: 120,
        category: "chicks",
        stock: 300,
        description: "Vaccinated broiler chicks ready for brooding",
        image: ""
    },
    {
        name: "Day Old Layer Chicks",
        price: 110,
        category: "chicks",
        stock: 250,
        description: "High quality layer chicks for egg production",
        image: ""
    },
    {
        name: "Day Old Kienyeji Chicks",
        price: 150,
        category: "chicks",
        stock: 180,
        description: "Indigenous kienyeji chicks",
        image: ""
    },
    {
        name: "Two Week Old Broiler Chicks",
        price: 200,
        category: "chicks",
        stock: 120,
        description: "Broiler chicks ready for farm rearing",
        image: ""
    },
    {
        name: "One Month Old Grower Chickens",
        price: 350,
        category: "chicks",
        stock: 90,
        description: "Growing chickens suitable for farmers",
        image: ""
    },

    // Processed Chicken
    {
        name: "Whole Dressed Chicken",
        price: 750,
        category: "processed",
        stock: 70,
        description: "Fresh cleaned chicken ready for cooking",
        image: ""
    },
    {
        name: "Chicken Wings (1kg)",
        price: 550,
        category: "processed",
        stock: 60,
        description: "Fresh chicken wings packed per kilogram",
        image: ""
    },
    {
        name: "Chicken Drumsticks (1kg)",
        price: 600,
        category: "processed",
        stock: 65,
        description: "Premium chicken drumsticks",
        image: ""
    },
    {
        name: "Chicken Breast (1kg)",
        price: 700,
        category: "processed",
        stock: 50,
        description: "Boneless chicken breast",
        image: ""
    },
    {
        name: "Chicken Thighs (1kg)",
        price: 620,
        category: "processed",
        stock: 55,
        description: "Fresh chicken thighs",
        image: ""
    },

    // Poultry Manure
    {
        name: "Chicken Manure (50kg Bag)",
        price: 250,
        category: "manure",
        stock: 150,
        description: "Organic poultry manure for farming",
        image: ""
    },
    {
        name: "Composted Poultry Manure",
        price: 300,
        category: "manure",
        stock: 100,
        description: "Processed manure suitable for organic farming",
        image: ""
    },

    // Poultry Feeds
    {
        name: "Chick Mash Feed (50kg)",
        price: 3200,
        category: "feeds",
        stock: 40,
        description: "Starter feed for young chicks",
        image: ""
    },
    {
        name: "Grower Mash Feed (50kg)",
        price: 3000,
        category: "feeds",
        stock: 50,
        description: "Feed for growing chickens",
        image: ""
    },
    {
        name: "Layer Mash Feed (50kg)",
        price: 3100,
        category: "feeds",
        stock: 60,
        description: "Feed for egg producing chickens",
        image: ""
    },
    {
        name: "Broiler Starter Feed (50kg)",
        price: 3300,
        category: "feeds",
        stock: 45,
        description: "Starter feed for broiler chicks",
        image: ""
    },
    {
        name: "Broiler Finisher Feed (50kg)",
        price: 3400,
        category: "feeds",
        stock: 45,
        description: "Feed for finishing broiler chickens",
        image: ""
    }
]

const seedData = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(products)
        console.log("✅ Products seeded successfully")
        process.exit()
    } catch (error) {
        console.log("❌ Error seeding products:", error)
        process.exit(1)
    }
}

seedData()
