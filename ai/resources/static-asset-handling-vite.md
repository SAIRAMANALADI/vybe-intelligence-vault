---
title: Static Asset Handling | Vite
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://vite.dev/guide/assets.html#importing-asset-as-url
published_at: '2026-07-03T04:00:12.235949+05:30'
collected_at: '2026-07-03T04:00:12.235963+05:30'
tags:
- reddit
- threejs
- web-crawled
status: active
resource_id: blog:static-asset-handling-vite
first_seen: '2026-07-03T04:00:12.235963+05:30'
last_seen: '2026-07-03T04:00:12.235963+05:30'
last_checked: '2026-07-03T04:00:12.235963+05:30'
health_score: 100
---

# Static Asset Handling | Vite

## Summary

- **Asset Import Behavior**: Importing static assets (e.g., images, fonts) via ES modules returns a resolved public URL (`/src/asset.ext` in dev, `/assets/asset.hash.ext` in prod), similar to `file-loader` in webpack, with automatic hashing, optimization, and inlining (if below `assetsInlineLimit`).

- **Query Suffixes for Advanced Handling**: Vite supports query modifiers for explicit control: `?url` (force URL import), `?raw` (import as string), `?inline`/`no-inline` (control inlining), and `?worker`/`sharedworker` (load scripts as web workers).

- **Public Directory & `import.meta.url`**: Unreferenced assets (e.g., `robots.txt`) can be placed in `/public` (served at `/` in dev, copied to dist root). Native `new URL('./asset.ext', import.meta.url)` resolves asset paths dynamically, with Vite transforming static paths during build (fails for dynamic paths or SSR).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-03T04:00:12.235949+05:30

## Related Tags

- reddit
- threejs
- web-crawled

## Source

Original source: https://vite.dev/guide/assets.html#importing-asset-as-url
