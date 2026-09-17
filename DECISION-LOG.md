# Decision log

## Final case-study summary — human judgment in an AI-assisted workflow

**Status: design-complete and manually approved by the project owner.** The five examples below satisfy the assignment with **2 accepted, 2 revised and 1 rejected** AI design choices. They summarize genuine review decisions; they are not new decisions or extra counts. Original requirements such as bilingual scope, Mann branding and meal conventions remain user requirements, not AI suggestions.

| Judgment | What AI proposed or implemented | What the project owner decided | Why / final outcome | History |
|---|---|---|---|---|
| **Accepted 1** | An interactive calendar with a schedule for the selected date, instead of relying on an enlarged static calendar image | Keep the interactive calendar | Individual dates and activities are easier to explore; preserve the date buttons and daily schedule | D-006, D-017 |
| **Accepted 2** | Card-based organization of Center Information, hours, staff and membership | Keep the Information cards | Clear grouping made information easier to scan than the original long, vertically centered layout | D-014, D-016 |
| **Revised 1** | A responsive layout that expanded into a wide, tablet-like interface | Make the phone experience canonical; constrain/center it in wider browsers | The intended product is primarily a phone app, so extra width should not change its structure | D-010 |
| **Revised 2** | Landing treatments that improved hierarchy but replaced community photography or misinterpreted the supplied composition as a standalone image | Use the owner's supplied Figma-derived PNG as the full-screen background, with the unchanged Mann logo and functional HTML content in front; use centered cover sizing | Restore the original Mann/community identity and eliminate the tall sequential image block and side margins while retaining readable content | D-008, D-020, D-027–D-029 |
| **Rejected 1** | A separate “Select a date” dropdown below the interactive calendar | Remove the dropdown | It duplicated direct calendar date controls and added unnecessary interface complexity | D-018 |

The project owner supplied the requirements/reference designs and made these acceptance, revision and rejection judgments. AI produced implementation options and code, performed recorded checks and applied the owner's feedback. Earlier V1/V2/V3 entries below are preserved as history; final approval supersedes their then-pending status.

Use this file for meaningful suggestions and the user's actual responses. Do not infer acceptance from silence or manufacture rejected alternatives. Routine authorized implementation details are not approval decisions.

## Entry structure

| Field | Record |
|---|---|
| ID / date | Stable identifier and actual decision date when known |
| Topic | Concrete issue |
| Origin | User direction or AI suggestion; name the proposer |
| Suggestion / alternatives | What was actually proposed; none if direct user instruction |
| User response | Accepted, revised, rejected, or pending |
| User reasoning | Actual stated reasoning; write “not stated” when absent |
| Outcome / implications | Scope/content/design consequence |
| Evidence | Conversation or source reference |
| Follow-up | Only unresolved work |

## Confirmed decisions from this conversation

### D-001 — fixed demonstration date
- Origin: AI review recommended freezing the demonstration date rather than mixing historical schedules with the live date.
- User response: **Accepted explicitly** — use September 24, 2025; do not substitute the current date.
- User reasoning: not separately stated.
- Outcome: all date-specific demo content is anchored to that date.
- Evidence: user's “Prototype date” amendment following reference review.

### D-002 — scope and navigation
- Origin: **User direction**, after AI identified scope ambiguities; this is not an AI suggestion accepted by default.
- User response: include landing CTAs, all five My Center destinations, all 12 bilingual program details, functional albums, and persistent bottom navigation on all screens.
- User reasoning: not separately stated; user emphasized that bottom navigation must not disappear during deeper navigation.
- Outcome: expands the BRD's minimum one-program flow and optional destinations; landing visual choice delegated.
- Evidence: user's scope, Programs, and Photo Albums amendments.

### D-003 — Home and meal counts
- Origin: **User direction** responding to AI's question about unexplained meal numbers.
- User response: remove Home's Monthly Trips shortcut; preserve counts such as 35 and 5 without explanatory labels/units.
- User reasoning: Home should focus on today; meal counts are an established calendar/bulletin-board convention understood by members.
- Outcome: Trips remains in My Center; meal formatting stays intact.
- Evidence: user's “Home revision” amendment.

### D-004 — factual precedence and missing content
- Origin: **User direction** resolving contradictions/missing assets identified in AI review.
- User response: English Program Details outrank conflicting translations and Home; normalize equivalent names; authorize fictional missing content, imagery, bilingual translations, readable calendars, and accessible enlargement.
- User reasoning: keep the prototype internally consistent; generated imagery must not imply actual Mann people/facilities/events.
- Outcome: correct Pickleball duration and summary schedules; identify demonstration artwork; preserve supplied copy otherwise.
- Evidence: user's Programs, English and Spanish, Calendar, Content inconsistencies, and Visual assets amendments.

### D-005 — documentation before implementation
- Origin: **User direction**.
- User response: create project brief, adapted design system, decision log, and QA rubric before implementing; defer README until prototype/deployment details are established.
- User reasoning: not separately stated.
- Outcome: documentation created first; testing results start uncompleted and change only after actual review.
- Evidence: current implementation request.

## Pending suggestions requiring user judgment

None at document creation. Add actual suggestions here when they arise; do not populate artificial examples as decisions.

## V1 user design review → V2 — September 16, 2026

These entries preserve the user's actual review of V1. They do not recast implementation choices as explicit user approvals. D-001 through D-005 above remain historical records; the following amendments govern V2 where they differ.

| ID | Origin / V1 treatment | User judgment | User's stated reasoning | V2 outcome |
|---|---|---|---|---|
| D-006 | AI implemented native interactive calendar | **Accepted** | Date selection with the day's schedule underneath improves on the original poster design | Retain native calendar; remove redundant enlargement |
| D-007 | AI implemented pastel My Center destination cards | **Accepted** | User likes simple layout, colored cards, icons, and clear five-destination structure | Preserve this treatment, with mobile/type refinements |
| D-008 | AI simplified landing and replaced photography with illustrations | **Revised** | Readability and cleaner hierarchy improved, but too much local/community personality was lost | Combine V1 hierarchy with supplied landing photography in organic/circular shapes |
| D-009 | AI implemented blue selected states for both segmented language options | **Revised** | User prefers segmented control to original side-color treatment; specifically requests Spanish red | Keep ENG/ESP segments; ENG blue #0F4D90, ESP #FF5757 |
| D-010 | AI widened V1 into multicolumn tablet-like layouts | **Revised / rejected as responsive direction** | Intended product is a phone app, not a tablet/desktop application | Constrain the same phone presentation on wider browsers; no desktop grids |
| D-011 | AI supplied generic illustrative album covers/gallery items | **Rejected as final album direction** | Recognizable community/event photography is the purpose of albums | Replace with supplied matching event photos; actual photo grids/lightbox, simple navigation and swipe |
| D-012 | AI used system sans-serif and light secondary typography | **Revised** | Nunito was used in original designs; V1 text felt too thin for older adults | Nunito throughout, deliberate 600/700/800 hierarchy, readable size and contrast |
| D-013 | AI approximated the Mann mark and omitted header return interaction | **Revised** | Correct logos now supplied; header-to-Landing was intended | Use original Mann logo proportions; header brand links to Landing |
| D-014 | AI implemented Information cards and text-only partners | **Cards accepted; partners revised** | Cards are easier to scan than original centered layout; real logos need a clean arrangement | Preserve sections/closing message; use supplied logos without heavy separate cards |
| D-015 | AI retained generated poster/enlargement controls | **Rejected as redundant** | Readable native content no longer needs enlargement; do not create posters to justify buttons | Remove calendar, program and trip enlargement CTAs; meals native inline. Photo lightbox retained as explicitly requested |

### AI implementation choices within delegated scope (not separate user approvals)

- Local font file and supplied image files are served by the prototype, avoiding a font/network dependency during review.
- A centered maximum 460px app surface keeps phone proportions on large screens; ordinary text uses Nunito 600, supporting/control text 700, and strong headings 800.
- Spanish #FF5757 selection uses dark text for contrast, alongside selected-state semantics; English uses white on Mann blue.
- `Eagles` is mapped to the prior `ready` album and labeled Eagles in both languages. Typographic folder variants `Hispanic Hertiage Month` and `Mother's Day Tea Pty` are matched to their clear intended albums.
- No Casino folder or PCA logo was found. Casino remains an honest empty album; PCA remains named without a substituted logo. These asset gaps were reported to the user. No unrelated photos are borrowed.
- Photo viewer uses bounded previous/next controls, arrow keys, Escape/Close, focus restoration, and horizontal swipe. No social functionality is added.
- Final V2 type implementation uses body 600, secondary/control roles 700–800 and headings 800. A full-width native date selector complements compact calendar cells without replacing the accepted interactive calendar. These are AI accessibility implementation choices under the user's delegated scope, not additional user judgments.

Source for D-006 through D-015: user's numbered V1 review in this task. No new material design question requires approval before these authorized revisions.

## V2 user review → focused V3 — September 17, 2026

This section appends actual user judgments. Earlier V1/V2 entries remain historical and are not rewritten. The user's V3 directions supersede earlier choices only where explicitly stated.

| ID | Origin / prior implementation | User judgment and reasoning | V3 outcome |
|---|---|---|---|
| D-016 | V2 Home, My Center, Information cards, program pages/navigation, Nunito, phone layout, bottom nav and main-app language behavior | **Accepted / locked.** No unrelated redesign or new functionality | Preserve these areas, except explicitly requested shared changes, disclaimer removal and supplied PCA asset |
| D-017 | V2 native interactive calendar and daily schedule | **Accepted.** More usable than enlarging a static calendar image; retain visual style, targets and Today/Selected/Activities distinctions | Keep date buttons, legend and schedule behavior |
| D-018 | AI added full-width date dropdown in V2 | **Rejected as redundant.** Calendar already provides direct large touch targets; dropdown adds complexity | Remove dropdown from Calendar and Meals, preserve button keyboard/focus behavior |
| D-019 | V2 Hot/Cold selector and separate lunch-service row | **Revised.** Both meals can be shown together with fewer interactions | Selected date with noon time, Hot and Cold together, original availability suffixes; meal names remain body weight |
| D-020 | V2 landing community photography and small logo badge | **Photography accepted; composition revised.** Useful improvement over V1 but original central Mann identity weakened | Large supplied transparent logo, no badge/opaque container, surrounding supplied photography and clear text |
| D-021 | V2 language toggles on Landing and inside photo viewer | **Rejected as redundant in these contexts.** Landing already has language CTAs; viewer inherits app language | Remove both redundant toggles; retain main-app toggle and selected language |
| D-022 | V2 photo album selection and focused viewer | **Accepted / locked structure.** Actual photos, titles/counts and explicit viewer controls approved | Retain selection screen and viewer image, Close, Previous, Next and count; existing horizontal gesture retained |
| D-023 | V2 intermediate gallery cards and numbered captions | **Revised.** Familiar phone galleries prioritize a compact image grid | Compact three-column grid, reduced framing/gaps, no visible individual photo labels; accessible names retained |
| D-024 | V2 trip date badges without weekdays | **Revised.** Users need weekday and date at a glance | Add localized weekday beside existing September/day badge without restructuring the list |
| D-025 | Repeated demonstration labels in V1/V2 UI | **Rejected as clutter.** Keep evidence distinctions in documentation instead | Remove repeated visible prototype/poster/menu/detail notices; fictional content remains documented internally |
| D-026 | V2 missing Casino photographs and PCA logo | **Conditional user authorization:** use newly supplied matching assets if present, never unrelated substitutes | Before implementation found `Casino Trip` (two photos) and `Logos/PCA.jpg.webp`; included unchanged, with source hashes in manifest |

### V3 AI implementation choices within delegated scope

- Landing uses the existing transparent PNG at a larger scale, with five supplied landing photos around it. The duplicate small app header is hidden only on Landing so the central mark carries the identity without a second badge; main-app header/return behavior is unchanged. This is an implementation choice, not a separately approved user suggestion.
- Gallery uses three square image columns with 4px gaps; image buttons keep descriptive localized accessible names even though visible ordinal labels are removed. Viewer swipe code is reused rather than adding a new gesture system.
- Trip weekday comes from the existing fixed September 2025 date data and appears above the event name beside its date badge. No event dates are changed.
- Closed dates continue to show the existing closed-center state; noon is included alongside the date only when meal service is shown, avoiding a false service time on closed days.
- PCA replaces its text placeholder in the same sponsor section; Casino receives its two supplied photographs through the existing album route. Original bytes are preserved.

No material ambiguity required a new approval. V3 implementation choices are not evidence of user V3 acceptance; that review remains pending.

## Final approved V3 — Landing asset refinement, September 17, 2026

### D-027 — user-approved V3 and supplied Landing composition

- **Origin: user decision.** User approves V3 as the final functional version and locks all areas except this surgical Landing asset replacement. This supersedes the prior pending-V3-acceptance status without rewriting that historical record.
- **User direction/reasoning:** the newly supplied PNG already contains the complete community-photo arrangement. Use it exactly as supplied, with transparency and intrinsic proportions; do not reconstruct, crop, mask, distort or add individual photos. Preserve all real HTML Landing content and existing behavior. Keep the unchanged Mann logo as a separate prominent overlay and use #F4F7FB behind the PNG.
- **Outcome:** `Landing Page Photos/Landing Background 1.png` (880 × 1912 RGBA) copied byte-for-byte to `dist/assets/landing/composition.png`. One composition image replaces the previous five rendered photo elements; no individual Landing photographs are rendered. All prior Landing text/controls and app code outside that image-markup replacement remain unchanged.
- **AI implementation choice within this exact scope:** proportional full-width image with automatic height; existing separate logo centered over the composition. New CSS rules are scoped to Landing. The tall supplied image is fully shown in normal page flow rather than cropped to the former collage height.
- **Evidence:** source hash/provenance retained in `ASSET-MANIFEST.json`; superseded Landing image entries archived there. Verification is appended below V3 in `QA.md`. No additional functional version, deployment, README or unrelated improvements.

### D-028 — correction of D-027 background implementation

- **Origin: user correction.** The previous AI implementation incorrectly placed the supplied composition in normal flow above the interface. The user rejected that sequential/tall layout: the original intent is a full-screen background with functional HTML content layered over it.
- **Outcome:** the same unchanged PNG is now an absolute, noninteractive decorative layer covering the Landing container over #F4F7FB. Proportional `object-fit: contain` preserves the full artwork without stretching. Welcome, separate Mann logo, center information and language controls share that background area; no individual photographs are added.
- **Scoped implementation:** only `welcome()` markup and `.landing-page` CSS changed. Welcome appears above the separate logo, following the original Figma foreground hierarchy. All strings, buttons, handlers, typography, navigation and non-Landing components remain unchanged.
- This corrects the prior AI rendering choice; it is not a new functional version or unrelated redesign. Earlier D-027 and QA records are preserved as history, not current layout guidance.

### D-029 — final Landing width correction

- **Origin: user correction of AI implementation.** Contain sizing left side margins. The user requested centered cover behavior, permitting small outer-edge cropping while preserving aspect ratio and circular photographs.
- **Outcome:** only the Landing image's `object-fit` changed from `contain` to `cover`; centering, #F4F7FB backing, foreground content and functionality stayed unchanged. Developer checks at 320/375/440px found edge-to-edge image bounds and no horizontal overflow.
- This completes the Landing revision summarized above; it is not counted as an additional independent assignment example.

### D-030 — final manual acceptance and documentation stage

- **Origin: user decision, not an AI suggestion.** The project owner reports completing manual review and being satisfied with the final visual design, content, navigation, interactions and bilingual flows.
- **Outcome:** prototype UI/functionality locked. Finalize documentation and create README now; no deployment, Git commit or push. Physical-device and screen-reader testing are still pending, not implied by design acceptance.
