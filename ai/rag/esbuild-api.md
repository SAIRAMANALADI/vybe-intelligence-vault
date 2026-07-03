---
title: esbuild - API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://esbuild.github.io/api/#main-fields
published_at: '2026-07-03T15:14:53.083471+05:30'
collected_at: '2026-07-03T15:14:53.083486+05:30'
tags:
- frontend_ui
- hackernews
- rag
- web-crawled
- workflows
status: active
resource_id: blog:esbuild-api
first_seen: '2026-07-03T15:14:53.083486+05:30'
last_seen: '2026-07-03T15:14:53.083486+05:30'
last_checked: '2026-07-03T15:14:53.083486+05:30'
health_score: 100
---

# esbuild - API

## Summary

- **API Access**: Supports CLI, JavaScript, and Go with identical core concepts; CLI flags use `--foo`, `--foo=bar`, or `--foo:bar` for boolean, single-value, and multi-value parameters respectively, while shell interpretation issues can be avoided by using JS/Go APIs.

- **Build & Transform APIs**: Primary `build` API bundles/processes entry points with extensive options (e.g., bundling, minification, source maps), while the `transform` API isolates in-memory code transformations (e.g., TS→JS, minification) without filesystem dependencies.

- **Incremental Builds**: Supports `watch` (auto-rebuild on file changes), `serve` (local dev server), and `rebuild` (manual triggers) via a shared `context` object in JS/Go; CLI uses implicit context. Contexts must be disposed to release resources.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T15:14:53.083471+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- web-crawled
- workflows

## Source

Original source: https://esbuild.github.io/api/#main-fields
