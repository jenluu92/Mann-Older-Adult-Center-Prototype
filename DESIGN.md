# Mann design system

**Final status:** the project owner has manually approved the completed design, content, interactions and bilingual flows. No further UI changes are authorized. Historical iteration guidance is retained below; the final approved-state note at the end supersedes earlier Landing contain/normal-flow rules.

## Direction and authority

The supplied Mann screens are the visual source of truth. Preserve the blue branded header, warm yellow actions, pale surfaces, large rounded containers, pastel My Center categories, recognizable icons, and generous readable layout. Refine rather than restructure. The user amendments and `PROJECT-BRIEF.md` govern product behavior.

Adapt the useful Miro principles: a small spacing scale, reusable components, clear type hierarchy, consistent radii, restrained elevation, explicit states, and responsive reflow. Do not inherit Miro branding, black primary CTAs, marketing heroes, pricing layouts, font mandates, tiny text, or restrictions against center photography.

## Tokens

| Role | Value / guidance |
|---|---|
| Primary | `#0F4D90` — header, links, primary controls, selected navigation |
| Secondary | `#FFC445` — important actions and warm accents; dark text |
| Text | `#172D43` |
| Secondary text | `#526478`; meaningful copy must retain sufficient contrast |
| Canvas / card | `#F4F7FB` / `#FFFFFF` |
| Border | `#CBD5E1`; stronger where necessary to distinguish controls |
| Calendar category | pale lavender |
| Programs category | pale lilac |
| Meals category | pale yellow |
| Trips category | pale green |
| Albums category | pale cyan |
| Focus | visible blue outline with white separation; distinguish on blue surfaces |

Support colors are subordinate to Mann blue/yellow. Do not rely on color alone for language, navigation selection, or status. Validate actual foreground/background pairs in QA.

## Typography and spacing

- V2 uses locally bundled **Nunito** throughout, including greetings, headings, body, controls, navigation and metadata. Body weight 600, controls/secondary emphasis 700, headings/key emphasis 800; avoid light weights and indiscriminate bolding. This supersedes V1's system sans/serif interpretation following the user's review.
- Body target 18px with about 1.55 line height; controls at least 17px, supporting metadata at least 15px. Main titles roughly 28–36px; section titles 22–26px. Avoid shrinking text to fit Spanish.
- Limit prose to readable line lengths. Use bold sparingly for key facts. Preserve content hierarchy, not exact screenshot line breaks.
- Base spacing unit: 4px. Common gaps: 8, 12, 16, 24, 32, 48px. Mobile side padding 16–24px.
- Card radii 16–24px; large header corners about 28px; pill actions where consistent with references. Use light borders and subtle shadows, not heavy decoration.

## Shared components

- **Header:** supplied Mann logo, natural proportions, on blue with a white logo surface; entire identity links to Landing. Language control keeps V1's segmented form: selected ENG blue/white; selected ESP `#FF5757` with dark `#172D43` text for contrast. Do not reproduce screenshot device status bars or camera cutouts.
- **Bottom navigation:** fixed and visible across all routes, including detail pages and landing. Three icon-and-text destinations; active state uses multiple cues and `aria-current`. Deeper My Center destinations keep My Center active. Reserve bottom space so content is never obscured.
- **Landing:** keep V1's readable welcome, address, phone, explicit language CTAs and hierarchy. Restore community personality with supplied Landing Page Photos in decorative organic/circular frames, separate from text. Do not invent photographic claims.
- **Home:** prominent fixed date followed by announcements, today's program schedule, and meals. No trips shortcut. Preserve meal suffixes exactly.
- **Category rows:** broad pastel cards with recognizable icon, clear name, and directional affordance. Keep all five categories in established order.
- **Program grid:** two columns where text/touch targets fit; one column on very narrow layouts. All 12 cards work. Use illustrative program artwork rather than misleading documentary photos.
- **Details:** visible Back action, title, inline poster, schedule, optional instructor, description, location, contact. All supplied paragraphs remain readable; remove redundant enlargement.
- **Calendar:** retain V1's native selectable dates and schedule from shared program data; September 2025. Clearly distinguish today, selected day and event dots. No Enlarge CTA. Provide a full-width native date selector as an alternative to compact seven-column cells.
- **Meals/trips:** native inline calendars/list content; hot/cold selection retains blue/yellow relationships and original availability suffixes. No redundant Enlarge controls or invented trip poster to justify them.
- **Albums:** supplied event photos as covers, then photo grid, then focused viewer. Preserve image proportions in the viewer; obvious previous/next/close, arrow keys and horizontal swipe; bounded navigation with disabled end controls. No social tools. Never mix unrelated album photos. Missing Casino photos get an honest empty state.
- **Information:** preserve V1 cards, supplied details and closing message. Arrange actual Parks & Recreation, Philabundance and Wellcare logos freely in the sponsor section, preserving proportions. Retain PCA as text because its logo was not supplied. Telephone/email links add no new workflows.

## Interaction and accessibility

- Aim for at least 48×48px interactive targets, with spacing between controls. Do not blindly inherit Miro's 36px icon buttons.
- Semantic headings, landmarks, lists, buttons, and links. Descriptive accessible names in the selected language; decorative icons hidden from assistive technology.
- Visible keyboard focus; logical tab order; skip-to-content link. Navigation moves focus to a meaningful heading. Back returns to the parent; browser history remains usable.
- The focused photo viewer uses an accessible dialog: named content, initial focus, trapped focus, Escape/Close, restored trigger focus. Keep primary navigation visually present behind the dialog while background interaction is inert.
- Provide default, hover, focus-visible, pressed, selected, and disabled states only where applicable. Avoid controls that look active but do nothing.
- Normal text contrast target 4.5:1, large text 3:1, meaningful control boundaries/indicators 3:1. Verify rather than claim conformance without review.
- Support browser zoom/text resizing; use reflow and wrapping. Respect reduced motion. No automatic carousels or flashing content.
- Illustrations require meaningful alt text when content-bearing; structured text conveys poster/calendar facts independently of artwork.

## Bilingual and responsive behavior

- One shared layout and data model with paired English/Spanish strings; `lang` updates with selection.
- Keep screen, selected item, and open-view context when switching languages. Preserve proper names as supplied. Generic UI copy may be translated under user authorization.
- Allow longer Spanish labels to wrap and increase card height. Avoid ellipses for essential labels and program titles.
- Canonical phone layout: one centered app surface, maximum 460px, including header and bottom navigation. Wider browsers add surrounding space, not extra app columns or tablet proportions. Allow narrow screens and long Spanish text to reflow; do not hide secondary category descriptions to make them fit.
- Fixed bottom navigation respects safe-area insets. Dialog and calendar content reflow within viewport bounds.

## Review rule

Substantial changes to information architecture, scope, supplied meaning, or primary interaction require user judgment and a decision-log entry. Minor tokens, spacing, translations, fictional prototype assets, and implementation mechanics are already delegated. Do not manufacture approval requests for them.

## V2 asset provenance

`ASSET-MANIFEST.json` maps every supplied photo/logo to its original folder and SHA-256. Original image bytes remain unchanged; CSS frames thumbnails and contains full viewer images. Nunito variable font is bundled from the official Google Fonts Nunito repository, with its SIL Open Font License alongside it in `dist/assets/fonts/OFL.txt`. No runtime font CDN is required. Historical V1 decisions and results remain in `DECISION-LOG.md` and `QA.md`.

## V3 overrides — focused review amendments

This section supersedes conflicting V2 component guidance above; approved V2 typography, phone sizing, Home/My Center/Information cards, program structure and primary navigation remain unchanged.

- Landing central mark: supplied transparent logo, enlarged with natural proportions and no white badge, border or opaque container. Supplied community photos frame it; text is separate. Hide duplicate small app branding only on Landing. Retain bilingual entry CTAs; omit Landing's segmented control.
- Main app retains ENG/ESP segments. Focused viewer inherits language; omit its language segments while retaining its existing image, count and Close/Previous/Next structure and swipe.
- Calendar: retain V2 button sizes, colors, legend and direct selected-day schedule. Remove the native select alternative at the user's explicit request; do not shrink or restyle date buttons.
- Meals: same calendar, then selected-date heading with `· 12:00 PM` when open, then Hot and Cold category labels and normal body-weight names/counts. No meal-type pills or redundant service-time row.
- Trips: localized weekday beside the existing date badge, event title below weekday; preserve list structure and spacing.
- Intermediate album gallery only: three image columns with minimal 4px gaps and 3px corners, no visible Photo 1/2 captions; full image is a button with a localized accessible name. Preserve album selection and focused-image containment.
- Use newly supplied PCA logo in the existing sponsor arrangement and two Casino photos in the existing album. All supplied asset bytes remain unchanged.
- Repeated user-facing prototype notices are removed as requested; their factual/evidence limitations remain in project and asset documentation.

### Final approved V3 Landing-only override

Use the single supplied 880 × 1912 transparent `Landing Background 1.png` as the entire photographic composition, unchanged and proportionally scaled with automatic height over #F4F7FB. This supersedes the earlier five-photo arrangement rules. No photo reconstruction, additions, cropping, masking, stretching or opacity adjustment. The unchanged Mann logo remains a separate central overlay; all existing HTML copy, controls and behaviors remain. All non-Landing V3 styling/functionality is locked.

**Background-layer correction (supersedes the normal-flow/automatic-height interpretation above):** the PNG fills the Landing container as an absolute decorative layer using proportional contain sizing over #F4F7FB. It must not occupy a separate block before the content. Welcome, separate logo, center information and language controls are foreground HTML over the same screen area, following the original 440 × 956 concept. All non-Landing rules remain locked.

### Final approved state — centered cover

The owner's last background-only correction changes the supplied decorative PNG to **centered cover** sizing, preserving its aspect ratio and allowing limited outer-edge cropping to reach both horizontal edges. #F4F7FB remains beneath transparency. The separate Mann logo and real HTML foreground content, typography, language controls and all other app behavior are unchanged. This is the current specification; prior contain/no-cropping and normal-flow statements document superseded iterations. Final owner acceptance is recorded in QA; it is not a claim of completed physical-device or screen-reader testing.
