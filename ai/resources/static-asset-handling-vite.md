---
title: Static Asset Handling | Vite
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://vite.dev/guide/assets.html#importing-asset-as-url
published_at: '2026-07-19T14:14:16.596821+05:30'
collected_at: '2026-07-19T14:14:16.596836+05:30'
tags:
- reddit
- threejs
- web-crawled
status: active
resource_id: blog:static-asset-handling-vite
first_seen: '2026-07-19T14:14:16.596836+05:30'
last_seen: '2026-07-19T14:14:16.596836+05:30'
last_checked: '2026-07-19T14:14:16.596836+05:30'
health_score: 100
---

# Static Asset Handling | Vite

## Summary

- **Asset Handling**: Vite imports static assets (e.g., images, fonts) as URLs, returning resolved public paths (`/src/img.png` in dev, `/assets/img.2d8efhg.png` in prod), similar to `file-loader` in webpack, with automatic hashing, optimization, and inlining (via `assetsInlineLimit`).
- **Query Suffixes**: Vite supports explicit asset handling via query suffixes (`?url`, `?inline`, `?no-inline`, `?raw`, `?worker`), enabling forced URL resolution, inlining control, raw string imports (e.g., GLSL shaders), and worker script imports.
- **Public Directory**: Unreferenced assets (e.g., `robots.txt`) can be placed in `/public`, served at root (`/`) in dev, and copied to `dist` without hashing or processing; use absolute paths (`/icon.png`) to reference them.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-19T14:14:16.596821+05:30

## Related Tags

- reddit
- threejs
- web-crawled

## Source

Original source: https://vite.dev/guide/assets.html#importing-asset-as-url
