---
title: Install WSL | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
published_at: '2026-06-27T01:45:13.699567+05:30'
collected_at: '2026-06-27T01:45:13.699581+05:30'
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
first_seen: '2026-06-27T01:45:13.699581+05:30'
last_seen: '2026-06-27T01:45:13.699581+05:30'
last_checked: '2026-06-27T01:45:13.699581+05:30'
health_score: 100
---

# Install WSL | Microsoft Learn

## Summary

- **WSL Installation**: Requires Windows 10 (2004+) or Windows 11; single-command install via `wsl --install` (enables WSL and installs Ubuntu by default). For older builds, use manual steps or `wsl --install -d <Distro>` to specify a distribution. Offline install requires MSI package and manual feature enablement (`VirtualMachinePlatform`).

- **Version Management**: WSL 2 is default for new installs; versions can be checked with `wsl -l -v` and modified via `wsl --set-version <Distro> <1|2>`. Default version is set with `wsl --set-default-version <1|2>`, and default distro with `wsl --set-default <Distro>`.

- **Multi-Distro Execution**: Run multiple distros via Windows Terminal (recommended), Start menu, or PowerShell (`wsl [command]`). Preview features available via Windows Insider channels or `wsl.exe --update --pre-release`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T01:45:13.699567+05:30

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
