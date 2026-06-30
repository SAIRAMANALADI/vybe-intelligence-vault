---
title: Introduction - Firecrawl Docs
archive_category: vector-databases
source_category: ai/rag
source_url: https://docs.firecrawl.dev/api-reference/introduction
resource_id: blog:introduction-firecrawl-docs
local_vault_path: ai/rag/introduction-firecrawl-docs.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- agents
- rag
- scripts
- web-crawled
selection_reason:
- Valuable developer reference
---

# Introduction - Firecrawl Docs

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Valuable developer reference

## Summary

- **Core Functions**: Provides `scrape` (markdown/JSON extraction), `crawl` (full-site extraction), `map` (URL listing), `search` (web search + content retrieval), and `extract` (structured data via NLP).
- **API Specs**: Base URL is `https://api.firecrawl.dev`; requires `Authorization: Bearer fc-<API_KEY>` header.
- **Error Handling**: Uses HTTP codes (2xx/4xx/5xx); specific errors include `SCRAPE_TIMEOUT`, `SCRAPE_SSL_ERROR`, and `429` for rate limits.

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.firecrawl.dev/api-reference/introduction

## Local Vault File

Path: [introduction-firecrawl-docs.md](../../ai/rag/introduction-firecrawl-docs.md)
