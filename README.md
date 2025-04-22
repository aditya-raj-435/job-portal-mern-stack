# Job Portal - MERN Stack Application

A full-stack job portal application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows employers to post jobs and job seekers to find and apply for positions.

## Features

- User Authentication (Login/Register)
- Job Posting and Management
- Job Search with Filters
- Responsive Design
- Category-based Job Filtering
- Location-based Job Search
- Salary Display in Indian Rupees (₹)
- Modern UI with Material-UI
- Smooth Animations and Transitions

## Tech Stack

- **Frontend:**
  - React.js
  - Material-UI
  - Redux for State Management
  - React Router for Navigation

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT for Authentication

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Run the application:
   ```bash
   # Run backend (from backend directory)
   npm start

   # Run frontend (from frontend directory)
   npm start
   ```

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.


