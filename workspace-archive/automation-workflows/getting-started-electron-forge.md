---
title: Getting Started | Electron Forge
archive_category: automation-workflows
source_category: ai/rag
source_url: https://electronforge.io
resource_id: blog:getting-started-electron-forge
local_vault_path: ai/rag/getting-started-electron-forge.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: template
importance: medium
tags:
- rag
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Useful for project building
---

# Getting Started | Electron Forge

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: template
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Electron Forge** is a unified build system for Electron apps, integrating packaging, code signing, installer generation, and artifact publishing via a plugin-based architecture.
- **Packaging constraints**: Requires `node_modules` on disk; incompatible with Yarn PnP and symlinked dependencies; Yarn ≥2 must use `nodeLinker: node-modules`, pnpm must set `node-linker=hoisted` in `.npmrc`.
- **Initialization & distribution**: Uses `create-electron-app` with templates (Webpack/Vite, TS variants);

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://electronforge.io

## Local Vault File

Path: [getting-started-electron-forge.md](../../ai/rag/getting-started-electron-forge.md)
