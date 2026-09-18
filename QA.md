# Prototype QA rubric

**Current status:** design-complete, published on GitHub and deployed through Vercel; final visual/functional acceptance and a successful physical Samsung-phone production check reported by the project owner. See [Production deployment and physical-device QA](#production-deployment-and-physical-device-qa) for the latest status, which supersedes historical deployment/device-testing pending notes. Screen-reader testing remains pending. See [Final QA and assignment readiness](#final-qa-and-assignment-readiness) for the consolidated status and [Before-and-after screenshot evidence](#before-and-after-screenshot-evidence) for supplied visual evidence. Earlier V1/V2/V3 results and pending-review notes are retained as dated iteration history; they are not all current outstanding defects.

The rubric was created **before implementation with all results uncompleted**. Results below were subsequently recorded only after developer review. User/usability review is distinct from developer verification; partial checks are not full accessibility certification.

## Evaluation rubric

| ID | Area | Acceptance check | Result / evidence |
|---|---|---|---|
| N01 | Entry | Landing English/Español CTAs open the correct Home language; initial default English | Passed — both landing CTAs checked |
| N02 | Navigation | Home/My Center/Information navigate; correct localized labels and active tab | Passed — three tabs, localized labels and active state checked |
| N03 | Navigation | Bottom navigation remains visible on landing, all destinations, details, galleries, and enlarged states; content not covered | Passed — 110 route/language/width checks; sampled dialogs remain above navigation |
| N04 | Destinations | All five My Center categories open their appropriate supplied page | Passed — all five destinations opened from My Center |
| N05 | Programs | All 12 cards open the correct detail and return to list; browser Back works | Passed — all 12 details switched ES/EN and returned; browser Back sampled |
| N06 | Calendars | Monthly Calendar opens, readable September 2025 schedule enlarges/closes | Passed — date selection, enlargement, translation, Close/Escape and retained date checked |
| N07 | Additional flows | Hot/cold meals, trip poster, program posters enlarge/close; all 12 albums open and images navigate | Passed with sampling — both meal types, trips, four program posters, all 12 galleries, shared image viewer |
| L01 | Language | ENG/ESP switching preserves current route, selected item, and open-view context | Passed — program, calendar and gallery context retained; gallery stayed on image 2 |
| L02 | Language | Chosen language persists through all navigation, including return and deeper pages | Passed — language retained across tested routes and Back actions |
| L03 | Coverage | All 12 program flows, calendars, meals, trips, albums, information and generic UI/accessibility labels have both languages | Developer checked — both languages implemented throughout; independent translation review pending |
| L04 | Layout | Accents render correctly; Spanish wraps without clipping, overlap, or meaning-losing truncation | Passed — Spanish reflow checked across five widths, including long computer title |
| C01 | Home | Fixed September 24, 2025; date/announcements/programs/meals only; no Monthly Trips shortcut | Passed — fixed date and revised Home checked |
| C02 | Consistency | Home and calendar agree with English Program Details; Pickleball Monday 11–12; normalized names; no skill levels | Passed — source-data tests and rendered schedules checked |
| C03 | Meals | Home meal availability suffixes retain original format, including 35 and 5; September 24 meal calendar agrees | Passed — Home and both meal views agree on 35 and 5 |
| C04 | Sources | Six supplied program details and center information preserved except authorized fixes; new content coherent and bilingual | Developer checked — supplied paragraphs/contact information reviewed; user content sign-off pending |
| C05 | Evidence | Fictional illustration/content does not claim actual people/events; no unresolved broken asset placeholders | Passed — illustrative labels visible; SVG artwork renders without external assets |
| R01 | Responsive | Check narrow mobile (320/375px), typical mobile (440px), tablet (768px), wide (1280px+) | Passed — 320, 375, 440, 768 and 1280px viewport checks |
| R02 | Reflow | No unintended horizontal scrolling; readable line lengths; navigation safe area; long titles reflow | Passed — no overflow in 110 checks after narrow Home fix |
| R03 | Text resizing | Review at 200% browser zoom and increased text size; essential controls/content remain usable | Not tested — actual browser zoom and enlarged-text review pending |
| A01 | Keyboard | Entire required experience works with keyboard; skip link; visible focus; sensible navigation focus | Partial — skip link, keyboard activation, focus and dialog navigation checked; full keyboard walkthrough pending |
| A02 | Dialog | Named dialog, initial focus, trap, Escape, Close, restored trigger focus; background inert | Passed — named dialog, initial focus, explicit loop, Escape and focus restoration checked |
| A03 | Semantics | Language attribute, landmarks, logical headings, real buttons/links, labels, useful alt text | Partial — DOM semantics and localized labels reviewed; screen-reader review pending |
| A04 | Contrast/targets | Text and control contrast meets DESIGN targets; meaningful controls aim for 48px targets | Partial — core text contrast calculated; most controls at least 48px tall, compact calendar cells narrower on small screens |
| A05 | Assistive review | Screen-reader reading order and announcements; motion preferences; no color-only meaning | Not tested — screen-reader review pending; reduced-motion CSS present |
| I01 | States | Clear default/hover/pressed/focus/selected states; no inert actionable-looking controls | Partial — selected/focus states and working actions checked; exhaustive state review pending |
| V01 | Visual identity | Mann blue/yellow, supplied hierarchy, rounded header/cards, pastel categories, recognizable reference direction | Developer reviewed — mobile/wide screenshots retain Mann colors, hierarchy and category treatment |
| V02 | Visual quality | Consistent spacing/type/buttons, clear current-day hierarchy, readable calendars, crisp artwork | Developer reviewed — landing, Home, center, information, long Spanish detail and calendar modal; user visual review pending |
| T01 | Runtime | No syntax/runtime errors or missing local assets on required routes; direct route loading works | Passed — syntax, route loads, local HTTP response and tested browser logs clean |
| S01 | Scope | No excluded functionality, third language, automatic translation, live data, or README | Passed — source review; static prototype only; no README |

## Review record

Append actual review date, reviewer, environment/browser, viewport, language, checks performed, result, and evidence. Partial or automated checks do not prove an unreviewed criterion.

### Developer review — September 16, 2026

- Reviewer: Codex; Windows local static preview, Codex in-app browser, `http://127.0.0.1:4173/`. The app's demonstration date remains September 24, 2025.
- Automated content checks: `node --test tests/content.test.mjs` — **5 passed, 0 failed**. Covers 12 unique bilingual program/album records, authoritative supplied schedules, Wednesday Home data, meal counts, closures/weekends, and Boscov's trip.
- Syntax checks: `node --check` for app, data, and preview server — passed. Local entry returned HTTP 200. No errors/warnings in the tested browser tab's captured logs.
- Program walkthrough: each of 12 program cards opened in Spanish, switched to English, switched back, and returned to the Spanish list. Active My Center state verified on representative details. Four program poster modals exercised.
- Navigation: both landing CTAs, all three primary tabs, five My Center destinations, detail Back, and browser Back exercised. Skip-link activation retains the route and focuses main content.
- Calendar: September 24 schedule matched Home; selecting September 22 showed authoritative Monday programs. Selected date persisted when enlargement closed. Language switching retained context. Close/Escape and trigger-focus restoration checked.
- Meals/trips: both hot/cold views exercised. September 24 displayed Chicken Alfredo / Pasta Alfredo con pollo - 35 and Turkey Sandwich / Sándwich de Pavo - 5. Trip enlargement included September 26 and corrected repeated December reminder.
- Albums: all 12 opened with six illustrative gallery items each. Shared viewer's next-image, language switch, close and focus restoration checked; image 2 remained selected across translation. Art is explicitly illustrative.
- Responsive DOM geometry: **110 checks** = 11 routes × two languages × five widths (320, 375, 440, 768, 1280px). Routes: landing, Home, My Center, program list, long computer detail, calendar, meals, trips, albums, album detail, Information. Final run: **no horizontal overflow and navigation remained in viewport**.
- Visual inspection: mobile Home and Information; Spanish long-title detail; 320px enlarged calendar; wide My Center; landing. Full typography/translation/usability acceptance remains for the user.
- Core contrast calculations: ink/white 14.07:1; secondary text/white 6.08:1; white/blue 8.45:1; ink/yellow 8.86:1; secondary text/pale yellow 5.46:1. These are token checks, not an exhaustive rendered contrast audit.
- Modal keyboard check initially found forward Tab leaving the viewer; explicit focus wrapping was added and retested. Focus stayed inside and returned to the invoking button after Escape, including after language switching.

### Remaining reviews

- Actual screen-reader walkthrough, actual 200% browser zoom / increased text size, exhaustive keyboard/interaction-state audit, and real-device testing.
- Compact seven-column calendar date buttons are narrower than the 48px design aim at narrow phone widths, though at least 48px tall (56px in enlargement). Review comfort with older-adult participants; do not claim every target is 48×48px.
- User approval of visual treatment, fictional details, illustrations, and bilingual content. No real-user validation has been performed.
- Deployment is deferred; no deployed URL or production behavior was tested.

## Defects and follow-up

| Finding | Resolution | Retest |
|---|---|---|
| Skip link changed the app hash instead of only moving focus | Intercept skip-link activation and focus main | Passed: route stayed Home, focus moved to main |
| Language switch replaced the modal's original trigger node | Rebind the corresponding trigger after rerender | Passed: Escape focused translated enlargement button |
| Native dialog allowed forward Tab to leave the viewer | Explicit first/last focus wrapping | Passed: Tab from last control focused first language button inside dialog |
| Spanish Home overflow at 320px | Allow grid/flex content to shrink and wrap long program names | Passed in final 110-check matrix |
| Calendar date selected inside enlargement did not update underlying view | Refresh calendar on close and restore trigger focus | Passed: September 22 retained |

No unresolved functional defect was observed in the checked flows. The remaining reviews above are not claimed as passed.

## User validation

Not performed. Older-adult usability testing and user acceptance remain pending even after developer QA.

## V1 user review findings — September 16, 2026

The results above are the original V1 developer record, preserved without rewriting historical passes. The user's visual review identified important issues that functional/overflow checks alone did not catch.

| Finding | User's requested V2 resolution | V2 result |
|---|---|---|
| Wide layouts became tablet-like despite passing overflow checks | Keep a constrained canonical phone layout at all widths | Developer verified: maximum 460px at wide widths; same phone structure |
| Typography felt too thin/light | Nunito everywhere; stronger deliberate hierarchy and readable body text | Developer verified: local Nunito loaded, body 18px/600; headings 800; user readability acceptance pending |
| Incorrect temporary Mann logo; header had no Landing link | Use supplied unmodified logo and make branding tappable | Passed: original asset hash preserved; header returns to Landing and keeps language |
| Landing lost community personality | Add supplied landing photos, preserve cleaner V1 hierarchy | Developer visually reviewed: five supplied photos in organic/circular composition, V1 welcome/address/CTAs retained |
| Spanish segmented selection lacked requested color | Keep segments; selected ESP #FF5757, ENG Mann blue | Passed: computed ESP rgb(255,87,87), dark text; selected semantics retained |
| Calendar enlargement and generated-poster CTAs redundant | Preserve native date/schedule; remove redundant enlarge controls | Passed: no Enlarge/Ampliar controls in 110 route checks; native calendar/meals operate inline |
| Generic album imagery did not fulfill photo-gallery purpose | Match actual event photos, photo grids, accessible viewer/next/previous/swipe | Passed developer checks: 56 matching photos, viewer controls/keys/focus and horizontal pointer gesture; physical touch-device review pending |
| Partner section used placeholder text cards | Supplied logos in a clean arrangement; preserve information cards/message | Passed: all three supplied partner logos loaded, freeform arrangement; cards and closing message retained |
| Asset completeness | Casino folder and PCA logo absent; no unrelated substitutes | Verified: Casino empty-state route; PCA text retained. Gaps remain awaiting assets |

### V2 acceptance additions

Check actual loaded Nunito weights; same phone-width app at 320/375/440/768/1280px; ENG/ESP contrast; header logo-to-Landing preserving language; all five destinations and 12 program flows; native calendar and meals/date/count consistency; no redundant enlarge CTAs; every photo comes from its assigned folder; every supplied photo loads; photo viewer preserves aspect ratio, image index through translation, focus/keyboard and swipe; sponsor assets; no overflow.

### V2 verification record

**Developer review: September 17, 2026 — Codex, Windows, Codex in-app browser, local `http://127.0.0.1:4173/`.** These are new V2 results, not copied V1 passes. Demonstration date remains September 24, 2025. No deployment or README created.

| Rubric IDs | V2 result and evidence |
|---|---|
| N01–N05 | Passed: both landing CTAs, header-to-Landing retaining Spanish, primary tabs, five category links, all 12 program cards in Spanish → English → Spanish → Back; browser Back sampled. My Center remains active on its destinations. |
| N06 | Updated by user review: enlargement is intentionally removed. Passed native date selection September 22/24, corresponding shared schedules, language/context retention and full-width native select alternative. |
| N07 | Updated by review: inline meals and trip list replace redundant enlargements. Hot/cold and weekend closure exercised; trips include September 26 Boscov's. All 12 album links opened, with correct counts (11 photo grids and Casino empty state). |
| L01–L04 | Passed functional/reflow checks: current route/program, calendar day, meal type/day, album and focused photo retained on language switch. Photo 2 remained photo 2 when switched to English. Both languages in 110 route checks; translation acceptance remains a user review. |
| C01–C04 | Passed regression checks: fixed date; Home only date/announcements/programs/meals; Wednesday schedule from shared detail data. Home and inline meals retain Chicken Alfredo - 35 / Pasta Alfredo con pollo - 35 and Turkey Sandwich - 5 / Sándwich de Pavo - 5. Supplied program/Information copy retained, aside from approved album naming. Seven automated tests pass. |
| C05 | Supplied community images replace album illustrations. All 65 copied images/logos match recorded SHA-256 values; 56 album photos loaded in browser. Five landing photos and Mann logo loaded; three sponsor logos loaded. No invented identity claims. Program illustrations remain labeled demonstration content. Casino/PCA gaps are explicit. |
| R01–R02, N03 | Passed **110 checks**: 11 routes × EN/ES × 320/375/440/768/1280px. No horizontal overflow; primary navigation stays in viewport; body never exceeds 460px. Additional **10 photo-dialog checks** at those widths/languages passed: no horizontal overflow, dialog within viewport and above persistent nav. Background is inert while dialog is open. |
| R03 | Not tested at actual 200% browser zoom or OS enlarged text. Viewport reflow is not a substitute; remains for final accessibility QA. |
| A01–A03 | Core keyboard/DOM checks passed: skip-link Enter focuses main without changing route; route headings receive focus; viewer starts on Close, Tab/Shift+Tab wrap, arrow keys change images, Escape restores original grid trigger even after translation. Localized headings/labels and document language checked. Full keyboard and assistive-technology audit remains pending. |
| A04 | Nunito loaded locally; sampled computed font family is Nunito throughout body/headings/controls/nav. Body 18px/600, titles about 32px/800, section titles 23.4px/800; secondary copy uses deliberate 600/700 weights. Core contrast checks below. Calendar cells remain narrower than 48px at narrow widths; full-width 52px-high select provides an equivalent larger control. Not a blanket target-size/conformance pass. |
| A05 | Screen-reader and older-adult participant testing not performed. Reduced-motion rules remain; no automatic slideshow. |
| I01 | Sampled selection, disabled ends, focus and working controls passed. Viewer Previous disabled at first photo, Next at last. Both obvious buttons and arrow keys work. Horizontal pointer drag moved photo 6 → 5; real touch hardware not tested. Full interaction-state audit remains pending. |
| V01–V02 | Developer visual review of phone landing, narrow Spanish calendar, Spanish Home/Information, focused actual photo, and wide My Center. Mann colors and supplied logo proportions retained; Nunito hierarchy, pastel cards and community collage visible. User V2 visual acceptance remains pending. |
| T01, S01 | Syntax checks passed for app/data/assets/server. Seven tests passed, zero failed. Browser error/warning log empty during reviewed flows. Local preview serves assets/fonts; no excluded social/backend/payment features, README or deployment. |

### V2 evidence and limits

- Automated command: `node --test tests/content.test.mjs tests/assets.test.mjs` — **7 passed / 0 failed**. The two new asset tests check original-byte integrity, folder assignment, counts, and explicit missing assets.
- Contrast token calculations: dark ink / Spanish red **4.52:1**; white / Mann blue **8.45:1**; secondary text / white **7.02:1**; secondary text / pale yellow **6.30:1**; dark ink / Mann yellow **8.86:1**. These are selected token pairs, not an exhaustive rendered contrast audit.
- Photo grids: Heritage 6, Eagles 4, Gardening 5, Casino 0, Zoo 6, Linvilla 6, Pickleball 2, Cooking 4, Art 6, Mother's Day Tea 6, Community Resources 6, Ribbon Cutting 5. All 56 nonempty-gallery images returned a positive natural width in browser. The supplied Ribbon Cutting reference poster is retained as a gallery image; an event photo is used as its cover.
- Photo viewer uses object-fit contain; thumbnails use cover framing. Language, navigation and focus tests used the shared viewer; every photo loaded, but every photo's visual quality was not individually graded. Some supplied images are low-resolution reference material and remain so.
- Final manual reviews: physical phone/touch behavior, screen reader, actual zoom/enlarged text, comprehensive contrast/target audit, independent Spanish review and older-adult usability. These have not been claimed as passed.
- Browser test batches that exceeded the tool time limit were rerun in smaller batches; all reported outcomes above come from completed checks. No app defect was inferred from tooling timeouts.
- User V1 design feedback is recorded above and in `DECISION-LOG.md`; **user V2 acceptance has not yet occurred**.

## V3 user review and verification — September 17, 2026

The V1 and V2 records above remain unchanged historical records. The latest user review now accepts the specified V2 areas and requests focused refinements; it is not V3 acceptance or participant usability evidence. V3 decisions are D-016–D-026 in `DECISION-LOG.md`.

### V3 review issues and outcomes

| V2 review finding / instruction | V3 implementation | Developer result |
|---|---|---|
| Restore stronger central Mann identity while preserving readable landing text | Large original transparent PNG, no badge/opaque background, five surrounding supplied photos; duplicate small header hidden on Landing only | Visually reviewed at phone width; original logo proportions and transparency retained |
| Landing language toggle duplicates entry CTAs | Remove Landing segments; English/Español buttons enter app | Passed in both languages; main-app toggle present and header returns to Landing retaining language |
| Native calendar accepted, dropdown redundant | Remove dropdown only; retain date button style, legend and direct schedule | Passed mouse and Enter/Space date activation, selected/focus states and EN/ES context |
| Meal selector adds unnecessary interaction | Hot and Cold together, date/noon heading, body-weight meal names/counts; no selector/dropdown | Passed September 24/25 and closed September 27; counts and original suffix convention intact |
| Trips need weekdays | Localized weekday beside existing date badge | All 11 rendered weekday/day pairs verified in EN/ES for September 2025 |
| Repeated prototype notices clutter interface | Remove visible repeated notices, retain evidence documentation | No visible prototype/disclaimer strings in 110 route/language/width checks; internal fictional-content notes preserved |
| Album selection and focused viewer approved; intermediate grid too framed/labeled | Preserve selection/viewer structure; three-column photo grid, 4px gaps, no visible ordinal captions | Photo grid visually reviewed; localized accessible names retained, comfortable square image buttons |
| Photo viewer toggle redundant | Viewer inherits app language, retains Close/Previous/Next/count and existing gesture | Passed English/Spanish open/close persistence, navigation, keyboard/focus and horizontal pointer gesture |
| Inspect new Casino/PCA assets first | Two Casino photos and `PCA.jpg.webp` found before edits, imported unchanged | Both Casino photos and PCA logo loaded; missing states superseded by supplied assets |
| Approved screens must not be redesigned | Only scoped CSS appended; Home/My Center/album-selection renderer guards compared against pre-edit source | Guards passed; program list changed only to remove notice; approved main-app type/layout/nav retained |

### V3 verification record

Reviewer: Codex, Windows local Node preview, Codex in-app browser at `http://127.0.0.1:4173/`. Review date September 17, 2026; app demonstration date remains September 24, 2025.

- **Existing automated suite:** `node --test tests/content.test.mjs tests/assets.test.mjs` — **7 passed, 0 failed**. Asset expectations updated for 68 original files: 58 album photos, five landing photos, five logos. Hash checks verify unchanged bytes; content checks still cover all 12 program records, supplied schedule authority, fixed date, meal quantities and closures. Syntax checks for app, data, assets and server pass.
- **Entry/navigation/language (N01–N05, L01–L03):** both Landing CTAs exercised; main-app header returned to Landing with language retained and no redundant segments. Calendar/meal selected date retained across EN/ES switch. All 12 program cards opened in Spanish, switched to English and back, and returned to the list; active My Center tab stayed correct. Main-app language behavior remains unchanged.
- **Calendar (N06):** direct date selection September 22/24 updated the schedule. Monday Pickleball remained 11:00 AM; Wednesday matched shared data. Enter and Space activated date buttons; selected date retained focus with visible outline. No select element remained. Existing Today/Selected/Activities state cues and date CSS were not changed.
- **Meals (N07, C01–C03):** September 24 simultaneously rendered Chicken Alfredo - 35 and Turkey Sandwich - 5, and Spanish equivalents. September 25 updated both meals and retained the date through translation. Closed September 27 displayed no misleading service-time/meal block. Date heading weight 800, meal paragraph weight 600; no meal selector or date dropdown. Phone screenshot reviewed: noon is part of the date heading, Hot/Cold are labels and meal content remains body text.
- **Trips:** rendered weekday mapping: 1 Monday, 4 Thursday, 5 Friday, 9 Tuesday, 11 Thursday, 17 Wednesday, 18 Thursday, 19 Friday, 22 Monday, 25 Thursday, 26 Friday; corresponding Spanish labels verified. Existing event copy/date badges remain.
- **Photo galleries (N07, C05):** all 12 album routes rendered matching supplied photographs; all **58 photos** loaded with positive natural widths. Casino now has two photos. Grid has no visible numbered captions but retains localized photo-button accessible names. At 375px sampled buttons measured about 110px square. Album-selection structure, titles and counts preserved, except Casino's count now reflects supplied assets.
- **Focused viewer (A01–A03, I01):** Spanish Casino and English Art viewer tested. Previous/Next, ArrowLeft/ArrowRight, count, disabled boundary controls, Close and Escape work. No viewer language toggle; selected app language persists after close. Initial focus is Close. Tab from last enabled control wraps to Close; Shift+Tab from Close wraps to last enabled control. Escape restores originating grid button. Horizontal pointer drag advanced Art photo 2 → 3 using existing code. This is not a physical touch-device test.
- **Responsive (N03, L04, R01–R02):** **110 checks** = 11 routes × two languages × widths 320, 375, 440, 768, 1280px. Routes: Landing, Home, My Center, Programs, computer detail, Calendar, Meals, Trips, album selection, Art grid, Information. No horizontal overflow; bottom navigation stayed in viewport; app width never exceeded 460px. No duplicate selects or repeated prototype notices in these rendered states.
- **Viewer geometry:** **10 additional checks** across the five widths and both inherited languages: no horizontal overflow, dialog within viewport, above persistent bottom navigation and no internal language toggle. Background remains inert while the modal is open.
- **Information assets (V01):** PCA logo loaded from supplied `Logos/PCA.jpg.webp`; unchanged existing partner layout/classes and other Information cards/message. Source filenames/hashes recorded in manifest; no unrelated replacement imagery.
- **Keyboard/runtime (A01, T01):** skip-link Enter focused main without changing Meals route. Browser error/warning log was empty during tested flows. Local server restarted with WebP support for PCA.

### V3 limits and outstanding review

- User V3 visual acceptance is pending. No real-device, screen-reader, older-adult participant, actual 200% zoom/OS text-size or independent Spanish-language review was performed; those remain final QA work.
- Existing calendar target geometry was deliberately preserved per user lock. Cells are tall but remain narrower than 48px on narrow phones; V2's alternative dropdown was removed at the user's explicit request. Do not claim universal 48×48px targets or full accessibility conformance.
- Prototype/fictional data status did not change when UI notices were removed. Six new-program detail sets, program illustrations and demonstration calendar/menu entries remain documented as such, not verified real/live center information.
- No deployment, README or new out-of-scope functionality was created.

## Final approved V3 — Landing asset replacement verification

**September 17, 2026 — Codex developer check, local Windows preview / Codex in-app browser.** The user has approved V3 as the final functional version. This record appends verification of the narrowly scoped Landing replacement; earlier V1/V2/V3 results remain historical and untouched.

| Check | Result / evidence |
|---|---|
| Supplied asset / no modification | Passed: inspected the only source file, `Landing Background 1.png`; 880 × 1912, RGBA, 2,318,399 bytes. Copied unchanged; SHA-256 checked by asset suite. Alpha data is retained, not flattened. |
| Proportions / no cropping | Passed at 320, 375, 440, 768 and 1280px viewports: natural size 880 × 1912; rendered aspect-ratio difference below 0.000006 (subpixel rounding). Automatic image height, object-fit contain, no clip or mask, opacity 1. Full supplied composition is visible in page flow. |
| Transparent backdrop | Passed: image wrapper computed background `rgb(244, 247, 251)` (#F4F7FB); phone screenshot reviewed. No added opaque logo badge or photo backgrounds. |
| Separate Mann logo | Passed: unchanged asset, prominent separate overlay centered horizontally/vertically over the image at all five widths. Original proportions retained. |
| No extra photography | Passed: one `.landing-composition` image and zero `.community-photo` elements at all checked widths. Previous files remain only as unused historical assets/provenance; no added/generated/reconstructed photographs. |
| Real interface content retained | Passed: DOM retains bilingual Welcome, center name/address/phone, language prompt and both entry buttons as HTML; no segmented Landing toggle. None is baked into the image. |
| Entry / return behavior | Passed: English → English Home and Español → Spanish Home; main-app language toggle present. Header returns to Landing in the chosen language; both entry buttons remain available. |
| Layout | Passed: no horizontal overflow at all five widths. Existing phone-width constraints and bottom navigation remain unchanged; taller composition uses ordinary vertical scrolling. |
| Locked-area scope | Source guard passed: reversing only the Landing image-markup substitution reproduces the complete pre-edit `app.js`. CSS additions exclusively target `.landing-page`; other app assets/content/data/logic unchanged. Asset tests changed only their current-file count and Landing count expectations. |
| Regression smoke checks | Passed: all five My Center destinations, persistent nav, computer Program Details/Back route, Casino photo grid/viewer Next (2 / 2), Escape/trigger focus restoration, Information PCA image load. Browser warning/error log empty. This is focused smoke coverage, not a repeat of every previous V3 check. |
| Automated checks | Syntax passed. Existing suite **7 passed / 0 failed**, including content consistency and unchanged bytes for all 64 current image assets (58 album photos, five logos, one Landing composition). |

No real-device or screen-reader testing is claimed. No deployment or README. Final Landing visual sign-off remains with the user; approved V3 functionality was not redesigned.

## V3 Landing background-layer correction — appended verification

The user rejected the preceding normal-flow PNG layout because it created an excessively tall image section before the content. Its earlier checks remain historical; they did not establish that the intended background concept was satisfied.

Developer verification in the local Codex browser after the correction:

- PNG is absolutely positioned across the Landing container behind the real HTML interface, with pointer events disabled. It no longer contributes its intrinsic image height to layout. The unchanged Mann logo is a separate foreground element; all Landing copy and language controls remain real HTML.
- Visual inspection at **440 × 956** (source design ratio) and **375 × 812** confirms community photography behind Welcome, logo, contact information and buttons. `object-fit: contain` preserves natural 880 × 1912 proportions without distortion/cropping. Transparent pixels show computed `rgb(244,247,251)` (#F4F7FB). No individual photo elements are present.
- Geometry passed at widths **320, 375, 440, 768 and 1280px**: no horizontal overflow, background overlaps the heading area, heading starts 34px from the page top rather than after the image. Page height is 812px at the two 812px-high phone viewports, and 956px at the other three tested 956px-high viewports. There is no separate 956px-tall image section preceding content.
- Both language buttons activated with Enter: English → English Home, Español → Spanish Home. Header return restored Landing while retaining language. No segmented toggle on Landing; bottom navigation retained. Browser warning/error log empty.
- Syntax check passed; existing automated tests **7 passed / 0 failed**. Artwork/logo bytes remain unchanged. Scope review: only `welcome()` and appended `.landing-page` styles changed; all non-Landing screen functions, shared typography, app header, bottom navigation, assets, data and handlers were untouched.
- Real-device/screen-reader testing is not claimed. No deployment or README.

## Final QA and assignment readiness

### Completed checks and final acceptance

This consolidation distinguishes recorded Codex checks from the project owner's final manual review. It does not claim new physical-device, screen-reader or participant testing.

| Evidence / reviewer | Actual result | Scope and limits |
|---|---|---|
| Project owner — final manual review, reported in the documentation request | **Approved:** visual design, content, navigation, interactions and bilingual flows | Explicitly covers Landing/language selection; English/Spanish; Home; My Center and all five destinations; all 12 programs; Calendar; Meals; Monthly Trips; Photo Albums/viewer; Information; PCA logo; Casino album; persistent bottom navigation; header return to Landing; final Landing background. This is owner acceptance, not a claim of screen-reader or physical-device testing. |
| Codex — V3 browser verification already recorded above | **Passed:** 110 route/language/width checks and 10 viewer-bound checks; no horizontal overflow in that matrix | Widths 320/375/440/768/1280px; 11 routes in both languages. These checks predate the final Landing-only changes; unchanged app areas were subsequently locked. |
| Codex — final Landing background checks | **Passed:** background behind foreground content; EN/ES entry and header return; no overflow | Background-layer correction checked five widths. The subsequent one-property cover correction was checked at 320/375/440px: computed centered cover, both horizontal edges covered, proportional rendering, #F4F7FB backing, no overflow. Earlier contain/no-cropping descriptions are historical; final cover may crop outer edges. |
| Codex — interaction checks recorded above | **Passed within tested scope:** calendar date selection, simultaneous meals/counts, 12 bilingual program flows, trip weekdays, gallery navigation, Close/Escape, focus return and keyboard loop | Native keyboard checks and a horizontal pointer drag were performed. A pointer drag is not a physical touch-device test. |
| Codex — final documentation-stage regression commands | **7 automated tests passed, 0 failed; syntax checks passed** | Re-ran `node --test tests/content.test.mjs tests/assets.test.mjs` and syntax checks for app/data/assets/server without editing them. Content tests cover authoritative schedules, fixed-day data, meal counts and closures; asset tests cover 64 current images (58 album photos, five logos, one Landing composition) and source hashes. |
| Codex — supplied screenshot inspection | **Four source screenshots packaged unchanged; two before/after comparisons below** | Static images support visible layout/content differences only, not working interactions, equivalent viewport conditions or measured usability gains. |

### Pending checks and release work

- Physical phone/device testing and screen-reader testing: **not performed / pending**.
- Actual 200% browser zoom or OS enlarged text, exhaustive contrast/target-size audit, independent Spanish-language review and older-adult participant usability research: **not recorded as completed**. Owner review does not replace these checks or establish WCAG conformance. Existing narrow calendar cells remain below the 48px width design aim; no UI changes were made in this documentation step.
- Deployment and GitHub repository creation/publication: **pending by instruction**. No live URL is claimed. No commit or push was made in this step.
- The required documentation/prototype/evidence package is present; remaining validation and release work is explicitly distinguished from assignment artifact completeness.

## Before-and-after screenshot evidence

Source folder inspected: `C:/Users/jenlu/OneDrive/Desktop/Mann Center App/App Version Screenshots/` (16 supplied PNG files). The four selected files below were copied unchanged, with original filenames, into this project's `App Version Screenshots/` folder so these relative links remain usable in an eventual GitHub repository. The comparisons use the actual images, not reconstructed mockups.

### Comparison 1 — preserve the useful cards, restore phone proportions

| Before | After |
|---|---|
| [My Center V1.png](App%20Version%20Screenshots/My%20Center%20V1.png) | [My Center V3 Final.png](App%20Version%20Screenshots/My%20Center%20V3%20Final.png) |
| ![Supplied V1 My Center screenshot with wide cards and horizontal icon-label navigation](App%20Version%20Screenshots/My%20Center%20V1.png) | ![Supplied final My Center screenshot with narrow phone proportions and stacked navigation labels](App%20Version%20Screenshots/My%20Center%20V3%20Final.png) |

- **Earlier version:** broad destination rows, wide header and horizontal icon/label navigation. The five pastel cards are already present.
- **Review finding:** the owner liked the simple card organization but found the expanded layout too tablet-like for a primarily phone app.
- **Change:** retain the five destinations and pastel cards; use the narrower phone presentation and stronger Nunito hierarchy, with a constrained shell at wide browser sizes.
- **Improvement:** preserves the accepted scanable organization while aligning the visual proportions with the intended phone experience. The screenshots show the different proportions; the 460px maximum width and wider-browser behavior are supported by the recorded responsive checks, **not proved by these differently sized screenshots alone**.

### Comparison 2 — restore Mann identity and community photography

| Before | After |
|---|---|
| [Landing V1.png](App%20Version%20Screenshots/Landing%20V1.png) | [Landing V3 final.png](App%20Version%20Screenshots/Landing%20V3%20final.png) |
| ![Supplied V1 Landing screenshot with decorative illustrated icons and an extra language toggle](App%20Version%20Screenshots/Landing%20V1.png) | ![Supplied final Landing screenshot with community-photo background, prominent Mann logo and language buttons](App%20Version%20Screenshots/Landing%20V3%20final.png) |

- **Earlier version:** isolated decorative icons around an approximate Mann mark, broad empty space, a segmented ENG/ESP toggle as well as language-entry buttons, and visible prototype notices.
- **Review finding:** hierarchy was clearer, but the owner's original local/community identity was weakened. Later Landing implementations also required correction because the supplied composition was first placed above the content and then contained with side margins.
- **Change:** the owner's supplied photo composition now forms the full Landing background with the actual Mann logo, welcome/contact information and language-entry buttons in front. Redundant Landing language segments and repeated notices were removed. Final sizing is centered cover.
- **Improvement:** restores recognizable community imagery and a prominent Mann identity while keeping language entry clear. The after image visibly shows foreground content over photographs instead of a separate photograph block. Functional language selection, HTML semantics and edge coverage across widths are supported by the separate browser/manual checks, **not inferred from the screenshot**.

The supplied album screenshots are named `Photo Albums V1.png` and `Photo Albums V2.png`; the V2 image still shows Casino as pending. It is not labeled or used here as evidence of the final Casino album or final intermediate gallery. No final calendar screenshot was supplied, so no invented calendar before/after image is cited.

## Final assignment artifact checklist

| Required item | Evidence | Status |
|---|---|---|
| Project brief | `PROJECT-BRIEF.md` | Present; final status appended |
| Design guidance | `DESIGN.md` | Present; final cover behavior documented |
| Working HTML/CSS/JavaScript | `dist/index.html`, `dist/styles.css`, `dist/app.js`, `dist/data.js`, `dist/assets.js`; local `server.mjs` | Present; approved prototype unchanged |
| Meaningful interaction | Direct calendar-date selection updates that day's schedule; language switching and photo viewer also work | Implemented and previously verified |
| At least four relevant states / responsive behavior | English Home; Spanish Home; selected calendar day with activities; closed-center day; selected meal day with both meals; album grid; focused photo with first/last boundary states | More than four implemented; prior browser/owner review and five-width checks recorded |
| AI judgment evidence | `DECISION-LOG.md` final summary: 2 accepted, 2 revised, 1 rejected, linked to original entries | Satisfied using genuine decisions |
| QA documentation | This file, retaining V1/V2/V3 history and final acceptance | Present |
| Actual before/after evidence | Four unchanged PNGs in `App Version Screenshots/`; two comparisons above | Present and portable with the project |
| Project README | `README.md` | Created; local setup verified against existing configuration; live/GitHub links remain placeholders |

No required artifact is missing. Remaining accessibility validation and deployment/repository links are pending as stated above, not silently marked complete.

Documentation-only integrity check: SHA-256 snapshots matched for all **82 protected prototype/configuration/test/script/asset-manifest files** before and after this work. All four packaged screenshots match their supplied originals byte-for-byte. All **15 local Markdown links** checked across the five project documents resolve. No prototype UI/functionality changes, Git commit, push or deployment occurred.


## Production deployment and physical-device QA

This appended record preserves the V1/V2/V3, final local QA and before/after evidence above. Earlier statements that publication, deployment or physical-device testing were pending describe their historical review stages and are superseded by this update.

- **GitHub publication:** [Mann Older Adult Center Prototype](https://github.com/jenluu92/Mann-Older-Adult-Center-Prototype).
- **Production deployment:** [Vercel live prototype](https://mann-older-adult-center-prototype.vercel.app/).
- **Reviewer / evidence:** project owner, reporting a completed manual check of the deployed prototype on a physical Samsung phone. The specific model, browser, test date and individual interaction coverage were not supplied; no additional coverage is inferred. This is a user-reported result, not a new Codex device test.
- **Result:** the production deployment loaded successfully. The owner manually checked the prototype on the phone, and the navigation and interactions tested worked as intended. No deployment-blocking mobile issue was identified during that manual check.
- **Remaining QA:** screen-reader testing remains pending. Actual 200% browser zoom / OS enlarged-text testing, exhaustive keyboard/interaction-state and contrast/target-size audits, independent Spanish-language review, and older-adult participant usability research are not recorded as completed. This device check does not establish full accessibility conformance or exhaustive device/browser coverage.

README links and publication/testing status have been updated. Only README.md and QA.md are changed in this documentation update; the approved prototype and screenshot evidence remain unchanged.
