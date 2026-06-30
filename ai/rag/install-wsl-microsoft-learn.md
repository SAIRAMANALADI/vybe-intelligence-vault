---
title: Install WSL | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
published_at: '2026-06-30T20:20:08.398247+05:30'
collected_at: '2026-06-30T20:20:08.398264+05:30'
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
first_seen: '2026-06-30T20:20:08.398264+05:30'
last_seen: '2026-06-30T20:20:08.398264+05:30'
last_checked: '2026-06-30T20:20:08.398264+05:30'
health_score: 100
---

# Install WSL | Microsoft Learn

## Summary

- **WSL Installation**: WSL can be installed via `wsl --install` (Windows 10 2004+/Win11), enabling Linux distros (e.g., Ubuntu) without a VM. Older systems require manual steps or `--list --online` to select a distro (`wsl --install -d <Distro>`).

- **WSL Versions & Management**: WSL 2 is default; versions can be checked with `wsl -l -v` and switched via `wsl --set-version <Distro> <1|2>`. Default distros/commands are configurable (`wsl --set-default <Distro>`).

- **Offline/Advanced Setup**: Offline installs require downloading WSL MSI, enabling `VirtualMachinePlatform` via DISM, and installing distros via `.wsl` files. Preview features are accessible via Windows Insider channels or `wsl.exe --update --pre-release`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T20:20:08.398247+05:30

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
