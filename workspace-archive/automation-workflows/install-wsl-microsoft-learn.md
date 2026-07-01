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

- **WSL Installation**: WSL can be installed via `wsl --install` in PowerShell (admin) on Windows 10 (2004+) or Windows 11, enabling Linux distro integration (e.g., Ubuntu) without a VM. Legacy systems require manual steps or `wsl --list --online` + `wsl --install -d <Distro>` for specific distributions.

- **WSL Version Management**: WSL 2 is default for new installs (`wsl -l -v`). Version upgrades/downgrades use `wsl --set-version <Distro> <1|2>`. Default distro/user setup is configured post-i

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://learn.microsoft.com/en-us/windows/wsl/install

## Local Vault File

Path: [install-wsl-microsoft-learn.md](../../ai/rag/install-wsl-microsoft-learn.md)
