---
title: Chromium Docs - Process Model and Site Isolation
archive_category: rag-systems
source_category: ai/rag
source_url: https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md
resource_id: blog:chromium-docs-process-model-and-site-isolation
local_vault_path: ai/rag/chromium-docs-process-model-and-site-isolation.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- agents
- benchmark
- hackernews
- paper
- producthunt
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Chromium Docs - Process Model and Site Isolation

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Process Model**: Chromium employs a multi-process architecture where web site instances (groups of same-origin documents/workers requiring synchronous access) are isolated into separate OS processes to enhance stability, security, and performance. Decisions on process allocation are based on platform constraints and resource availability.

- **Site Isolation**: Implements strict process-level isolation where renderer processes are locked to a single site/origin (e.g., `https://example.com`),

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md

## Local Vault File

Path: [chromium-docs-process-model-and-site-isolation.md](../../ai/rag/chromium-docs-process-model-and-site-isolation.md)
