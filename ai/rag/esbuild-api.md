---
title: esbuild - API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://esbuild.github.io/api/#loader
published_at: '2026-07-01T15:52:23.942686+05:30'
collected_at: '2026-07-01T15:52:23.942705+05:30'
tags:
- frontend_ui
- hackernews
- rag
- web-crawled
- workflows
status: active
resource_id: blog:esbuild-api
first_seen: '2026-07-01T15:52:23.942705+05:30'
last_seen: '2026-07-01T15:52:23.942705+05:30'
last_checked: '2026-07-01T15:52:23.942705+05:30'
health_score: 100
---

# esbuild - API

## Summary

- **API Access**: Esbuild provides identical APIs across CLI, JavaScript, and Go, with language-specific tabs for examples; CLI flags use `--foo`, `--foo=bar`, or `--foo:bar` for boolean, single-value, and multi-value options respectively.

- **Build & Transform APIs**: Primary `build` API bundles/processes entry points with extensive options (e.g., bundling, minification, source maps), while `transform` API processes in-memory code strings (e.g., TS→JS, minification) without file system dependencies.

- **Incremental Builds**: Supports `watch` (auto-rebuild on file changes), `serve` (dev server with live reload), and `rebuild` (manual builds) via a shared context object, with `dispose()` to clean up resources.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T15:52:23.942686+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- web-crawled
- workflows

## Source

Original source: https://esbuild.github.io/api/#loader
