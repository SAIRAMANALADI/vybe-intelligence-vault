---
title: WSL/WSL/install.md at main · MicrosoftDocs/WSL · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/MicrosoftDocs/wsl/blob/main/WSL/install.md
published_at: '2026-06-27T01:46:18.635313+05:30'
collected_at: '2026-06-27T01:46:18.635326+05:30'
tags:
- hackernews
- producthunt
- rag
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: github:microsoftdocs/wsl
first_seen: '2026-06-27T01:46:18.635326+05:30'
last_seen: '2026-06-27T01:46:18.635326+05:30'
last_checked: '2026-06-27T01:46:18.635326+05:30'
health_score: 100
---

# WSL/WSL/install.md at main · MicrosoftDocs/WSL · GitHub

## Summary

- **Single-command WSL installation**: Execute `wsl --install` in **admin PowerShell** to enable WSL, install WSL 2, and default to Ubuntu; requires Windows 10 (2004+) or Windows 11.
- **Version control & defaults**: Use `wsl --list --online` to list distros, `wsl --install -d <Distro>` to specify a non-default distro, and `wsl --set-default-version <1|2>` to configure WSL version per distro.
- **Offline installation**: Download the WSL MSI package, enable `VirtualMachinePlatform` via `dism.exe`, then install a distro using its `.wsl` file from [DistributionInfo.json](https://github.com/microsoft/WSL/blob/master/distributions/DistributionInfo.json).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T01:46:18.635313+05:30

## Related Tags

- hackernews
- producthunt
- rag
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://github.com/MicrosoftDocs/wsl/blob/main/WSL/install.md
