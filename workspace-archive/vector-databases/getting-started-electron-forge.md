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
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
- workflows
selection_reason:
- Valuable developer reference
---

# Getting Started | Electron Forge

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Electron Forge** is an all-in-one tool for packaging and distributing Electron apps, providing a full build pipeline with built-in support for code signing, installers, and artifact publishing.
- **Packaging limitations**: Forge requires `node_modules` on disk (no symlinks or Yarn PnP support); Yarn ≥2 must use `nodeLinker: node-modules`, and pnpm requires `node-linker=hoisted` in `.npmrc`.
- **Customization**: Supports advanced workflows via Plugin API, custom Makers (build targets), and Pu

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://electronforge.io

## Local Vault File

Path: [getting-started-electron-forge.md](../../ai/rag/getting-started-electron-forge.md)
