---
title: Getting Started | Electron Forge
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://electronforge.io
published_at: '2026-06-26T04:29:07.204646+05:30'
collected_at: '2026-06-26T04:29:07.204659+05:30'
tags:
- rag
- web-crawled
- workflows
status: active
resource_id: blog:getting-started-electron-forge
first_seen: '2026-06-26T04:29:07.204659+05:30'
last_seen: '2026-06-26T04:29:07.204659+05:30'
last_checked: '2026-06-26T04:29:07.204659+05:30'
health_score: 100
---

# Getting Started | Electron Forge

## Summary

- **Electron Forge** is a unified build system for Electron apps, integrating packaging, code signing, installer generation, and artifact publishing via a modular plugin architecture (e.g., [Plugins](https://electronforge.io/config/plugins), [Makers](https://electronforge.io/config/makers), [Publishers](https://electronforge.io/config/publishers)).

- **Dependency Handling**: Requires `node_modules` on disk (incompatible with Yarn PnP or symlinked deps); Yarn ≥2 must use `nodeLinker: node-modules`, and pnpm requires `node-linker=hoisted` in `.npmrc`.

- **Initialization & Build Commands**:
  - Scaffold projects via `npx create-electron-app@latest my-app` with optional templates (`webpack`, `vite`, etc.).
  - Generate distributables via `make` and publish artifacts via `publish` using configured [Publishers](https://electronforge.io/config/publishers).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T04:29:07.204646+05:30

## Related Tags

- rag
- web-crawled
- workflows

## Source

Original source: https://electronforge.io
