# GEI Academy Release Checklist — Milestone: Level 4 Operations

## Core persistence
- [x] Username is stored in `gei-academy-state-v1`.
- [x] XP is stored in the same state key.
- [x] Level completion records persist across refreshes.
- [x] Level 1 tasks persist.
- [x] Level 2 tasks persist.
- [x] Level 3 tasks persist.
- [x] Level 4 tasks persist.
- [x] Theme choice persists.
- [x] Skin choice persists.

## Navigation / unlock rules
- [x] Level 2 unlocks only after Level 1 is complete.
- [x] Level 3 unlocks only after Level 2 is complete.
- [x] Level 4 unlocks only after Level 3 is complete.
- [x] Roadmap Level 4 changes from LOCKED → READY → DONE.
- [x] Level 3 has a direct Continue to Level 4 link after completion.
- [x] Academy home Next Step changes automatically to the next unlocked core day.
- [x] No Level 5 link is shipped before Level 5 exists.
- [x] No fake placeholder navigation buttons are included for Level 4.

## Gameplay
- [x] Level 4 contains six short missions.
- [x] Each completed mission awards +25 XP.
- [x] Level 4 awards 150 XP total.
- [x] Level 4 starts from the Level 3 total of 450 XP and can reach 600 XP.
- [x] Gate-operation mission requires both OPEN and CLOSE actions.
- [x] Level 4 completion remains visibly complete after refresh.
- [x] Level 3 completion remains visibly complete after refresh.

## Feedback / engagement
- [x] Correct answers receive visual feedback.
- [x] Wrong answers receive visual feedback.
- [x] +25 XP reward animation is present.
- [x] Correct / wrong / gate / XP / level-complete sounds have a WebAudio fallback.
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
- [x] No missing Level 5 target is referenced by an active navigation control.
- [x] Package contains the academy home plus Levels 1–4.

## Manual browser smoke test before publishing
1. Open `index.html`.
2. Save a username and refresh; confirm the name remains.
3. Confirm the Next Step changes from Level 1 to Level 2 after Day 1 completion.
4. Complete Level 2; refresh Level 2; confirm completion remains and Level 3 is immediately available.
5. Complete Level 3; refresh Level 3; confirm completion remains and Continue to Level 4 works.
6. Open Level 4 directly after Level 3 completion; confirm it does not send the player backward.
7. Complete the gate OPEN → CLOSE mission; refresh Level 4; confirm the completed mission remains complete.
8. Complete all six Level 4 missions; confirm XP reaches 600 and Level 4 becomes DONE.
9. Return home; confirm Operations is marked DONE and Day 5 is not presented as a fake active link.
10. Toggle light/dark mode and change skins; refresh and confirm both choices persist.
11. Confirm PayPal checkout/backend remains untouched.
