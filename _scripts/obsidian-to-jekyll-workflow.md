# Obsidian → Jekyll Protocol Publishing Workflow

## Overview

Katie writes lab protocols in Obsidian and publishes them to her academic website (al-folio Jekyll theme hosted on GitHub Pages). A conversion script handles Obsidian-specific markdown features that don't render natively in Jekyll.

## Key Paths

| What | Path |
|---|---|
| Obsidian vault (protocols) | `/Users/katie/Obsidian Vault/Mossy/protocols/` |
| Site repo | `/Users/katie/kathryncaruso.github.io/` |
| Methods output directory | `/Users/katie/kathryncaruso.github.io/_methods/` |
| Conversion script | `/Users/katie/kathryncaruso.github.io/_scripts/obsidian_to_jekyll.py` |
| Live site | `https://kathryncaruso.github.io/methods/` |

## What the Script Does

`obsidian_to_jekyll.py` converts Obsidian markdown to Jekyll-compatible markdown:

- **Callouts** (`> [!note]`, `> [!warning]`, etc.) → Bootstrap `<div class="alert-*">` elements
- **Foldable callouts** (`> [!note]-` or `> [!note]+`) → `<details>` elements with alert styling
- **Wikilinks** (`[[Page Name]]`) → standard markdown links (`[Page Name](/methods/page-name/)`)
- **Highlights** (`==text==`) → `<mark>` tags
- **Obsidian comments** (`%% ... %%`) → removed
- **First H1 heading** → stripped (title is placed in Jekyll front matter instead)
- **Front matter** → auto-generated with layout, title, category, and status

## How to Publish a Protocol

### Step 1: Convert

```bash
cd /Users/katie/kathryncaruso.github.io

python _scripts/obsidian_to_jekyll.py \
    "/Users/katie/Obsidian Vault/Mossy/protocols/FILENAME.md" \
    --output _methods/ \
    --category "CATEGORY"
```

Common categories (match existing site structure):
- `biocementation` — MICP and biocementation protocols
- `sphagnum-microbiome` — Sphagnum moss and microbiome work
- `general-lab` — Foundational lab procedures

### Step 2: Preview (optional)

Use `--dry-run` to preview the converted output without writing a file:

```bash
python _scripts/obsidian_to_jekyll.py \
    "/Users/katie/Obsidian Vault/Mossy/protocols/FILENAME.md" \
    --dry-run
```

### Step 3: Push to GitHub

```bash
cd /Users/katie/kathryncaruso.github.io
git add _methods/
git commit -m "Add PROTOCOL_NAME protocol"
git push
```

GitHub Pages will automatically rebuild the site after the push.

## Script Options Reference

| Flag | Purpose | Default |
|---|---|---|
| `--output`, `-o` | Output directory | (required unless `--dry-run`) |
| `--dry-run` | Print to stdout, don't write | false |
| `--category`, `-c` | Front matter category | "" |
| `--status`, `-s` | Front matter status | "available" |
| `--description`, `-d` | Short description | "" |
| `--layout`, `-l` | Jekyll layout | "page" |
| `--base-url` | Base URL for wikilink conversion | "/methods/" |
| `--keep-h1` | Don't strip the first H1 heading | false |
| `--slug` | Custom output filename | derived from input filename |

## Optional: Obsidian-Side Metadata

Katie can add YAML front matter to her Obsidian notes and the script will read it. These fields are understood:

```yaml
---
title: DNA Extraction (16S)
category: sphagnum-microbiome
status: available
description: Extraction optimized for 16S rRNA sequencing
---
```

Any of these can also be overridden via command-line flags. Fields set via CLI take priority over fields in the Obsidian file.

## Batch Publishing

To convert all protocols in the vault at once:

```bash
cd /Users/katie/kathryncaruso.github.io

for f in "/Users/katie/Obsidian Vault/Mossy/protocols/"*.md; do
    python _scripts/obsidian_to_jekyll.py "$f" --output _methods/
done
```

Note: this won't set per-file categories. For batch publishing with categories, either add `category:` to the Obsidian front matter of each file, or convert individually.

## Troubleshooting

- **Callouts not rendering styled on the site**: Ensure the `markdown="1"` attribute is present on the alert divs (the script adds this). If styles still look off, a small custom SCSS block may be needed in the site's `_sass/` directory.
- **Wikilinks pointing to wrong URLs**: The script converts `[[Page Name]]` to `/methods/page-name/`. If the target page doesn't exist on the site yet, the link will 404 until that protocol is also published.
- **Front matter not detected in Obsidian file**: The YAML block must start on the very first line with `---` and close with `---`. No blank lines before it.
