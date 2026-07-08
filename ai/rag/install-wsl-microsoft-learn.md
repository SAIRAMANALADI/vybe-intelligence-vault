---
title: Install WSL | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
published_at: '2026-07-08T09:22:26.398833+05:30'
collected_at: '2026-07-08T09:22:26.398846+05:30'
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
first_seen: '2026-07-08T09:22:26.398846+05:30'
last_seen: '2026-07-08T09:22:26.398846+05:30'
last_checked: '2026-07-08T09:22:26.398846+05:30'
health_score: 100
---

# Install WSL | Microsoft Learn

## Summary

- **WSL Installation & Requirements**: WSL requires Windows 10 (v2004+) or Windows 11; install via `wsl --install` (enables WSL and installs Ubuntu by default). Older systems require manual steps or legacy WSL removal.

- **Version & Distribution Management**: Default WSL version is 2; upgrade/downgrade via `wsl --set-version <Distro> <1|2>`. List/install distros with `wsl --list --online` and `-d <Distro>`, or import custom TAR/.appx files.

- **Execution & Configuration**: Run distros via `wsl` (default), `wsl -d <Distro>`, or Windows Terminal. Set defaults with `wsl --set-default <Distro>`; offline install requires MSI + DISM + manual distro import.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T09:22:26.398833+05:30

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
