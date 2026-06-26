---
title: JavaScript API | Vite
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://vite.dev/guide/api-javascript#loadenv
published_at: '2026-06-27T04:20:10.121471+05:30'
collected_at: '2026-06-27T04:20:10.121485+05:30'
tags:
- frontend_ui
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:javascript-api-vite
first_seen: '2026-06-27T04:20:10.121485+05:30'
last_seen: '2026-06-27T04:20:10.121485+05:30'
last_checked: '2026-06-27T04:20:10.121485+05:30'
health_score: 100
---

# JavaScript API | Vite

## Summary

- **`createServer` API**: Async function that initializes a Vite dev server with `InlineConfig`, returning a `ViteDevServer` instance. Supports middleware mode, WebSocket proxying, and CLI shortcuts. Requires `process.env.NODE_ENV` or `mode` to be set to avoid conflicts when used alongside `build`.

- **`ViteDevServer` Interface**: Provides core server functionality including `config` (resolved Vite config), `middlewares` (Connect app), `httpServer` (Node HTTP server), `watcher` (Chokidar instance), `ws` (WebSocket server), and module graph utilities (`moduleGraph`, `pluginContainer`). Includes methods like `transformRequest`, `ssrLoadModule`, and `reloadModule` for programmatic control.

- **Utility Functions**: `mergeConfig` (deep-merge configs), `loadEnv` (load `.env` files with prefix filtering), `normalizePath` (path normalization), and `transformWithOxc` (Oxc-based JS/TS transformation). Experimental `preprocessCSS` handles CSS pre-processing (SCSS, LESS, etc.) with module support.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T04:20:10.121471+05:30

## Related Tags

- frontend_ui
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://vite.dev/guide/api-javascript#loadenv
