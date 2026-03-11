# 🐔 Fresh Farm Poultry - Deployment Guide

## ✅ Successfully Pushed to GitHub
**Repository:** https://github.com/codevradevs/poultry-platform

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- Git

### 1. Clone Repository
```bash
git clone https://github.com/codevradevs/poultry-platform.git
cd poultry-platform
```

### 2. Backend Setup
```bash
cd backend
npm install
```

**Configure Environment:**
Edit `backend/.env`:
```env
MONGO_URI=mongodb://127.0.0.1:27017/poultryFarm
# OR use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/poultryFarm

PORT=5000
JWT_SECRET=your_secure_jwt_secret_here
```

**Seed Database:**
```bash
npm run seed
```

**Start Backend:**
```bash
npm run dev
```
Backend runs on: http://localhost:5000

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: http://localhost:5173

### 4. Create Admin Account
**Option A - Using API:**
```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "email": "admin@freshfarm.com",
  "password": "admin123",
  "name": "Farm Admin"
}
```

**Option B - Using Postman/Thunder Client:**
1. Open API client
2. POST to `http://localhost:5000/api/auth/register`
3. Send JSON body above

### 5. Access Admin Dashboard
1. Go to: http://localhost:5173/admin/login
2. Login with credentials created above
3. Manage products and orders

---

## 🌐 Production Deployment

### Backend Deployment (Railway/Render/Heroku)

#### Using Railway:
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Add environment variables in Railway dashboard:
MONGO_URI=mongodb+srv://...
PORT=5000
JWT_SECRET=your_production_secret

# Deploy
railway up
```

#### Using Render:
1. Go to https://render.com
2. New → Web Service
3. Connect GitHub repository
4. Configure:
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
5. Add environment variables
6. Deploy

### Frontend Deployment (Vercel/Netlify)

#### Using Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel

# Update API URL in frontend/src/api/api.js:
baseURL: 'https://your-backend-url.railway.app/api'
```

#### Using Netlify:
```bash
# Build frontend
cd frontend
npm run build

# Deploy dist folder to Netlify
# Update API URL before building
```

---

## 📝 Configuration Checklist

### Before Going Live:

#### 1. Update WhatsApp Number
Replace `254712345678` in:
- `frontend/src/components/Navbar.jsx`
- `frontend/src/pages/Home.jsx`
- `frontend/src/pages/Products.jsx`
- `frontend/src/pages/BulkOrders.jsx`
- `frontend/src/pages/About.jsx`
- `frontend/src/pages/Contact.jsx`

#### 2. Update Farm Details
Edit these files with actual farm information:
- `frontend/src/components/Footer.jsx`
- `frontend/src/pages/About.jsx`
- `frontend/src/pages/Contact.jsx`

#### 3. Add Product Images
Update products in database with actual image URLs:
```javascript
// In seedProducts.js or via admin dashboard
image: "https://your-cdn.com/broiler-chicken.jpg"
```

#### 4. Update API URL
In `frontend/src/api/api.js`:
```javascript
const API = axios.create({
  baseURL: 'https://your-backend-url.com/api'
})
```

#### 5. Secure JWT Secret
Generate strong JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Update in production `.env`

#### 6. Setup MongoDB Atlas
1. Create account at https://mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Update MONGO_URI in production

---

## 🔒 Security Recommendations

### Production Environment:
1. **Use strong JWT secret** (32+ characters)
2. **Enable CORS only for your domain**
3. **Use HTTPS** for both frontend and backend
4. **Set secure cookie flags** if using cookies
5. **Rate limit API endpoints**
6. **Validate all inputs** (already implemented)
7. **Keep dependencies updated**

### Additional Security:
```javascript
// In backend/server.js
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

app.use(helmet())
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}))
```

---

## 📊 Database Backup

### Backup MongoDB:
```bash
mongodump --uri="mongodb://localhost:27017/poultryFarm" --out=./backup
```

### Restore MongoDB:
```bash
mongorestore --uri="mongodb://localhost:27017/poultryFarm" ./backup/poultryFarm
```

---

## 🧪 Testing

### Test Backend API:
```bash
# Get all products
curl http://localhost:5000/api/products

# Create order
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "Test User",
    "phone": "0712345678",
    "location": "Nairobi",
    "items": [{
      "productId": "...",
      "productName": "Broiler Chicken",
      "quantity": 2,
      "price": 500
    }],
    "totalAmount": 1000
  }'
```

### Test Admin Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@freshfarm.com",
    "password": "admin123"
  }'
```

---

## 📱 Mobile App (Future Enhancement)

The API is ready for mobile app integration:
- React Native
- Flutter
- Ionic

All endpoints support JSON and are mobile-friendly.

---

## 🎨 Customization

### Change Colors:
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: '#1B5E20',    // Your brand color
  secondary: '#4CAF50',  // Accent color
  accent: '#8D6E63',     // Additional accent
}
```

### Add Payment Integration:
1. M-Pesa STK Push (Kenya)
2. Stripe (International)
3. PayPal

---

## 📞 Support

### Issues:
Report issues at: https://github.com/codevradevs/poultry-platform/issues

### Documentation:
- README.md - Project overview
- COMPLIANCE_REPORT.md - Backend features
- FRONTEND_COMPLIANCE.md - Frontend features

---

## 🎉 Project Complete!

**What You Have:**
✅ Full MERN stack e-commerce platform
✅ 25 realistic poultry products
✅ Admin dashboard with authentication
✅ Order management system
✅ WhatsApp integration
✅ Mobile responsive design
✅ Professional UI/UX
✅ Production-ready code

**Next Steps:**
1. Deploy to production
2. Update farm details
3. Add product images
4. Test thoroughly
5. Launch! 🚀

---

## 📈 Future Enhancements

- [ ] M-Pesa payment integration
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Customer accounts
- [ ] Order tracking
- [ ] Delivery management
- [ ] Analytics dashboard
- [ ] Mobile app
- [ ] Multi-language support
- [ ] Product reviews

---

**Repository:** https://github.com/codevradevs/poultry-platform
**License:** MIT
**Built with:** MongoDB, Express, React, Node.js, TailwindCSS
