# Gryphus Solutions — Frontend

React frontend for the Gryphus Solutions security firm web application. Connects to the Spring Boot REST API backend and is deployed on Vercel.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router DOM 7 |
| HTTP Client | Axios |
| Styling | Bootstrap 5 + custom CSS |
| Deployment | Vercel |

---

## Live URLs

| Resource | URL |
|---|---|
| Frontend | https://gryphus-frontend.vercel.app |
| Backend API | https://gryphus-backend-production.up.railway.app |

---

## Pages & Features

| Route | Description |
|---|---|
| `/` | Home — hero section, about, services, reviews, news, contact |
| `/reviews` | Full reviews list with detail links |
| `/reviews/:id` | Single review detail page |
| `/services` | All security services |
| `/register` | Create a new account |

**Authentication:**  
Login is available via the Navbar. After a successful login, the JWT token is stored in `localStorage` and attached automatically to protected requests (e.g. submitting a review).

---

## Project Structure

```
src/
  api.js              Central API URL — reads VITE_API_URL env variable
  App.jsx             Router setup and layout
  main.jsx            Entry point, Bootstrap import
  components/
    Navbar.jsx        Navigation with login modal
    Footer.jsx        Site footer
    ScrollToTop.jsx   Scroll restoration on route change
  pages/
    Home.jsx          Main landing page with all sections
    Reviews.jsx       Reviews list
    ReviewDetail.jsx  Single review
    Services.jsx      Services list
    Register.jsx      Registration form
```

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_URL` | Base URL of the backend API |

Local development (`.env`):
```
VITE_API_URL=http://localhost:8080
```

Production (set in Vercel dashboard):
```
VITE_API_URL=https://gryphus-backend-production.up.railway.app
```

All API calls go through `src/api.js` which reads this variable:
```js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'
export default API_URL
```

This means you only change one place to point the app at a different backend.

---

## Why Vercel?

Vercel is purpose-built for frontend frameworks like React and Vite. A few reasons it was the right choice here:

- **Zero configuration** — Vercel auto-detects Vite projects and sets the correct build command (`npm run build`) and output directory (`dist`) without any manual setup.
- **Instant deployments** — every push to `main` triggers an automatic redeploy, usually live within 30–60 seconds.
- **Free tier** — no credit card required, generous bandwidth, no time limits on the free plan.
- **Environment variables** — Vercel's dashboard makes it simple to inject `VITE_API_URL` at build time, keeping secrets out of the repository.
- **Global CDN** — the built static files are distributed across Vercel's edge network, so the app loads fast regardless of where the user is.

Railway (where the backend lives) is a better fit for long-running server processes like Spring Boot. Vercel is a better fit for static/SPA frontends. Using both together is a natural split.

---

## Running Locally

```bash
npm install
npm run dev
```

The app starts on `http://localhost:5173` and connects to `http://localhost:8080` by default (make sure the backend is also running).

## Building for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Vercel runs this command automatically on every deploy.

---

## Deployment

The project is connected to GitHub. Every push to `main` triggers a new Vercel deployment automatically — no manual steps needed.

To deploy manually from the CLI:
```bash
npx vercel --prod
```
