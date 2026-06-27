---
title: esbuild - API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://esbuild.github.io/api/#minify
published_at: '2026-06-27T19:43:54.891205+05:30'
collected_at: '2026-06-27T19:43:54.891221+05:30'
tags:
- frontend_ui
- hackernews
- rag
- web-crawled
- workflows
status: active
resource_id: blog:esbuild-api
first_seen: '2026-06-27T19:43:54.891221+05:30'
last_seen: '2026-06-27T19:43:54.891221+05:30'
last_checked: '2026-06-27T19:43:54.891221+05:30'
health_score: 100
---

# esbuild - API

## Summary

- **API Language Support**: Esbuild provides APIs in CLI, JavaScript, and Go with identical core concepts; CLI flags use `--foo`, `--foo=bar`, or `--foo:bar` syntax for boolean, single-value, and multi-value flags respectively, while shell-specific argument interpretation can be avoided using JS/Go APIs.

- **Build & Transform APIs**: The primary `build` API bundles entry points to the filesystem with options like `--bundle`, `--outdir`, and incremental builds via `context` (watch/serve/rebuild modes), whereas the `transform` API operates on in-memory strings (e.g., minification, TS→JS) without filesystem dependencies.

- **Context Management & Options**: Long-running `context` objects in JS/Go enable shared build options and incremental rebuilds; `dispose()` releases resources, and both APIs support extensive options across input, output, path resolution, optimization, and source maps (e.g., `minify`, `define`, `sourcemap`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T19:43:54.891205+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- web-crawled
- workflows

## Source

Original source: https://esbuild.github.io/api/#minify
