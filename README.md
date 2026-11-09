# ChronoMed AI

An educational, demo-first observatory for exploring wearable-derived sleep and activity patterns alongside circadian research. This is a hackathon MVP, not a clinical tool.

> ChronoMed AI is an educational and research prototype. It does not diagnose, prescribe, or determine the optimal timing of medication. Do not change your medication schedule without consulting your qualified healthcare professional.

## What works

- Responsive landing page, observatory, evidence explorer, what-if simulator, explainer, and print-friendly report.
- Synthetic wearable demo and downloadable CSV; CSV import is parsed and validated in the browser, with a 2 MB limit and timestamp/numeric checks.
- Interactive 24-hour dial plus weekly, last-24-hour and average-by-clock-hour views for available sleep, activity, heart rate, HRV and skin-temperature signals.
- Descriptive daily aggregates and missing-signal summary; no endogenous biological phase or personalized medication-time prediction.
- Evidence explorer cites TIME and BedMed randomized antihypertensive timing trials and a small wearable-phase validation study, with study populations, findings and limitations. Other medicines are explicitly marked unverified.
- Safe deterministic explanations work without an AI key. The server API validates requests and includes a small in-memory rate limit. No uploaded file is sent to the server.
- Print / save as PDF report and session-data clearing.

## Run locally

Requires Node.js 20+ and npm.

```sh
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:5173. The API runs on http://localhost:3001. You can use all app features without a key or account. The `.env` file is optional for local demo.

Run a production build with `npm run build`; run the API in production with `npm start` after building. Set `NODE_ENV=production` to have the API serve `client/dist`. Set `PORT` and `CLIENT_ORIGIN` for hosting.

## CSV format

Required: `timestamp` (ISO 8601 recommended). Optional: `sleep_state`, `heart_rate`, `hrv`, `skin_temperature`, `activity_level`. A sample file is available from the dashboard. Values are treated as user-provided and are not checked for clinical accuracy. Rows are held in browser memory; clearing or reloading removes them. The app does not persist health data.

## AI integration

The working explainer uses deterministic, evidence-aware fallback responses. No external AI provider is configured in this MVP. A future server-side provider must use an environment variable, validate output against a schema, apply this safety layer after generation, and must not send uploaded health data unless the user is clearly informed and explicitly opts in. Do not put secrets in client code.

## Deployment

Deploy the built Vite client and Node API on a platform that supports both static assets and a persistent Node process. Configure `NODE_ENV=production`, `PORT`, and `CLIENT_ORIGIN` to the deployed origin. Build with `npm ci && npm run build`, then start with `npm start`. For split frontend/backend hosting, point the frontend `/api` requests to the API origin and configure CORS to that exact frontend origin. HTTPS is required for any public deployment. This MVP has no database or authentication; do not use it to process real patient information.

## Limitations

- No validated drug-specific evidence is included, so no personalized timing interpretation is available.
- Synthetic example data is illustrative, not patient data.
- The simulator only moves a reported sleep arc and uses a generic illustrative band; it does not calculate clinical timing.
- The report is print-friendly HTML; PDF output uses the browser print dialog.
- No wearable platform integration, clinical validation, regulatory assessment, or AI provider integration is implemented.
- The API is stateless and does not retain health data. Uploaded CSV processing stays in the browser.

See [docs/architecture.md](docs/architecture.md), [docs/safety.md](docs/safety.md), [docs/privacy.md](docs/privacy.md), and [docs/api.md](docs/api.md).

