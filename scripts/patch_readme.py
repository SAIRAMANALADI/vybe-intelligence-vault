#!/usr/bin/env python3
"""
Patches README.md with the latest 5 intel items from the most recent harvest.
Run this at the end of your harvest workflow.
"""

import os
import re
import glob
from pathlib import Path
from datetime import datetime

REPO_ROOT = Path(__file__).parent.parent
README_PATH = REPO_ROOT / "README.md"
INTEL_DIR = REPO_ROOT / "intelligence"

START_MARKER = "<!-- INTEL-START -->"
END_MARKER = "<!-- INTEL-END -->"


def get_latest_intel_file():
    """Find the most recently modified intelligence markdown file."""
    files = list(INTEL_DIR.rglob("*.md"))
    if not files:
        return None
    return max(files, key=lambda f: f.stat().st_mtime)


def extract_top_items(filepath, n=5):
    """Extract first n bullet-point items from a markdown file."""
    content = filepath.read_text(encoding="utf-8")
    lines = content.split("\n")
    items = []
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("- ") or stripped.startswith("* "):
            items.append(stripped)
        if len(items) >= n:
            break
    return items


def build_intel_block(items, source_file):
    today = datetime.utcnow().strftime("%Y-%m-%d")
    lines = [f"<!-- last updated: {today} -->"]
    lines.append(f"*Showing top {len(items)} picks from [`{source_file.name}`](./intelligence/) — {today} UTC*\n")
    for item in items:
        lines.append(item)
    lines.append(f"\n> 📂 [Browse all intelligence →](./intelligence/)")
    return "\n".join(lines)


def patch_readme(intel_block):
    content = README_PATH.read_text(encoding="utf-8")
    pattern = re.compile(
        re.escape(START_MARKER) + r".*?" + re.escape(END_MARKER),
        re.DOTALL
    )
    replacement = f"{START_MARKER}\n{intel_block}\n{END_MARKER}"
    new_content = pattern.sub(replacement, content)
    if new_content == content:
        print("⚠️  Markers not found in README. Did you add PATCH 3?")
        return False
    README_PATH.write_text(new_content, encoding="utf-8")
    print(f"✅ README patched with {intel_block.count(chr(10))} lines of intel.")
    return True


if __name__ == "__main__":
    latest = get_latest_intel_file()
    if not latest:
        print("No intel files found. Skipping README patch.")
        exit(0)

    items = extract_top_items(latest, n=5)
    if not items:
        print("No bullet items found in latest intel file. Skipping.")
        exit(0)

    block = build_intel_block(items, latest)
    patch_readme(block)
