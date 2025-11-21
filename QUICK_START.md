# Quick Start Guide

## 🚀 Fast Setup (5 minutes)

### 1. Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd backend
npm install
cd ..
```

### 2. Setup MongoDB

**Option A: Local MongoDB**
- Install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
- Start MongoDB service

**Option B: Docker**
```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

**Option C: MongoDB Atlas (Cloud)**
- Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Create free cluster
- Get connection string

### 3. Create Backend .env File

Create `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=your-super-secret-jwt-key-12345
```

For MongoDB Atlas, use:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/authdb
```

### 4. Start Backend

```bash
cd backend
npm run dev
```

Keep this terminal open! Backend runs on `http://localhost:5000`

### 5. Start Frontend (New Terminal)

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

## ✅ Test It!

1. Open `http://localhost:5173`
2. Click **Register** → Create account
3. Login → Access Dashboard
4. Logout → Token removed

## 📁 Project Structure

```
shopmate-main/
├── backend/              # Node.js + Express backend
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware
│   └── server.js        # Server entry
│
└── src/                 # React frontend
    ├── pages/          # Login, Register, Dashboard
    ├── context/        # Auth context
    └── components/     # UI components
```

## 🔗 API Endpoints

- `POST /api/register` - Register user
- `POST /api/login` - Login user
- `GET /api/dashboard` - Get user data (protected)

## 🐛 Common Issues

**MongoDB not connecting?**
- Check if MongoDB is running
- Verify MONGO_URI in `backend/.env`

**Port 5000 already in use?**
- Change PORT in `backend/.env`

**Frontend can't connect to backend?**
- Make sure backend is running
- Check CORS settings

## 📚 Full Documentation

See `AUTH_README.md` for complete documentation.

