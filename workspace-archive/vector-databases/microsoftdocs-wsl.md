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

- **WSL Installation**: Single-command installation via `wsl --install` in PowerShell (admin) enables WSL and installs Ubuntu by default; supports Windows 10 (v2004+) and Windows 11.
- **Version Management**: WSL 2 is default for new installs; versions can be toggled via `wsl --set-version <Distro> <1|2>`; version visibility via `wsl -l -v`.
- **Offline/Advanced Install**: Requires MSI package + `dism.exe` for VM Platform enablement; distributions installed via `.wsl` files from GitHub.

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://github.com/MicrosoftDocs/wsl/blob/main/WSL/install.md

## Local Vault File

Path: [microsoftdocs-wsl.md](../../ai/rag/microsoftdocs-wsl.md)
