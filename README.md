# Unipod Website

Marketing website for **Unipod** — learn languages with the podcasts you love.
A fully static site (HTML, CSS, vanilla JS) with no build step and no server required.

## Project structure

```
unipod-website/
├── index.html          # Landing page
├── favicon.ico         # Site icon
├── robots.txt          # Crawler rules + sitemap reference
├── sitemap.xml         # URL list for search engines
├── manifest.json       # PWA / app metadata
├── 404.html            # Not-found page (Cloudflare serves it automatically)
├── README.md
├── .gitignore
├── assets/
│   ├── css/styles.css   # All styling
│   ├── js/main.js       # Scroll-reveal (progressive enhancement)
│   ├── images/          # hero-screen.png, hero-screen-2.png
│   ├── icons/           # unipod-mascot.png (logo / favicon source)
│   └── fonts/           # (empty — fonts load from Google Fonts)
├── privacy/
│   └── index.html       # /privacy/
├── terms/
│   └── index.html       # /terms/
└── og/
    ├── og-image.png        # Social share image
    └── apple-touch-icon.png
```

Absolute, root-relative paths (`/assets/...`, `/privacy/`) are used throughout so every
page resolves correctly at any depth.

## Run locally

No dependencies. Use any static server, e.g.:

```bash
# Python 3
python3 -m http.server 8080

# or Node
npx serve .
```

Then open <http://localhost:8080>. Opening `index.html` directly via `file://` mostly
works, but root-relative paths (`/assets/...`) resolve best through a local server.

## Deploy to Cloudflare Pages

This is a pre-built static site, so **build command is empty** and the **output
directory is the project root**.

### Option A — Connect GitHub (recommended, auto-deploys on push)

1. Push this folder to a GitHub repository (see below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository and branch (`main`).
4. Build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (or the folder that contains `index.html`)
5. **Save and Deploy.** Every push to `main` now redeploys automatically.

### Option B — Direct upload

**Workers & Pages → Create → Pages → Upload assets**, then drag in the contents of this
folder (the files, not the parent folder).

## Connect the custom domain `unipod.app`

1. Open your Pages project → **Custom domains → Set up a custom domain**.
2. Enter `unipod.app` (and optionally `www.unipod.app`).
3. If the domain's DNS is already on Cloudflare, the records are added automatically.
   Otherwise, add the CNAME/records Cloudflare shows at your registrar.
4. Wait for the certificate to issue (usually a few minutes). The site is then live at
   `https://unipod.app/`.

All canonical URLs, Open Graph tags, and the sitemap already point to
`https://unipod.app/` — no code change needed once the domain is attached.

## Push to GitHub

```bash
cd unipod-website
git init
git add .
git commit -m "Initial commit: Unipod static site"
git branch -M main
git remote add origin https://github.com/<your-org>/unipod-website.git
git push -u origin main
```

## Updating the site

1. Edit the HTML/CSS/JS.
2. Commit and push:
   ```bash
   git add .
   git commit -m "Describe your change"
   git push
   ```
3. Cloudflare Pages rebuilds and deploys automatically within seconds.
   If you change page URLs, update `sitemap.xml` too.

## SEO & accessibility

- Descriptive titles, meta descriptions, canonical URLs, robots meta + `robots.txt`,
  `sitemap.xml`, Open Graph + Twitter cards, theme-color, favicon, Apple touch icon,
  and JSON-LD structured data (SoftwareApplication, Organization, WebSite, FAQ).
- Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`/`article`), one `<h1>`
  per page, descriptive `alt` text, visible focus states, and `prefers-reduced-motion`
  support.

---

© 2026 Runo Creative LLC. All rights reserved.
