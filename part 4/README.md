# Part 4 - Job Types Management

This part implements job types/categories management functionality.

## Features

- Create job types
- List all job types
- Update job types
- Delete job types
- Admin authorization for job type management

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

- POST /api/job-type - Create new job type
- GET /api/job-types - Get all job types
- PUT /api/job-type/:id - Update job type
- DELETE /api/job-type/:id - Delete job type 