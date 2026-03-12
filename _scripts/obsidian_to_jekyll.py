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
from pathlib import Path


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
    """
    metadata = {}
    if content.startswith('---'):
        end = content.find('---', 3)
        if end != -1:
            yaml_block = content[3:end].strip()
            for line in yaml_block.split('\n'):
                if ':' in line:
                    key, _, value = line.partition(':')
                    metadata[key.strip()] = value.strip().strip('"').strip("'")
            content = content[end + 3:].strip()
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


def convert_callouts(content: str) -> str:
    """
    Convert Obsidian callouts to Bootstrap alert divs or <details> elements.

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

            # Collect all continuation lines (lines starting with >)
            body_lines = []
            i += 1
            while i < len(lines) and re.match(r'^>\s?', lines[i]):
                # Strip the leading > and optional space
                body_line = re.sub(r'^>\s?', '', lines[i])
                body_lines.append(body_line)
                i += 1

            body_content = '\n'.join(body_lines).strip()

            if fold:
                # Foldable callout → <details> with Bootstrap styling
                open_attr = ' open' if fold == '+' else ''
                result.append(f'<details{open_attr} class="{alert_class} alert" markdown="1">')
                result.append(f'<summary><strong>{display_title}</strong></summary>')
                result.append('')
                result.append(body_content)
                result.append('')
                result.append('</details>')
                result.append('')
            else:
                # Standard callout → Bootstrap alert div
                result.append(f'<div class="{alert_class} alert" role="alert" markdown="1">')
                result.append(f'**{display_title}**')
                result.append('')
                result.append(body_content)
                result.append('')
                result.append('</div>')
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


def strip_first_h1(content: str) -> str:
    """
    Remove the first H1 heading from content (since Jekyll front matter
    title will render it).
    """
    return re.sub(r'^#\s+.+\n*', '', content, count=1)


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

    # 5. Convert Obsidian-specific syntax
    content = remove_obsidian_comments(content)
    content = convert_callouts(content)
    content = convert_wikilinks(content, base_url=args.base_url)
    content = convert_highlights(content)

    # 6. Clean up extra blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    return front_matter + '\n\n' + content.strip() + '\n'


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
