# Full-Stack Authentication Project

Complete authentication system with **Register**, **Login**, and **Logout** functionality.

## 🚀 Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **React Toastify** - Notifications
- **React Icons** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **dotenv** - Environment variables
- **cors** - CORS middleware

## 📁 Project Structure

```
shopmate-main/
├── backend/                    # Backend server
│   ├── models/
│   │   └── User.js            # User model
│   ├── routes/
│   │   └── authRoutes.js      # Auth routes
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT middleware
│   ├── server.js              # Express server
│   ├── package.json           # Backend dependencies
│   └── .env                   # Backend env vars
│
├── src/                       # Frontend React app
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx # Route protection
│   ├── context/
│   │   └── authContext.jsx    # Auth context
│   ├── pages/
│   │   ├── Login.jsx          # Login page
│   │   ├── Register.jsx       # Register page
│   │   └── Dashboard.jsx     # Protected dashboard
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
│
└── package.json               # Frontend dependencies
```

## ✨ Features

1. ✅ **Register Page** - Name, email, password registration
2. ✅ **Login Page** - Email and password authentication
3. ✅ **Logout Button** - Remove token from localStorage
4. ✅ **Dashboard** - Protected route (only accessible when logged in)
5. ✅ **Auto Redirect** - Redirects to dashboard after login
6. ✅ **Error Messages** - Proper error handling and display
7. ✅ **JWT Tokens** - Stored in localStorage
8. ✅ **Protected Routes** - Dashboard requires authentication

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Step 1: Install Frontend Dependencies

```bash
cd shopmate-main
npm install
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 3: Configure Backend Environment

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

**For MongoDB Atlas (Cloud):**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/authdb?retryWrites=true&w=majority
```

### Step 4: Configure Frontend Environment (Optional)

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
```

If not set, it defaults to `http://localhost:5000/api`.

### Step 5: Start MongoDB

**Option 1: Local MongoDB**
```bash
# Make sure MongoDB is running
mongod
```

**Option 2: Docker**
```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

**Option 3: MongoDB Atlas**
- Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a free cluster
- Get connection string and update `.env`

### Step 6: Start Backend Server

```bash
cd backend
npm run dev
```

Server runs on `http://localhost:5000`

### Step 7: Start Frontend Development Server

```bash
# In the root directory (shopmate-main)
npm run dev
```

Frontend runs on `http://localhost:5173` (or another port if 5173 is busy)

## 📡 API Endpoints

### POST `/api/register`
Register a new user.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### POST `/api/login`
Login with email and password.

**Request:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### GET `/api/dashboard`
Get user dashboard (Protected - requires JWT token).

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "success": true,
  "message": "Dashboard data retrieved successfully",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
}
```

## 🔐 Authentication Flow

1. **Register/Login** → User submits form
2. **Backend validates** → Checks credentials
3. **JWT Token generated** → Sent to frontend
4. **Token stored** → Saved in localStorage
5. **Protected routes** → Token sent in Authorization header
6. **Logout** → Token removed from localStorage

## 🧪 Testing the Application

1. **Register a new user:**
   - Navigate to `/register`
   - Fill in name, email, password
   - Submit form
   - Should redirect to dashboard

2. **Login:**
   - Navigate to `/login`
   - Enter email and password
   - Submit form
   - Should redirect to dashboard

3. **Access Dashboard:**
   - Should show user information
   - Only accessible when logged in

4. **Logout:**
   - Click logout button in navbar
   - Token removed from localStorage
   - Redirected to login page

5. **Protected Route:**
   - Try accessing `/dashboard` without login
   - Should redirect to `/login`

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check MONGO_URI in `.env` file
- Verify MongoDB port (default: 27017)

**Port Already in Use:**
- Change PORT in `.env` file
- Or kill process using port 5000

### Frontend Issues

**API Connection Error:**
- Check if backend server is running
- Verify VITE_API_URL in frontend `.env`
- Check CORS settings in backend

**Token Not Working:**
- Clear localStorage and login again
- Check JWT_SECRET matches in backend
- Verify token format in Authorization header

## 📝 Notes

- Passwords are hashed using bcrypt before saving
- JWT tokens expire after 7 days
- Tokens are stored in localStorage (consider httpOnly cookies for production)
- All API routes are prefixed with `/api`
- Error messages are user-friendly and displayed via toast notifications

## 🚀 Production Deployment

### Backend
- Use environment variables for all secrets
- Set strong JWT_SECRET
- Use MongoDB Atlas or managed database
- Enable HTTPS
- Add rate limiting
- Use httpOnly cookies instead of localStorage

### Frontend
- Build for production: `npm run build`
- Deploy to Vercel, Netlify, or similar
- Update API URL for production
- Enable HTTPS

## 📄 License

This project is open-source and free to use.

## 👤 Author

**Saurav Kumar**
- GitHub: [@sauravsitamarhi](https://github.com/sauravsitamarhi)
- LinkedIn: [Saurav Kumar](https://www.linkedin.com/in/sauravkumar4/)

