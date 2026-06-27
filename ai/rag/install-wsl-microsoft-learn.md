---
title: Install WSL | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
published_at: '2026-06-27T16:40:21.588864+05:30'
collected_at: '2026-06-27T16:40:21.588878+05:30'
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
first_seen: '2026-06-27T16:40:21.588878+05:30'
last_seen: '2026-06-27T16:40:21.588878+05:30'
last_checked: '2026-06-27T16:40:21.588878+05:30'
health_score: 100
---

# Install WSL | Microsoft Learn

## Summary

- **WSL Installation**: Requires Windows 10 (v2004+) or Windows 11; single-command install via `wsl --install` (enables WSL and installs Ubuntu by default). Older versions require manual steps or `wsl --install -d <Distro>` for specific distributions.

- **WSL Versions & Management**: New installs default to WSL 2; versions can be checked/modified via `wsl -l -v` and `wsl --set-version <Distro> <1|2>`. Default distro/user setup is configured post-installation.

- **Offline & Advanced Install**: Offline installs require MSI package + `dism.exe` enablement of VirtualMachinePlatform; custom distros can be imported via `.wsl`/`.appx` or built from TAR files. Preview features available via Windows Insider channels or `wsl.exe --update --pre-release`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T16:40:21.588864+05:30

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
