# Architecture

The MVP has a Vite + React + TypeScript client and a small Express + TypeScript REST API.

- `client/src/App.tsx` owns route-level UI and session-only demo/import state.
- `client/src/styles.css` contains design tokens, responsive styling, focus treatment and print rules.
- `server/src/index.ts` applies Helmet, a single-origin CORS default, a 64 KB JSON limit, Zod request schemas, generic errors, stateless analysis, and safe fallback explanations.
- CSV parsing stays in the browser. There is no upload endpoint or persistent database.
- `public/sample-data` contains fictional illustrative records.

For a production service, split API and frontend origins explicitly, add structured non-sensitive operational monitoring, and perform independent security, privacy, and clinical review before any real-world health data use.
