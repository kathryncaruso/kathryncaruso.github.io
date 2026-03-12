#!/usr/bin/env python3
"""
publish_protocol.py

One-command protocol publishing: convert from Obsidian, update the methods
index page, commit, and push.

Usage:
  python3 _scripts/publish_protocol.py \
      "/Users/katie/Obsidian Vault/Mossy/protocols/FILENAME.md" \
      --category biocementation --slug jung-assay

  # Preview without writing or pushing:
  python3 _scripts/publish_protocol.py ... --dry-run

  # Commit but don't push:
  python3 _scripts/publish_protocol.py ... --no-push
"""

import argparse
import re
import subprocess
import sys
import textwrap
from pathlib import Path

# Import conversion functions from the sibling module
sys.path.insert(0, str(Path(__file__).parent))
from obsidian_to_jekyll import convert, slugify, extract_obsidian_frontmatter, extract_title


REPO_ROOT = Path(__file__).resolve().parent.parent
METHODS_DIR = REPO_ROOT / "_methods"
METHODS_PAGE = REPO_ROOT / "_pages" / "methods.md"


def strip_html_tags(text: str) -> str:
    """Remove HTML tags from a string for comparison."""
    return re.sub(r'<[^>]+>', '', text).strip()


def normalize_title(text: str) -> str:
    """Normalize a title for comparison: strip HTML, decode entities, lowercase."""
    text = strip_html_tags(text)
    text = text.replace('&amp;', '&')
    text = text.replace('&#39;', "'")
    text = text.replace('&quot;', '"')
    return text.strip().lower()


def update_methods_page(title: str, slug: str, dry_run: bool = False) -> bool:
    """
    Find the matching method card in _pages/methods.md and:
    1. Remove 'coming-soon' class
    2. Change badge from 'Coming Soon' to 'Available'
    3. Add a Protocol link if not already present

    Returns True if changes were made, False otherwise.
    """
    if not METHODS_PAGE.exists():
        print(f"  ⚠ Methods page not found: {METHODS_PAGE}", file=sys.stderr)
        return False

    content = METHODS_PAGE.read_text(encoding='utf-8')
    lines = content.split('\n')
    normalized_target = normalize_title(title)

    # Find the line with the matching method-title
    # Match if titles are equal, or if one contains the other (cards often
    # use shorter names than the full protocol title)
    title_line_idx = None
    for i, line in enumerate(lines):
        if 'class="method-title"' in line:
            line_title = re.search(r'class="method-title">(.*?)</div>', line)
            if line_title:
                card_title = normalize_title(line_title.group(1))
                if (card_title == normalized_target
                        or card_title in normalized_target
                        or normalized_target in card_title):
                    title_line_idx = i
                    break

    if title_line_idx is None:
        print(f"  ⚠ No matching card found for '{title}' in methods page")
        return False

    # Walk backwards to find the card div opening
    card_start = None
    for i in range(title_line_idx, -1, -1):
        if 'class="method-card' in lines[i]:
            card_start = i
            break

    if card_start is None:
        print(f"  ⚠ Could not find card opening for '{title}'")
        return False

    # Walk forwards to find the card closing </div> (track div depth)
    depth = 0
    card_end = None
    for i in range(card_start, len(lines)):
        depth += lines[i].count('<div')
        depth -= lines[i].count('</div>')
        if depth <= 0:
            card_end = i
            break

    if card_end is None:
        print(f"  ⚠ Could not find card closing for '{title}'")
        return False

    # Extract the card block and apply transformations
    card_lines = lines[card_start:card_end + 1]
    card_text = '\n'.join(card_lines)
    original_card = card_text

    # 1. Remove 'coming-soon' class
    card_text = card_text.replace('class="method-card coming-soon"', 'class="method-card"')

    # 2. Change badge
    card_text = card_text.replace('class="method-status status-soon">Coming Soon</span>',
                                  'class="method-status status-available">Available</span>')

    # 3. Add Protocol link if not present
    protocol_url = f'/methods/{slug}/'
    if protocol_url not in card_text:
        # Find the method-links div, or insert one after method-card-top closing
        if 'class="method-links"' in card_text:
            # Add as first link inside existing method-links div
            card_text = card_text.replace(
                'class="method-links">',
                f'class="method-links">\n        <a class="method-link" href="{protocol_url}">Protocol</a>'
            )
        else:
            # Find closing of method-card-top and insert method-links after it
            card_text = re.sub(
                r'(</span>\s*\n\s*</div>\s*\n\s*</div>)',
                r'\1\n      <div class="method-links">\n'
                f'        <a class="method-link" href="{protocol_url}">Protocol</a>\n'
                r'      </div>',
                card_text,
                count=1
            )

    if card_text == original_card:
        print(f"  ℹ Card for '{title}' already up to date")
        return False

    # Replace the card block in the full content
    new_card_lines = card_text.split('\n')
    lines[card_start:card_end + 1] = new_card_lines
    new_content = '\n'.join(lines)

    if dry_run:
        print(f"\n  Methods page changes for '{title}':")
        for old, new in zip(original_card.split('\n'), card_text.split('\n')):
            if old != new:
                print(f"    - {old.strip()}")
                print(f"    + {new.strip()}")
        return True

    METHODS_PAGE.write_text(new_content, encoding='utf-8')
    print(f"  ✓ Updated methods page card for '{title}'")
    return True


def git_commit_and_push(slug: str, title: str, no_push: bool = False) -> bool:
    """Stage, commit, and optionally push changes."""
    protocol_file = f"_methods/{slug}.md"
    methods_page = "_pages/methods.md"

    # Stage files
    result = subprocess.run(
        ["git", "add", protocol_file, methods_page],
        cwd=REPO_ROOT, capture_output=True, text=True
    )
    if result.returncode != 0:
        print(f"  ✗ git add failed: {result.stderr.strip()}", file=sys.stderr)
        return False

    # Commit
    message = f"Add {title} protocol\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
    result = subprocess.run(
        ["git", "commit", "-m", message],
        cwd=REPO_ROOT, capture_output=True, text=True
    )
    if result.returncode != 0:
        print(f"  ✗ git commit failed: {result.stderr.strip()}", file=sys.stderr)
        return False
    print(f"  ✓ Committed: {title}")

    # Push
    if no_push:
        print("  ℹ Skipping push (--no-push)")
        return True

    result = subprocess.run(
        ["git", "push"],
        cwd=REPO_ROOT, capture_output=True, text=True
    )
    if result.returncode != 0:
        print(f"  ✗ git push failed: {result.stderr.strip()}", file=sys.stderr)
        return False
    print("  ✓ Pushed to remote")
    return True


def main():
    parser = argparse.ArgumentParser(
        description="Publish an Obsidian protocol to the Jekyll site in one step.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=textwrap.dedent("""\
            Examples:
              %(prog)s "/path/to/protocol.md" --category biocementation --slug jung-assay
              %(prog)s "/path/to/protocol.md" --category biocementation --dry-run
              %(prog)s "/path/to/protocol.md" --category biocementation --no-push
        """)
    )

    parser.add_argument("input", type=Path,
                        help="Path to the Obsidian markdown file")
    parser.add_argument("--category", "-c", type=str, default="",
                        help="Category (e.g., biocementation, sphagnum-microbiome)")
    parser.add_argument("--slug", type=str, default="",
                        help="Output filename slug (default: derived from input filename)")
    parser.add_argument("--description", "-d", type=str, default="",
                        help="Short description for front matter")
    parser.add_argument("--dry-run", action="store_true",
                        help="Preview changes without writing files or running git")
    parser.add_argument("--no-push", action="store_true",
                        help="Commit but don't push to remote")
    parser.add_argument("--no-byline", action="store_true",
                        help="Skip auto-generated byline header")

    args = parser.parse_args()

    # Validate input
    if not args.input.exists():
        print(f"Error: File not found: {args.input}", file=sys.stderr)
        sys.exit(1)

    # Read input file and determine title/slug
    content = args.input.read_text(encoding='utf-8')
    filename = args.input.stem
    obsidian_meta, raw_content = extract_obsidian_frontmatter(content)
    title = obsidian_meta.get("title") or extract_title(raw_content, filename)
    slug = args.slug or slugify(filename)

    # Use category from Obsidian front matter if not specified on CLI
    if not args.category and obsidian_meta.get("category"):
        args.category = obsidian_meta["category"]

    print(f"\n📋 Publishing: {title}")
    print(f"   Slug: {slug}")
    print(f"   Category: {args.category or '(none)'}")
    if args.dry_run:
        print("   Mode: DRY RUN\n")
    print()

    # Create a namespace that matches what obsidian_to_jekyll.convert() expects
    convert_args = argparse.Namespace(
        layout="page",
        category=args.category,
        status=obsidian_meta.get("status", "available"),
        description=args.description or obsidian_meta.get("description", ""),
        base_url="/methods/",
        keep_h1=False,
        slug=slug,
        no_byline=args.no_byline,
    )

    # Step 1: Convert
    print("Step 1: Converting Obsidian → Jekyll")
    converted = convert(content, filename, convert_args)

    output_file = METHODS_DIR / f"{slug}.md"
    if args.dry_run:
        print(f"  Would write to: {output_file}")
        print(f"  ({len(converted.splitlines())} lines)")
    else:
        METHODS_DIR.mkdir(parents=True, exist_ok=True)
        output_file.write_text(converted, encoding='utf-8')
        print(f"  ✓ Converted: {args.input.name} → {output_file.relative_to(REPO_ROOT)}")

    # Step 2: Update methods index page
    print("\nStep 2: Updating methods index page")
    update_methods_page(title, slug, dry_run=args.dry_run)

    # Step 3: Git commit and push
    if args.dry_run:
        print("\nStep 3: Would commit and push (skipped in dry-run)")
    else:
        print("\nStep 3: Committing and pushing")
        git_commit_and_push(slug, title, no_push=args.no_push)

    # Summary
    print(f"\n{'[DRY RUN] ' if args.dry_run else ''}Done!")
    print(f"  Protocol URL: https://kathryncaruso.github.io/methods/{slug}/")


if __name__ == "__main__":
    main()
