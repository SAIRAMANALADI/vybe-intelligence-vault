---
title: esbuild - API
archive_category: automation-workflows
source_category: ai/rag
source_url: https://esbuild.github.io/api/#target
resource_id: blog:esbuild-api
local_vault_path: ai/rag/esbuild-api.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- frontend_ui
- hackernews
- rag
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# esbuild - API

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **API Access & Syntax**: Supports CLI, JavaScript, and Go with identical concepts; CLI flags use `--foo`, `--foo=bar`, or `--foo:bar` for boolean, single-value, or multi-value parameters respectively, while JavaScript/Go APIs use explicit objects.

- **Build & Transform APIs**: Primary `build` API processes entry points with options like bundling (`--bundle`), outdir, and incremental builds (watch/serve/rebuild modes); `transform` API processes in-memory code strings (e.g., TS→JS) with isolate

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://esbuild.github.io/api/#target

## Local Vault File

Path: [esbuild-api.md](../../ai/rag/esbuild-api.md)
