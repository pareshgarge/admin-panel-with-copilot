# Admin Panel Project

This project is a fullstack admin panel with:
- **Frontend:** Next.js (TypeScript, Tailwind CSS, App Router)
- **Backend:** Express.js (Node.js) with MongoDB

## Features
- User registration (fullname, email, phone, password)
- User login (email, password)
- User profile page (displays user info)

## Getting Started

### Backend
1. `cd backend`
2. `npm install` (if not already done)
3. Create a `.env` file with:
   ```
   MONGO_URL="mongodb://localhost/testdb"
   jwt_secret="goviwkdks"
   ```
4. `node index.js` to start the backend server (default port 5000)

### Frontend
1. In the root folder, run `npm install` (if not already done)
2. `npm run dev` to start the Next.js frontend (default port 3000)

## API Endpoints
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT
- `GET /api/auth/profile` — Get user profile (requires Authorization header)

---

For more details, see the code in `/backend/routes/auth.js`.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
