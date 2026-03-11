# 🐔 Fresh Farm Poultry - MERN Stack E-Commerce Platform

A complete poultry farm e-commerce website built with MongoDB, Express, React (Vite), and Node.js.

## Features

### Customer Features
- Browse poultry products (chickens, eggs, chicks, feeds, manure)
- Filter products by category
- Add products to cart
- Place orders via WhatsApp
- Bulk order requests for hotels & restaurants
- Responsive mobile-first design

### Admin Features
- Dashboard with overview statistics
- Product management (CRUD operations)
- Order management with status tracking
- Stock management (automatic reduction on orders)

## Tech Stack

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing

**Frontend:**
- React 19 + Vite
- React Router DOM
- TailwindCSS
- Axios
- React Hot Toast

## Installation

### Prerequisites
- Node.js (v16+)
- MongoDB installed and running

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (already created with default values)

4. Seed the database with products:
```bash
npm run seed
```

5. Start the backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## Project Structure

```
poultry-platform/
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Admin.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── authRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   ├── seedProducts.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   └── ProductCard.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Products.jsx
    │   │   ├── BulkOrders.jsx
    │   │   ├── About.jsx
    │   │   └── Contact.jsx
    │   ├── admin/
    │   │   └── AdminDashboard.jsx
    │   ├── api/
    │   │   └── api.js
    │   ├── App.jsx
    │   └── main.jsx
    └── tailwind.config.js
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/category/:category` - Get products by category
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create order (auto reduces stock)
- `PUT /api/orders/:id` - Update order status

### Authentication
- `POST /api/auth/register` - Register admin
- `POST /api/auth/login` - Login admin

## Product Categories

- **live-chicken** - Live broilers, kienyeji, layers
- **eggs** - Layer eggs, kienyeji eggs, fertilized eggs
- **chicks** - Day old chicks, growers
- **processed** - Dressed chicken, wings, drumsticks
- **feeds** - Chick mash, grower mash, layer mash
- **manure** - Chicken manure for farming

## Usage

### Customer Flow
1. Visit homepage
2. Browse products or filter by category
3. Add products to cart
4. Complete order via WhatsApp

### Admin Flow
1. Navigate to `/admin`
2. View dashboard statistics
3. Manage products (add, edit, delete)
4. Manage orders and update status

## WhatsApp Integration

Orders are sent via WhatsApp with pre-filled messages containing:
- Customer details
- Product list with quantities
- Total amount
- Delivery location

Update the WhatsApp number in:
- `frontend/src/components/Navbar.jsx`
- `frontend/src/pages/Home.jsx`
- `frontend/src/pages/Products.jsx`
- `frontend/src/pages/BulkOrders.jsx`

Replace `254712345678` with your actual WhatsApp number.

## Customization

### Colors
Edit `frontend/tailwind.config.js`:
```js
colors: {
  primary: '#1B5E20',    // Dark green
  secondary: '#4CAF50',  // Light green
  accent: '#8D6E63',     // Brown
}
```

### Farm Details
Update farm information in:
- `frontend/src/components/Footer.jsx`
- `frontend/src/pages/About.jsx`
- `frontend/src/pages/Contact.jsx`

## Production Deployment

### Backend
- Deploy to Railway, Render, or Heroku
- Use MongoDB Atlas for database
- Set environment variables

### Frontend
- Build: `npm run build`
- Deploy to Vercel, Netlify, or AWS
- Update API baseURL in `frontend/src/api/api.js`

## License

MIT

## Support

For issues or questions, contact: info@freshfarmpoultry.co.ke
