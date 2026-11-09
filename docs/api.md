# API

All request bodies are JSON and validated server-side. Errors return concise messages without stack traces.

- `GET /api/health` — service status and stateless mode.
- `GET /api/demo` — synthetic demo metadata.
- `GET /api/evidence` and `GET /api/evidence/:id` — education entries, with unsupported claims marked unverified.
- `POST /api/wearables/validate` — validates supported headers and timestamps; does not receive files.
- `POST /api/wearables/analyze` — descriptive aggregates from submitted JSON rows; data is not retained.
- `POST /api/insights/explain` — safe fallback explanation, 20 requests/minute per in-memory IP key.
- `POST /api/simulator/run` — illustrative schedule shift only.
- `POST /api/reports/generate` — print-report summary payload with limitations.
- `DELETE /api/session-data` — confirms no server-side session data exists; client clears its own transient state.

The browser CSV import currently parses locally rather than posting file contents to the validation endpoint.
