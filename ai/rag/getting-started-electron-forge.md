---
title: Getting Started | Electron Forge
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://electronforge.io
published_at: '2026-08-02T03:52:24.556000+05:30'
collected_at: '2026-08-02T03:52:24.556013+05:30'
tags:
- rag
- web-crawled
- workflows
status: active
resource_id: blog:getting-started-electron-forge
first_seen: '2026-08-02T03:52:24.556013+05:30'
last_seen: '2026-08-02T03:52:24.556013+05:30'
last_checked: '2026-08-02T03:52:24.556013+05:30'
health_score: 100
---

# Getting Started | Electron Forge

## Summary

- **Electron Forge** provides a unified build pipeline for Electron apps, including packaging, code signing, installer generation, and artifact publishing, with extensibility via [Plugins](https://electronforge.io/config/plugins), [Makers](https://electronforge.io/config/makers), and [Publishers](https://electronforge.io/config/publishers).

- **Packaging dependencies** require `node_modules` on disk (excludes Yarn PnP and symlinked deps); Yarn ≥2 must use `nodeLinker: node-modules`, while pnpm requires `node-linker=hoisted` in `.npmrc`.

- **Initialization** uses `npx create-electron-app@latest my-app` with optional templates (`webpack`, `vite`, etc.), while `forge make` generates platform-specific distributables and `forge publish` uploads them via configured publishers (e.g., GitHub).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T03:52:24.556000+05:30

## Related Tags

- rag
- web-crawled
- workflows

## Source

Original source: https://electronforge.io
