# Steve Adam — 8-bit NES Portfolio

My personal portfolio site styled after classic NES games, built with React
(Vite) and [nes.css](https://nostalgic-css.github.io/NES.css/).


## Concept

The site is framed as a game world map, like the classic Super Mario Bros.
Overworld screen:

- A sticky "world map" bar at the top tracks your position through the page
  (`1-1 ABOUT` → `1-5 CONTINUE?`), with a little player icon that moves as
  you scroll.
- **Skills** are RPG-style stat bars (`nes-progress`).
- **Projects** are item cards.
- **Experience** is a completed quest log.
- **Contact** is styled as a "Continue?" prompt, and includes a **Download CV**
  button (also available in the hero as "GET CV").

Palette is a dark "debug console" theme (deep navy, terminal mint, amber,
magenta) rather than nes.css's stock blue/red, with Press Start 2P for
headings and VT323 for body text (both loaded from Google Fonts).

## Getting started

```bash
npm install
npm run dev        # local dev server, usually http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Editing content

Everything is text-based (Bio, skills, project descriptions, quest log,
contact links) lives in one place: **`src/data/content.js`**.


## Deploying to GitHub Pages

Like the site this was inspired by, the simplest path is GitHub Pages:

```bash
npm install --save-dev gh-pages   # already in devDependencies
npm run deploy
```

This runs `vite build` and pushes `dist/` to a `gh-pages` branch. Then in
your repo's Settings → Pages, set the source to the `gh-pages` branch.

- **User/organization page** (`https://<username>.github.io/`): keep
  `base: '/'` in `vite.config.js`.
- **Project page** (`https://<username>.github.io/<repo>/`): change `base`
  in `vite.config.js` to `'/<repo>/'`.

## Project structure

```
src/
  data/content.js       # all site copy — edit this first
  assets
  hooks
  components/
    WorldMap.jsx         # sticky scroll-progress nav (the signature element)
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  index.css              # retro palette, fonts, layout
  main.jsx
```
