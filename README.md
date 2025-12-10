# B & N Wedding

A small repository for the B & N wedding website and related assets.

## Overview
This repo is intended to hold the wedding website source, assets (images, invites, etc.), and deployment configuration. At the moment this repository contains a LICENSE file; add your site source files and assets in the suggested locations below.

## Suggested project structure
- README.md           — this file
- LICENSE             — license for the repository
- site/ or public/    — static site output or public assets (HTML, CSS, JS)
- src/                — source files (React, Svelte, Vue, etc.)
- assets/             — images, fonts, PDFs, and other binary assets
- package.json        — optional, for Node-based projects

Adjust the structure to match your preferred stack.

## Quick start (static site)
If you have a static `index.html` in the repository root or `site/` folder, you can preview it locally:

- Open the `index.html` file in your browser (double-click it).
- Or serve it quickly from the command line:

  - Using Python 3:

    python3 -m http.server 8000

    Then open http://localhost:8000 in your browser.

  - Using Node (http-server):

    npm install -g http-server
    http-server -c-1 .

## Common workflows (examples)
- Node/React/Vite projects
  - npm install
  - npm run dev
  - npm run build

- Static-only
  - Add files to `site/` or root, then serve locally (see above)

## How to contribute
- Add or update site source under `src/` or `site/`.
- Commit assets to `assets/` and reference them from your pages.
- If you add build tooling (package.json, etc.), document commands in this README.

## Notes
- License: see `LICENSE` at the repo root.
- Repo owner: trung-t-nguyen

If you'd like, I can:
- scaffold a minimal static site (`index.html`) and example assets,
- or detect the project's stack and add tailored README instructions.

