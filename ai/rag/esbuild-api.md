---
title: esbuild - API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://esbuild.github.io/api/#main-fields
published_at: '2026-07-04T16:38:27.459913+05:30'
collected_at: '2026-07-04T16:38:27.459925+05:30'
tags:
- frontend_ui
- hackernews
- rag
- web-crawled
- workflows
status: active
resource_id: blog:esbuild-api
first_seen: '2026-07-04T16:38:27.459925+05:30'
last_seen: '2026-07-04T16:38:27.459925+05:30'
last_checked: '2026-07-04T16:38:27.459925+05:30'
health_score: 100
---

# esbuild - API

## Summary

- **API Access & Syntax**: Esbuild provides identical APIs across CLI, JavaScript, and Go, with CLI flags supporting `--foo`, `--foo=bar`, or `--foo:bar` formats for boolean, single-value, and multi-value parameters respectively; shell-specific argument interpretation risks can be avoided by using JS/Go APIs.

- **Core APIs**: Primary interfaces are `build` (file-based bundling/transformation with incremental modes: watch, serve, rebuild) and `transform` (in-memory code transformation for isolated use cases like minification/TS→JS conversion).

- **Context Management**: Long-running build contexts enable shared options and incremental builds; `dispose()` releases resources, while JS/Go APIs support async/sync modes and advanced features like live reloading via combined watch/serve contexts.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T16:38:27.459913+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- web-crawled
- workflows

## Source

Original source: https://esbuild.github.io/api/#main-fields
