---
title: cli/docs/install_linux.md at trunk · cli/cli · GitHub
archive_category: rag-systems
source_category: ai/rag
source_url: https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian
resource_id: github:cli/cli
local_vault_path: ai/rag/cli-cli.md
quality_score: 70
archive_score: 87
archive_tier: essential
resource_kind: tutorial
importance: high
tags:
- hackernews
- rag
- reddit
- web-crawled
- workflows
- youtube
selection_reason:
- Strong keyword match
- Active open-source repository
---

# cli/docs/install_linux.md at trunk · cli/cli · GitHub

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 87 (essential)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- Official Debian/Ubuntu installation uses signed APT repository with keyring `githubcli-archive-keyring.gpg` (SHA256: `6084d5d7bd8e288441e0e94fc6275570895da18e6751f70f057485dc2d1a811b`) and installs via `apt install gh`.
- RPM-based systems (Fedora, RHEL, openSUSE) use signed repository via `gh-cli.repo` with key verification via `gpg --show-keys` against fingerprints `2C6106201985B60E6C7AC87323F3D4EA75716059` and `7F38BBB59D064DBCB3D84D725612B36462313325`.
- FreeBSD/OpenBSD ports install `gh`

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian

## Local Vault File

Path: [cli-cli.md](../../ai/rag/cli-cli.md)
