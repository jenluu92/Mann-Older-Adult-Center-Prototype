# Mann Older Adult Center App Prototype

A design-complete, bilingual information prototype for older adults using the Mann Older Adult Center. It helps members find today's activities and meals, explore center programs and events, and view familiar community photographs through a simple phone-first interface.

- **Live Prototype:** [to be added after deployment]
- **GitHub Repository:** [to be added after repository creation]

The project owner has manually reviewed and approved the final design and functional flows. The prototype is currently local; deployment and repository publication have not occurred.

## Experience

Landing offers English and Español entry buttons. Persistent **Home / My Center / Information** navigation remains available throughout the app, and the Mann header returns to Landing. Language persists during navigation; the main-app ENG/ESP control keeps the user on equivalent content when switching. The photo viewer inherits the selected language.

- **Home:** the fixed day's announcements, programs and Hot/Cold meals.
- **My Center:** Monthly Calendar, Our Programs, Meals, Monthly Trips and Photo Albums.
- **Programs:** all 12 programs have English and Spanish detail pages.
- **Calendar and meals:** select a date to see its schedule or both meal types together; meal availability numbers retain the center's established format.
- **Trips:** event dates include weekdays.
- **Photos:** supplied community/event album covers, compact photo grids and a viewer with Close, Previous, Next, count, arrow keys and horizontal gesture support. Includes Casino Trip photos.
- **Information:** contact details, hours, staff, membership and supplied partner logos, including PCA.

## Readability and accessibility

The interface uses locally bundled Nunito, readable type weights, Mann blue `#0F4D90` and yellow `#FFC445`, large controls and a centered phone layout at wider browser sizes. Spanish text reflows within the shared layout. Semantic controls, localized labels, a skip link, visible keyboard focus, modal focus handling and reduced-motion styling support access.

Physical-device and screen-reader testing are **pending**. The project does not claim full accessibility conformance; other outstanding checks and target-size limitations are documented in [QA.md](QA.md).

## Content and assets

The demonstration date is fixed at **September 24, 2025**, not the current date. Some program details, schedules, menu content and illustrations are fictional demonstration material created where original source content was unavailable. This is not a live center-information service.

Supplied Mann logos, community photographs and the owner's Landing composition are used where available. [ASSET-MANIFEST.json](ASSET-MANIFEST.json) records image provenance and hashes. Nunito's license is included in `dist/assets/fonts/OFL.txt`. The static prototype has no accounts, database, registration or payment workflow.

## Run locally

Requirements: Node.js and a modern browser. The project was checked with **Node.js v24.19.0**. It uses plain HTML, CSS and JavaScript modules, plus Node's built-in HTTP/file APIs. There are no declared npm dependencies, dependency-install step or build step; `dist/` contains the served application files.

From the project root, run:

```sh
node server.mjs
```

Open [http://127.0.0.1:4173/](http://127.0.0.1:4173/). Keep the process running while reviewing; press Ctrl+C to stop. The server binds to local loopback on port 4173 and must be restarted after shutdown. Use the server rather than opening `index.html` directly.

If npm is available, `npm run dev` invokes the same server. `package.json` also defines `npm run check` and `npm test`. The following direct Node commands were used for verification:

```sh
node --check dist/app.js
node --check dist/data.js
node --check dist/assets.js
node --check server.mjs
node --test tests/content.test.mjs tests/assets.test.mjs
```

## Design process and QA

The prototype was created through an AI-assisted workflow: the project owner supplied requirements/reference designs, reviewed successive implementations, and accepted, revised or rejected AI choices. The final design reflects that human judgment, not automatic acceptance of AI output.

Seven automated tests pass. Recorded V3 browser checks cover 110 route/language/width combinations and 10 photo-viewer layouts, followed by targeted Landing checks. The owner completed final visual/functional review, including bilingual flows, all five My Center destinations and all 12 programs. These checks do not replace the pending physical-device, screen-reader, zoom/text-size and broader accessibility/usability reviews.

Project documentation:

- [PROJECT-BRIEF.md](PROJECT-BRIEF.md) — audience, task, scope and evidence status.
- [DESIGN.md](DESIGN.md) — Mann-specific visual and interaction guidance.
- [DECISION-LOG.md](DECISION-LOG.md) — concise human-judgment examples and preserved V1/V2/V3 history.
- [QA.md](QA.md) — checks, final acceptance, limitations and actual before/after screenshot evidence.
- [App Version Screenshots](App%20Version%20Screenshots/) — unchanged supplied screenshots used in QA comparisons.
