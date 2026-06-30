---
title: WSL/WSL/install.md at main · MicrosoftDocs/WSL · GitHub
archive_category: automation-workflows
source_category: ai/rag
source_url: https://github.com/MicrosoftDocs/wsl/blob/main/WSL/install.md
resource_id: github:microsoftdocs/wsl
local_vault_path: ai/rag/microsoftdocs-wsl.md
quality_score: 70
archive_score: 77
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
- Strong keyword match
- Active open-source repository
---

# WSL/WSL/install.md at main · MicrosoftDocs/WSL · GitHub

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **Single-command WSL installation**: Run `wsl --install` in **admin** PowerShell to enable WSL and install Ubuntu by default; requires Windows 10 (2004+) or Windows 11.
- **Version management**: WSL 2 is default for new installs; toggle versions via `wsl --set-version <Distro> <1|2>` or set default with `wsl --set-default-version <1|2>`.
- **Offline/advanced installs**: Use MSI + DISM (`dism.exe /online /enable-feature /featurename:VirtualMachinePlatform`) or import custom distros via `.wsl`/`

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://github.com/MicrosoftDocs/wsl/blob/main/WSL/install.md

## Local Vault File

Path: [microsoftdocs-wsl.md](../../ai/rag/microsoftdocs-wsl.md)
