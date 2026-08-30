# GEI Dam Learning Academy

## Genesis Engineered Interpretations

Welcome to the **GEI Dam Learning Academy** — an interactive six-level learning game built around the Genesis Engineered Interpretations (GEI) learning framework.

The Academy combines short lessons, mission-based questions, XP progression, celebrations, badges, game audio, Level 6 progression, and the **A'Dam Vault** into one mobile-friendly experience.

---

## 🎮 Academy Structure

| Level | Theme | Core Experience |
|---|---|---|
| **Level 1** | Genesis / Light | Separate the waters |
| **Level 2** | Dam / Firmament | Build the wall / control the waters |
| **Level 3** | Reservoir | Establish the stored-water system |
| **Level 4** | Operations | Control the flow and gates |
| **Level 5** | The Mill | Convert moving water into useful work |
| **Level 6** | The System | Connect the complete GEI system |

The Academy is designed around **six playable levels**. Level 6 is the final foundation level and is also the gateway to the Vault.

---

## ⭐ XP & Progression

Players earn XP by completing missions and levels.

Each level includes mission progress, feedback, rewards, and completion celebration states.

The Academy stores progression locally using:

```text
gei-academy-state-v1
```

This allows static GitHub Pages or Hostinger deployments to preserve a player's game state in that browser.

> **Important:** localStorage is appropriate for gameplay progression, but it is not a secure authority for real-money transactions.

---

## 🏆 Level Completion

When a level is completed, the player receives a celebration experience and XP reward.

The intended progression is:

```text
Level 1 → Level 2 → Level 3 → Level 4 → Level 5 → Level 6
```

Level 6 should remain locked until Level 5 has been completed.

After completing Level 6, the player can access the GEI Vault experience.

---

## 🔐 A'Dam Vault

The Vault is the Academy's reward and economy center.

Vault concepts include:

- **900 XP per unlockable item**
- Individual item purchases using earned XP
- Premium skins
- Official Certificate access
- **A'Dam Video Vault** access
- Future XP purchase integrations

The core economy rule is:

> **900 XP unlocks one item.**

Unlocking one item does not automatically unlock the rest of the Vault.

The Vault is designed so players can:

```text
PLAY → EARN XP → ENTER VAULT → CHOOSE ITEM → UNLOCK → EQUIP / USE
```

Future real-money XP purchases should be verified by a server-side payment system before XP is granted.

---

## 🎨 Skin System

The Academy supports cosmetic skin concepts including:

- 💧 Water
- 🧱 Dam
- ⚙️ Mill
- 🏔️ Mountain
- 💗 Hot Pink
- 🩵 Baby Blue
- 🎓 Academic
- 📐 Blueprint
- ♦️ Ruby
- 💚 Emerald
- 🖤 Obsidian
- 🥇 Gold

Skin visuals are intended to use animated effects rather than simple static recolors.

The Vault preview concept allows players to see a skin before spending XP.

---

## 🔊 Game Audio

The game uses the **Web Audio API**, so it does not require external sound files for the core game sounds.

The shared audio engine supports events such as:

- `click`
- `correct`
- `good`
- `wrong`
- `save`
- `level`
- `level-complete`
- `certificate`
- `vault`
- `fanfare`

The audio system is designed with layered oscillators, pitch movement, filtering, transient noise, shared reverb, and dynamics control.

The current dashboard-wide sound-toggle experiment was intentionally removed from the production dashboard. Game-page audio remains part of the Academy experience.

---

## 📱 Mobile / One-Frame Gameplay

The level pages are designed for phone-sized play and prioritize a single-frame experience.

Core design goals include:

- No unnecessary page scrolling during gameplay
- Larger, comfortable reading typography
- Adult-readable text that remains friendly for kids
- Full question and answer visibility inside the game frame
- Responsive layouts for mobile screens

---

## 📂 Core Files

```text
index.html
level1.html
level2.html
level3.html
level4.html
level5.html
level6.html
vault.html

js/
  gei-game-audio.js
  gei-economy.js
  gei-vault-economy-engine.js
  gei-skin-renderer.js
  gei-vault-preview-engine.js
```

Keep the HTML files and `js/` folder together when deploying the Academy.

---

## 🚀 GitHub Pages Deployment

1. Create or open your GitHub repository.
2. Upload the Academy files while preserving the folder structure.
3. Make sure `index.html` is in the repository root.
4. Open **Settings → Pages**.
5. Select the branch containing the Academy and the root (`/`) folder.
6. Save and wait for GitHub Pages to publish.

Your Academy should then be available from the repository's GitHub Pages URL.

---

## 🧱 Hostinger Deployment

The Academy can also be deployed as static HTML/CSS/JavaScript.

Upload the files while preserving:

```text
index.html
level1.html ... level6.html
vault.html
js/
```

Avoid renaming files unless all internal links are updated as well.

---

## 🧪 Development & Release Discipline

For major changes, use a branch-based workflow:

```text
main
  ↓
feature branch
  ↓
compare
  ↓
verify
  ↓
pull request
  ↓
merge
```

Prefer small, focused changes over replacing complete HTML pages. This helps protect the working dashboard and makes regressions easier to identify.

---

## 💳 Future Payment Integration

The Academy is being designed to support a future real-money economy.

The intended architecture is:

```text
Player
  ↓
Payment checkout
  ↓
Server-side payment verification
  ↓
Verified XP grant
  ↓
Academy XP balance
  ↓
900 XP Vault purchase
```

Do **not** treat client-side localStorage as proof that a payment succeeded.

Payment credentials, webhook verification, transaction records, and XP grants belong on the trusted backend.

---

## 📜 Certificate & Video Vault

After the six-level foundation is complete, the Vault can expose:

### 🎓 Official GEI Academy Certificate

A player-facing completion certificate tied to their Academy progress.

### 🎬 A'Dam Video Vault

Premium GEI video content intended for players who have reached the appropriate Vault access state.

---

## 🛠️ Troubleshooting

### Level 1 does not load

Check that the player setup state exists and that `index.html` is the page being opened first.

### Audio is silent

Mobile browsers may require a user interaction before Web Audio can resume. Tap an in-game control and confirm that `js/gei-game-audio.js` is available at the expected path.

### A level appears locked

Check the saved `gei-academy-state-v1` progression and verify the previous level was completed.

### Vault remains locked

The Vault is intended to remain inaccessible until the six-level foundation is complete.

---

## 🧭 Project Philosophy

GEI Dam Learning Academy is intended to make the GEI learning framework feel interactive, progressive, visual, and memorable.

The goal is to combine:

**Learning + Gameplay + Progression + Rewards + Exploration**

into one experience.

---

## License / Project Status

This repository represents an evolving GEI Academy project. Unless a separate license file states otherwise, treat the source as project material intended for the repository owner and collaborators.

**Project:** Genesis Engineered Interpretations (GEI)

**Academy:** GEI Dam Learning Academy

**Primary site:** YallToo.com
