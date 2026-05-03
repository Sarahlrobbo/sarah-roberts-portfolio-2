# Sarah Roberts Portfolio — Handover Notes

A static HTML/CSS portfolio for **Sarah Roberts** — a Research & Design Lead based in Christchurch, Aotearoa / New Zealand. Modelled originally on the Framer "Artemis" template, then iterated heavily to match Sarah's own design preferences.

Hosted on GitHub Pages at `sarahlrobbo.github.io/sarah-roberts-portfolio-2`.

---

## File structure

```
sarah-roberts-portfolio/
├── index.html                         # Home
├── projects.html                      # Craft & Leadership listing (filterable)
├── about.html                         # About Me
├── project-age-of-ai.html             # Datapay · JTBD & ODI case study
├── project-farmers.html               # FarmIQ · essential mobile app
├── project-design-practice.html       # FarmIQ · team, practice & systems
├── project-design-leadership.html     # Datapay & FarmIQ · leadership
├── styles.css                         # Single shared stylesheet
├── README.md                          # Original setup notes
└── images/
    ├── Illustration-SneakPeek.svg
    ├── Illustration-LeadershipImpactAreas.svg
    ├── Illustration-FAQs.svg
    ├── Illustration-LetsChat.svg
    ├── sarahroberts1.png              # bio: portrait with flowers
    ├── sarahroberts2.png              # bio: mountains polaroid
    ├── sarahroberts3.png              # bio: hut polaroid
    ├── Quote-Holly.png
    ├── Quote-Todd.jpg
    ├── farmiq_vector.svg
    ├── Basis_vector.svg
    ├── MSC.png
    ├── Hatch.png
    ├── Metlink_vector.svg
    └── ACC_vector.svg
```

---

## Design tokens (in `styles.css` `:root`)

```css
--color-bg: #F5F5F5            /* page background */
--color-bg-alt: #ECECEC        /* subtle alternate */
--color-text: #2A3132          /* charcoal body text */
--color-text-muted: #5F6566
--color-text-soft: #8A8F90
--color-border: #DDDDDD
--color-heading: #2B35AB       /* indigo — italic display headings */
--color-accent: #2B35AB
--color-accent-hover: #1A26AB
--color-accent-soft: #CADCFC   /* pastel blue */

--font-display: 'Fraunces' (italic serif)
--font-body: 'Inter' (sans)
```

**Typography rule:** Italic Fraunces is used sparingly for display headings only (hero title, section titles, contact title, footer signature/tagline). Body, project card titles, nav logo, and most UI use Inter. Sarah explicitly asked to "utilise [the serif] more sparingly."

---

## Page-by-page

### Home (`index.html`)
1. **Nav** — `Craft & Leadership` | `Sarah Roberts` (sans-serif logo, indigo) | `About Me`
2. **Hero** — italic indigo "Design Lead / Insight to impact", subtitle, "View my craft ↗" indigo CTA
3. **Sneak peek** — illustration + italic heading + 4-image strip (the same 4 images that used to sit under the hero CTA)
4. **Marquee** — looping italic serif skill words
5. **Design in action** — italic heading + filter pills (All / Leadership / JTBD / Research / UX & UI / Strategy) + 4 project cards
6. **Behind the screens** — bio copy + 3 tilted images (16px radius, NOT polaroid frames) with hover tooltips: "In the mountains", "Hi! 👋 Me looking fancy", "In a hut"
7. **Testimonials** — "Kind words from colleagues & clients" — 3 quote cards stacked, parallax scroll, highlighter animation
8. **Some companies I've worked with** — 6 logos (FarmIQ, Basis, MSC, Hatch, Metlink, ACC), grayscale by default, full colour on hover, dark-pill blurb tooltip above. **5 of 6 still have placeholder blurbs — Sarah will fill these in.**
9. **Let's chat** — illustration + italic heading + 3 stacked outlined contact pills (Email / LinkedIn / Instagram) — `#EBE9E4` bg, 16px radius, white fill on hover with ↗ arrow sliding in

### Projects (`projects.html`)
- Italic indigo "Craft & Leadership" heading
- 6 filter pills, 4 project cards in 2-col grid
- Same Let's chat + footer

### About (`about.html`)
- Scattered polaroid hero with "👋 Hi, I'm Sarah" italic indigo title
- Article body — Sarah's full real bio from sarahlroberts.com
- Leadership Impact Areas (illustration + 10 angled pastel-blue pills around it, scroll-in animated)
- Outside of work
- Tools & craft (favicon row with hover tooltips explaining how she uses each tool)
- Skills (pill tags)
- FAQs (accordion of 5 questions)
- Let's chat

### Project case studies (4 of them)
- All have full content from sarahlroberts.com kept verbatim per Sarah's instruction (depth signals seniority for design lead roles)
- Hero uses real thumbnail from cdn.myportfolio.com
- Body figures are still placeholder dashed boxes labelled `<!-- REPLACE: ... -->` — **Sarah will send PNGs from her Framer template**

---

## Footer (consistent across all pages)
- Background: `#2B35AB` indigo, white text
- Left: small italic tagline (Sarah's own words from her about page) — *"I uncover customer insights, turn insights into alignment, alignment into strategy, and strategy into human-centred solutions that make a meaningful difference."*
- Right: 2 link columns — Explore (Home / Craft & Leadership / About Me), Elsewhere (Email / LinkedIn / Instagram)
- Bottom bar: "© 2026 Sarah Roberts · Designed with 🧡 in Aotearoa" (heart pulses) + italic "Sarah Roberts" signature on right

---

## Sarah's preferences (important for Claude Code)

- **Short replies, no long explanations.** Bullet points if more than a sentence or two.
- **One change at a time** when iterating visuals — she'll preview and screenshot back.
- **She is a designer, not a developer** — explain trade-offs in plain English when relevant (no jargon dumps).
- **She prefers serif used sparingly.** Indigo italic Fraunces for big display only.
- **She values evidence-led, jobs-to-be-done thinking** — her work is rooted in JTBD, ODI, design leadership.

---

## Known issues / parked items

1. **Container/edge-padding on mobile** — Sarah noted the projects-listing page cards still appear to extend close to viewport edges at narrow widths. Latest fix uses `clamp(20px, 5vw, 48px)` on `.container` and `.container-narrow`. **Recommend testing this fresh in Claude Code with DevTools — there might be a stale GitHub Pages cache issue rather than a CSS problem.**

2. **Project case-study body images** — all marked `<!-- REPLACE: ... -->`. Sarah has Framer template PNGs to send.

3. **Brand hover blurbs** — only FarmIQ has real copy; 5 others are `[PLACEHOLDER]`. Search for `PLACEHOLDER` in `index.html` to find them.

4. **Testimonial #1** — placeholder name & quote, no avatar. Sarah is sourcing the quote.

---

## Animation / interaction inventory

- **Hero**: subtle fade-in stagger on load
- **Project cards**: hover lift + image zoom (1.06x)
- **Filter pills (homepage + projects)**: client-side JS filter on click
- **Behind the screens images**: tilted at -6°/+3°/-4°, hover straightens to 0° + dark pill tooltip below. On touch devices: flat with always-visible labels.
- **Testimonials**: cards drift on parallax scroll (speeds: +12%, -8%, +15%); highlighter draws on with staggered delay (200ms, 700ms, 1200ms) — solid `#C7D8FF`, 1.6s ease
- **Leadership Impact Areas**: 10 pastel-blue pills positioned around centre (clock face), each at unique tilt (-7° to +7°), fade/slide in on scroll with 70ms stagger. Below 1024px reflows to centred column.
- **Let's chat contact pills**: hover fill white + ↗ arrow slides in from left
- **Brand logos**: grayscale 70% opacity → full colour 100% opacity on hover, with dark-pill blurb appearing above
- **Footer heart 🧡**: gentle heartbeat loop

All scroll-triggered animations use IntersectionObserver and respect `prefers-reduced-motion`.

---

## How to preview locally

```bash
cd sarah-roberts-portfolio
python3 -m http.server 8000
```

Then open http://localhost:8000

---

## Git / deploy

Sarah pushes from her local folder to GitHub. GitHub Pages serves the live site. **Cache propagation can take a few minutes** — when iterating, hard refresh (`Cmd+Shift+R`) and if changes don't appear, wait 30–60 seconds and refresh again.
