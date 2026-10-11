# Tests for the beta

Run a static server in the repository root (`python3 -m http.server 8770`), then with Playwright installed:

- `node tests/physics-bench.js` – every experiment against independent textbook formulas (88 checks)
- `node tests/regress.js` – every screen and the main interactions
- `node tests/integ.js` – links between cards, topics, stars and experiments, languages, failed requests

The scripts expect Chromium at `/opt/pw-browsers/chromium`; change `executablePath` for another machine.
