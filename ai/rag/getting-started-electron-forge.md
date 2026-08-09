---
title: Getting Started | Electron Forge
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://electronforge.io
published_at: '2026-08-09T18:58:06.134741+05:30'
collected_at: '2026-08-09T18:58:06.134753+05:30'
tags:
- rag
- web-crawled
- workflows
status: active
resource_id: blog:getting-started-electron-forge
first_seen: '2026-08-09T18:58:06.134753+05:30'
last_seen: '2026-08-09T18:58:06.134753+05:30'
last_checked: '2026-08-09T18:58:06.134753+05:30'
health_score: 100
---

# Getting Started | Electron Forge

## Summary

- **Electron Forge** provides a unified build pipeline for Electron apps, including packaging, code signing, installer generation, and artifact publishing, with extensibility via [Plugins](https://electronforge.io/config/plugins), [Makers](https://electronforge.io/config/makers), and [Publishers](https://electronforge.io/config/publishers).

- **Dependency Handling**: Requires `node_modules` on disk (incompatible with Yarn PnP or symlinked deps); Yarn ≥2 must use `nodeLinker: node-modules`, and pnpm requires `node-linker=hoisted` in `.npmrc`.

- **Initialization & Build Commands**:
  - Scaffold projects via `npx create-electron-app@latest my-app` with optional templates (`webpack`, `vite`, etc.).
  - Build distributables with `make` and publish artifacts via `publish` using supported [Publishers](https://electronforge.io/config/publishers).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T18:58:06.134741+05:30

## Related Tags

- rag
- web-crawled
- workflows

## Source

Original source: https://electronforge.io
