---
title: esbuild - API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://esbuild.github.io/api/#sources-content
published_at: '2026-06-25T16:43:22.553659+05:30'
collected_at: '2026-06-25T16:43:22.553673+05:30'
tags:
- frontend_ui
- hackernews
- rag
- web-crawled
- workflows
status: active
resource_id: blog:esbuild-api
first_seen: '2026-06-25T16:43:22.553673+05:30'
last_seen: '2026-06-25T16:43:22.553673+05:30'
last_checked: '2026-06-25T16:43:22.553673+05:30'
health_score: 100
---

# esbuild - API

## Summary

- **API Access & CLI Syntax**: Esbuild provides APIs in CLI, JavaScript, and Go with identical concepts; CLI flags use `--foo` (boolean), `--foo=bar` (single value), or `--foo:bar` (multi-value), while shell interpretation risks can be avoided via JS/Go APIs.

- **Build & Transform APIs**: Primary `build` API bundles entry points to filesystem with options like `--bundle`, `--outdir`, and supports incremental builds via `context` (watch/serve/rebuild modes); `transform` API operates on in-memory strings (e.g., TS→JS) without filesystem dependencies.

- **Context Lifecycle & Options**: `context` enables shared build options and incremental rebuilds; `dispose()` terminates operations; APIs support path resolution (e.g., `alias`, `external`), optimization (e.g., `minify`, `tree-shaking`), and source map generation (e.g., `sourcemap`, `sources-content`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T16:43:22.553659+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- web-crawled
- workflows

## Source

Original source: https://esbuild.github.io/api/#sources-content
