---
title: Install WSL | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
published_at: '2026-07-01T20:49:07.447354+05:30'
collected_at: '2026-07-01T20:49:07.447379+05:30'
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
first_seen: '2026-07-01T20:49:07.447379+05:30'
last_seen: '2026-07-01T20:49:07.447379+05:30'
last_checked: '2026-07-01T20:49:07.447379+05:30'
health_score: 100
---

# Install WSL | Microsoft Learn

## Summary

- **WSL Installation**: WSL can be installed via `wsl --install` in PowerShell (admin) on Windows 10 (2004+) or Windows 11, enabling Linux distro integration (e.g., Ubuntu) without a VM. Legacy systems require manual steps or `wsl --list --online` + `wsl --install -d <Distro>` for specific distributions.

- **WSL Version Management**: WSL 2 is default for new installs (`wsl -l -v`). Version upgrades/downgrades use `wsl --set-version <Distro> <1|2>`. Default distro/user setup is configured post-install via `wsl.exe --set-default` and Linux account creation.

- **Offline/Advanced Setup**: Offline installs require downloading WSL MSI + enabling `VirtualMachinePlatform` via DISM, then installing distros via `.wsl` files. Multi-distro support includes custom imports/builds, with execution via Windows Terminal, Start menu, or PowerShell (`wsl [command]`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T20:49:07.447354+05:30

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
