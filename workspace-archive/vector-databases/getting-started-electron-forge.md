---
title: Getting Started | Electron Forge
archive_category: vector-databases
source_category: ai/rag
source_url: https://electronforge.io
resource_id: blog:getting-started-electron-forge
local_vault_path: ai/rag/getting-started-electron-forge.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: template
importance: medium
tags:
- rag
- web-crawled
- workflows
selection_reason:
- Useful for project building
---

# Getting Started | Electron Forge

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: template
- Selection reasons:
  - Useful for project building

## Summary

- **Electron Forge** provides a unified build pipeline for Electron apps, supporting code signing, installer generation, and artifact publishing via its plugin-based architecture.
- **Packaging limitations**: Requires `node_modules` on disk; incompatible with Yarn PnP and symlinked dependencies; use `node-linker: node-modules` (Yarn) or `node-linker=hoisted` (pnpm) for compatibility.
- **Templates & commands**: Supports `webpack`, `vite`, and TypeScript variants; `make` generates platform-specif

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://electronforge.io

## Local Vault File

Path: [getting-started-electron-forge.md](../../ai/rag/getting-started-electron-forge.md)
