# GEI Dam Learning Academy — Level 4 Release

## Milestone
**Day 4 · Operations** is now part of the six-day Genesis foundation.

### Core roadmap
1. Genesis / Light
2. Dam / Firmament
3. Reservoir
4. Operations
5. The Mill — not shipped yet
6. The System — not shipped yet

Advanced missions 07–38 remain outside this foundation build.

## Level 4 learning goals
Students learn:
- what a gate does
- how opening a gate permits movement
- why controlled release matters
- a simple operation sequence
- how source → reservoir → gate → moving water connects the system

The lesson is designed to stay approachable for a fifth-grade learner while preserving the GEI engineering-learning framework.

## Files
- `index.html` — Academy home, identity, dashboard, roadmap, unlock logic
- `level1.html` — Day 1 Genesis / Light
- `level2.html` — Day 2 Dam / Firmament
- `level3.html` — Day 3 Reservoir
- `level4.html` — Day 4 Operations
- `GEI-ACADEMY-RELEASE-CHECKLIST.md` — release verification checklist

## Persistence
The academy uses the existing localStorage key:
`gei-academy-state-v1`

Level 4 adds `level4Tasks` without changing the existing PayPal system.

## PayPal safety
No PayPal credentials, checkout code, or backend configuration is included in or modified by this learning milestone. Keep the existing PayPal integration separate.

## Deployment
For a static GitHub/Hostinger deployment, upload the extracted files so `index.html` and the level files are in the same directory. Do not upload a ZIP as the site's root unless the host specifically extracts it for you.
