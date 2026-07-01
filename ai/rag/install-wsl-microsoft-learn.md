---
title: Install WSL | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
published_at: '2026-07-01T23:00:12.246175+05:30'
collected_at: '2026-07-01T23:00:12.246184+05:30'
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
first_seen: '2026-07-01T23:00:12.246184+05:30'
last_seen: '2026-07-01T23:00:12.246184+05:30'
last_checked: '2026-07-01T23:00:12.246184+05:30'
health_score: 100
---

# Install WSL | Microsoft Learn

## Summary

- **WSL Installation**: Requires Windows 10 (v2004+) or Windows 11; single-command install via `wsl --install` (enables WSL and installs Ubuntu by default). Older systems require manual steps or `wsl --install -d <Distro>` for custom distributions.

- **Version Management**: WSL 2 is default for new installs; versions can be checked with `wsl -l -v` and modified via `wsl --set-version <Distro> <1|2>`. Default distro/set version commands: `wsl --set-default <Distro>` or `wsl --set-default-version <1|2>`.

- **Offline/Advanced Setup**: Offline installs require downloading WSL MSI, enabling `VirtualMachinePlatform` via DISM, and installing distros via `.wsl` files from GitHub. Preview features available via Windows Insider channels or `wsl.exe --update --pre-release`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T23:00:12.246175+05:30

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
