---
title: Install WSL | Microsoft Learn
archive_category: automation-workflows
source_category: ai/rag
source_url: https://learn.microsoft.com/en-us/windows/wsl/install
resource_id: blog:install-wsl-microsoft-learn
local_vault_path: ai/rag/install-wsl-microsoft-learn.md
quality_score: 70
archive_score: 72
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
- Valuable developer reference
---

# Install WSL | Microsoft Learn

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **WSL Installation**: WSL can be installed via `wsl --install` (Windows 10 2004+/Win11), enabling Linux distros (e.g., Ubuntu) without a VM. Older systems require manual steps or `--list --online` to select a distro (`wsl --install -d <Distro>`).

- **WSL Versions & Management**: WSL 2 is default; versions can be checked with `wsl -l -v` and switched via `wsl --set-version <Distro> <1|2>`. Default distros/commands are configurable (`wsl --set-default <Distro>`).

- **Offline/Advanced Setup**:

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://learn.microsoft.com/en-us/windows/wsl/install

## Local Vault File

Path: [install-wsl-microsoft-learn.md](../../ai/rag/install-wsl-microsoft-learn.md)
