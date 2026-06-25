---
title: Install WSL | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
published_at: '2026-06-26T01:59:20.617607+05:30'
collected_at: '2026-06-26T01:59:20.617617+05:30'
tags:
- hackernews
- producthunt
- rag
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:install-wsl-microsoft-learn
first_seen: '2026-06-26T01:59:20.617617+05:30'
last_seen: '2026-06-26T01:59:20.617617+05:30'
last_checked: '2026-06-26T01:59:20.617617+05:30'
health_score: 100
---

# Install WSL | Microsoft Learn

## Summary

- **WSL Installation & Requirements**: Requires Windows 10 (v2004+) or Windows 11; single-command install via `wsl --install` (enables WSL and installs Ubuntu by default). Older versions require manual steps or `wsl --install -d <Distro>` for custom distributions.

- **Version Management & Configuration**: Defaults to WSL 2; versions can be checked with `wsl -l -v` and modified via `wsl --set-version <Distro> <1|2>`. Default distro/user setup is required post-installation.

- **Multi-Distro & Advanced Usage**: Supports concurrent distros (e.g., Ubuntu, Debian) via `wsl --list --online`; offline install requires MSI + `.wsl` files. Preview features available via Windows Insider channels or `wsl.exe --update --pre-release`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T01:59:20.617607+05:30

## Related Tags

- hackernews
- producthunt
- rag
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://learn.microsoft.com/en-us/windows/wsl/install
