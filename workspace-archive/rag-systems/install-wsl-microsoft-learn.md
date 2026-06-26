---
title: Install WSL | Microsoft Learn
archive_category: rag-systems
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

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **WSL Installation**: Requires Windows 10 (2004+) or Windows 11; single-command install via `wsl --install` (enables WSL and installs Ubuntu by default). For older builds, use manual steps or `wsl --install -d <Distro>` to specify a distribution. Offline install requires MSI package and manual feature enablement (`VirtualMachinePlatform`).

- **Version Management**: WSL 2 is default for new installs; versions can be checked with `wsl -l -v` and modified via `wsl --set-version <Distro> <1|2>`.

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://learn.microsoft.com/en-us/windows/wsl/install

## Local Vault File

Path: [install-wsl-microsoft-learn.md](../../ai/rag/install-wsl-microsoft-learn.md)
