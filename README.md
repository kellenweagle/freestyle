# Freestyle

**Description**  
Freestyle is an Express.js-based skeleton project with a backend and frontend. It features a database setup using Sequelize, user authentication, and basic CRUD functionality. The frontend is built using React, and it uses Vite for development and production builds.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Database Setup](#database-setup)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and set up this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/kellenweagle/freestyle.git
   ```

2. Navigate to the project directory:
   ```bash
   cd freestyle
   ```

3. Install backend dependencies:
   ```bash
   npm install --prefix backend
   ```

4. Install frontend dependencies:
   ```bash
   npm install --prefix frontend
   ```

## Usage

**Running Both Backend and Frontend**
To run the development servers for both the backend and frontend simultaneously:

1. Start the backend:
   ```bash
   npm run start-backend
   ```

2. Start the frontend:
   ```bash
   npm run start-frontend-dev
   ```

Both servers will be running locally, with the frontend on http://localhost:3000 and the backend on http://localhost:8000.

**Running Backend in Production**

1. To start the backend in production mode, run:

   ```bash
   npm run start-backend --production
   ```

## Backend Setup

**Environment Variables**

Ensure you have the following environment variables set up in a .env file:

  * DB_URL: URL for your database (PostgreSQL/SQLite)
  * JWT_SECRET: Secret for signing JWT tokens

**Database Setup**

Run the following commands to set up your database with Sequelize:

* Create the database: 

   ```bash
    npm run db:create --prefix backend
   ```

* Apply Migrations
  ```bash
    npm run db:migrate --prefix backend
  ```

* Seed the database:
  ```bash
   npm run db:seed:all --prefix backend
  ```

You can also reset the database using:
  ```bash
    npm run db:reset --prefix backend
  ```

## Frontend Setup

The frontend is built with React and uses Vite as the bundler.

To run the frontend in development mode:

  ```bash
    npm run start-frontend-dev --prefix frontend
  ```

To build the frontend for production:

  ```bash
    npm run build --prefix frontend
  ```

To preview the production build:
  ```bash
    npm run preview --prefix frontend
  ```

## API Endpoints

Here are the main API routes for the backend:

### GET `/api/products`
- **Description**: Fetch all products
- **Response**: List of products in JSON format

### POST `/api/products`
- **Description**: Add a new product
- **Body**:
   ```json
   {
     "name": "Product Name",
     "price": 19.99,
     "description": "Product description"
   }
- **Response**: Newly created product object

### PUT `/api/products/:id`
- **Description**: Update an existing product
- **Response**: Updated product object

### DELETE `/api/products/:id`
- **Description**: Delete a product by ID
- **Response**: Success message

## Scripts

### Backend Scripts
- `npm run start-backend`: Starts the backend server.
- `npm run db:create`: Creates the database.
- `npm run db:migrate`: Runs database migrations.
- `npm run db:seed:all`: Seeds the database with data.
- `npm run db:reset`: Resets the database (drop, create, migrate, seed).

### Frontend Scripts
- `npm run start-frontend-dev`: Runs the frontend in development mode.
- `npm run build`: Builds the frontend for production.
- `npm run preview`: Previews the production build.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.