# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Academic portfolio website for Kathryn (Katie) Caruso, built with Jekyll 4.x on the al-folio theme. Hosted on GitHub Pages at https://kathryncaruso.github.io.

## Build & Development

### Docker (recommended)
```bash
docker compose pull && docker compose up    # http://localhost:8080
docker compose up --build                   # rebuild with dependency changes
```

### Local
```bash
bundle install
pip install jupyter && pip3 install --upgrade nbconvert
bundle exec jekyll serve --port 4000
```

ImageMagick is required locally (`brew install imagemagick` on Mac).

### Formatting (enforced by CI)
```bash
npm install --save-dev prettier @shopify/prettier-plugin-liquid
npx prettier . --write
```
Prettier must pass before pushing — the `prettier.yml` workflow will fail PRs otherwise.

### Production build
Set `JEKYLL_ENV=production` for CSS/JS minification. PurgeCSS runs during deployment (`purgecss.config.js`).

## Architecture

### Content collections
- `_pages/` — Static pages (about, cv, publications, projects, methods, blog, etc.)
- `_posts/` — Blog posts (`YYYY-MM-DD-title.md`)
- `_projects/` — Project entries (ordered by `importance` in front matter)
- `_methods/` — Research protocols and methods (permalink: `/methods/:path/`), some with companion `.jsx` interactive diagrams
- `_bibliography/papers.bib` — BibTeX publications managed by jekyll-scholar

### Data files (`_data/`)
- `cv.yml` — CV content (used by `_layouts/cv-slider.liquid`)
- `socials.yml` — Social/contact links
- `coauthors.yml`, `citations.yml`, `venues.yml`, `repositories.yml`

### Layouts (`_layouts/`)
Templates are `.liquid` files. Key custom layouts:
- `cv-slider.liquid` — Interactive CV with detail-level slider (1-5) using `data-level` attributes; self-contained HTML/CSS/JS
- `bib.liquid` — Publication display from BibTeX

### Styling
SCSS in `_sass/` compiled by Jekyll. Uses al-folio CSS variables (`--global-theme-color`, `--global-bg-color`, etc.) for theme compatibility including dark mode (`data-theme` attribute).

### Key config
`_config.yml` controls site metadata, feature flags (`enabled: true/false`), plugin loading, and CDN library versions with integrity hashes.

### Custom plugins (`_plugins/`)
Ruby plugins for Google Scholar citations, external posts, custom BibTeX fields, and others.

## CI/CD

GitHub Actions workflows in `.github/workflows/`:
- **deploy.yml** — Builds with Ruby 3.3.5 + Python 3.13, runs purgecss, deploys to `gh-pages` branch
- **prettier.yml** — Mandatory formatting check
- **broken-links.yml** — Link validation
- **axe.yml** — Accessibility testing

## Important Notes

- The CV page (`_pages/cv.md`) uses layout `cv-slider` — the CV content lives in both `_data/cv.yml` and inline in `_layouts/cv-slider.liquid`
- PurgeCSS safelist (`purgecss.config.js`) must include patterns for any dynamically-applied classes (e.g., `data-theme`, `data-level`, `data-detail`, `cv-`, `scrolled`)
- Related posts can error if blog posts lack meaningful content (classifier-reborn issue)
- Site URL: `url: https://kathryncaruso.github.io`, `baseurl:` is empty (personal site)
