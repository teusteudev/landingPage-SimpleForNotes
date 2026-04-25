# SimpleForNotes — Landing page
🔗 Live Demo: https://landing-page-simple-for-notes.vercel.app
Static marketing page for a notes app: plain **HTML**, **CSS**, and **JavaScript**—no build step, no bundler. Ideal for fast loads, simple hosting, and straightforward edits.

## Project structure

- `index.html` — Page structure, copy, and navigation links
- `css/styles.css` — Visual design: dark/light theme, color tokens, layout
- `js/script.js` — Smooth scrolling, theme toggle, light scroll animations
- `assets/` — Images and other media

## Running locally

Open `index.html` in your browser, or start a quick static server:

```bash
npx http-server
# or: python -m http.server 8000
```

For a one-command option from this repo, use **`npm start`** (runs `python -m http.server 8000` per `package.json`).

## Customization

- **Copy & links:** `index.html`
- **Visuals & theme:** `css/styles.css` (variables in `:root` and `html[data-theme="light"]`)
- **Behavior:** `js/script.js`

The nav includes a **light/dark theme** toggle; the selected theme is saved in **`localStorage`**.
