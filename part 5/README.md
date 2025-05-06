# Part 5 - Job Management

This part implements job posting and management functionality.

## Features

- Create job listings
- List all jobs
- Update job details
- Delete jobs
- Search and filter jobs
- Job status management

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

- POST /api/job - Create new job
- GET /api/jobs - Get all jobs
- GET /api/jobs/search - Search jobs
- PUT /api/job/:id - Update job
- DELETE /api/job/:id - Delete job 