---
title: Install WSL | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
published_at: '2026-06-28T15:10:15.575725+05:30'
collected_at: '2026-06-28T15:10:15.575743+05:30'
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
first_seen: '2026-06-28T15:10:15.575743+05:30'
last_seen: '2026-06-28T15:10:15.575743+05:30'
last_checked: '2026-06-28T15:10:15.575743+05:30'
health_score: 100
---

# Install WSL | Microsoft Learn

## Summary

- **WSL Installation**: Requires Windows 10 (v2004+) or Windows 11; single-command install via `wsl --install` (enables WSL and installs Ubuntu by default). Older systems require manual steps or `-d [Distro]` flag for specific distributions.

- **WSL Versions & Management**: Defaults to WSL 2 for new installs; version toggling via `wsl --set-version <Distro> <1|2>`. List distributions with `wsl -l -v` and set defaults using `wsl --set-default <Distro>`.

- **Offline & Custom Install**: Offline install requires MSI package + `dism.exe` enablement of VirtualMachinePlatform. Custom distributions can be imported via `.wsl`/`.appx` files or built from TAR.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T15:10:15.575725+05:30

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
