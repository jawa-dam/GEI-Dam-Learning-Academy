# GEI Academy Release Checklist — Milestone: Level 3 Reservoir

## Core persistence
- [x] Username is stored in `gei-academy-state-v1`.
- [x] XP is stored in the same state key.
- [x] Level completion records persist across refreshes.
- [x] Level 1 tasks persist.
- [x] Level 2 tasks persist.
- [x] Level 3 tasks persist.
- [x] Theme choice persists.
- [x] Skin choice persists.

## Navigation / unlock rules
- [x] Level 2 unlocks only after Level 1 is complete.
- [x] Level 3 unlocks only after Level 2 is complete.
- [x] Roadmap Level 3 changes from LOCKED → READY → DONE.
- [x] Level 2 has a direct Continue to Level 3 link after completion.
- [x] Level 3 has a return-to-home link.
- [x] No Level 4 link is shipped before Level 4 exists.
- [x] No fake placeholder navigation buttons are included for Level 3.

## Gameplay
- [x] Level 3 contains six short missions.
- [x] Each completed mission awards +25 XP.
- [x] Level 3 awards 150 XP total.
- [x] Level 3 starts from the Level 2 total of 300 XP and can reach 450 XP.
- [x] Reservoir fill mission is interactive.
- [x] Reservoir fill state remains visibly complete after refresh.
- [x] Level 2 dam-builder completion remains visibly complete after refresh.

## Feedback / engagement
- [x] Correct answers receive visual feedback.
- [x] Wrong answers receive visual feedback.
- [x] +25 XP reward animation is present.
- [x] Correct / wrong / XP / level-complete sounds have a WebAudio fallback.
- [x] Level completion launches celebration feedback.
- [x] Progress bars animate.

## Visual system
- [x] Professional readable default skin remains the default.
- [x] Optional skins remain available.
- [x] Light/dark mode remains separate from skin selection.
- [x] Theme and skin are persisted across pages.

## PayPal safety
- [x] Existing PayPal checkout/backend is not modified by this milestone.
- [x] No PayPal credentials are placed in these static learning files.
- [x] PayPal remains a separate integration point.

## Validation performed before packaging
- [x] JavaScript syntax checked with Node.js for every HTML page script.
- [x] Local relative links checked against files in the release package.
- [x] No missing Level 4 target is referenced.
- [x] Package contains the academy home plus Levels 1–3.

## Manual browser smoke test before publishing
1. Open `index.html`.
2. Save a username.
3. Confirm the username remains after refresh.
4. Enter Level 1 and complete it.
5. Return home; confirm Level 2 says READY.
6. Complete Level 2; refresh Level 2; confirm completion remains.
7. Return home; confirm Level 3 says READY and is clickable immediately after refresh.
8. Enter Level 3 and complete all six missions.
9. Refresh Level 3; confirm Level 3 remains complete and XP remains at 450.
10. Toggle light/dark mode and change skins; refresh and confirm both choices persist.
11. Confirm PayPal checkout/backend remains untouched.
