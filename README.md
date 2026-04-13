# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Decoded Backend

A secure production-ready backend scaffold has been added under `Decoded-backend/`.

### Features

- Node.js + Express API server
- Prisma ORM with PostgreSQL schema
- JWT auth with access token + refresh token rotation
- Rate limiting, Helmet, CORS, HPP, XSS protection
- NewsAPI article ingestion + Claude AI summarization
- Resend email newsletter integration
- Weekly digest cron job

### Getting started

1. Copy `Decoded-backend/.env.example` to `Decoded-backend/.env`.
2. Copy `.env.example` to `.env` at the project root for the frontend.
3. Fill in `DATABASE_URL`, `JWT_SECRET`, `REFRESH_TOKEN_SECRET`, `FRONTEND_URL`, `NEWS_API_KEY`, `ANTHROPIC_API_KEY`, `RESEND_API_KEY`, and `RESEND_FROM_EMAIL` in `Decoded-backend/.env`.
4. Run `npm install` in both the root project and `Decoded-backend/`.
5. Generate Prisma client: `npx prisma generate` from the `Decoded-backend/` directory.
6. Start the backend server in development: `npm run dev` from `Decoded-backend/`.

### Backend folders

- `server.js` — express bootstrap and security middleware
- `config/` — database and CORS configuration
- `middleware/` — auth, validation, error handling, rate limiting
- `controllers/` — request handling logic
- `routes/` — API route definitions
- `utils/` — token generation, news fetch, summarization, email delivery
- `jobs/` — weekly cron job for Decoded digest

### API base path

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `GET /api/auth/profile`
- `GET /api/articles`
- `GET /api/articles/:id`
- `GET /api/articles/search`
- `GET /api/saved`
- `POST /api/saved`
- `DELETE /api/saved/:articleId`
- `POST /api/newsletter/subscribe`


