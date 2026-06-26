---
title: WSL/WSL/install.md at main · MicrosoftDocs/WSL · GitHub
archive_category: vector-databases
source_category: ai/rag
source_url: https://github.com/MicrosoftDocs/wsl/blob/main/WSL/install.md
resource_id: github:microsoftdocs/wsl
local_vault_path: ai/rag/microsoftdocs-wsl.md
quality_score: 70
archive_score: 75
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- producthunt
- rag
- reddit
- web-crawled
- workflows
- youtube
selection_reason:
- Active open-source repository
---

# WSL/WSL/install.md at main · MicrosoftDocs/WSL · GitHub

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Active open-source repository

## Summary

- **Single-command WSL installation**: Execute `wsl --install` in **admin PowerShell** to enable WSL, install WSL 2, and default to Ubuntu; requires Windows 10 (2004+) or Windows 11.
- **Version control & defaults**: Use `wsl --list --online` to list distros, `wsl --install -d <Distro>` to specify a non-default distro, and `wsl --set-default-version <1|2>` to configure WSL version per distro.
- **Offline installation**: Download the WSL MSI package, enable `VirtualMachinePlatform` via `dism.exe`

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://github.com/MicrosoftDocs/wsl/blob/main/WSL/install.md

## Local Vault File

Path: [microsoftdocs-wsl.md](../../ai/rag/microsoftdocs-wsl.md)
