# Admin Panel Project Documentation

## Overview
This project is a fullstack admin panel with:
- **Frontend:** Next.js (TypeScript, Tailwind CSS, App Router)
- **Backend:** Express.js (Node.js) with MongoDB
- **Authentication:** JWT-based

## Features
- User registration, login, and profile
- Product management (CRUD):
  - Product name, image, price, SKU
  - View, add, update, delete products
- Dashboard with navigation and logout

## Project Structure
```
/ (root)
  /backend
    index.js           # Express server
    /models            # Mongoose models (User, Product)
    /routes            # API routes (auth, products)
    .env               # Environment variables
  /src/app
    /register          # Registration page
    /login             # Login page
    /dashboard         # Dashboard and product pages
      DashboardHeader.tsx # Header component
      /products        # Product CRUD pages
```

## Setup Instructions
### Prerequisites
- Node.js
- MongoDB

### Backend
1. `cd backend`
2. `npm install`
3. Create `.env` with:
   ```
   MONGO_URL="mongodb://localhost/testdb"
   jwt_secret="goviwkdks"
   ```
4. `node index.js` (or use VS Code task)

### Frontend
1. In root: `npm install`
2. `npm run dev` (or use VS Code task)

## API Endpoints
### Auth
- `POST /api/auth/register` — Register user
- `POST /api/auth/login` — Login, returns JWT
- `GET /api/auth/profile` — Get user profile (JWT required)

### Products
- `GET /api/products` — List all products
- `GET /api/products/:id` — Get product by ID
- `POST /api/products` — Add product
- `PUT /api/products/:id` — Update product
- `DELETE /api/products/:id` — Delete product

## Frontend Pages
- `/register` — Registration form
- `/login` — Login form
- `/dashboard` — User profile, navigation
- `/dashboard/products` — Product list (view, update, delete)
- `/dashboard/products/add` — Add product
- `/dashboard/products/update/[id]` — Update product
- `/dashboard/products/view/[id]` — View product

## Authentication Flow
- Registration and login handled via backend API
- JWT stored in localStorage
- Protected pages check for JWT and redirect to login if missing/invalid
- Logout clears JWT and redirects to login

## Sample Product Data
- Name: Sample Product 1
- Image: https://via.placeholder.com/100
- Price: 19.99
- SKU: SKU001

## Customization
- Header and navigation in `DashboardHeader.tsx`
- All product pages share the same header for consistency

---
**To export as PDF:**
- Open this file in VS Code or any Markdown editor
- Print to PDF or use a Markdown-to-PDF extension
