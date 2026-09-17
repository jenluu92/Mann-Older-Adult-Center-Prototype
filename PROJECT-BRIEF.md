# Mann Older Adult Center — prototype brief

Status: **design-complete; final manual visual/functional review approved by the project owner.** UI and functionality are locked. Documentation and assignment preparation are complete; deployment and GitHub publication remain pending. Version-specific sections below preserve scope evolution; the final status amendment at the end governs current completion and README authorization.

## Authority and references

1. The user's subsequent decisions amend and supersede the original BRD where they differ.
2. `# Business Requirements Document.txt` defines the original scope and acceptance criteria.
3. The 32 supplied PNG screens define existing content, information architecture, and visual direction. Preserve supplied bilingual copy except approved normalization and factual corrections.
4. This brief and `DESIGN.md` consolidate the implementation guidance. `DESIGN-miro.md` is a supporting reference, not a Mann branding specification.

Original references: `C:/Users/jenlu/OneDrive/Desktop/Mann Center App/`.

## User, task, and prototype question

- **Primary user:** English- or Spanish-speaking older adults attending Mann, with varying comfort using mobile technology.
- **Primary task:** quickly understand today's center information, then find programs, calendars, meals, trips, photos, and center information.
- **Prototype question:** can an older adult find today's information and navigate to useful details through a simple mobile structure, with equal clarity in English and Spanish?

## Required experience and states

- Landing screen: supplied bilingual welcome, center identity/contact information, and English/Español CTAs. Each CTA opens Home in its chosen language. Visual variant is delegated to the implementer.
- Persistent primary navigation on every screen, including landing and deeper pages: Home/Inicio, My Center/Mi Centro, Information/Información. Clearly indicate the active primary destination when applicable.
- Home: fixed **Wednesday, September 24, 2025**, announcements, Today's Programs, Today's Meals. Remove the Monthly Trips shortcut. Meal suffixes such as `35` and `5` are availability counts; preserve the format without added units or explanatory labels.
- My Center: all five destinations work — Monthly Calendar, Our Programs, Meals, Monthly Trips, Photo Albums.
- Programs: all 12 supplied cards open bilingual details; each represents one program, with no skill levels. Details include supplied or authorized fictional description, schedule, instructor when appropriate, location/contact, inline poster, and return navigation. V2 removes redundant enlargement.
- Preserve the six supplied bilingual details: Art Class, Chair Yoga, Beginner Computer Classes, Enhance Fitness, Garden Therapy, Pickleball. Create coherent fictional details for Billiards, Line Dancing, Memory Game, Prayer Group, Senior Bingo, Walking Group.
- Monthly Calendar: retain V1's accepted native interactive September 2025 calendar and selected-day schedule; entries agree with program details. No enlargement CTA.
- Meals: working inline hot/cold meal calendar views with coherent prototype content; September 24 agrees with Home. No redundant enlargement CTA.
- Monthly Trips: preserve V1's readable bilingual list and reminders. No enlargement without a meaningful supplied poster; do not create one to justify a button.
- Photo Albums: all 12 supplied album entries open galleries; images can be enlarged and navigated, with return/close actions. Complete truncated titles reasonably in both languages.
- Information: supplied address, phone/email, hours, staff, membership, sponsors/partners, closing message. Informational membership copy does not create registration/payment functionality.
- English is the initial default. Switching languages retains route, selected program/album, and equivalent open content. Language persists across navigation. Translate generic missing interface/accessibility text and new fictional content. No automatic translation service.
- Phone-first, centered/constrained at larger widths rather than tablet-style expansion. Nunito throughout, deliberate readable weights, text resizing, long Spanish strings, usable touch targets, and no horizontal overflow.

### V2 review amendments

Preserve V1's five colored My Center cards, Information cards/closing message and landing readability. Restore landing community personality with supplied circular/organic photo treatment. Use supplied Mann logo without redesign; header branding returns to Landing. Keep ENG/ESP segmented control; selected ESP uses `#FF5757`, selected ENG Mann blue. Use supplied sponsor logos in a clean arrangement.

Replace generic album artwork with supplied event photography: album covers → photo grids → focused viewer, previous/next, touch swipe, close, keyboard/focus support. Language switching retains the same screen/item/photo. No social/edit/upload tools. All 12 original album destinations remain; Casino has no supplied photos and an honest empty state. PCA remains text because no PCA logo was supplied. Record these asset gaps rather than substitute unrelated images.

## Content authority and consistency

English Program Details resolve factual contradictions (including Pickleball Monday 11 AM–12 PM). Details outrank Home summaries. Normalize list/detail names where clearly the same program; Billiards remains one program. Revise Home schedules and announcements where needed to agree with details and the fixed demonstration date. Preserve center-specific conventions.

Fictional content and illustrative artwork are authorized for missing/unusable assets, calendars, program details, meals, trips, and albums. Do not imply invented people or imagery depict actual Mann members, facilities, or events. Identify illustrative demonstration content without presenting it as verified center information. Do not rewrite supplied copy merely for style.

V2 narrows that original permission for albums: actual supplied community/event photography is now the accepted direction, replacing generated album artwork. `ASSET-MANIFEST.json` records source mapping. No claims about depicted identities are added.

## Explicit exclusions

No authentication/accounts, backend, database, CMS/admin editor, registration, payments, notifications, real-time calendar integration, GPS/maps, automatic machine translation, additional languages, production infrastructure, or unrelated features. No README until prototype and deployment details are established.

## Evidence status

| Status | Evidence |
|---|---|
| Supplied | BRD, Miro-derived design guidance, 32 PNGs, Mann colors, navigation components, bilingual primary pages, 12 program cards, six bilingual detail pairs, album thumbnails, center information |
| User decided | Expanded functional scope, landing, persistent navigation, Home revision, fixed date, detail-first factual precedence, generated copy/translations/assets permitted, original meal-number format |
| Implementer discretion | Landing visual variant, accessibility mechanics, refined components, missing generic copy, fictional data/artwork, responsive layouts |
| Not established | Real/live validity of schedules or availability; production readiness; user research validating this implementation; deployment |
| Review pending | User evaluation and QA results. Record actual checks in `QA.md`, not assumed passes. |

V1 has now received the user's first design review; it is not older-adult participant research or final acceptance. Preserve V1 findings and append separate V2 results. Local V2 review precedes final QA/deployment; do not deploy or create README yet.

## V3 amendments — current requirements

The user's V2 review approves Home, My Center, Information cards, program navigation/pages, Nunito/readability, persistent navigation, phone-first layout, main-app language behavior, calendar style, album selection and focused-viewer structure. Preserve these except the following explicit amendments:

- Landing: prominent transparent Mann logo with community photos around it; clear V2 text; only English/Español entry CTAs, no segmented language toggle. Main-app branding still returns to Landing.
- Calendar/Meals: remove duplicate date dropdowns; keep direct date buttons and current state legend. Meals shows Hot and Cold simultaneously with unchanged quantities, noon beside selected date and body-weight meal names; closed dates remain closed.
- Trips: add accurate localized weekday beside existing event/date presentation.
- Photo grid: compact images without visible ordinal captions; retain accessible names and existing focused viewer, controls/count/swipe. Viewer inherits language and has no separate toggle.
- Remove repeated prototype disclaimers from visible UI, including program posters/details and menu. **Evidence status is unchanged:** six supplied program details are authoritative references; six additional program descriptions/schedules, generated program illustrations and portions of calendars/meals remain fictional demonstration content, not verified live center information. The fixed date remains September 24, 2025.
- Newly supplied Casino Trip photos (two) and PCA logo are now present and used. Earlier V2 missing-asset notes describe the historical state, not current availability. Source mapping/hashes remain in `ASSET-MANIFEST.json`.

V3 decisions and QA are appended separately. No deployment or README before local user review.

### Final approved V3 Landing asset amendment

V3 is now user-approved as the final functional version. Only the Landing decoration changes: the supplied transparent `Landing Background 1.png` replaces individual Landing photographs, preserving its full intrinsic proportions over #F4F7FB, with the unchanged Mann logo layered separately. All Landing copy/controls remain real HTML; all other V3 screens and functionality are locked. D-027 and the final V3 QA appendix record scope and verification. No deployment or README.

**Subsequent user correction, D-028:** the PNG is the full Landing background behind all foreground HTML, not a standalone image section above it. The corrected overlapping layout supersedes the earlier sequential implementation; all existing V3 functionality remains locked.

## Final documentation-stage status

The owner reports satisfaction with the completed visual design, content, navigation, interactions and bilingual flows, including all 12 programs and five My Center destinations. This supersedes earlier pending-owner-review notes. It does not establish participant research, physical-device or screen-reader validation.

Final Landing sizing is **centered cover**, not contain: the user permits small outer-edge cropping to remove side margins while preserving artwork proportions. Foreground HTML/layout and all other screens remain locked.

README creation is now explicitly authorized and complete, superseding earlier deferral instructions. The assignment package includes the working prototype, required documentation and supplied before/after screenshots. Live and repository links remain placeholders; deployment, repository publication, commit and push are deferred. See final QA for recorded checks and pending accessibility work.
