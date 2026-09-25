# Aritra Biswas — UI/UX Portfolio

A personal UI/UX portfolio for **Aritra Biswas**, a 1st year B.Tech CSE (AI) student at UEM Kolkata.

## Visual direction

The portfolio keeps the existing content and layout while using a premium, restrained 3D visual system:

- **Charcoal Midnight:** `#0E1116` — deep neutral base
- **Off-White:** `#F3F4F6` — primary text and headings
- **Muted Silver-Gray:** `#9CA3AF` — secondary copy, labels and tags
- **Electric Teal:** `#0D9488`
- **Aurora Mint:** `#2DD4BF`

Teal/mint are intentionally limited to links, buttons, active states and subtle glow highlights. This avoids the common blue/purple neon treatment associated with generic AI-style portfolio templates and keeps the visual language closer to a deliberate human UI/UX case-study presentation.

## 3D / mesh treatment

The hero now contains a CSS-only organic 3D mesh inspired by an audio waveform:

- perspective grid for depth
- layered fluid waveform lines
- floating light points
- translucent glow
- slow ambient motion
- VoiceGuard-inspired audio visual language

No external 3D framework is required.

## Tactile glass panels

Cards use semi-transparent surfaces, `backdrop-filter: blur()`, thin borders, deep shadows and restrained teal highlights to create floating glassmorphic depth without overwhelming the content.

## Content focus

The portfolio keeps UI/UX as the primary skill area. HTML, CSS and JavaScript remain presented only as foundational web knowledge. The featured project remains **VoiceGuard AI**, with Aritra's contribution clearly limited to UI/UX.

## Project structure

```text
Aritra-UIUX-Portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── aritra-profile.jpg
```

## Run locally

Open `index.html` in a browser, or use VS Code with Live Server.

## Theme switching

There is no visible theme switcher because this version is intentionally designed around the requested Charcoal Midnight visual identity. The main colors are centralized at the top of `style.css` as CSS variables, so another theme can be created by changing those values without restructuring the HTML.

## GitHub

GitHub profile: https://github.com/345nish-lgtm

### Publish with GitHub Pages

1. Create or open the repository on GitHub.
2. Upload the project files and the `assets` folder.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save and open the generated Pages URL.

## Suggested repository name

`aritra-uiux-portfolio`
