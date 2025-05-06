# Part 3 - User Authentication

This part implements user authentication functionality for the Job Portal application.

## Features

- User registration
- User login
- JWT token authentication
- Password hashing with bcrypt
- Protected routes
- User authorization middleware

## Setup Instructions

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Configure environment variables:
   ```
   JWT_SECRET=your_jwt_secret_key
   MONGODB_URI=your_mongodb_connection_string
   ```

3. Run the server:
   ```bash
   npm start
   ```

## API Endpoints

- POST /api/auth/register - User registration
- POST /api/auth/login - User login
- GET /api/auth/me - Get current user 