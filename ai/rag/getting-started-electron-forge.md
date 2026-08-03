---
title: Getting Started | Electron Forge
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://electronforge.io
published_at: '2026-08-03T20:58:55.469414+05:30'
collected_at: '2026-08-03T20:58:55.469426+05:30'
tags:
- rag
- web-crawled
- workflows
status: active
resource_id: blog:getting-started-electron-forge
first_seen: '2026-08-03T20:58:55.469426+05:30'
last_seen: '2026-08-03T20:58:55.469426+05:30'
last_checked: '2026-08-03T20:58:55.469426+05:30'
health_score: 100
---

# Getting Started | Electron Forge

## Summary

- **Electron Forge** is a unified build pipeline for Electron apps, supporting code signing, installers, and artifact publishing; customization via **Plugin API**, **Makers**, and **Publishers** is possible for advanced workflows.
- **Packaging constraints**: Requires `node_modules` on disk; does not support Yarn PnP or symlinked dependencies—use `nodeLinker: node-modules` (Yarn ≥2) or `node-linker=hoisted` (pnpm) in `.npmrc`.
- **Initialization & templates**: Use `npx create-electron-app@latest` with optional `--template` (e.g., `webpack`, `vite`) for modern JS tooling; distributables generated via `make`, published via `publish` with configurable publishers (e.g., GitHub).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T20:58:55.469414+05:30

## Related Tags

- rag
- web-crawled
- workflows

## Source

Original source: https://electronforge.io
