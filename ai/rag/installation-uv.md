---
title: Installation | uv
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.astral.sh/uv/getting-started/installation/
published_at: '2026-08-09T21:31:17.524857+05:30'
collected_at: '2026-08-09T21:31:17.524873+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:installation-uv
first_seen: '2026-08-09T21:31:17.524873+05:30'
last_seen: '2026-08-09T21:31:17.524873+05:30'
last_checked: '2026-08-09T21:31:17.524873+05:30'
health_score: 100
---

# Installation | uv

## Summary

- **Standalone Installation**: Supports direct script-based installation via `curl`/`wget` (macOS/Linux) or `irm` (Windows), with version pinning via URL (`https://astral.sh/uv/{version}/install.sh`). Scripts can be inspected before execution (e.g., `curl ... | less`).
- **Package Manager Options**: Available via PyPI (`pipx install uv`), Homebrew (`brew install uv`), MacPorts (`sudo port install uv`), WinGet (`winget install --id=astral-sh.uv -e`), Scoop (`scoop install main/uv`), and Cargo (`cargo install --locked uv`; requires Rust toolchain).
- **Self-Updates & Shell Integration**: Supports `uv self update` for standalone installs; shell autocompletion requires running `uv generate-shell-completion {shell}` and adding the output to shell config files (e.g., `~/.bashrc`). Uninstallation involves removing binaries (`~/.local/bin/uv*`) and cached data (`uv cache clean`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T21:31:17.524857+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://docs.astral.sh/uv/getting-started/installation/
