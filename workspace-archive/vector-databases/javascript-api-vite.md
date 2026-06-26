---
title: JavaScript API | Vite
archive_category: vector-databases
source_category: ai/rag
source_url: https://vite.dev/guide/api-javascript#loadenv
resource_id: blog:javascript-api-vite
local_vault_path: ai/rag/javascript-api-vite.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- frontend_ui
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Valuable developer reference
---

# JavaScript API | Vite

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **`createServer` API**: Async function that initializes a Vite dev server with `InlineConfig`, returning a `ViteDevServer` instance. Supports middleware mode, WebSocket proxying, and CLI shortcuts. Requires `process.env.NODE_ENV` or `mode` to be set to avoid conflicts when used alongside `build`.

- **`ViteDevServer` Interface**: Provides core server functionality including `config` (resolved Vite config), `middlewares` (Connect app), `httpServer` (Node HTTP server), `watcher` (Chokidar instan

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://vite.dev/guide/api-javascript#loadenv

## Local Vault File

Path: [javascript-api-vite.md](../../ai/rag/javascript-api-vite.md)
