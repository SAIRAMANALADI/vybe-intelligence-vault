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

- **Electron Forge** is a unified build pipeline for Electron apps, integrating code signing, installers, and artifact publishing; supports customization via **Plugin API**, **Makers**, and **Publishers** for advanced workflows.
- **Packaging dependencies** require `node_modules` on disk; incompatible with Yarn ≥2 PnP and naive module resolution—use `nodeLinker: node-modules` (Yarn) or `node-linker=hoisted` (pnpm) in `.npmrc`.
- **Templates** (`webpack`, `vite`, etc.) streamline project initiali

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://electronforge.io

## Local Vault File

Path: [getting-started-electron-forge.md](../../ai/rag/getting-started-electron-forge.md)
