---
title: Install WSL | Microsoft Learn
archive_category: vector-databases
source_category: ai/rag
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
resource_id: blog:install-wsl-microsoft-learn
local_vault_path: ai/rag/install-wsl-microsoft-learn.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- producthunt
- rag
- reddit
- web-crawled
- workflows
- youtube
selection_reason:
- Valuable developer reference
---

# Install WSL | Microsoft Learn

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **WSL Installation**: Requires Windows 10 (v2004+) or Windows 11; single-command install via `wsl --install` (enables WSL and installs Ubuntu by default; `-d [Distro]` flag changes default distro; `--list --online` lists available distros).

- **WSL Versions & Management**: WSL 2 is default for new installs; version toggling via `wsl --set-version <Distro> <1|2>`; version check with `wsl -l -v`; default distro set via `wsl --set-default <Distro>`.

- **Offline & Advanced Install**: Offline ins

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://learn.microsoft.com/en-us/windows/wsl/install

## Local Vault File

Path: [install-wsl-microsoft-learn.md](../../ai/rag/install-wsl-microsoft-learn.md)
