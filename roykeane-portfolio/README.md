# Roykeane Syangu — Portfolio

Custom React + Vite + Tailwind CSS v4 portfolio starter.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production check run `npm run build`.

## Structure

- `src/pages/Home.jsx`: homepage sections
- `src/pages/Project.jsx`: project case-study page
- `src/components/`: navigation and reusable project card
- `src/data/projects.js`: project content, links, metrics and technology tags
- `src/index.css`: global design tokens
- `public/`: static images (the original screenshot is included as a reference, not displayed)

## Before publishing

- Replace placeholder contact link in `Navbar.jsx` with your real contact method.
- Add actual project screenshots and architecture diagrams.
- Add GitHub, LinkedIn and CV links after confirming their URLs.
- Expand case studies with methodology, limitations, screenshots and verified metrics.
- Ensure your hosting provider rewrites client-side routes to `index.html`.

## Deployment

Push to GitHub and import into Vercel. Framework: Vite; build command: `npm run build`; output directory: `dist`. Configure SPA route rewrites for direct `/projects/...` visits.
