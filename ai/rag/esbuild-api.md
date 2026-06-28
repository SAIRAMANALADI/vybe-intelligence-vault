---
title: esbuild - API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://esbuild.github.io/api/#target
published_at: '2026-06-29T01:24:09.896146+05:30'
collected_at: '2026-06-29T01:24:09.896160+05:30'
tags:
- frontend_ui
- hackernews
- rag
- web-crawled
- workflows
status: active
resource_id: blog:esbuild-api
first_seen: '2026-06-29T01:24:09.896160+05:30'
last_seen: '2026-06-29T01:24:09.896160+05:30'
last_checked: '2026-06-29T01:24:09.896160+05:30'
health_score: 100
---

# esbuild - API

## Summary

- **API Access & Syntax**: Supports CLI, JavaScript, and Go with identical concepts; CLI flags use `--foo`, `--foo=bar`, or `--foo:bar` for boolean, single-value, or multi-value parameters respectively, while JavaScript/Go APIs use explicit objects.

- **Build & Transform APIs**: Primary `build` API processes entry points with options like bundling (`--bundle`), outdir, and incremental builds (watch/serve/rebuild modes); `transform` API processes in-memory code strings (e.g., TS→JS) with isolated, file-system-free execution.

- **Context Management**: Long-running `context` objects enable shared build options, incremental rebuilds, and combined modes (e.g., watch+serve for live reloading); `dispose()` releases resources and halts active processes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T01:24:09.896146+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- web-crawled
- workflows

## Source

Original source: https://esbuild.github.io/api/#target
