# Authentication Backend

Node.js + Express + MongoDB + JWT authentication backend.

## Features

- User Registration with name, email, password
- User Login with email and password
- Protected Dashboard route
- JWT token-based authentication
- Password hashing with bcrypt
- MongoDB database integration

## API Endpoints

### POST `/api/register`
Register a new user.

**Request Body:**
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

**Request Body:**
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
Get user dashboard data (Protected route - requires JWT token).

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

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 3. Start MongoDB

Make sure MongoDB is running on your system. You can:
- Install MongoDB locally
- Use MongoDB Atlas (cloud)
- Use Docker: `docker run -d -p 27017:27017 mongo`

### 4. Run the Server

**Development mode (with nodemon):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## Project Structure

```
backend/
├── models/
│   └── User.js          # User model with password hashing
├── routes/
│   └── authRoutes.js    # Authentication routes
├── middleware/
│   └── authMiddleware.js # JWT authentication middleware
├── server.js            # Express server setup
├── package.json         # Dependencies
└── .env                 # Environment variables (create this)
```

## Technologies Used

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT token generation
- **dotenv** - Environment variables
- **cors** - Cross-origin resource sharing

