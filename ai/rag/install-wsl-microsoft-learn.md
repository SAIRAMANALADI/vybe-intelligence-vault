---
title: Install WSL | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
published_at: '2026-07-02T15:09:09.655940+05:30'
collected_at: '2026-07-02T15:09:09.655952+05:30'
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
first_seen: '2026-07-02T15:09:09.655952+05:30'
last_seen: '2026-07-02T15:09:09.655952+05:30'
last_checked: '2026-07-02T15:09:09.655952+05:30'
health_score: 100
---

# Install WSL | Microsoft Learn

## Summary

- **WSL Installation & Requirements**: WSL requires Windows 10 (v2004+) or Windows 11; install via `wsl --install` (enables WSL and installs Ubuntu by default). Older systems require manual steps or `wsl --install -d <Distro>` to specify a distribution.

- **WSL Versions & Management**: WSL 2 is default for new installs; switch versions via `wsl --set-version <Distro> <1|2>`. List distributions with `wsl -l -v` and set defaults using `wsl --set-default <Distro>`.

- **Offline & Custom Install**: Offline WSL requires MSI package + `dism.exe` for VM enablement, followed by `.wsl` file installation. Custom distros can be imported or built via TAR/.appx files.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T15:09:09.655940+05:30

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
