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

- **Electron Forge** integrates a full build pipeline (packaging, code signing, installers, artifact publishing) with extensibility via [Plugins](https://electronforge.io/config/plugins), [Makers](https://electronforge.io/config/makers), and [Publishers](https://electronforge.io/config/publishers) for custom build logic and storage targets.

- **Packaging constraints** require `node_modules` on disk; Yarn ≥2 must use `nodeLinker: node-modules`, and pnpm requires `node-linker=hoisted` in `.npmrc`

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://electronforge.io

## Local Vault File

Path: [getting-started-electron-forge.md](../../ai/rag/getting-started-electron-forge.md)
