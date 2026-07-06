---
title: Install pipx - pipx
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://pipx.pypa.io/stable/how-to/install-pipx/
published_at: '2026-07-07T01:01:09.677881+05:30'
collected_at: '2026-07-07T01:01:09.677897+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:install-pipx-pipx
first_seen: '2026-07-07T01:01:09.677897+05:30'
last_seen: '2026-07-07T01:01:09.677897+05:30'
last_checked: '2026-07-07T01:01:09.677897+05:30'
health_score: 100
---

# Install pipx - pipx

## Summary

- **Requirements**: Python 3.10+ required for installation; `pip` must be installed for Python 3.x; supports macOS, Linux, Windows, and FreeBSD.
- **Installation Methods**:
  - **macOS**: `brew install pipx` + `pipx ensurepath` (use `--global`/ `--prepend` for advanced PATH control).
  - **Linux**: Distro-specific (`apt install pipx`, `dnf install pipx`) or `python3 -m pip install --user pipx` (avoid `pip install --user` on PEP 668-compliant systems).
  - **Windows**: Via Scoop (`scoop install pipx`) or `py -m pip install --user pipx` (handle PATH warnings manually).
- **Advanced Usage**:
  - Install packages from Git (e.g., `pipx install git+https://github.com/psf/black.git`) or PRs (using fork/branch/commit hashes).
  - Self-manage pipx via `pipx install pipx` in a temporary venv for auto-upgrades.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-07T01:01:09.677881+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://pipx.pypa.io/stable/how-to/install-pipx/
