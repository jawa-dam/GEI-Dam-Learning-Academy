# GEI Dam Learning Academy — v13 Release Candidate

## Purpose
This is the next-generation Academy base. It keeps Academy progression separate from the PayPal checkout system.

## Included
- `index.html` — Student Home / Academy base
- `level1.html` … `level6.html` — simple integration shells for testing navigation
- `PAYPAL-INTEGRATION-BOUNDARY.md` — instructions for keeping the existing checkout untouched
- `RELEASE-CHECKLIST.md` — required release gate

## Important
The Academy base does not contain PayPal client secrets, client secrets, webhook secrets, or backend credentials.

Replace the six level shells with the existing working Level 1–6 pages only after validating their filenames and links.

## Stable navigation contract
All level files use these names:
- level1.html
- level2.html
- level3.html
- level4.html
- level5.html
- level6.html

The base uses relative links so GitHub Pages/static hosting and Hostinger iframe deployments do not depend on server-side `/academy/level/N` routing.

## State
This RC uses a dedicated localStorage key:
`gei-academy-v13-state`

The state contains username, XP, completed core days, theme, and skin.

## PayPal
Do not replace or copy PayPal secrets into this project. Keep the existing verified PayPal backend and checkout page as a separate system.
