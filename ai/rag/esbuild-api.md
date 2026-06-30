---
title: esbuild - API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://esbuild.github.io/api/#sourcemap
published_at: '2026-07-01T04:18:10.548414+05:30'
collected_at: '2026-07-01T04:18:10.548431+05:30'
tags:
- frontend_ui
- hackernews
- rag
- web-crawled
- workflows
status: active
resource_id: blog:esbuild-api
first_seen: '2026-07-01T04:18:10.548431+05:30'
last_seen: '2026-07-01T04:18:10.548431+05:30'
last_checked: '2026-07-01T04:18:10.548431+05:30'
health_score: 100
---

# esbuild - API

## Summary

- **API Access**: esbuild provides three language interfaces (CLI, JavaScript, Go) with identical core concepts; CLI flags support `--foo`, `--foo=bar`, or `--foo:bar` syntax for boolean, single-value, or multi-value options respectively.

- **Build API**: Primary interface for processing entry points with options like bundling (`--bundle`), output directory (`--outdir`), and incremental builds via `context` in JS/Go (watch, serve, rebuild modes).

- **Transform API**: Specialized in-memory code transformation (e.g., TS→JS, minification) with isolated execution, supporting options like `loader`, `minify`, and `target` but lacking bundling/plugins.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T04:18:10.548414+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- web-crawled
- workflows

## Source

Original source: https://esbuild.github.io/api/#sourcemap
