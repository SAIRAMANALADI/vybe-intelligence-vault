---
title: Install WSL | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
published_at: '2026-07-03T22:23:49.252191+05:30'
collected_at: '2026-07-03T22:23:49.252206+05:30'
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
first_seen: '2026-07-03T22:23:49.252206+05:30'
last_seen: '2026-07-03T22:23:49.252206+05:30'
last_checked: '2026-07-03T22:23:49.252206+05:30'
health_score: 100
---

# Install WSL | Microsoft Learn

## Summary

- **WSL Installation**: Requires Windows 10 (v2004+) or Windows 11; single-command install via `wsl --install` (enables WSL and installs Ubuntu by default; `-d [Distro]` flag changes default distro; `--list --online` lists available distros).

- **WSL Versions & Management**: WSL 2 is default for new installs; version toggling via `wsl --set-version <Distro> <1|2>`; version check with `wsl -l -v`; default distro set via `wsl --set-default <Distro>`.

- **Offline & Advanced Install**: Offline install requires WSL MSI package + `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform`; custom distros importable via `.wsl`/`.appx` or built from TAR; preview features via Windows Insider or `wsl.exe --update --pre-release`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T22:23:49.252191+05:30

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
