# Safety design

The safety boundary is deterministic and independent of AI output. No provider is configured. The API explanation endpoint checks requests and returns educational fallback text. Medication changes, diagnosis, dose advice, emergency care, chemotherapy schedules and insulin dosing are outside the product scope. No API calculates an optimal medication time.

The evidence explorer uses cited group-level trials for antihypertensive timing and a small wearable-phase validation study. Their findings are not personalized medication guidance. Other drug categories without verified evidence are labeled unverified. The what-if view is explicitly illustrative and cannot represent biological phase. Report language is descriptive, with the same concise disclaimer visible on all routes.

The interface does not parse or modify a prescribed schedule. Do not use this prototype for medical decisions. Any future generated answer must pass schema and safety checks after generation; model output cannot override this layer.

