#!/usr/bin/env python3
"""
obsidian_to_jekyll.py

Converts Obsidian markdown files to Jekyll-compatible markdown for al-folio sites.

Handles:
  - Obsidian callouts (> [!type]) → Bootstrap alert divs
  - Foldable callouts (> [!type]+/-) → <details> elements
  - [[wikilinks]] → standard markdown links
  - Auto-generates Jekyll front matter from the document

Usage:
  python obsidian_to_jekyll.py <obsidian_file> --output <jekyll_methods_dir> [options]

Examples:
  # Basic conversion
  python obsidian_to_jekyll.py ~/vault/protocols/dna-extraction.md --output ~/site/_methods/

  # With explicit metadata
  python obsidian_to_jekyll.py ~/vault/protocols/dna-extraction.md --output ~/site/_methods/ \
      --category "sphagnum-microbiome" --status "available"

  # Preview without writing (prints to stdout)
  python obsidian_to_jekyll.py ~/vault/protocols/dna-extraction.md --dry-run
"""

import argparse
import re
import sys
import textwrap
from datetime import date
from pathlib import Path

# ---------------------------------------------------------------------------
# Site constants
# ---------------------------------------------------------------------------
SITE_URL = "https://kathryncaruso.github.io"
AUTHOR = "Kathryn E. Caruso"
ORCID = "0009-0003-2436-1791"
AFFILIATION = "Center for Biofilm Engineering, Montana State University"


# ---------------------------------------------------------------------------
# Callout mapping: Obsidian callout type → Bootstrap alert class
# ---------------------------------------------------------------------------
CALLOUT_MAP = {
    # informational
    "note":      "alert-info",
    "info":      "alert-info",
    "todo":      "alert-info",
    # success / tips
    "tip":       "alert-success",
    "hint":      "alert-success",
    "done":      "alert-success",
    "check":     "alert-success",
    "success":   "alert-success",
    # warnings
    "warning":   "alert-warning",
    "caution":   "alert-warning",
    "attention": "alert-warning",
    # danger / errors
    "danger":    "alert-danger",
    "error":     "alert-danger",
    "bug":       "alert-danger",
    "failure":   "alert-danger",
    "fail":      "alert-danger",
    "missing":   "alert-danger",
    # other
    "important": "alert-primary",
    "abstract":  "alert-secondary",
    "summary":   "alert-secondary",
    "tldr":      "alert-secondary",
    "question":  "alert-info",
    "help":      "alert-info",
    "faq":       "alert-info",
    "example":   "alert-secondary",
    "quote":     "alert-light",
    "cite":      "alert-light",
}

# Friendly display names for callout titles
CALLOUT_TITLES = {
    "note": "Note", "info": "Info", "todo": "To Do",
    "tip": "Tip", "hint": "Hint", "done": "Done", "check": "Check",
    "success": "Success", "warning": "Warning", "caution": "Caution",
    "attention": "Attention", "danger": "Danger", "error": "Error",
    "bug": "Bug", "failure": "Failure", "fail": "Fail", "missing": "Missing",
    "important": "Important", "abstract": "Abstract", "summary": "Summary",
    "tldr": "TL;DR", "question": "Question", "help": "Help", "faq": "FAQ",
    "example": "Example", "quote": "Quote", "cite": "Cite",
}


def slugify(text: str) -> str:
    """Convert text to a URL-friendly slug."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')


def extract_title(content: str, filename: str) -> str:
    """Extract the title from the first H1 heading, or fall back to filename."""
    match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    if match:
        return match.group(1).strip()
    # Fall back to filename without extension
    return filename.replace('-', ' ').replace('_', ' ').title()


def extract_obsidian_frontmatter(content: str) -> tuple[dict, str]:
    """
    Extract existing YAML front matter from an Obsidian file (if any).
    Returns (metadata_dict, content_without_frontmatter).
    Handles front matter with leading whitespace on the --- delimiters.
    """
    metadata = {}
    # Strip leading whitespace to handle indented front matter
    stripped = content.lstrip()
    if stripped.startswith('---'):
        end = stripped.find('---', 3)
        if end != -1:
            yaml_block = stripped[3:end].strip()
            for line in yaml_block.split('\n'):
                if ':' in line:
                    key, _, value = line.partition(':')
                    metadata[key.strip()] = value.strip().strip('"').strip("'")
            content = stripped[end + 3:].strip()
    return metadata, content


def generate_front_matter(title: str, obsidian_meta: dict, args) -> str:
    """Generate Jekyll front matter for the methods page."""
    fm = {
        "layout": args.layout or "page",
        "title": title,
        "description": obsidian_meta.get("description", args.description or ""),
        "category": args.category or obsidian_meta.get("category", ""),
        "status": args.status or obsidian_meta.get("status", "available"),
        "nav": False,  # typically method pages aren't in main nav
    }

    lines = ["---"]
    for key, value in fm.items():
        if value == "" or value is None:
            continue
        if isinstance(value, bool):
            lines.append(f"{key}: {str(value).lower()}")
        else:
            # Quote strings that might cause YAML issues
            if any(c in str(value) for c in ':{}[]#&*!|>\'"'):
                lines.append(f'{key}: "{value}"')
            else:
                lines.append(f"{key}: {value}")
    lines.append("---")
    return '\n'.join(lines)


CALLOUT_STYLES = {
    "alert-info":      {"border": "#2d6a4f", "bg": "#f0fdf4", "title_color": "#2d6a4f"},
    "alert-success":   {"border": "#2d6a4f", "bg": "#f0fdf4", "title_color": "#2d6a4f"},
    "alert-primary":   {"border": "#c0713a", "bg": "#fffbf0", "title_color": "#c0713a"},
    "alert-warning":   {"border": "#b91c1c", "bg": "#fef2f2", "title_color": "#b91c1c"},
    "alert-danger":    {"border": "#b91c1c", "bg": "#fef2f2", "title_color": "#b91c1c"},
    "alert-secondary": {"border": "#6c757d", "bg": "#f8f9fa", "title_color": "#6c757d"},
    "alert-light":     {"border": "#adb5bd", "bg": "#f8f9fa", "title_color": "#6c757d"},
}


def convert_callouts(content: str) -> str:
    """
    Convert Obsidian callouts to inline-styled divs.

    Uses inline styles rather than Bootstrap classes or markdown="1" to avoid
    Kramdown rendering issues with tables and complex content inside divs.

    Obsidian syntax:
        > [!note] Optional title
        > Content line 1
        > Content line 2

    Foldable variants:
        > [!note]+ Title   (expanded by default)
        > [!note]- Title   (collapsed by default)
    """
    lines = content.split('\n')
    result = []
    i = 0

    while i < len(lines):
        # Match a callout header: > [!type]+/- Optional title
        callout_match = re.match(
            r'^>\s*\[!(\w+)\]([+-])?\s*(.*)?$', lines[i]
        )

        if callout_match:
            ctype = callout_match.group(1).lower()
            fold = callout_match.group(2)  # + or - or None
            custom_title = (callout_match.group(3) or '').strip()

            alert_class = CALLOUT_MAP.get(ctype, "alert-info")
            display_title = custom_title or CALLOUT_TITLES.get(ctype, ctype.title())
            styles = CALLOUT_STYLES.get(alert_class, CALLOUT_STYLES["alert-info"])

            # Collect all continuation lines (lines starting with >)
            body_lines = []
            i += 1
            while i < len(lines) and re.match(r'^>\s?', lines[i]):
                # Strip the leading > and optional space
                body_line = re.sub(r'^>\s?', '', lines[i])
                body_lines.append(body_line)
                i += 1

            body_content = '\n'.join(body_lines).strip()

            # Build inline styles for the callout container
            container_style = (
                f"border-left: 4px solid {styles['border']}; "
                f"background: {styles['bg']}; "
                f"border-radius: 4px; "
                f"padding: 0.9rem 1.1rem; "
                f"margin: 1rem 0; "
                f"font-size: 0.92rem; "
                f"line-height: 1.65;"
            )
            title_style = (
                f"font-weight: 700; "
                f"font-size: 0.82rem; "
                f"text-transform: uppercase; "
                f"letter-spacing: 0.05em; "
                f"margin-bottom: 0.35rem; "
                f"color: {styles['title_color']};"
            )

            if fold:
                # Foldable callout → <details>
                open_attr = ' open' if fold == '+' else ''
                result.append(f'<details{open_attr} style="{container_style}">')
                result.append(f'<summary style="{title_style}">{display_title}</summary>')
                result.append('</details>')
                result.append('')
                result.append(body_content)
                result.append('')
            else:
                # Standard callout → styled title bar, then content as
                # plain markdown so tables/lists/headings render correctly
                result.append(f'<div style="{container_style}">')
                result.append(f'<span style="{title_style}">{display_title}</span>')
                result.append('</div>')
                result.append('')
                result.append(body_content)
                result.append('')
        else:
            result.append(lines[i])
            i += 1

    return '\n'.join(result)


def convert_wikilinks(content: str, base_url: str = "/methods/") -> str:
    """
    Convert [[wikilinks]] to standard markdown links.

    [[Page Name]]           → [Page Name](/methods/page-name/)
    [[Page Name|Display]]   → [Display](/methods/page-name/)
    [[Page Name#Section]]   → [Page Name](/methods/page-name/#section)
    [[#Section]]            → [Section](#section)  (same-page anchor)
    """
    def replace_wikilink(match):
        inner = match.group(1)

        # Handle display text: [[target|display]]
        if '|' in inner:
            target, display = inner.split('|', 1)
        else:
            target, display = inner, inner

        # Handle section anchors: [[target#section]]
        section = ''
        if '#' in target:
            target, section = target.split('#', 1)
            section = '#' + slugify(section)

        slug = slugify(target.strip())

        # Self-referencing link: [[#Section]] → anchor-only
        if not slug and section:
            # Clean up display text (strip leading #)
            clean_display = display.strip().lstrip('#').strip()
            return f'[{clean_display}]({section})'

        url = f"{base_url}{slug}/{section}"

        return f'[{display.strip()}]({url})'

    # Match [[...]] but not ![[...]] (which are embeds)
    return re.sub(r'(?<!!)\[\[([^\]]+)\]\]', replace_wikilink, content)


def remove_obsidian_comments(content: str) -> str:
    """Remove Obsidian inline comments: %%comment%%"""
    return re.sub(r'%%.*?%%', '', content, flags=re.DOTALL)


def convert_highlights(content: str) -> str:
    """Convert Obsidian ==highlights== to <mark> tags."""
    return re.sub(r'==(.*?)==', r'<mark>\1</mark>', content)


def ensure_block_spacing(content: str) -> str:
    """
    Ensure blank lines before block elements that Kramdown requires them for.

    Without blank lines, Kramdown treats headings, lists, tables, and
    horizontal rules as continuation of the previous paragraph — causing
    broken rendering (no list numbers, merged sections, etc.).
    """
    lines = content.split('\n')
    result = []

    for i, line in enumerate(lines):
        stripped = line.strip()
        if i > 0 and result:
            prev = result[-1].strip()
            needs_blank = False

            # Blank line before headings (##, ###, etc.)
            if re.match(r'^#{1,6}\s', stripped) and prev != '':
                needs_blank = True
            # Blank line before ordered lists (1. 2. etc.) if prev is not a list item
            elif re.match(r'^\d+\.\s', stripped) and not re.match(r'^\d+\.\s', prev) and prev != '':
                needs_blank = True
            # Blank line before unordered lists (- * +) if prev is not a list item
            elif re.match(r'^[-*+]\s', stripped) and not re.match(r'^[-*+]\s', prev) and prev != '' and not re.match(r'^[-*+]\s', prev):
                needs_blank = True
            # Blank line before horizontal rules
            elif stripped == '---' and prev != '':
                needs_blank = True
            # Blank line before tables
            elif stripped.startswith('|') and not prev.startswith('|') and prev != '':
                needs_blank = True
            # Blank line before HTML divs
            elif stripped.startswith('<div') and prev != '':
                needs_blank = True
            # Blank line after closing HTML divs
            elif prev.startswith('</div>') and stripped != '' and not stripped.startswith('</'):
                needs_blank = True

            if needs_blank:
                result.append('')

        result.append(line)

    return '\n'.join(result)


def strip_first_h1(content: str) -> str:
    """
    Remove the first H1 heading from content (since Jekyll front matter
    title will render it).
    """
    return re.sub(r'^#\s+.+\n*', '', content, count=1)


def generate_byline(title: str, slug: str) -> str:
    """Generate the standardized protocol byline block."""
    today = date.today()
    month_year = today.strftime("%B %Y")
    year = today.strftime("%Y")
    url = f"{SITE_URL}/methods/{slug}/"

    return (
        f"**{title}**\n"
        f"{AUTHOR} · [{ORCID}](https://orcid.org/{ORCID})\n"
        f"{AFFILIATION}\n"
        f"Updated {month_year} · [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)\n"
        f"\n"
        f"<details><summary>How to cite this protocol</summary>\n"
        f"\n"
        f"Caruso, K.E. ({year}). <em>{title}</em>. {AFFILIATION}. {url}\n"
        f"\n"
        f"</details>\n"
        f"\n"
        f"---"
    )


def convert(content: str, filename: str, args) -> str:
    """Full conversion pipeline."""
    # 1. Extract any existing Obsidian front matter
    obsidian_meta, content = extract_obsidian_frontmatter(content)

    # 2. Extract title before modifying content
    title = obsidian_meta.get("title") or extract_title(content, filename)

    # 3. Generate Jekyll front matter
    front_matter = generate_front_matter(title, obsidian_meta, args)

    # 4. Strip the first H1 (Jekyll will render title from front matter)
    if not args.keep_h1:
        content = strip_first_h1(content)

    # 5. Generate byline (unless --no-byline)
    byline = ''
    if not args.no_byline:
        slug = args.slug or slugify(filename)
        byline = generate_byline(title, slug)

    # 6. Convert Obsidian-specific syntax
    content = remove_obsidian_comments(content)
    content = convert_callouts(content)
    content = convert_wikilinks(content, base_url=args.base_url)
    content = convert_highlights(content)

    # 7. Ensure blank lines before block elements (headings, lists, tables, etc.)
    content = ensure_block_spacing(content)

    # 8. Clean up extra blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    # 9. Assemble: front matter + byline + content
    parts = [front_matter, '']
    if byline:
        parts.append(byline)
        parts.append('')
    parts.append(content.strip())
    return '\n'.join(parts) + '\n'


def main():
    parser = argparse.ArgumentParser(
        description="Convert Obsidian markdown to Jekyll-compatible markdown for al-folio.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=textwrap.dedent("""\
            Examples:
              %(prog)s protocol.md --output ~/site/_methods/
              %(prog)s protocol.md --output ~/site/_methods/ --category biocementation
              %(prog)s protocol.md --dry-run
        """)
    )

    parser.add_argument("input", type=Path,
                        help="Path to the Obsidian markdown file")
    parser.add_argument("--output", "-o", type=Path, default=None,
                        help="Output directory (e.g., your Jekyll _methods/ folder)")
    parser.add_argument("--dry-run", action="store_true",
                        help="Print converted output to stdout without writing a file")
    parser.add_argument("--category", "-c", type=str, default="",
                        help="Category for front matter (e.g., biocementation, sphagnum-microbiome)")
    parser.add_argument("--status", "-s", type=str, default="available",
                        help="Status for front matter (default: available)")
    parser.add_argument("--description", "-d", type=str, default="",
                        help="Short description for front matter")
    parser.add_argument("--layout", "-l", type=str, default="page",
                        help="Jekyll layout to use (default: page)")
    parser.add_argument("--base-url", type=str, default="/methods/",
                        help="Base URL path for wikilink conversion (default: /methods/)")
    parser.add_argument("--keep-h1", action="store_true",
                        help="Keep the first H1 heading (by default it's stripped since Jekyll renders the title)")
    parser.add_argument("--slug", type=str, default="",
                        help="Custom output filename slug (default: derived from input filename)")
    parser.add_argument("--no-byline", action="store_true",
                        help="Skip auto-generated byline header")

    args = parser.parse_args()

    # Read input file
    if not args.input.exists():
        print(f"Error: File not found: {args.input}", file=sys.stderr)
        sys.exit(1)

    content = args.input.read_text(encoding='utf-8')
    filename = args.input.stem

    # Convert
    converted = convert(content, filename, args)

    # Output
    if args.dry_run:
        print(converted)
    elif args.output:
        output_dir = args.output
        output_dir.mkdir(parents=True, exist_ok=True)

        slug = args.slug or slugify(filename)
        output_file = output_dir / f"{slug}.md"

        output_file.write_text(converted, encoding='utf-8')
        print(f"✓ Converted: {args.input.name} → {output_file}")
    else:
        print("Error: Specify --output <dir> or --dry-run", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
