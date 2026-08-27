# GEI Academy Release Checklist — Milestone: Six-Day Foundation

**Required release flow:** build → connect progression → persistence → effects/sounds → release checklist → syntax/link validation → package

## Core persistence
- [x] Username is stored in `gei-academy-state-v1`.
- [x] XP is stored in the same state key.
- [x] Level completion records persist across refreshes.
- [x] Level 1 tasks persist.
- [x] Level 2 tasks persist.
- [x] Level 3 tasks persist.
- [x] Level 4 tasks persist.
- [x] Level 5 tasks persist.
- [x] Level 6 tasks persist.
- [x] Mill power lab state persists.
- [x] Theme choice persists.
- [x] Skin choice persists.

## Navigation / unlock rules
- [x] Level 2 unlocks only after Level 1 is complete.
- [x] Level 3 unlocks only after Level 2 is complete.
- [x] Level 4 unlocks only after Level 3 is complete.
- [x] Level 5 unlocks only after Level 4 is complete.
- [x] Level 6 unlocks only after Level 5 is complete.
- [x] Roadmap Level 4 changes from LOCKED → READY → DONE.
- [x] Level 4 has a direct Continue to Level 5 link after completion.
- [x] Academy home Next Step changes automatically to the next unlocked core day.
- [x] Level 5 is an active release milestone and has a real target.
- [x] Level 5 completion provides a direct Continue to Level 6 link.
- [x] Level 6 is an active release milestone and has a real target.
- [x] No fake placeholder navigation buttons are included for Level 4.

## Gameplay
- [x] Level 4 contains six short missions.
- [x] Level 5 contains six short missions.
- [x] Each completed mission awards +25 XP.
- [x] Level 4 awards 150 XP total.
- [x] Level 5 awards 150 XP total.
- [x] Level 4 starts from the Level 3 total of 450 XP and can reach 600 XP.
- [x] Level 5 starts from 600 XP and can reach 750 XP.
- [x] Gate-operation mission requires both OPEN and CLOSE actions.
- [x] Level 4 completion remains visibly complete after refresh.
- [x] Level 5 completion remains visibly complete after refresh.
- [x] Mill power lab remains at 75% after refresh.
- [x] Refreshing Level 4 after Level 3 completion does not send the learner backward.
- [x] Level 3 completion remains visibly complete after refresh.
- [x] Level 5 contains a real water-powered wheel interaction.
- [x] Level 6 contains a complete-system interaction.

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
- [x] No missing Level 6 target is referenced by an active navigation control.
- [x] Package contains the academy home plus Levels 1–5.

## Manual browser smoke test before publishing
1. Open `index.html`.
2. Save a username and refresh; confirm the name remains.
3. Confirm the Next Step changes from Level 1 to Level 2 after Day 1 completion.
4. Complete Level 2; refresh Level 2; confirm completion remains and Level 3 is immediately available.
5. Complete Level 3; refresh Level 3; confirm completion remains and Continue to Level 4 works.
6. Open Level 4 directly after Level 3 completion; confirm it does not send the player backward.
7. Complete the gate OPEN → CLOSE mission; refresh Level 4; confirm the completed mission remains complete.
8. Complete all six Level 4 missions; confirm XP reaches 600 and Level 4 becomes DONE.
9. Return home; confirm The Mill is READY and its link opens Level 5.
10. Complete the Mill Power Lab to 75%; refresh Level 5; confirm 75% remains.
11. Complete all six Level 5 missions; confirm XP reaches 750 and Level 5 becomes DONE.
12. Return home; confirm The Mill is marked DONE and Day 6 is not presented as a fake active link.
13. Toggle light/dark mode and change skins; refresh and confirm both choices persist.
14. Confirm PayPal checkout/backend remains untouched.
