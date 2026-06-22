---
title: Routing | Docusaurus
archive_category: vector-databases
source_category: ai/rag
source_url: https://docusaurus.io/docs/advanced/routing#routes-become-html-files
resource_id: blog:routing-docusaurus
local_vault_path: ai/rag/routing-docusaurus.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# Routing | Docusaurus

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Content Plugin Routing**: Docusaurus plugins (`docs`, `blog`, `pages`) use `routeBasePath` to define route prefixes (e.g., `/docs`, `/blog`). File paths map to URLs (e.g., `./docs/intro.md` → `/docs/intro`), with `slug` front matter enabling URL decoupling from file structure.

- **Nested & Versioned Routes**: The `docs` plugin supports nested routes and versioning (e.g., `/`, `/next`, `/2.0.0-beta.13`), preserving sidebar state across docs. Version paths act as route context, with individua

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docusaurus.io/docs/advanced/routing#routes-become-html-files

## Local Vault File

Path: [routing-docusaurus.md](../../ai/rag/routing-docusaurus.md)
