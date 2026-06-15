# Fullstack E-Commerce App

A fullstack e-commerce application built with **React**, **Redux Toolkit**, **Node.js**, **Express.js**, **PostgreSQL**, and **JWT Authentication**.

This project includes user authentication, protected routes, a user-specific shopping cart system, product search, cart total calculation, and backend API integration.

## Features

* User registration
* User login
* JWT-based authentication
* Protected API routes
* User-specific shopping cart
* Add products to cart
* Remove products from cart
* Product quantity support
* Cart total price calculation
* Product search functionality
* React Router page navigation
* Redux Toolkit state management
* PostgreSQL database integration
* Backend authentication middleware
* Axios API requests with authorization headers

## Tech Stack

### Frontend

* React
* Vite
* Redux Toolkit
* React Redux
* React Router DOM
* Axios
* Material UI
* React Icons

### Backend

* Node.js
* Express.js
* PostgreSQL
* JWT
* dotenv
* CORS

## Project Structure

```txt
e-commerance/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── middlewares/
│   │   └── authMiddleware.js
│   │
│   ├── routers/
│   │   └── userRouter.js
│   │
│   ├── index.js
│   └── package.json
│
├── e-comme/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── config/
│   │
│   └── package.json
│
├── .gitignore
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/fullstack-ecommerce-jwt-postgresql.git
```

Go to the project folder:

```bash
cd fullstack-ecommerce-jwt-postgresql
```

## Backend Setup

Go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=3000
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
```

Start the backend server:

```bash
npm run dev
```

or:

```bash
node index.js
```

The backend runs on:

```txt
http://localhost:3000
```

## Frontend Setup

Go to the frontend folder:

```bash
cd e-comme
```

Install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend runs on:

```txt
http://localhost:5173
```

## Environment Variables

The project uses environment variables for sensitive data.

The `.env` file is not included in the repository for security reasons.

Example:

```env
PORT=3000
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
```

## Security Notes

Sensitive information such as database passwords, JWT secrets, and environment variables should never be pushed to GitHub.

The following files and folders are ignored:

```gitignore
node_modules/
.env
dist/
.idea/
```

## What I Learned

While building this project, I practiced:

* Fullstack project structure
* React component architecture
* Redux Toolkit global state management
* Async API requests with `createAsyncThunk`
* JWT authentication flow
* Authorization headers
* Protected backend routes
* PostgreSQL database queries
* User-specific cart logic
* Frontend and backend integration

## Future Improvements

* Add product quantity increase/decrease buttons
* Add order checkout system
* Add order history page
* Improve UI design
* Add form validation
* Add loading and error states
* Deploy frontend and backend

## License

This project is open-source and available for learning purposes.
