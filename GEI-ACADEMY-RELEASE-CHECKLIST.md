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
- [x] Level 6 unlocks only after Level 5 is complete.
- [x] Roadmap Level 4 changes from LOCKED → READY → DONE.
- [x] Level 4 has a direct Continue to Level 5 link after completion.
- [x] Academy home Next Step changes automatically to the next unlocked core day.
- [x] Level 5 is an active release milestone and has a real target.
- [x] Level 5 completion provides a direct Continue to Level 6 link.
- [x] Level 6 is an active release milestone and has a real target.
- [x] No fake placeholder navigation buttons are included for Level 4.
- [x] Level 6 has a real completion target and no Level 7 navigation.

## Gameplay
- [x] Level 4 contains six short missions.
- [x] Level 5 contains six short missions.
- [x] Each completed mission awards +25 XP.
- [x] Level 4 awards 150 XP total.
- [x] Level 5 awards 150 XP total.
- [x] Level 4 starts from the Level 3 total of 450 XP and can reach 600 XP.
- [x] Level 5 starts from 600 XP and can reach 750 XP.
- [x] Level 6 starts from 750 XP and can reach 900 XP.
- [x] Gate-operation mission requires both OPEN and CLOSE actions.
- [x] Level 4 completion remains visibly complete after refresh.
- [x] Level 5 completion remains visibly complete after refresh.
- [x] Mill power lab remains at 75% after refresh.
- [x] Refreshing Level 4 after Level 3 completion does not send the learner backward.
- [x] Level 3 completion remains visibly complete after refresh.
- [x] Level 5 contains a real water-powered wheel interaction.
- [x] Level 6 contains a real source → reservoir → gate → mill system interaction.
- [x] Level 6 uses compact one-mission-at-a-time presentation to reduce scrolling.
- [x] Level 6 has a sound effect on each NEXT → action.
- [x] Level 6 has success-specific mascot/mission feedback and a sensational completion celebration.
- [x] GEI mascot is present on Levels 1–6.
- [x] Level 6 contains a complete-system interaction.

## Feedback / engagement
- [x] Correct answers receive visual feedback.
- [x] Wrong answers receive visual feedback.
- [x] +25 XP reward animation is present.
- [x] Correct / wrong / gate / XP / level-complete sounds have a WebAudio fallback.
- [x] Level completion launches celebration feedback.
- [x] Level 6 completion launches full-screen visual celebration, confetti, fanfare, and mastery acknowledgement.
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
- [x] Package contains the academy home plus Levels 1–6.
- [x] All six level pages contain the GEI living mascot.

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
12. Return home; confirm The Mill is marked DONE and Day 6 changes to READY; open Level 6.
13. Complete all six Level 6 missions; confirm XP reaches 900 and the sensational completion acknowledgement appears.
14. Return home; confirm Day 6 is marked DONE and Level 6 can be reviewed.
15. Confirm the Level 5 completion screen exposes the Level 6 button only after Level 5 is actually complete.
16. Toggle light/dark mode and change skins; refresh and confirm both choices persist.
17. Confirm no Level 7 link exists.
18. Confirm PayPal checkout/backend remains untouched.
19. External PayPal release-version consistency check: verify the live PayPal health/status endpoint and service endpoint report the same current Academy release version. This cannot be proven from these static files alone.

## Final Presentation Rollout — 2026-08-26

- [x] Compact Explorer ID after name save
- [x] Explorer ID Edit control reopens the editor
- [x] Compact profile displays avatar, name, level, and XP
- [x] Level 5 completion links directly to Level 6
- [x] Academy roadmap includes functional Level 6 unlock state
- [x] Level 6 remains protected until Level 5 is complete
- [x] Splash/GEI mascot present across Levels 1–6
- [x] Success/reaction animations present
- [x] Level 6 NEXT → flow and sound retained
- [x] Level 6 completion celebration retained
- [x] No Level 7 core link introduced
- [x] JavaScript syntax checks passed for Levels 1–6 and index
- [x] Internal HTML-link audit passed with no missing local targets

