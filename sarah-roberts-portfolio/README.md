# Sarah Roberts Portfolio

Static HTML/CSS portfolio site modelled on the Framer Artemis template, with real content from sarahlroberts.com.

## Files

```
sarah-roberts-portfolio/
├── index.html                         ← Home
├── projects.html                      ← Projects listing
├── about.html                         ← About Me
├── project-age-of-ai.html             ← Datapay · JTBD & ODI
├── project-farmers.html               ← FarmIQ · essential mobile app
├── project-design-practice.html       ← FarmIQ · team, practice & systems
├── project-design-leadership.html     ← Datapay & FarmIQ · leadership
├── styles.css                         ← Shared stylesheet (all pages use this)
└── README.md                          ← This file
```

## How to preview locally

Open a terminal in the `sarah-roberts-portfolio` folder, then run **one** of these:

**Option A — Python (built into Mac)**
```
python3 -m http.server 8000
```
Then open **http://localhost:8000** in your browser.

**Option B — just double-click**
You can also just double-click `index.html` to open it directly in your browser. The only thing that won't work perfectly is some font loading — the server method is recommended.

To stop the server: press `Ctrl + C` in the terminal.

## Swapping images later

Every image that needs replacing has a comment above it like:
```html
<!-- REPLACE: hero image 1 -->
<img src="..." alt="" />
```

Search for `REPLACE:` across all files to find them quickly. Just swap the `src=""` path to your new image (e.g. `src="images/my-hero.jpg"` after dropping it in an `images/` folder).

## Editing style globally

All colours, fonts, and spacing live at the top of `styles.css` under `:root {}`. Change one value there and every page updates.

Key variables:
- `--color-bg` — the cream background
- `--color-text` — the main dark text
- `--font-display` — the serif used in headings (Fraunces)
- `--font-body` — the sans used for body (Inter)

## Notes on content

- Homepage sections mirror the Artemis template: hero, skill marquee, sneak-peek gallery, project grid, skills list, bio, testimonials, brands, contact.
- Project case studies use the **full content** from your live sarahlroberts.com pages — every section kept intact so the depth shows through.
- Testimonials on the homepage are placeholders (marked `REPLACE`) — drop in real quotes when you have them.
- Project thumbnails on the homepage and projects page use the actual image URLs from your live sarahlroberts.com site, so they'll render immediately.
- Artemis placeholder images are used for the hero strip, sneak-peek gallery, and bio — each marked with a `REPLACE` comment.
