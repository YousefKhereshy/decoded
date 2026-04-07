# TechPulse Backend

This directory contains the secure production-ready REST API backend for the TechPulse application.

The backend is built with:
- Node.js v22
- Express.js
- Prisma ORM
- PostgreSQL / Supabase
- JWT authentication + refresh token rotation
- Newsletter delivery with Resend
- Article ingestion from NewsAPI
- AI summarization with Anthropic Claude
- Scheduled weekly digest job with node-cron

## Project structure

```
techpulse-backend/
├── server.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── prisma/
│   └── schema.prisma
├── config/
│   ├── db.js
│   └── corsOptions.js
├── routes/
│   ├── auth.js
│   ├── articles.js
│   ├── saved.js
│   └── newsletter.js
├── controllers/
│   ├── authController.js
│   ├── articlesController.js
│   ├── savedController.js
│   └── newsletterController.js
├── middleware/
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   ├── rateLimiter.js
│   └── validate.js
├── jobs/
│   └── weeklyDigest.js
└── utils/
    ├── asyncHandler.js
    ├── generateToken.js
    ├── fetchNews.js
    ├── summarizeWithClaude.js
    └── sendNewsletter.js
```

## What this backend does

- Provides secure auth endpoints for signup, login, refresh, logout, and profile retrieval.
- Implements JWT access tokens with 15-minute expiry.
- Implements refresh token rotation with 7-day expiry stored in an `httpOnly` cookie.
- Blacklists invalidated refresh tokens.
- Stores users, articles, saved articles, and newsletter subscribers in PostgreSQL.
- Accepts newsletter subscriptions and enqueues digest emails.
- Fetches technology news from NewsAPI every Monday at 08:00 UTC.
- Summarizes articles using Anthropic Claude and categorizes them automatically.
- Sends weekly digest emails to subscribers using Resend.
- Protects routes with Helmet, CORS, XSS sanitization, HPP, rate limiting, and request size limits.

## Environment setup

1. Copy the example file:

```bash
cd techpulse-backend
cp .env.example .env
```

2. Update the `.env` values:

- `PORT` — backend port, typically `5000`
- `NODE_ENV` — `development` or `production`
- `DATABASE_URL` — your PostgreSQL / Supabase connection string
- `JWT_SECRET` — at least 64 random characters
- `JWT_EXPIRES_IN` — `15m`
- `REFRESH_TOKEN_SECRET` — a different 64-character secret
- `REFRESH_TOKEN_EXPIRES_IN` — `7d`
- `FRONTEND_URL` — e.g. `http://localhost:3000`
- `NEWS_API_KEY` — NewsAPI key
- `ANTHROPIC_API_KEY` — Anthropic Claude API key
- `RESEND_API_KEY` — Resend API key
- `RESEND_FROM_EMAIL` — sender email address for digest emails

## Install dependencies

```bash
cd techpulse-backend
npm install
```

## Prisma setup

Generate Prisma client:

```bash
npx prisma generate
```

Update database schema with Prisma migrations:

```bash
npx prisma migrate dev --name init
```

> If you are using Supabase, make sure the `DATABASE_URL` in `.env` points to your Supabase Postgres instance.

## Run the backend

Start the API server in development:

```bash
npm run dev
```

Start in production:

```bash
npm start
```

## API endpoints

### Auth

- `POST /api/auth/signup`
  - Request body: `{ name, email, password }`
  - Registers a new user and returns an access token.

- `POST /api/auth/login`
  - Request body: `{ email, password }`
  - Returns an access token and sets a refresh token cookie.

- `POST /api/auth/refresh`
  - Uses the `httpOnly` refresh token cookie to issue a new access token.

- `POST /api/auth/logout`
  - Revokes the refresh token and clears the cookie.

- `GET /api/auth/profile`
  - Requires `Authorization: Bearer <token>`.
  - Returns current user details.

### Articles

- `GET /api/articles`
  - Public. Supports pagination with `page` and `pageSize`.
  - Optional filters: `search`, `category`.

- `GET /api/articles/:id`
  - Public. Retrieves one article by ID.

- `GET /api/articles/search`
  - Public. Search by `search` and `category`, with pagination.

### Saved articles

- `GET /api/saved`
  - Protected. Returns articles saved by the authenticated user.

- `POST /api/saved`
  - Protected. Request body: `{ articleId }`
  - Saves an article for the authenticated user.

- `DELETE /api/saved/:articleId`
  - Protected. Removes a saved article.

### Newsletter

- `POST /api/newsletter/subscribe`
  - Public. Request body: `{ email }`
  - Subscribes the email to the weekly digest.

## Security measures

- `helmet` enables strict security headers, including CSP, HSTS, X-Frame-Options, content sniffing prevention, and XSS protections.
- `cors` only allows requests from `FRONTEND_URL`.
- `hpp` prevents HTTP parameter pollution attacks.
- `xss-clean` sanitizes request bodies.
- Rate limiting is enabled globally and on sensitive routes.
- JSON and URL-encoded request bodies are limited to `10kb`.
- Passwords are hashed with bcrypt using 12 salt rounds.
- Refresh tokens are stored only in secure, `httpOnly` cookies.
- All inputs are validated and sanitized using `express-validator`.

## Frontend integration

The frontend project lives in the sibling directory `../` relative to this folder.

### Recommended flow

1. Set `FRONTEND_URL` in `.env` to the frontend origin, usually `http://localhost:3000`.
2. From the frontend, call backend routes using the base URL:

```js
const API_BASE = 'http://localhost:5000/api';

const login = await fetch(`${API_BASE}/auth/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({ email, password }),
});
```

3. Include `credentials: 'include'` on requests that require refresh token cookies (`/api/auth/refresh`, `/api/auth/logout`).
4. Pass the access token in the `Authorization` header for protected endpoints:

```js
fetch(`${API_BASE}/saved`, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
```

5. Use `/api/newsletter/subscribe` from the frontend newsletter form.

## Weekly digest job

- The backend schedules `jobs/weeklyDigest.js` to run each Monday at `08:00 UTC`.
- It fetches the top technology articles from NewsAPI.
- It summarizes each article with Claude AI.
- It stores categorized articles in the database.
- It sends a weekly digest email to all subscribers with Resend.

## Notes

- Never commit `.env` or secrets to source control.
- If you change `prisma/schema.prisma`, run `npx prisma generate` again.
- If the frontend is served from a different domain, update `FRONTEND_URL` and allow the origin in `config/corsOptions.js`.

## Troubleshooting

- If auth fails, verify `JWT_SECRET` and `REFRESH_TOKEN_SECRET` are configured.
- If email delivery fails, verify `RESEND_API_KEY` and `RESEND_FROM_EMAIL`.
- If article ingestion fails, verify `NEWS_API_KEY`.
- If database connection fails, verify `DATABASE_URL` and network access to your Postgres / Supabase instance.
