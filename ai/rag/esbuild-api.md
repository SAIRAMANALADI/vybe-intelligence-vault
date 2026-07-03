---
title: esbuild - API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://esbuild.github.io/api/#external
published_at: '2026-07-04T01:28:14.577891+05:30'
collected_at: '2026-07-04T01:28:14.577903+05:30'
tags:
- frontend_ui
- hackernews
- rag
- web-crawled
- workflows
status: active
resource_id: blog:esbuild-api
first_seen: '2026-07-04T01:28:14.577903+05:30'
last_seen: '2026-07-04T01:28:14.577903+05:30'
last_checked: '2026-07-04T01:28:14.577903+05:30'
health_score: 100
---

# esbuild - API

## Summary

- Esbuild provides three language interfaces (CLI, JavaScript, Go) with identical core concepts but language-specific syntax; CLI flags support `--foo`, `--foo=bar`, or `--foo:bar` formats for boolean, single-value, and multi-value parameters respectively.

- The primary APIs are `build` (file-based bundling/transformation) and `transform` (in-memory code transformation), with incremental build modes (`watch`, `serve`, `rebuild`) enabled via a shared `context` object for optimized development workflows.

- CLI shell interpretation risks can be avoided by using JavaScript/Go APIs; `build` supports 40+ options across categories (input, output, optimization, etc.), while `transform` is isolated (no bundling/plugins) but optimized for single-file operations like minification or TS→JS conversion.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T01:28:14.577891+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- web-crawled
- workflows

## Source

Original source: https://esbuild.github.io/api/#external
